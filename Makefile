.PHONY: tag-gql-image build-tp-api push-tp-api tag-and-push set-ssm-param update-api-service-dev  tag-docker-image tag-fe-image tag-fe-image tag-and-push-fe-image update-fe-service-dev

TP_FE_REPO=tp-fe
TP_API_REPO=tp-api
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

tag-api-image: 
	make tag-docker-image IMAGE=${TP_API_REPO}

build-tp-api:
	docker build -t ${TP_API_REPO} ./backend

push-tp-api:
	make push-docker-image IMAGE=${TP_API_REPO}

tag-and-push-api: build-tp-api tag-api-image push-tp-api

update-api-service-dev:
	$(eval API_SERVICE_NAME=$(shell aws cloudformation describe-stacks --stack-name tp-api-dev --query "Stacks[0].Outputs[?OutputKey=='ServiceName'].OutputValue" --output text))
	$(eval API_CLUSTER_NAME=$(shell aws cloudformation describe-stacks --stack-name tp-api-dev --query "Stacks[0].Outputs[?OutputKey=='ClusterName'].OutputValue" --output text))
	ecs-deploy -n $(API_SERVICE_NAME) -c $(API_CLUSTER_NAME) -i 561034361591.dkr.ecr.us-east-1.amazonaws.com/tp-api:latest

set-ssm-param-secure: 
	aws ssm put-parameter --name="${NAME}" --value="${VALUE}" --overwrite --type="${TYPE}" --region="us-east-1" --key-id=1b511fa7-dcd4-4db9-aef9-c15b141b3b29

set-ssm-param: 
	aws ssm put-parameter --name="${NAME}" --value="${VALUE}" --overwrite --type="${TYPE}" --region="us-east-1"
# FE Docker Build
build-tp-fe:
	docker build -t ${TP_FE_REPO} ./frontend

tag-fe-image: 
	make tag-docker-image IMAGE=${TP_FE_REPO}

push-tp-fe:
	make push-docker-image IMAGE=${TP_FE_REPO}

tag-and-push-fe: build-tp-fe tag-fe-image push-tp-fe

prisma-deploy-api: 
	cd backend && yarn prisma

make get-temp-token:
	aws sts get-caller-identity && aws sts get-session-token

update-fe-service-dev:
	$(eval FE_SERVICE_NAME=$(shell aws cloudformation describe-stacks --stack-name tp-frontend-dev --query "Stacks[0].Outputs[?OutputKey=='ServiceName'].OutputValue" --output text))
	$(eval FE_CLUSTER_NAME=$(shell aws cloudformation describe-stacks --stack-name tp-frontend-dev --query "Stacks[0].Outputs[?OutputKey=='ClusterName'].OutputValue" --output text))
	ecs-deploy -n $(FE_SERVICE_NAME) -c $(FE_CLUSTER_NAME) -i 561034361591.dkr.ecr.us-east-1.amazonaws.com/${TP_FE_REPO}:latest