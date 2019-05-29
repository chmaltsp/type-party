#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { TypePartyStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
new TypePartyStack(app, 'TypePartyStack');
