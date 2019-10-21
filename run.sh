#!/bin/bash

docker stop fast-writing-web
docker rm fast-writing-web
docker pull gcr.io/anan-project/github.com/tanan/fast-writing-web:master
docker run --network fast-writing-network -d -p 80:80 --name fast-writing-web -v /opt/work/git/tanan/fast-writing/nginx/conf.d:/etc/nginx/conf.d gcr.io/anan-project/github.com/tanan/fast-writing-web:master
