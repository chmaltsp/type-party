import cdk = require('@aws-cdk/cdk');
import s3 = require('@aws-cdk/aws-s3');
import iam = require('@aws-cdk/aws-iam');
import cloudfront = require('@aws-cdk/aws-cloudfront');
import route53 = require('@aws-cdk/aws-route53');
import targets = require('@aws-cdk/aws-route53-targets');

import ssm = require('@aws-cdk/aws-ssm');

const domainName = 'typeparty.com';

const subDomain = 'images';

const siteDomain = `${subDomain}.${domainName}`;

export class TypePartyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const tpImageBucket = new s3.Bucket(this, 'TPImageBucket', {
      bucketName: siteDomain,
      removalPolicy: cdk.RemovalPolicy.Destroy,
    });

    const tpImageBucketPolicy = new s3.BucketPolicy(this, 'TPImageBucketPolicy', {
      bucket: tpImageBucket,
    });

    tpImageBucketPolicy.document.addStatement(
      new iam.PolicyStatement(iam.PolicyStatementEffect.Allow)
        .addAction('s3:*')
        .addResource(tpImageBucket.bucketArn)
        .addAccountRootPrincipal()
    );
    const cfOriginAccessIdentity = new cloudfront.CfnCloudFrontOriginAccessIdentity(
      this,
      'tpImageOAI',
      {
        cloudFrontOriginAccessIdentityConfig: {
          comment: 'Origin access identity for TP Image Bucket',
        },
      }
    );

    const arnCertificate = new ssm.ParameterStoreString(this, 'ArnCertificate', {
      parameterName: `CertifcateArn-${domainName}`,
    });

    const zone = new route53.HostedZoneProvider(this, {
      domainName,
    }).findAndImport(this, 'Zone');

    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      'tp-images-distro',
      {
        aliasConfiguration: {
          names: [`images.${domainName}`],
          acmCertRef: arnCertificate.stringValue,
          sslMethod: cloudfront.SSLMethod.SNI,
          securityPolicy: cloudfront.SecurityPolicyProtocol.TLSv1_1_2016,
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
              s3BucketSource: tpImageBucket,
            },
          },
        ],
      }
    );

    new route53.AliasRecord(this, 'ImagesARecord', {
      recordName: siteDomain,
      target: new targets.CloudFrontTarget(distribution),
      zone,
    });
    // The code that defines your stack goes here
  }
}
