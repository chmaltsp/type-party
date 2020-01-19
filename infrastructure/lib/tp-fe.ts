import ec2 = require('@aws-cdk/aws-ec2');
import ecs = require('@aws-cdk/aws-ecs');
import cdk = require('@aws-cdk/core');
import { IRepository } from '@aws-cdk/aws-ecr';

import ssm = require('@aws-cdk/aws-ssm');
import { ICertificate } from '@aws-cdk/aws-certificatemanager';
import { IHostedZone } from '@aws-cdk/aws-route53';
import { IGrantable } from '@aws-cdk/aws-iam';
import { getStage, getDomainName } from './common';
import { ApplicationTargetGroup } from '@aws-cdk/aws-elasticloadbalancingv2';
import { Cluster } from '@aws-cdk/aws-ecs';

interface FrontendProps extends cdk.StackProps {
  vpc: ec2.Vpc;
  ecrRepository: IRepository;
  zone: IHostedZone;
  certificate: ICertificate;
  cluster: Cluster;
  targetGroup: ApplicationTargetGroup;
  feTargetGroup: ApplicationTargetGroup;
}
export class FrontendStack extends cdk.Stack {
  public readonly feServiceRole: IGrantable;
  constructor(scope: cdk.App, id: string, props: FrontendProps) {
    super(scope, id, props);

    const environmentVarKeys = {
      dev: {
        API_URL: '/TpStaging/API_URL',
      },
      prod: {
        API_URL: '/TpStaging/API_URL',
      },
    };

    const RAZZLE_API_URL = ecs.Secret.fromSsmParameter(
      ssm.StringParameter.fromStringParameterName(
        this,
        'API_URL',
        environmentVarKeys[getStage(scope)].API_URL
      )
    );

    const taskDef = new ecs.Ec2TaskDefinition(this, 'taskdef');

    const logging = new ecs.AwsLogDriver({ streamPrefix: id });

    const container = taskDef.addContainer('web', {
      image: ecs.ContainerImage.fromEcrRepository(props.ecrRepository),
      memoryReservationMiB: 256,
      secrets: {
        RAZZLE_API_URL,
      },
      logging,
    });

    const CONTAINER_PORT = 3000;
    container.addPortMappings({
      containerPort: CONTAINER_PORT,
      protocol: ecs.Protocol.TCP,
    });

    const feService = new ecs.Ec2Service(this, 'service', {
      cluster: props.cluster,
      taskDefinition: taskDef,
    });

    props.targetGroup.addTarget(feService);
    props.feTargetGroup.addTarget(feService);

    new cdk.CfnOutput(this, 'TaskArn', {
      value: feService.taskDefinition.taskRole.roleArn,
      exportName: `${props.stackName}-TaskArn`,
    });

    new cdk.CfnOutput(this, 'Endpoint', {
      value: `https://${getDomainName(scope)}`,
      exportName: `${props.stackName}-endpoint`,
    });
    new cdk.CfnOutput(this, 'ServiceName', {
      value: feService.serviceName,
    });

    new cdk.CfnOutput(this, 'ClusterName', {
      value: props.cluster.clusterName,
    });
  }
}
