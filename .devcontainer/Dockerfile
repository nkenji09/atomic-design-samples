FROM node:17-alpine

RUN apk update && \
    apk add git

# Vue CLI 追加
RUN yarn init -y
RUN yarn global add @vue/cli
RUN vue upgrade --next

WORKDIR /home/app
