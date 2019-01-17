FROM node:11.1.0 as npm_builder
# Set the entrypoint as bin bash incase we want to inspect the container
ENTRYPOINT ["/bin/bash"]
# Manually copy the package.json
COPY ./package.json /usr/src/app/package.json
COPY ./package-lock.json /usr/src/app/package-lock.json
# Set the work directory to where we copied our source files
WORKDIR /usr/src/app
# Install all of our dependencies
RUN npm install

FROM node:11.1.0

COPY --from=npm_builder /usr/src/app /usr/src/app
COPY ./proxy_server.js /usr/src/app/
COPY ./ssl/ /usr/src/app/ssl/

# Put node_modules into the path, this will purely be used for accessing the angular cli
ENV PATH /usr/src/app/node_modules/.bin:$PATH

WORKDIR /usr/src/app

ENV APIURL=

EXPOSE 80
EXPOSE 443

CMD ["node", "proxy_server.js"]
