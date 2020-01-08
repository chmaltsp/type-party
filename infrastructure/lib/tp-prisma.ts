import cdk = require('@aws-cdk/core');
import rds = require('@aws-cdk/aws-rds');
import ecs = require('@aws-cdk/aws-ecs');
import ssm = require('@aws-cdk/aws-ssm');
import { StackProps } from '@aws-cdk/core';
import { IVpc, InstanceType, InstanceClass, InstanceSize } from '@aws-cdk/aws-ec2';
import { IHostedZone } from '@aws-cdk/aws-route53';
import { ICertificate } from '@aws-cdk/aws-certificatemanager';
import { Secret } from '@aws-cdk/aws-secretsmanager';
import {
  ApplicationLoadBalancer,
  ApplicationProtocol,
} from '@aws-cdk/aws-elasticloadbalancingv2';
import { getDomainName } from './common';
import { IKey } from '@aws-cdk/aws-kms';

interface PrismaProps extends StackProps {
  vpc: IVpc;
  zone: IHostedZone;
  certificate: ICertificate;
  db: rds.DatabaseInstance;
  dbPassword: Secret;
  kmsKey: IKey;
  lb: ApplicationLoadBalancer;
}
export class PrismaStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: PrismaProps) {
    super(scope, id, props);

    const environmentVarKeys = {
      staging: {
        PRISMA_SECRET: '/TpStaging/PRISMA_SECRET',
        PRISMA_MANAGEMENT_API_SECRET: '/TpStaging/PRISMA_MANAGEMENT_API_SECRET',
        APP_SECRET: '/TpStaging/APP_SECRET',
        PRISMA_ENDPOINT: '/TpStaging/PRISMA_ENDPOINT',
      },
    };

    const PRISMA_MANAGEMENT_API_SECRET = ssm.StringParameter.valueForStringParameter(
      this,
      environmentVarKeys.staging.PRISMA_MANAGEMENT_API_SECRET
    );

    const cluster = new ecs.Cluster(this, 'cluster', {
      vpc: props.vpc,
    });

    cluster.addCapacity('DefaultAutoScalingGroup', {
      instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.SMALL),
      spotPrice: '0.023',
    });

    const PRISMA_DOCKER_IMAGE = 'prismagraphql/prisma:1.34';

    const PRISMA_CONFIG = `
    managementApiSecret: ${PRISMA_MANAGEMENT_API_SECRET}
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

    const CONTAINER_PORT = 4466;
    container.addPortMappings({
      containerPort: CONTAINER_PORT,
      protocol: ecs.Protocol.TCP,
    });

    const service = new ecs.Ec2Service(this, 'prisma', {
      taskDefinition: taskdef,
      cluster,
    });

    const listener = props.lb.addListener('primsa-listener', {
      port: CONTAINER_PORT,
      certificates: [props.certificate],
      open: true,
      protocol: ApplicationProtocol.HTTPS,
    });

    listener.addTargets('prisma-targets', {
      port: CONTAINER_PORT,
      targets: [service],
      protocol: ApplicationProtocol.HTTP,
    });

    new cdk.CfnOutput(this, 'Endpoint', {
      value: `https://${getDomainName(scope)}:${CONTAINER_PORT}`,
      exportName: `${props.stackName}-endpoint`,
    });
    new cdk.CfnOutput(this, 'ServiceName', {
      value: service.serviceName,
    });

    new cdk.CfnOutput(this, 'ClusterName', {
      value: cluster.clusterName,
    });
  }
}
