# Base image
FROM node:19-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
COPY index.js /app/
RUN npm install

# Bundle app source
COPY . .

# Expose the port that the app is running on
EXPOSE 80

# Start the app
CMD [ "node", "index.js" ]
