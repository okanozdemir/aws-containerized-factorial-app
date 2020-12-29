import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as OozdemirFactorial from '../lib/oozdemir-factorial-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new OozdemirFactorial.OozdemirFactorialStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
