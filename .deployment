#!/bin/bash

# deploy.sh - Deployment script for Azure

echo "🚀 Starting deployment process..."

# Install backend dependencies
echo "📦 Installing backend dependencies..."
npm install

# Build frontend
echo "🔨 Building frontend..."
cd frontend
npm install
npm run build
cd ..

# Create necessary directories
echo "📁 Creating deployment directories..."
mkdir -p backend/public

# Copy frontend build to backend
echo "📋 Copying frontend build to backend..."
cp -r frontend/build/* backend/public/

# Set environment variables
echo "⚙️ Setting environment variables..."
export NODE_ENV=production

echo "✅ Deployment preparation complete!"
