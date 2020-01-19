import ec2 = require('@aws-cdk/aws-ec2');
import ecs = require('@aws-cdk/aws-ecs');
import s3 = require('@aws-cdk/aws-s3');
import cdk = require('@aws-cdk/core');
import { IRepository } from '@aws-cdk/aws-ecr';

import ssm = require('@aws-cdk/aws-ssm');
import { ICertificate } from '@aws-cdk/aws-certificatemanager';
import { IHostedZone } from '@aws-cdk/aws-route53';
import { PolicyStatement } from '@aws-cdk/aws-iam';
import { ApplicationTargetGroup } from '@aws-cdk/aws-elasticloadbalancingv2';
import { getDomainName, API } from './common';
import { IKey } from '@aws-cdk/aws-kms';
import { Cluster } from '@aws-cdk/aws-ecs';

interface ApiProps extends cdk.StackProps {
  vpc: ec2.Vpc;
  ecrRepository: IRepository;
  imageBucket: s3.Bucket;
  certificate: ICertificate;
  zone: IHostedZone;
  kmsKey: IKey;
  cluster: Cluster;
  targetGroup: ApplicationTargetGroup;
}
export class ApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: ApiProps) {
    super(scope, id, props);

    const environmentVarKeys = {
      staging: {
        PRISMA_SECRET: '/TpStaging/PRISMA_SECRET',
        PRISMA_MANAGEMENT_API_SECRET: '/TpStaging/PRISMA_MANAGEMENT_API_SECRET',
        APP_SECRET: '/TpStaging/APP_SECRET',
        PRISMA_ENDPOINT: '/TpStaging/PRISMA_ENDPOINT',
      },
    };

    const PRISMA_SECRET = ecs.Secret.fromSsmParameter(
      ssm.StringParameter.fromSecureStringParameterAttributes(this, 'PRISMA_SECRET', {
        parameterName: environmentVarKeys.staging.PRISMA_SECRET,
        encryptionKey: props.kmsKey,
        version: 3,
      })
    );

    const APP_SECRET = ecs.Secret.fromSsmParameter(
      ssm.StringParameter.fromSecureStringParameterAttributes(this, 'APP_SECRET', {
        parameterName: environmentVarKeys.staging.APP_SECRET,
        encryptionKey: props.kmsKey,
        version: 4,
      })
    );

    const PRISMA_MANAGEMENT_API_SECRET = ecs.Secret.fromSsmParameter(
      ssm.StringParameter.fromStringParameterName(
        this,
        'PRISMA_MANAGEMENT_SECRET',
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

    const S3_BUCKET = props.imageBucket.bucketName;

    const S3_ENDPOINT = `https://s3.us-east-1.amazonaws.com`;

    const taskDef = new ecs.Ec2TaskDefinition(this, 'taskdef');

    const logging = new ecs.AwsLogDriver({ streamPrefix: props.stackName + '2' });

    const container = taskDef.addContainer('api', {
      image: ecs.ContainerImage.fromEcrRepository(props.ecrRepository),
      memoryReservationMiB: 256,
      environment: {
        S3_ENDPOINT,
        S3_BUCKET,
      },
      secrets: {
        PRISMA_SECRET,
        PRISMA_ENDPOINT,
        PRISMA_MANAGEMENT_API_SECRET,
        APP_SECRET,
      },
      logging,
    });

    const CONTAINER_PORT = 4000;
    container.addPortMappings({
      containerPort: CONTAINER_PORT,
      protocol: ecs.Protocol.TCP,
    });

    const apiService = new ecs.Ec2Service(this, 'ec2-service', {
      cluster: props.cluster,
      taskDefinition: taskDef,
    });

    props.targetGroup.addTarget(apiService);

    props.imageBucket.grantPut(taskDef.taskRole);
    const assumeRolePolicy = new PolicyStatement();

    assumeRolePolicy.addActions('sts:AssumeRole');
    assumeRolePolicy.addResources('arn:aws:iam::561034361591:user/cdk-user');

    apiService.taskDefinition.addToTaskRolePolicy(assumeRolePolicy);

    new cdk.CfnOutput(this, 'Endpoint', {
      value: `https://${API}.${getDomainName(scope)}`,
      exportName: `${props.stackName}-endpoint`,
    });
    new cdk.CfnOutput(this, 'ServiceName', {
      value: apiService.serviceName,
    });

    new cdk.CfnOutput(this, 'ClusterName', {
      value: props.cluster.clusterName,
    });
  }
}
