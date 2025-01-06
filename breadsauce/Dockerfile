FROM node:16.14.2
WORKDIR /breadsauce
RUN apt-get update
RUN npm install -g npm@8.12.1
RUN npm install -g typescript && \
    npm install -g serve
COPY package.json /breadsauce/
RUN yarn install
COPY . .
ENV PATH /breadsauce/node_modules/.bin:$PATH
RUN npm run build
CMD serve -l 80 -s dist
