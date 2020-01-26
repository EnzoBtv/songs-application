FROM node:lts

WORKDIR /usr/backend
ENV PATH /usr/backend/node_modules/.bin:$PATH

COPY package.json /usr/backend/package.json
COPY wait-for-it.sh /usr/backend/wait-for-it.sh

RUN npm i

EXPOSE 3333

RUN chmod +x ./wait-for-it.sh