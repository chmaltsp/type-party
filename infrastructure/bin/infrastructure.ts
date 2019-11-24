#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
// import { TpImages } from '../lib/tp-images';

import { TpEcr } from '../lib/tp-ecr';
import { TpVpc } from '../lib/tp-vpc';
import { TpGql } from '../lib/tp-gql';

const app = new cdk.App();
// new TpImages(app, 'TypePartyStack');

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
};
const tpGqlEcr = new TpEcr(app, 'TpEcr');

const TP_STAGING_VPC = 'TpStagingVpc';

const stagingVpc = new TpVpc(app, TP_STAGING_VPC, {
  name: TP_STAGING_VPC,
  env,
});

const TP_GQL_STAGING = 'TpGqlStaging';
new TpGql(app, TP_GQL_STAGING, {
  ecrRepository: tpGqlEcr.repository,
  vpc: stagingVpc.vpc,
  stackName: TP_GQL_STAGING,
  env,
});
