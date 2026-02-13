#!/bin/bash

# 🚀 One-Click Deployment Script for Cinematic Portfolio
# This script will build and deploy your portfolio to GitHub Pages

echo "🎬 Starting deployment of your cinematic portfolio..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from cinematic-portfolio directory"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps
fi

# Build the project
echo "🔨 Building production version..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check errors above."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "✨ Deployment successful!"
    echo ""
    echo "🌐 Your portfolio will be live in 2-3 minutes at:"
    echo "   https://pradhanmol.github.io"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Go to: https://github.com/Pradhanmol/pradhanmol.github.io/settings/pages"
    echo "   2. Under 'Source', select 'gh-pages' branch"
    echo "   3. Click 'Save'"
    echo "   4. Wait 2-3 minutes, then visit your site!"
    echo ""
else
    echo "❌ Deployment failed. Please check errors above."
    exit 1
fi
