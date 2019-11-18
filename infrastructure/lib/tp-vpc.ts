import ec2 = require('@aws-cdk/aws-ec2');
import cdk = require('@aws-cdk/core');

interface TpVpcProps extends cdk.StackProps {
  name: string;
}
export class TpVpc extends cdk.Stack {
  public readonly vpc: ec2.Vpc;
  constructor(scope: cdk.App, id: string, props: TpVpcProps) {
    super(scope, id, props);

    this.vpc = new ec2.Vpc(this, props.name, {
      maxAzs: 2,
    });
  }
}
