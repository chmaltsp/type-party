#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');

import { ImageStack } from '../lib/tp-images';
import { TpEcr } from '../lib/tp-ecr';
import { VpcStack } from '../lib/tp-vpc';
import { ApiStack } from '../lib/tp-api';

import { TpCommon, getStage, ORG } from '../lib/common';
import { FrontendStack } from '../lib/tp-fe';
import { PostgresStack } from '../lib/tp-postgres';
import { PrismaStack } from '../lib/tp-prisma';
import { LBStack } from '../lib/tp-lb';

const app = new cdk.App();

const stage = getStage(app);

const getStackName = (name: string) => `${ORG}-${name}-${stage}`;

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
};

const tpEcr = new TpEcr(app, 'TpEcr');

const VPC_STACK = getStackName('vpc');

const vpc = new VpcStack(app, VPC_STACK, {
  name: VPC_STACK,
  env,
});

const common = new TpCommon(app, 'TpCommon', {
  env,
});
const LB_STACK = getStackName('lb');

const lb = new LBStack(app, LB_STACK, {
  env,
  vpc: vpc.vpc,
  zone: common.zone,
  certificate: common.certificate,
});

const IMAGE_STACK = getStackName('images');
const imageStack = new ImageStack(app, IMAGE_STACK, {
  env,
  certificate: common.certificate,
  zone: common.zone,
});

const DB_STACK = getStackName('db');

const postgres = new PostgresStack(app, DB_STACK, {
  vpc: vpc.vpc,
  kmsKey: common.key,
  env,
});

const API_STACK = getStackName('api');

new ApiStack(app, API_STACK, {
  ecrRepository: tpEcr.api,
  vpc: vpc.vpc,
  stackName: API_STACK,
  imageBucket: imageStack.bucket,
  certificate: common.certificate,
  zone: common.zone,
  kmsKey: common.key,
  env,
  cluster: lb.cluster,
  targetGroup: lb.apiTargetGroup,
});

const FRONTEND_STACK = getStackName('frontend');

new FrontendStack(app, FRONTEND_STACK, {
  ecrRepository: tpEcr.fe,
  vpc: vpc.vpc,
  stackName: FRONTEND_STACK,
  certificate: common.certificate,
  zone: common.zone,
  cluster: lb.cluster,
  targetGroup: lb.targetGroup,
  feTargetGroup: lb.feTargetGroup,
  env,
});

const PRISMA_STACK = getStackName('prisma');
new PrismaStack(app, PRISMA_STACK, {
  vpc: vpc.vpc,
  certificate: common.certificate,
  zone: common.zone,
  db: postgres.db,
  dbPassword: postgres.dbPassword,
  kmsKey: common.key,
  targetGroup: lb.prismaTargetGroup,
  cluster: lb.cluster,
  env,
});
