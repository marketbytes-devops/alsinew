#!/bin/bash
set -e

echo "=========================================="
echo "🚀 Updating ALSI Next.js Website"
echo "=========================================="

# 1. Pull latest code from GitHub
echo "📥 Step 1: Pulling latest changes from git..."
git pull origin main

# 2. Rebuild and restart container
echo "🔄 Step 2: Rebuilding and recreating container..."
docker compose up -d --build --remove-orphans

# 3. Clean up dangling images
echo "🧹 Step 3: Cleaning up old Docker images..."
docker image prune -f

echo "=========================================="
echo "✅ ALSI Website successfully updated!"
echo "🌐 Running internally on port 3006"
echo "=========================================="
