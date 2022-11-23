# Install dependencies only when needed
FROM node:16.13-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
ARG NODE_ENV=devolpement
RUN echo ${NODE_ENV}
RUN NODE_ENV=${NODE_ENV} yarn build:frontend

# Production image, copy all the files and run next
FROM node:16.13-alpine AS runner
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/packages/ob-frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/packages/ob-frontend/.next/static ./packages/ob-frontend/.next/static
COPY --from=builder /app/packages/ob-frontend/public ./packages/ob-frontend/public
# These are partially installed for some reason. Remove or it won't work.
RUN rm -rf ./packages/ob-frontend/node_modules/react
RUN rm -rf ./packages/ob-frontend/node_modules/next

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1
CMD ["node", "./packages/ob-frontend/server.js"]