FROM node:carbon-slim

MAINTAINER Naman Sogani

RUN apt-get update
RUN apt-get install git -y

ADD . .

CMD ["node","index.js"]
