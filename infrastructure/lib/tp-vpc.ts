import ec2 = require('@aws-cdk/aws-ec2');
import cdk = require('@aws-cdk/core');
import { InstanceType, InstanceClass, InstanceSize } from '@aws-cdk/aws-ec2';

interface VpcProps extends cdk.StackProps {
  name: string;
}
export class VpcStack extends cdk.Stack {
  public readonly vpc: ec2.Vpc;
  constructor(scope: cdk.App, id: string, props: VpcProps) {
    super(scope, id, props);

    this.vpc = new ec2.Vpc(this, props.name, {
      maxAzs: 2,
      natGateways: 2,
      natGatewayProvider: ec2.NatProvider.instance({
        instanceType: InstanceType.of(InstanceClass.T3A, InstanceSize.NANO),
      }),
    });
  }
}
