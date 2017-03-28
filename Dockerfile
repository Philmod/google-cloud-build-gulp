FROM zzrot/alpine-node

WORKDIR /usr/src/app

# Dev install, build, production install, and clean.
COPY . /usr/src/app
RUN npm install \
 && npm run build \
 && rm -rf node_modules \
 && npm install \
 && rm -rf ~/.npm

EXPOSE 3000
ENV NODE_ENV production
CMD [ "npm", "start"]

