# Dev Build
FROM node:18-alpine as dev

RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV dev

COPY --chown=node:node . .

RUN yarn --network-timeout 100000 --frozen-lockfile

USER node

# Production Build
FROM node:18-alpine as build

WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

COPY --chown=node:node --from=dev /app/node_modules ./node_modules
COPY --chown=node:node . .

RUN yarn build:backend

# Install only the production dependencies and clean cache to optimize image size.
RUN yarn --network-timeout 100000 --frozen-lockfile --production && yarn cache clean

USER node

# Prod Image
FROM node:18-alpine as prod

WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

COPY --chown=node:node --from=build /app/packages/ob-backend/dist dist
COPY --chown=node:node --from=build /app/node_modules node_modules

USER node
EXPOSE 8080
CMD ["node", "dist/main.js"]