import * as cdk from '@aws-cdk/core';
import * as ec2 from "@aws-cdk/aws-ec2";
import * as ecs from "@aws-cdk/aws-ecs";
import * as ecs_patterns from "@aws-cdk/aws-ecs-patterns";

export class OozdemirFactorialStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "oozdemir-vpc", {
      maxAzs: 3
    });

    const cluster = new ecs.Cluster(this, "oozdemir-cluster", {
      vpc: vpc
    });

    new ecs_patterns.ApplicationLoadBalancedFargateService(this, "oozdemir-factorial-app", {
      cluster: cluster,
      cpu: 256,
      desiredCount: 1,
      taskImageOptions: { image: ecs.ContainerImage.fromAsset("resources") },
      memoryLimitMiB: 512,
      publicLoadBalancer: true
    });

    
  }
}
