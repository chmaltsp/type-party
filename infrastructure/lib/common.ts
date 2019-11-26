import cdk = require('@aws-cdk/core');
import route53 = require('@aws-cdk/aws-route53');

import ssm = require('@aws-cdk/aws-ssm');
import { domainName } from './tp-images';
import { Certificate, ICertificate } from '@aws-cdk/aws-certificatemanager';

interface TpCommonProps extends cdk.StackProps {}
export class TpCommon extends cdk.Stack {
  public readonly certificate: ICertificate;
  public readonly apiDomainName: string;
  public readonly feDomainName: string;

  public readonly arnCertificate: string;
  public readonly zone: route53.IHostedZone;

  constructor(scope: cdk.App, id: string, props: TpCommonProps) {
    super(scope, id, props);

    this.apiDomainName = `api.${domainName}`;
    this.feDomainName = `api.${domainName};`;

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
