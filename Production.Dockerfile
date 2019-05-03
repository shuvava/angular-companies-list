FROM node:11.1.0 as npm_builder
# Set the entrypoint as bin bash incase we want to inspect the container
ENTRYPOINT ["/bin/bash"]
# Manually copy the package.json
COPY ./package.json /usr/src/app/package.json
COPY ./package-lock.json /usr/src/app/package-lock.json
COPY ./src/environments/environment.docker.json /usr/src/app/environment.json
# Set the work directory to where we copied our source files
WORKDIR /usr/src/app
# Install all of our dependencies
RUN npm install

FROM node:11.1.0 as proxy
# Set the entrypoint as bin bash incase we want to inspect the container
ENTRYPOINT ["/bin/bash"]
# Set the work directory to where we copied our source files
WORKDIR /usr/src/app
RUN npm install express@4.16.4
RUN npm install compression@1.7.3
RUN npm install cors@2.8.5
RUN npm install http-proxy-middleware@0.19.1

FROM npm_builder as builder
# Copy the app excluding everything in the .dockerignore
COPY . /usr/src/app
# Put node_modules into the path, this will purely be used for accessing the angular cli
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Set the work directory to where we copied our source files
WORKDIR /usr/src/app
# Build our distributable
# RUN npm run build -- --source-map --vendorChunk --verbose  && echo "exit code: $?"
RUN free -tm
RUN node --max_old_space_size=2096 --optimize_for_size --log_colour ./node_modules/@angular/cli/bin/ng build --prod --source-map --vendorChunk

FROM node:11.1.0 as production
# Copy the dist folder from builder
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
COPY --from=builder /usr/src/app/server.js /usr/src/app/server.js
COPY --from=builder /usr/src/app/environment.json /usr/src/app/dist/environment.json
COPY --from=proxy /usr/src/app/node_modules /usr/src/app/node_modules
# Set the work directory to where we copied our source files
WORKDIR /usr/src/app

# Create 2 empty environment variables
ENV CONTEXT=
ENV PORT=
ENV APIURL=

EXPOSE ${PORT}
# Run the node server which should be used for production
CMD ["node", "server.js"]
