FROM node:alpine

WORKDIR /usr/app

COPY package.json /usr/app

COPY server.js /usr/app

# installs the current packages
RUN npm install

EXPOSE 3000

# this happens after the container starts
CMD ["node", "server.js"]