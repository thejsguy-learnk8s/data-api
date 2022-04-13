FROM node:16.14.2
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
ENV PORT=2001
EXPOSE 2001
CMD [ "npm", "start" ]
