#!/bin/sh
set -e  # Exit on error

echo "🚀 Running TypeORM migrations..."
npm run typeorm migration:run

echo "✅ Migrations completed. Starting the app..."
npm run start:dev
