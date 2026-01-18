#!/bin/bash

# Bunny CDN Upload using lftp
# lftp handles directory creation automatically

FTP_HOST="storage.bunnycdn.com"
FTP_USER="jaimedigitalstudio"
FTP_PASS="0ad9ada0-7f63-4cf5-a19ba8fd8404-0c0a-40fb"
PROJECT_DIR="/Users/usuario/Documents/Organized_Documents/Work_Projects/PROYECTOS/PROYECTOS_PUBLICADOS/PORTFOLIO-ASTRO"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

SUCCESS=0
FAILED=0

echo "=============================================="
echo "Bunny CDN Upload (lftp) - jaimedigitalstudio"
echo "=============================================="
echo ""

# Create a mirror script for lftp
cat > /tmp/bunny-mirror.lftp << 'EOF'
set net/max-retries 3
set net/reconnect-interval-base 3
set ftp:ssl-allow no
set xfer:log yes
set xfer:log-file /tmp/bunny-upload.log

open -u jaimedigitalstudio,0ad9ada0-7f63-4cf5-a19ba8fd8404-0c0a-40fb storage.bunnycdn.com

mirror --verbose --parallel=5 --continue public/ /
mirror --verbose --parallel=5 --continue src/assets/images/ /assets/images/
EOF

echo "Starting upload with lftp..."
echo ""

# Run lftp
lftp -f /tmp/bunny-mirror.lftp 2>&1

# Check results from log
if [ -f /tmp/bunny-upload.log ]; then
    echo ""
    echo "=============================================="
    echo "Upload Log Summary"
    echo "=============================================="
    cat /tmp/bunny-upload.log | tail -30
fi

echo ""
echo "Done! Files should be available at:"
echo "https://jaimedigitalstudio.bunnycdn.com/"
