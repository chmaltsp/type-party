import ecr = require('@aws-cdk/aws-ecr');

import cdk = require('@aws-cdk/core');

export const TP_GQL_REPO = 'tp-gql';
export class TpEcr extends cdk.Stack {
  public readonly repository: ecr.IRepository;
  constructor(parent: cdk.App, name: string) {
    super(parent, name);

    this.repository = new ecr.Repository(this, TP_GQL_REPO, {
      repositoryName: TP_GQL_REPO,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      lifecycleRules: [
        {
          maxImageCount: 9999,
        },
      ],
    });
  }
}
