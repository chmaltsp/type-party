import cdk = require('@aws-cdk/core');
import rds = require('@aws-cdk/aws-rds');
import ecs = require('@aws-cdk/aws-ecs');
import { StackProps } from '@aws-cdk/core';
import { IVpc, InstanceType, InstanceClass, InstanceSize } from '@aws-cdk/aws-ec2';
import { IHostedZone } from '@aws-cdk/aws-route53';
import { ICertificate } from '@aws-cdk/aws-certificatemanager';
import { Secret } from '@aws-cdk/aws-secretsmanager';

interface PrismaProps extends StackProps {
  vpc: IVpc;
  zone: IHostedZone;
  certificate: ICertificate;
  db: rds.DatabaseInstance;
  dbPassword: Secret;
}
export class PrismaStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: PrismaProps) {
    super(scope, id, props);

    const cluster = new ecs.Cluster(this, 'cluster', {
      vpc: props.vpc,
    });

    cluster.addCapacity('DefaultAutoScalingGroup', {
      instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.SMALL),
      spotPrice: '0.023',
    });

    const PRISMA_DOCKER_IMAGE = 'prismagraphql/prisma:1.34';

    const PRISMA_CONFIG = `
    managementApiSecret: staging-secret
    port: 4466
    databases:
      default:
        connector: postgres
        active: true
        host: ${props.db.dbInstanceEndpointAddress}
        port: 5432
        user: root
        password: ${props.dbPassword.secretValue}
        migrations: true
        managementSchema: management
    `;

    const taskdef = new ecs.Ec2TaskDefinition(this, 'taskdef');

    const logging = new ecs.AwsLogDriver({ streamPrefix: props.stackName + '-logs' });

    const container = taskdef.addContainer('prisma-container', {
      image: ecs.ContainerImage.fromRegistry(PRISMA_DOCKER_IMAGE),
      memoryReservationMiB: 700,
      logging,

      environment: {
        PRISMA_CONFIG,
      },
    });

    container.addPortMappings({
      containerPort: 4466,
      protocol: ecs.Protocol.TCP,
    });

    new ecs.Ec2Service(this, 'prisma', {
      taskDefinition: taskdef,
      cluster,
    });
  }
}
