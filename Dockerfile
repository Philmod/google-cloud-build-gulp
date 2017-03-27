FROM zzrot/alpine-node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Dev install for build.
COPY package.json /usr/src/app/package.json
RUN npm install
COPY . /usr/src/app
RUN npm run build

# Production modules only.
RUN rm -rf node_modules
ENV NODE_ENV production
RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]
