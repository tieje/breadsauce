#FROM tieje/rpi4_frontend:latest
FROM node:16.14.2
WORKDIR /breadsauce
RUN apt-get update
RUN npm install -g typescript
RUN npm install -g serve
COPY package.json /breadsauce/
RUN yarn install
COPY . .
ENV PATH /breadsauce/node_modules/.bin:$PATH
RUN npm run build
