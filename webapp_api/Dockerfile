# Docker Base image
FROM node:19-alpine3.16

# Global installation of Nodemon package
RUN npm install -g nodemon

# Set the Working Directory
WORKDIR /app

# Copy just the package.json 
# This is to improve the Docker response by leveraging part layer caching
COPY package.json .

# Initialize the package.json
RUN npm install

# Copy all the files 
COPY . .

# Expose PORT
EXPOSE 4000

# Start the webapp by running the executable
CMD ["npm", "start"]

