# bin/sh
eval $(aws ecr --profile tp-access get-login --region us-east-1 --no-include-email)
