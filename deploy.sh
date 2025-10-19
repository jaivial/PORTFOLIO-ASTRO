#!/bin/bash

set -e

echo "🚀 Starting deployment process..."

echo "📦 Pushing changes to repository..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
git push origin $(git branch --show-current)

echo "🔗 Connecting to server and deploying..."
ssh root@178.16.130.178 << 'EOF'
    set -e

    echo "📁 Navigating to project directory..."
    cd /var/www/jaimedigitalstudio.com

    echo "🔄 Pulling latest changes (force overwrite)..."
    git fetch --all
    git reset --hard origin/$(git rev-parse --abbrev-ref HEAD)
    git pull

    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps

    echo "🏗️  Building project..."
    npm run build

    echo "🚀 Starting/Restarting Node.js application with PM2..."
    if pm2 list | grep -q jaimedigitalstudio; then
        pm2 restart jaimedigitalstudio
    else
        pm2 start dist/server/entry.mjs --name jaimedigitalstudio --env production
    fi
    pm2 save
    pm2 startup

    echo "✅ Testing nginx configuration..."
    nginx -t

    echo "🔄 Restarting nginx..."
    systemctl restart nginx

    echo "✨ Deployment completed successfully!"
EOF

echo "🎉 Deployment process finished!"