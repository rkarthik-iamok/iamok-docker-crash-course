# Get Node version 19 with Alpine version 3.16
FROM node:19-alpine3.16

RUN npm -g install nodemon

# Specify Working Directory as a Variable
WORKDIR /app

# Copy all of the source code into the Image
# COPY <Relative Path of the Source Directory> <Relative Path of the Destination Directory>
# If Working Directory is mentioned, then the Destination path is relative of the Working Directory
COPY . .

# Run the commands as the image is getting built
RUN npm install

# Expose the port 
EXPOSE 4000

# Run command is used to setup Container 
# Executables are done by 
CMD ["npm", "start"]


