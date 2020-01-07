import elb = require('@aws-cdk/aws-elasticloadbalancingv2');
import { Stack, App, StackProps } from '@aws-cdk/core';
import { IVpc } from '@aws-cdk/aws-ec2';
import { IHostedZone, ARecord } from '@aws-cdk/aws-route53';
import targets = require('@aws-cdk/aws-route53-targets');
import route53 = require('@aws-cdk/aws-route53');
import { getDomainName } from './common';

interface LbProps extends StackProps {
  vpc: IVpc;
  zone: IHostedZone;
}
export class LBStack extends Stack {
  public readonly alb: elb.ApplicationLoadBalancer;
  constructor(scope: App, id: string, props: LbProps) {
    super(scope, id, props);

    this.alb = new elb.ApplicationLoadBalancer(this, 'loadbalancer', {
      vpc: props.vpc,
      internetFacing: true,
    });

    new ARecord(this, 'albRecord', {
      recordName: getDomainName(scope),
      zone: props.zone,
      target: route53.RecordTarget.fromAlias(new targets.LoadBalancerTarget(this.alb)),
    });
  }
}
