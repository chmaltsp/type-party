import ecr = require('@aws-cdk/aws-ecr');

import cdk = require('@aws-cdk/core');

export const TP_GQL_REPO = 'tp-gql';
export const TP_FE_REPO = 'tp-fe';
export class TpEcr extends cdk.Stack {
  public readonly gql: ecr.IRepository;
  public readonly fe: ecr.IRepository;
  constructor(parent: cdk.App, name: string) {
    super(parent, name);

    this.gql = new ecr.Repository(this, TP_GQL_REPO, {
      repositoryName: TP_GQL_REPO,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      lifecycleRules: [
        {
          maxImageCount: 9999,
        },
      ],
    });

    this.fe = new ecr.Repository(this, TP_FE_REPO, {
      repositoryName: TP_FE_REPO,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      lifecycleRules: [
        {
          maxImageCount: 9999,
        },
      ],
    });
  }
}
