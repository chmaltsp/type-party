import ec2 = require('@aws-cdk/aws-ec2');
import ecs = require('@aws-cdk/aws-ecs');
import cdk = require('@aws-cdk/core');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');
import { IRepository } from '@aws-cdk/aws-ecr';

import ssm = require('@aws-cdk/aws-ssm');

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

    const environmentVarKeys = {
      staging: {
        PRISMA_SECRET: '/TpStaging/PRISMA_SECRET',
        PRISMA_MANAGEMENT_API_SECRET: '/TpStaging/PRISMA_MANAGEMENT_API_SECRET',
        APP_SECRET: '/TpStaging/APP_SECRET',
        PRISMA_ENDPOINT: '/TpStaging/PRISMA_ENDPOINT',
      },
    };

    const PRISMA_SECRET = ecs.Secret.fromSsmParameter(
      ssm.StringParameter.fromStringParameterName(
        this,
        'PRISMA_SECRET',
        environmentVarKeys.staging.PRISMA_SECRET
      )
    );

    const APP_SECRET = ecs.Secret.fromSsmParameter(
      ssm.StringParameter.fromStringParameterName(
        this,
        'APP_SECRET',
        environmentVarKeys.staging.APP_SECRET
      )
    );

    const PRISMA_MANAGEMENT_API_SECRET = ecs.Secret.fromSsmParameter(
      ssm.StringParameter.fromStringParameterName(
        this,
        'PRISMA_MANAGEMENT_API_SECRET',
        environmentVarKeys.staging.PRISMA_MANAGEMENT_API_SECRET
      )
    );

    const PRISMA_ENDPOINT = ecs.Secret.fromSsmParameter(
      ssm.StringParameter.fromStringParameterName(
        this,
        'PRISMA_ENDPOINT',
        environmentVarKeys.staging.PRISMA_ENDPOINT
      )
    );

    new ecs_patterns.ApplicationLoadBalancedEc2Service(
      this,
      props.stackName + 'GqlService',
      {
        cluster,
        memoryReservationMiB: 700,
        publicLoadBalancer: true,
        taskImageOptions: {
          image: ecs.ContainerImage.fromEcrRepository(props.ecrRepository),
          containerPort: 4000,
          secrets: {
            PRISMA_SECRET,
            PRISMA_ENDPOINT,
            PRISMA_MANAGEMENT_API_SECRET,
            APP_SECRET,
          },
        },
      }
    );
  }
}
