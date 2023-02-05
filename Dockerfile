FROM node:18-alpine AS development


# Set working directory
WORKDIR /usr/src/app

RUN npm install -g npm@latest

COPY package*.json ./

# Here we install all the deps
RUN npm install
RUN npm install -g @nestjs/cli
RUN npm install prisma --save-dev

# Bundle app source / copy all other files
COPY . .

# Build the app to the /dist folder
RUN npm run build


EXPOSE 3000



# Build another image named production
FROM node:18 AS production

# Set node env to prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set Working Directory
WORKDIR /thomas/src/app

# Copy all from development stage
COPY --from=development /usr/src/app/ .

EXPOSE 3000

# Run app
CMD [ "node", "dist/main" ]

# Example Commands to build and run the dockerfile
# docker build -t thomas-nest .
# docker run thomas-nest