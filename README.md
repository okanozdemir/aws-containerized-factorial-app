# aws-containerized-factorial-app
An AWS CDK project which deploys a containerized Golang application to calculate the factorial of a non-negative integer provided by the user via HTTP.

## Description
The application is a basic API to calculate the factorial that developed with Golang([main.go](resources/main.go)) and containerized with Docker([Dockerfile](resources/Dockerfile)). The application is running on [AWS Fargate](https://aws.amazon.com/fargate) and exposed by a public [AWS Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html). An application request can be sent with: `http://${ALB_DOMAIN}/api/v1/${NUMBER}` or you can check the usage with any 404 URL like: `http://${ALB_DOMAIN}/`. The entire infrastructure of the application is created with [AWS CDK](https://aws.amazon.com/cdk/), which is a infrastructure as a code (IaC) framework.

*P.S. ALB_DOMAIN will appear in the terminal when the infrastructure deployment is completed.*

## Usage

### Prerequisites
This AWS CDK project is developed with TypeScript and you can find out how to meet the prerequisites from the [link](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_prerequisites).

### Run the project
- Install the requirements with:
`npm update` 

- Synthesize an AWS CloudFormation template:
`cdk synth` 

- Deploying the stack:
`cdk deploy` 

## Explanation of the tech stack for those wondering
The main purpose of the project was run a containerized application in serverless infrastructure. I chose Golang and Docker as the obvious choice for performance and HYPE! AWS Fargate is the easiest containerized application run solution if you don't need too much vCPU, memory, etc. and it can be used with Free Tier unlike EKS. AWS Fargate is much easier to operate, considering the scaling against ECS and EKS. AWS CDK is way simpler to use than Cloudformation templates or Terraform.
