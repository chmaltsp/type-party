import elb = require('@aws-cdk/aws-elasticloadbalancingv2');
import { Stack, App, StackProps } from '@aws-cdk/core';
import { IVpc } from '@aws-cdk/aws-ec2';

interface LbProps extends StackProps {
  vpc: IVpc;
}
export class LBStack extends Stack {
  public readonly alb: elb.ApplicationLoadBalancer;
  constructor(scope: App, id: string, props: LbProps) {
    super(scope, id, props);

    this.alb = new elb.ApplicationLoadBalancer(this, 'LB', {
      vpc: props.vpc,
      internetFacing: true,
    });
  }
}
