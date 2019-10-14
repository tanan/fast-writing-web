#!/bin/bash

docker stop fast-writing-web
docker rm fast-writing-web
docker run --network fast-writing-network -d -p 80:80 --name fast-writing-web -v /opt/work/git/tanan/fast-writing/nginx/conf.d:/etc/nginx/conf.d asia.gcr.io/anan-project/fast-writing-web:v0.4
