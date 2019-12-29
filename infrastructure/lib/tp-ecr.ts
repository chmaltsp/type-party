import ecr = require('@aws-cdk/aws-ecr');

import cdk = require('@aws-cdk/core');

export const TP_API_REPO = 'tp-api';
export const TP_FE_REPO = 'tp-fe';
export class TpEcr extends cdk.Stack {
  public readonly api: ecr.IRepository;
  public readonly fe: ecr.IRepository;
  constructor(parent: cdk.App, name: string) {
    super(parent, name);

    this.api = new ecr.Repository(this, TP_API_REPO, {
      repositoryName: TP_API_REPO,
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
