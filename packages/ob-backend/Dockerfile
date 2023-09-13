FROM node:18-alpine as builder

WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build:backend

# Second Stage : Setup command to run your app
FROM alpine:latest
WORKDIR /app
ENV NODE_ENV=production

# copy prebuilt binary from previous step
COPY --from=builder /app/packages/ob-backend/main /app/main
EXPOSE 8080
CMD ["/app/main"]