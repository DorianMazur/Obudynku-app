FROM arm64v8/node:18-alpine as builder

RUN apk --no-cache add --virtual native-deps \
    g++ gcc libgcc libstdc++ linux-headers make python3 && \
    npm install --quiet node-gyp -g

WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build:backend

# Second Stage : Setup command to run your app
FROM arm64v8/alpine:latest
WORKDIR /app
ENV NODE_ENV=production

# install required libs
RUN apk update && apk add --no-cache libstdc++ libgcc

# copy prebuilt binary from previous step
COPY --from=builder /app/packages/ob-backend/main /app/main
EXPOSE 8080
CMD ["/app/main"]