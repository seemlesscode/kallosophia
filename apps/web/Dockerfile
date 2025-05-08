# ---------- Base image for dependencies and build ----------
FROM node:20-bookworm-slim AS builder

# Set working directory at monorepo root
WORKDIR /app

# Copy only necessary files for installing dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json ./
COPY .npmrc ./

# Install pnpm globally
RUN npm install -g pnpm

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy the full monorepo into the builder
COPY . .

# Build the Next.js app with standalone output
WORKDIR /app/apps/web
RUN pnpm build

# ---------- Lightweight image to run the app ----------
FROM node:20-bookworm-slim AS runner

# Set working directory for the app
WORKDIR /app

# Only copy production build output and runtime deps
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/.next/static ./.next/static

EXPOSE 3000

# Run the Next.js app in production mode
CMD ["node", "server.js"]
