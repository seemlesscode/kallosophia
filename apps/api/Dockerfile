FROM node:20-bookworm-slim

# Apply security updates
RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy and install only the dependencies first
COPY ../../package.json ../../pnpm-lock.yaml ../../pnpm-workspace.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Now copy the API source code
COPY . .

EXPOSE 4000
CMD ["pnpm", "start"]
