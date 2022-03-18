# pull official base image
FROM node:lts-alpine

# set work directory
WORKDIR /usr/src/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project
COPY . .

# run app
CMD ["npm", "start"]
