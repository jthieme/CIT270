FROM node:alpine

COPY package.json ./

COPY server.js ./

# the below command is what happens when you build the image
RUN npm install

EXPOSE 3000

# the below command is what happens when you run the container
CMD ["node", "server.js"]