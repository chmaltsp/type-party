.PHONY: tag-gql-image build-tp-gql push-tp-gql tag-and-push set-ssm-param update-gql-service-staging  tag-docker-image tag-fe-image tag-fe-image tag-and-push-fe-image update-fe-service-staging

TP_FE_REPO=tp-fe
TP_GQL_REPO=tp-gql
tag-docker-image:
	@echo "LOGIN TO DOCKER"
	$$(aws ecr --profile tp-access get-login --region us-east-1 --no-include-email)
	$(eval REV=$(shell git rev-parse HEAD | cut -c1-7))
	docker tag ${IMAGE}:latest 561034361591.dkr.ecr.us-east-1.amazonaws.com/${IMAGE}:latest
	docker tag ${IMAGE}:latest 561034361591.dkr.ecr.us-east-1.amazonaws.com/${IMAGE}:$(REV)

push-docker-image:
	$(eval REV=$(shell git rev-parse HEAD | cut -c1-7))
	docker push 561034361591.dkr.ecr.us-east-1.amazonaws.com/${IMAGE}:latest
	docker push 561034361591.dkr.ecr.us-east-1.amazonaws.com/${IMAGE}:${REV}

tag-gql-image: 
	make tag-docker-image IMAGE=${TP_GQL_REPO}

build-tp-gql:
	docker build -t tp-gql ./backend

push-tp-gql:
	make push-docker-image IMAGE=${TP_GQL_REPO}

tag-and-push-gql: build-tp-gql tag-gql-image push-tp-gql

update-gql-service-staging:
	$(eval GQL_SERVICE_NAME=$(shell aws cloudformation describe-stacks --stack-name tp-api-dev --query "Stacks[0].Outputs[?OutputKey=='ServiceName'].OutputValue" --output text))
	$(eval GQL_CLUSTER_NAME=$(shell aws cloudformation describe-stacks --stack-name tp-api-dev --query "Stacks[0].Outputs[?OutputKey=='ClusterName'].OutputValue" --output text))
	ecs-deploy -n $(GQL_SERVICE_NAME) -c $(GQL_CLUSTER_NAME) -i 561034361591.dkr.ecr.us-east-1.amazonaws.com/tp-gql:latest

set-ssm-param-secure: 
	aws ssm put-parameter --name="${NAME}" --value="${VALUE}" --overwrite --type="${TYPE}" --region="us-east-1" --key-id=alias/TpMaster

set-ssm-param: 
	aws ssm put-parameter --name="${NAME}" --value="${VALUE}" --overwrite --type="${TYPE}" --region="us-east-1"
# FE Docker Build
build-tp-fe:
	docker build -t tp-fe ./frontend

tag-fe-image: 
	make tag-docker-image IMAGE=${TP_FE_REPO}

push-tp-fe:
	make push-docker-image IMAGE=${TP_FE_REPO}

tag-and-push-fe: build-tp-fe tag-fe-image push-tp-fe

prisma-deploy-staging: 
	cd backend && yarn prisma

update-fe-service-staging:
	$(eval FE_SERVICE_NAME=$(shell aws cloudformation describe-stacks --stack-name tp-frontend-dev --query "Stacks[0].Outputs[?OutputKey=='ServiceName'].OutputValue" --output text))
	$(eval FE_CLUSTER_NAME=$(shell aws cloudformation describe-stacks --stack-name tp-frontend-dev --query "Stacks[0].Outputs[?OutputKey=='ClusterName'].OutputValue" --output text))
	ecs-deploy -n $(FE_SERVICE_NAME) -c $(FE_CLUSTER_NAME) -i 561034361591.dkr.ecr.us-east-1.amazonaws.com/${TP_FE_REPO}:latest