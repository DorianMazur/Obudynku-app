# Install dependencies only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install --network-timeout 100000 --frozen-lockfile 
RUN yarn build:frontend

# Production image, copy all the files and run next
FROM node:18-alpine AS runner

WORKDIR /app

RUN apk add --no-cache dumb-init bash

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN chown -R nextjs:nodejs /app

COPY --from=builder --chown=nextjs:nodejs /app/packages/ob-frontend/.next/static ./packages/ob-frontend/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/packages/ob-frontend/public ./packages/ob-frontend/public
COPY --from=builder --chown=nextjs:nodejs /app/packages/ob-frontend/env.sh ./packages/ob-frontend/env.sh

COPY --from=builder --chown=nextjs:nodejs /app/packages/ob-frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/packages/ob-frontend/.next/static ./.next/static
# These are partially installed for some reason. Remove or it won't work.
RUN rm -rf ./packages/ob-frontend/node_modules/react
RUN rm -rf ./packages/ob-frontend/node_modules/next
RUN touch /app/packages/ob-frontend/.env

WORKDIR /app/packages/ob-frontend/

USER nextjs
EXPOSE 3000

RUN ["chmod", "+x", "./env.sh"]

ENTRYPOINT ["./env.sh"]
CMD ["dumb-init", "node", "./server.js"]