.PHONY: tag-gql-image build-tp-gql push-tp-gql tag-and-push
tag-gql-image:
	@echo "LOGIN TO DOCKER"
	eval $(aws ecr --profile tp-access get-login --region us-east-1 --no-include-email)

build-tp-gql:
	docker build -t tp-gql ./backend

push-tp-gql:
	docker push 561034361591.dkr.ecr.us-east-1.amazonaws.com/tp-gql

tag-and-push-gql: build-tp-gql tag-gql-image push-tp-gql

