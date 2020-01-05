import cdk = require('@aws-cdk/core');
import route53 = require('@aws-cdk/aws-route53');

import ssm = require('@aws-cdk/aws-ssm');
import kms = require('@aws-cdk/aws-kms');
import { Certificate, ICertificate } from '@aws-cdk/aws-certificatemanager';

import elb = require('@aws-cdk/aws-elasticloadbalancingv2');
interface TpCommonProps extends cdk.StackProps {}

export const ORG = 'tp';
export const STAGE = 'stage';
export const DOMAIN_NAME = 'domainName';

export type CONTEXT_KEYS = typeof STAGE | typeof DOMAIN_NAME;

export type STAGES = 'dev' | 'prod';

export const getConfigValue = (scope: cdk.App, stage: STAGES, key: CONTEXT_KEYS) =>
  scope.node.tryGetContext(stage)[key] as string;

export const getStage = (scope: cdk.App): STAGES => scope.node.tryGetContext(STAGE);

export const getDomainName = (scope: cdk.App): string =>
  getConfigValue(scope, getStage(scope), DOMAIN_NAME);

export class TpCommon extends cdk.Stack {
  public readonly certificate: ICertificate;
  public readonly arnCertificate: string;
  public readonly zone: route53.IHostedZone;
  public readonly lb: elb.ApplicationLoadBalancer;

  public readonly key: kms.IKey;
  constructor(scope: cdk.App, id: string, props: TpCommonProps) {
    super(scope, id, props);

    const domainName = getDomainName(scope);

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

    const prodHostedZone = new route53.HostedZone(this, 'tp-prod', {
      zoneName: 'type.party',
    });

    new route53.CnameRecord(this, 'www-tp-prod', {
      domainName: 'type-party.superhi.com',
      recordName: 'www',
      zone: prodHostedZone,
    });

    new route53.CnameRecord(this, 'at-tp-prod', {
      domainName: 'type-party.superhi.com',
      recordName: '@',
      zone: prodHostedZone,
    });

    const devHostedZone = route53.HostedZone.fromLookup(this, 'Zone', {
      domainName,
    });

    this.zone = getStage(scope) === 'prod' ? prodHostedZone : devHostedZone;
  }
}
