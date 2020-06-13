FROM node:12.16.2

# Create app directory
WORKDIR /sa-api

# Install app dependencies
COPY package.json /sa-api/
COPY package-lock.json /sa-api/
RUN npm install

# Bundle app source
COPY . /sa-api/

EXPOSE  444
CMD [ "npm", "start"]