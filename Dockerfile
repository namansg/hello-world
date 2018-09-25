FROM node:carbon-slim

MAINTAINER Naman Sogani

RUN apt-get update
RUN apt-get install git -y

ADD . .

RUN npm i

CMD ["node","index.js"]
