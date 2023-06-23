FROM node:alpine

COPY package.json ./

COPY server.js ./

# installs the current packages
RUN npm install

EXPOSE 3000

# this happens after the container starts
CMD ["node", "server.js"]