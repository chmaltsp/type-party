import ec2 = require('@aws-cdk/aws-ec2');
import ecs = require('@aws-cdk/aws-ecs');
import cdk = require('@aws-cdk/core');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');
import { IRepository } from '@aws-cdk/aws-ecr';

interface TpGqlProps extends cdk.StackProps {
  vpc: ec2.Vpc;
  ecrRepository: IRepository;
}
export class TpGql extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: TpGqlProps) {
    super(scope, id, props);

    const cluster = new ecs.Cluster(this, props.stackName + 'Cluster', {
      vpc: props.vpc,
    });

    cluster.addCapacity('DefaultAutoScalingGroup', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.SMALL),
    });

    new ecs_patterns.ApplicationLoadBalancedEc2Service(
      this,
      props.stackName + 'GqlService',
      {
        cluster,
        memoryReservationMiB: 700,
        cpu: 1024,
        publicLoadBalancer: true,
        taskImageOptions: {
          image: ecs.ContainerImage.fromEcrRepository(props.ecrRepository),
          containerPort: 4000,
        },
      }
    );
  }
}
