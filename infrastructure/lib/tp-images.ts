import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
import cloudfront = require('@aws-cdk/aws-cloudfront');
import route53 = require('@aws-cdk/aws-route53');
import targets = require('@aws-cdk/aws-route53-targets');

import ssm = require('@aws-cdk/aws-ssm');
import { domainName } from './common';

const subDomain = 'images';

const siteDomain = `${subDomain}.${domainName}`;

export class TpImages extends cdk.Stack {
  public readonly bucket: s3.Bucket;
  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);

    this.bucket = new s3.Bucket(this, 'TPImageBucket', {
      bucketName: `tp-image-bucket`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const cfOriginAccessIdentity = new cloudfront.CfnCloudFrontOriginAccessIdentity(
      this,
      'tpImageOAI',
      {
        cloudFrontOriginAccessIdentityConfig: {
          comment: 'Origin access identity for TP Image Bucket',
        },
      }
    );

    const arnCertificate = ssm.StringParameter.valueForStringParameter(
      this,
      `CertifcateArn-${domainName}`
    );

    const zone = route53.HostedZone.fromLookup(this, 'Zone', {
      domainName,
    });

    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      'tp-images-distro',
      {
        aliasConfiguration: {
          names: [`images.${domainName}`],
          acmCertRef: arnCertificate,
          sslMethod: cloudfront.SSLMethod.SNI,
          securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_1_2016,
        },
        originConfigs: [
          {
            behaviors: [
              {
                isDefaultBehavior: true,
              },
            ],
            s3OriginSource: {
              originAccessIdentityId: cfOriginAccessIdentity.ref,
              s3BucketSource: this.bucket,
            },
          },
        ],
      }
    );

    new route53.ARecord(this, 'ImagesARecord', {
      recordName: siteDomain,
      target: route53.AddressRecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
      zone,
    });
    // The code that defines your stack goes here
  }
}
