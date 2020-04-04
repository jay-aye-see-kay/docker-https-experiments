FROM node:12

WORKDIR /app

# install app deps
COPY package*.json ./
RUN npm ci --only=production

# bundle app src
COPY . .

# run app
EXPOSE 8080
CMD [ "node", "server.js" ]
