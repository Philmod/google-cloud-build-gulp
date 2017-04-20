# Static files stage.
FROM zzrot/alpine-node
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install
COPY . /usr/src/app
RUN npm run build

# Production modules stage.
FROM zzrot/alpine-node
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN npm install --production
COPY . /usr/src/app

COPY --from=0 /usr/src/app/dist/ /usr/src/app/dist/

EXPOSE 3000

CMD [ "npm", "start"]
