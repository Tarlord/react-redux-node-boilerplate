FROM node:6.8.1

ADD . /app

RUN \
  npm set progress=false && \
  npm install -g forever && \
  cd /app && \
  npm install && \
  npm run build

WORKDIR /app

CMD forever ./build/server.js

EXPOSE 3000