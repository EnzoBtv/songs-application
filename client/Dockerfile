FROM node:lts

WORKDIR /usr/front

ENV PATH /usr/front/node_modules/.bin:$PATH

COPY package.json /usr/front/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

CMD ["npm", "start"]