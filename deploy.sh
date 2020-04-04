#! /bin/sh

SSH_HOST="docker-experiments"

# update files
rsync --recursive --delete . docker-experiments:~/app

# (re)start docker
ssh $SSH_HOST "cd app && docker-compose stop && docker-compose up -d"
