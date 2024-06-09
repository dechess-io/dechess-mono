FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json .
COPY pnpm-*.yaml .
COPY node_modules .

COPY packages/movechess-server/package.json packages/movechess-server/package.json
COPY packages/movechess-server/dist packages/movechess-server/dist
COPY packages/movechess-server/node_modules packages/movechess-server/node_modules

RUN pnpm install

CMD [ "node","--trace-warnings", "--es-module-specifier-resolution=node", "/app/packages/movechess-server/dist/main.js" ]
