#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { OozdemirFactorialStack } from '../lib/oozdemir-factorial-stack';

const app = new cdk.App();
new OozdemirFactorialStack(app, 'OozdemirFactorialStack');
