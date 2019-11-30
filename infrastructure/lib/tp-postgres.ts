import cdk = require('@aws-cdk/core');
import rds = require('@aws-cdk/aws-rds');
import { StackProps } from '@aws-cdk/core';
import { IVpc, InstanceType, InstanceClass, InstanceSize } from '@aws-cdk/aws-ec2';
import { Secret } from '@aws-cdk/aws-secretsmanager';
import { IKey } from '@aws-cdk/aws-kms';

interface PostgresProps extends StackProps {
  vpc: IVpc;
  kmsKey: IKey;
}
export class Postgres extends cdk.Stack {
  public db: rds.DatabaseInstance;
  public dbPassword: Secret;
  constructor(scope: cdk.App, id: string, props: PostgresProps) {
    super(scope, id, props);

    this.dbPassword = new Secret(this, 'masterPass', {
      encryptionKey: props.kmsKey,
      generateSecretString: {
        excludePunctuation: true,
      },
    });

    this.db = new rds.DatabaseInstance(this, 'postgres', {
      engine: rds.DatabaseInstanceEngine.POSTGRES,
      vpc: props.vpc,
      masterUsername: 'root',
      instanceClass: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
      databaseName: 'postgres',
      masterUserPassword: this.dbPassword.secretValue,
    });

    this.db.connections.allowDefaultPortFromAnyIpv4();
  }
}
