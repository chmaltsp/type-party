import ec2 = require('@aws-cdk/aws-ec2');
import ecs = require('@aws-cdk/aws-ecs');
import cdk = require('@aws-cdk/core');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');
import { IRepository } from '@aws-cdk/aws-ecr';

import ssm = require('@aws-cdk/aws-ssm');
import { domainName } from './tp-images';
import { ICertificate } from '@aws-cdk/aws-certificatemanager';
import { IHostedZone } from '@aws-cdk/aws-route53';
import { IGrantable } from '@aws-cdk/aws-iam';

interface TpFeProps extends cdk.StackProps {
  vpc: ec2.Vpc;
  ecrRepository: IRepository;
  zone: IHostedZone;
  certificate: ICertificate;
}
export class TpFe extends cdk.Stack {
  public readonly feServiceRole: IGrantable;
  constructor(scope: cdk.App, id: string, props: TpFeProps) {
    super(scope, id, props);

    const cluster = new ecs.Cluster(this, props.stackName + 'Cluster', {
      vpc: props.vpc,
    });

    cluster.addCapacity('DefaultAutoScalingGroup', {
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.SMALL),
      spotPrice: '0.023',
    });

    const environmentVarKeys = {
      staging: {
        API_URL: '/TpStaging/API_URL',
      },
    };

    const RAZZLE_API_URL = ecs.Secret.fromSsmParameter(
      ssm.StringParameter.fromStringParameterName(
        this,
        'API_URL',
        environmentVarKeys.staging.API_URL
      )
    );

    const feDomainName = `www.${domainName}`;

    const feService = new ecs_patterns.ApplicationLoadBalancedEc2Service(
      this,
      props.stackName + 'Service',
      {
        cluster,
        memoryReservationMiB: 700,
        publicLoadBalancer: true,
        domainName: feDomainName,
        domainZone: props.zone,
        certificate: props.certificate,
        taskImageOptions: {
          image: ecs.ContainerImage.fromEcrRepository(props.ecrRepository),
          containerPort: 3000,
          secrets: {
            RAZZLE_API_URL,
          },
        },
      }
    );

    const httpListener = feService.loadBalancer.addListener('HTTP', {
      port: 80,
    });

    httpListener.addRedirectResponse('httpRedirect', {
      protocol: 'HTTPS',
      statusCode: 'HTTP_301',
      port: '443',
    });

    new cdk.CfnOutput(this, 'ServiceName', {
      value: feService.service.serviceName,
    });

    new cdk.CfnOutput(this, 'ClusterName', {
      value: cluster.clusterName,
    });
  }
}
