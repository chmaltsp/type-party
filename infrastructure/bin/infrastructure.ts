#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');

import { TpImages } from '../lib/tp-images';
import { TpEcr } from '../lib/tp-ecr';
import { TpVpc } from '../lib/tp-vpc';
import { TpGql } from '../lib/tp-gql';

import { TpCommon } from '../lib/common';
import { TpFe } from '../lib/tp-fe';

const app = new cdk.App();

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

const common = new TpCommon(app, 'TpCommon', {
  env,
});

const TP_GQL_STAGING = 'TpGqlStaging';
const TP_FE_STAGING = 'TpFeStaging';

const imageStack = new TpImages(app, 'TpStagingImages', {
  env,
});

new TpGql(app, TP_GQL_STAGING, {
  ecrRepository: tpGqlEcr.gql,
  vpc: stagingVpc.vpc,
  stackName: TP_GQL_STAGING,
  imageBucket: imageStack.bucket,
  env,
});

new TpFe(app, TP_FE_STAGING, {
  ecrRepository: tpGqlEcr.fe,
  vpc: stagingVpc.vpc,
  stackName: TP_FE_STAGING,
  certificate: common.certificate,
  zone: common.zone,
  env,
});
