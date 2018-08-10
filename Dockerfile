FROM node:8

WORKDIR /app

COPY package*.json /app
COPY index.js /app

RUN cd /app && npm install

ENTRYPOINT npm run start
