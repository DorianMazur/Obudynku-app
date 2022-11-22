# Install dependencies only when needed
FROM node:16.13-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
ARG NODE_ENV=devolpement
RUN echo ${NODE_ENV}
RUN NODE_ENV=${NODE_ENV} yarn build:frontend

# clean all depencies
RUN rm -rf node_modules
RUN yarn cache clean

# install production dependencies only
RUN yarn install --production

# Production image, copy all the files and run next
FROM node:16.13-alpine AS runner
WORKDIR /app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/packages/ob-frontend/next.config.js ./next.config.js
COPY --from=builder /app/packages/ob-frontend/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/packages/ob-frontend/.next ./.next
COPY --from=builder /app/packages/ob-frontend/node_modules ./node_modules
COPY --from=builder /app/packages/ob-frontend/package.json ./package.json
COPY --from=builder /app/packages/ob-frontend/pages ./pages

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1
CMD ["yarn", "start"]