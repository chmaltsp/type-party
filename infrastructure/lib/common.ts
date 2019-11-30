import cdk = require('@aws-cdk/core');
import route53 = require('@aws-cdk/aws-route53');

import ssm = require('@aws-cdk/aws-ssm');
import kms = require('@aws-cdk/aws-kms');
import { Certificate, ICertificate } from '@aws-cdk/aws-certificatemanager';

interface TpCommonProps extends cdk.StackProps {}

export const domainName = 'typeparty.com';

export class TpCommon extends cdk.Stack {
  public readonly certificate: ICertificate;
  public readonly apiDomainName: string;
  public readonly feDomainName: string;

  public readonly arnCertificate: string;
  public readonly zone: route53.IHostedZone;

  public readonly key: kms.IKey;
  constructor(scope: cdk.App, id: string, props: TpCommonProps) {
    super(scope, id, props);

    this.apiDomainName = `api.${domainName}`;
    this.feDomainName = `www.${domainName};`;

    this.key = kms.Key.fromKeyArn(
      this,
      'masterKey',
      'arn:aws:kms:us-east-1:561034361591:key/1b511fa7-dcd4-4db9-aef9-c15b141b3b29'
    );

    this.arnCertificate = ssm.StringParameter.valueForStringParameter(
      this,
      `CertifcateArn-${domainName}`
    );

    this.certificate = Certificate.fromCertificateArn(
      this,
      `${domainName}SSLCert`,
      this.arnCertificate
    );

    this.zone = route53.HostedZone.fromLookup(this, 'Zone', {
      domainName,
    });
  }
}
