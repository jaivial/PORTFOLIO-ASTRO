#!/bin/bash
# Upload compressed WebP images to Bunny CDN
# Usage: ./upload_compressed.sh

set -e

# Configuration
BUNNY_STORAGE_HOST="storage.bunnycdn.com"
BUNNY_STORAGE_NAME="jaimedigitalstudio"  # Your storage zone name
BUNNY_API_KEY="${BUNNY_API_KEY}"  # Set this environment variable or edit
CDN_BASE_URL="https://cdn.jaimedigitalstudio.com"
OUTPUT_DIR="/tmp/images_to_compress"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Uploading compressed WebP images to Bunny CDN...${NC}\n"

if [ -z "$BUNNY_API_KEY" ]; then
    echo -e "${RED}Error: BUNNY_API_KEY environment variable not set${NC}"
    echo "Please set it with: export BUNNY_API_KEY='your-api-key'"
    echo ""
    echo "Or edit this script to add your API key:"
    echo "  BUNNY_API_KEY=\"your-api-key\""
    exit 1
fi

uploaded=0
failed=0

# Find all WebP files and upload them
find "$OUTPUT_DIR" -name "*.webp" -type f | while read file; do
    # Get relative path
    rel_path="${file#$OUTPUT_DIR/}"

    # Full CDN URL
    cdn_url="$CDN_BASE_URL/$rel_path"

    echo -n "Uploading: $rel_path ... "

    # Upload using curl to Bunny Storage
    # Note: We're overwriting the original files with WebP versions
    response=$(curl -s -w "%{http_code}" -X PUT \
        -H "AccessKey: $BUNNY_API_KEY" \
        -H "Content-Type: image/webp" \
        --data-binary @"$file" \
        "https://$BUNNY_STORAGE_HOST/$BUNNY_STORAGE_NAME/$rel_path" 2>/dev/null)

    http_code="${response: -3}"

    if [ "$http_code" == "201" ] || [ "$http_code" == "200" ]; then
        echo -e "${GREEN}OK${NC}"
        ((uploaded++))
    else
        echo -e "${RED}FAILED (HTTP $http_code)${NC}"
        ((failed++))
    fi
done

echo ""
echo -e "Upload complete: ${GREEN}$uploaded${NC} successful, ${RED}$failed${NC} failed"

# Purge CDN cache to ensure new images are served
if [ $uploaded -gt 0 ]; then
    echo ""
    echo -e "${YELLOW}Purging CDN cache for updated files...${NC}"

    # Create a purge request for the CDN
    find "$OUTPUT_DIR" -name "*.webp" -type f | while read file; do
        rel_path="${file#$OUTPUT_DIR/}"
        rel_path_without_ext="${rel_path%.webp}"
        jpg_path="${rel_path_without_ext}.jpg"
        png_path="${rel_path_without_ext}.png"

        # Purge each URL pattern
        for url in "$CDN_BASE_URL/$rel_path" "$CDN_BASE_URL/$jpg_path" "$CDN_BASE_URL/$png_path"; do
            curl -s -X POST \
                -H "AccessKey: $BUNNY_API_KEY" \
                -H "Content-Type: application/json" \
                -d "{\"url\": \"$url\"}" \
                "https://$BUNNY_STORAGE_NAME.bunnycdn.com/purge" 2>/dev/null || true
        done
    done

    echo "Cache purge initiated"
fi
