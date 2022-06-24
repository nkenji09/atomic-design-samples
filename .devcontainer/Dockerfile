FROM node:17-alpine

WORKDIR /home/root

RUN apk update && \
    apk add git

# Vue CLI 追加
RUN yarn init -y
RUN yarn global add @vue/cli
RUN vue upgrade --next

EXPOSE 3000

WORKDIR /home/app
