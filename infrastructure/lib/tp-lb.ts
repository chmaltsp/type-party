import elb = require('@aws-cdk/aws-elasticloadbalancingv2');
import { Stack, App, StackProps } from '@aws-cdk/core';
import { IVpc } from '@aws-cdk/aws-ec2';
import { IHostedZone, ARecord } from '@aws-cdk/aws-route53';
import targets = require('@aws-cdk/aws-route53-targets');
import route53 = require('@aws-cdk/aws-route53');
import { getDomainName, WWW, API, PRISMA } from './common';
import { Cluster } from '@aws-cdk/aws-ecs';
import ec2 = require('@aws-cdk/aws-ec2');
import {
  ApplicationProtocol,
  ApplicationTargetGroup,
} from '@aws-cdk/aws-elasticloadbalancingv2';
import { ICertificate } from '@aws-cdk/aws-certificatemanager';

interface LbProps extends StackProps {
  vpc: IVpc;
  zone: IHostedZone;
  certificate: ICertificate;
}
export class LBStack extends Stack {
  public readonly alb: elb.ApplicationLoadBalancer;
  public readonly cluster: Cluster;
  public readonly httpsListener: elb.ApplicationListener;
  public readonly targetGroup: elb.ApplicationTargetGroup;
  public readonly feTargetGroup: elb.ApplicationTargetGroup;
  public readonly apiTargetGroup: elb.ApplicationTargetGroup;
  public readonly prismaTargetGroup: elb.ApplicationTargetGroup;

  constructor(scope: App, id: string, props: LbProps) {
    super(scope, id, props);

    this.alb = new elb.ApplicationLoadBalancer(this, 'loadbalancer', {
      vpc: props.vpc,
      internetFacing: true,
    });

    this.targetGroup = new ApplicationTargetGroup(this, 'defaultTargetGroup', {
      port: 80,
      vpc: props.vpc,
    });

    this.httpsListener = this.alb.addListener('https-listener', {
      protocol: ApplicationProtocol.HTTPS,
      open: true,
      port: 443,
      defaultTargetGroups: [this.targetGroup],
    });

    const httpListener = this.alb.addListener('http-listener', {
      open: true,
      port: 80,
    });

    httpListener.addRedirectResponse('httpsRedirect', {
      protocol: 'HTTPS',
      statusCode: 'HTTP_301',
      port: '443',
    });
    const API_DOMAIN = `api.${getDomainName(scope)}`;
    const FRONTEND_DOMAIN = `www.${getDomainName(scope)}`;
    const PRISMA_DOMAIN = `prisma.${getDomainName(scope)}`;

    this.httpsListener.addCertificates('Certs', [props.certificate]);

    this.feTargetGroup = this.httpsListener.addTargets('feTargetGroup', {
      hostHeader: FRONTEND_DOMAIN,
      port: 80,
      priority: 2,
    });

    this.apiTargetGroup = this.httpsListener.addTargets('apiTargetGroup', {
      hostHeader: API_DOMAIN,
      port: 80,
      priority: 1,
    });

    this.prismaTargetGroup = this.httpsListener.addTargets('prismaTargetGroup', {
      hostHeader: PRISMA_DOMAIN,
      port: 80,
      priority: 3,
    });

    new ARecord(this, 'albRecord', {
      recordName: getDomainName(scope),
      zone: props.zone,
      target: route53.RecordTarget.fromAlias(new targets.LoadBalancerTarget(this.alb)),
    });

    new ARecord(this, `${WWW}Record`, {
      recordName: FRONTEND_DOMAIN,
      zone: props.zone,
      target: route53.RecordTarget.fromAlias(new targets.LoadBalancerTarget(this.alb)),
    });

    new ARecord(this, `${API}Record`, {
      recordName: API_DOMAIN,
      zone: props.zone,
      target: route53.RecordTarget.fromAlias(new targets.LoadBalancerTarget(this.alb)),
    });

    new ARecord(this, `${PRISMA}Record`, {
      recordName: PRISMA_DOMAIN,
      zone: props.zone,
      target: route53.RecordTarget.fromAlias(new targets.LoadBalancerTarget(this.alb)),
    });

    this.cluster = new Cluster(this, 'cluster', {
      vpc: props.vpc,
    });

    this.cluster.addCapacity('DefaultAutoScalingGroup', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.SMALL),
      spotPrice: '0.023',
    });
  }
}
