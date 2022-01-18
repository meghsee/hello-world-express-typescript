# Get node.js, first strt with the full node js image and then use the alpine image to build the container image
FROM node:16 AS BUILD_IMAGE

# RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

# Create a folder name in the container where we can copy our source to be deployed to the container, can be any name.
# Create app directory
WORKDIR /app

# Copy all the files in the current folder to the folder named in WORDIR, "/app"
COPY . .

# Install the libraries we need to build our Node.js express application
RUN npm install

# build the application
RUN npm run build

# remove development dependencies
#RUN npm prune --production

# run node prune
#RUN /usr/local/bin/node-prune

# we will use alpine image, alpine is a lean docker image with minimum packages but enough to run node applications.
# FROM node:16-alpine

# WORKDIR /app

# copy from build image
#COPY --from=BUILD_IMAGE /app/dist ./dist
#COPY --from=BUILD_IMAGE /app/node_modules ./node_modules


# Define an environment variable named PORT
ENV PORT=3000
# Define an environment variable named MESSAGE
ENV MESSAGE="Hello World from dockerfile."

# Open up a port, we can use to communicate with our container using an environment variable
EXPOSE $PORT

# Our application start up command
ENTRYPOINT ["node", "dist/index.js"]