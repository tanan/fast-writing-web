FROM node:11-alpine as build
ENV VUE_APP_API_URL http://fast-writing.weeekend.work/api/v1

WORKDIR /app

# .dockerignoreしていないものは全てcopy
COPY ./ /app/

RUN yarn install \
    && yarn build

FROM nginx:mainline-alpine
COPY --from=build /app/dist /app/