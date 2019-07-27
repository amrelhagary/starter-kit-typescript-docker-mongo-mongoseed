FROM node:10.4.1

# Install packages
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install --quit && \
    mkdir -p /app && mv /tmp/node_modules /app/ && rm -rf /tmp

ADD . /app
WORKDIR /app

EXPOSE 4242

CMD ["npm", "start"]
