#!/bin/sh

set -e

echo "Running Prisma migrations..."
pnpm --filter @kallosophia/api prisma migrate deploy

echo "Starting the Kallosophia API..."
pnpm start
