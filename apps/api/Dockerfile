# Use Node 20 with a slim image
FROM node:20-bookworm-slim

# Install OS-level dependencies & apply security updates
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y --no-install-recommends openssl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy only monorepo root files needed for dependency installation
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json ./

# Copy the API workspace
COPY ../../apps/api ./apps/api

# Copy any shared packages needed for build
COPY ../../packages ./packages

# Install API dependencies only (thanks to pnpm workspaces)
RUN pnpm install --frozen-lockfile --filter @kallosophia/api...

# Generate Prisma client
RUN pnpm --filter @kallosophia/api prisma generate

WORKDIR /app/apps/api

COPY . .

ENV PATH="/app/node_modules/.bin:${PATH}"

EXPOSE 4000

ENTRYPOINT ["sh", "./scripts/entrypoint.sh"]
