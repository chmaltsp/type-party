.PHONY: tag-gql-image build-tp-gql push-tp-gql tag-and-push set-ssm-param update-gql-service-staging

tag-gql-image:
	@echo "LOGIN TO DOCKER"
	$$(aws ecr --profile tp-access get-login --region us-east-1 --no-include-email)
	$(eval REV=$(shell git rev-parse HEAD | cut -c1-7))
	docker tag tp-gql:latest 561034361591.dkr.ecr.us-east-1.amazonaws.com/tp-gql:latest
	docker tag tp-gql:latest 561034361591.dkr.ecr.us-east-1.amazonaws.com/tp-gql:$(REV)

build-tp-gql:
	docker build -t tp-gql ./backend

push-tp-gql:
	$(eval REV=$(shell git rev-parse HEAD | cut -c1-7))
	docker push 561034361591.dkr.ecr.us-east-1.amazonaws.com/tp-gql:latest
	docker push 561034361591.dkr.ecr.us-east-1.amazonaws.com/tp-gql:${REV}

tag-and-push-gql: build-tp-gql tag-gql-image push-tp-gql

set-ssm-param: 
	aws ssm put-parameter --name="${NAME}" --value="${VALUE}" --overwrite --type="${TYPE}" --region="us-east-1" 

build-tp-gql:
	docker build -t tp-fe ./frontend

update-gql-service-staging:
	$(eval GQL_SERVICE_NAME=$(shell aws cloudformation describe-stacks --stack-name TpGqlStaging --query "Stacks[0].Outputs[?OutputKey=='ServiceName'].OutputValue" --output text))
	$(eval GQL_CLUSTER_NAME=$(shell aws cloudformation describe-stacks --stack-name TpGqlStaging --query "Stacks[0].Outputs[?OutputKey=='ClusterName'].OutputValue" --output text))
	ecs-deploy -n $(GQL_SERVICE_NAME) -c $(GQL_CLUSTER_NAME) -i 561034361591.dkr.ecr.us-east-1.amazonaws.com/tp-gql:latest