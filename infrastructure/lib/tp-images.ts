import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
import cloudfront = require('@aws-cdk/aws-cloudfront');
import route53 = require('@aws-cdk/aws-route53');
import targets = require('@aws-cdk/aws-route53-targets');

import iam = require('@aws-cdk/aws-iam');

import { getDomainName } from './common';
import { ICertificate } from '@aws-cdk/aws-certificatemanager';
import { IHostedZone } from '@aws-cdk/aws-route53';

const subDomain = 'images';

interface ImageStackProps extends cdk.StackProps {
  certificate: ICertificate;
  zone: IHostedZone;
}

export class ImageStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;
  constructor(scope: cdk.App, name: string, props: ImageStackProps) {
    super(scope, name, props);

    const domainName = getDomainName(scope);
    const siteDomain = `${subDomain}.${domainName}`;

    this.bucket = new s3.Bucket(this, 'bucket', {
      bucketName: `${name}-bucket`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      blockPublicAccess: {
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
      },
    });

    const cfOriginAccessIdentity = new cloudfront.CfnCloudFrontOriginAccessIdentity(
      this,
      'oai',
      {
        cloudFrontOriginAccessIdentityConfig: {
          comment: `Origin access identity for ${this.bucket.bucketName}`,
        },
      }
    );

    const oaiPolicy = new iam.PolicyStatement();
    oaiPolicy.addActions('s3:GetBucket*');
    oaiPolicy.addActions('s3:GetObject*');
    oaiPolicy.addActions('s3:List*');
    oaiPolicy.addResources(this.bucket.bucketArn);
    oaiPolicy.addResources(`${this.bucket.bucketArn}/*`);
    oaiPolicy.addCanonicalUserPrincipal(cfOriginAccessIdentity.attrS3CanonicalUserId);
    this.bucket.addToResourcePolicy(oaiPolicy);

    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'distro', {
      aliasConfiguration: {
        names: [`images.${domainName}`],
        acmCertRef: props.certificate.certificateArn,
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
    });

    new route53.ARecord(this, 'ImagesARecord', {
      recordName: siteDomain,
      target: route53.AddressRecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
      zone: props.zone,
    });
    // The code that defines your stack goes here
  }
}
