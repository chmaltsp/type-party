import ec2 = require('@aws-cdk/aws-ec2');
import ecs = require('@aws-cdk/aws-ecs');
import s3 = require('@aws-cdk/aws-s3');
import cdk = require('@aws-cdk/core');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');
import { IRepository } from '@aws-cdk/aws-ecr';

import ssm = require('@aws-cdk/aws-ssm');
import { getDomainName } from './common';
import { ICertificate } from '@aws-cdk/aws-certificatemanager';
import { IHostedZone } from '@aws-cdk/aws-route53';
import { PolicyStatement } from '@aws-cdk/aws-iam';

interface ApiProps extends cdk.StackProps {
  vpc: ec2.Vpc;
  ecrRepository: IRepository;
  imageBucket: s3.Bucket;
  certificate: ICertificate;
  zone: IHostedZone;
}
export class ApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: ApiProps) {
    super(scope, id, props);

    const cluster = new ecs.Cluster(this, 'cluster', {
      vpc: props.vpc,
    });

    cluster.addCapacity('DefaultAutoScalingGroup', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.SMALL),
      spotPrice: '0.023',
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

    const domainName = getDomainName(scope);
    const apiDomainName = `api.${domainName}`;

    const S3_BUCKET = props.imageBucket.bucketName;

    const S3_ENDPOINT = `https://s3.us-east-1.amazonaws.com`;
    const apiService = new ecs_patterns.ApplicationLoadBalancedEc2Service(
      this,
      'service',
      {
        cluster,
        memoryReservationMiB: 700,
        publicLoadBalancer: true,
        domainName: apiDomainName,
        domainZone: props.zone,
        certificate: props.certificate,
        taskImageOptions: {
          image: ecs.ContainerImage.fromEcrRepository(props.ecrRepository),
          containerPort: 4000,

          secrets: {
            PRISMA_SECRET,
            PRISMA_ENDPOINT,
            PRISMA_MANAGEMENT_API_SECRET,
            APP_SECRET,
          },
          environment: {
            S3_ENDPOINT,
            S3_BUCKET,
          },
        },
      }
    );

    const assumeRolePolicy = new PolicyStatement();

    assumeRolePolicy.addActions('sts:AssumeRole');
    assumeRolePolicy.addResources('arn:aws:iam::561034361591:user/cdk-user');

    apiService.taskDefinition.addToTaskRolePolicy(assumeRolePolicy);

    new cdk.CfnOutput(this, 'TaskArn', {
      value: apiService.taskDefinition.taskRole.roleArn,
      exportName: `${props.stackName}-TaskArn`,
    });
    new cdk.CfnOutput(this, 'ServiceName', {
      value: apiService.service.serviceName,
    });

    new cdk.CfnOutput(this, 'ClusterName', {
      value: cluster.clusterName,
    });
  }
}
