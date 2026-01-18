#!/bin/bash
# Upload script for Bunny CDN Storage using curl
# Includes Brotli (.br) static compression support

STORAGE_NAME="jaimedigitalstudio"
ACCESS_KEY="0ad9ada0-7f63-4cf5-a19ba8fd8404-0c0a-40fb"
BASE_URL="https://storage.bunnycdn.com/${STORAGE_NAME}"
SOURCE_DIR="dist"

echo "Uploading ${SOURCE_DIR} to Bunny CDN..."

# Function to upload a file
upload_file() {
    local file_path="$1"
    local relative_path="${file_path#$SOURCE_DIR/}"
    local url="${BASE_URL}/${relative_path}"

    curl -s -X PUT \
        -H "AccessKey: ${ACCESS_KEY}" \
        --data-binary "@${file_path}" \
        "${url}" > /dev/null

    if [ $? -eq 0 ]; then
        echo "  Uploaded: ${relative_path}"
    else
        echo "  Failed: ${relative_path}"
    fi
}

export -f upload_file
export SOURCE_DIR BASE_URL ACCESS_KEY

echo "=== Uploading regular files ==="
find "${SOURCE_DIR}" -type f ! -name "*.br" -print0 | \
    xargs -0 -P 10 -I {} bash -c 'upload_file "{}"'

echo "=== Uploading Brotli compressed files (.br) ==="
find "${SOURCE_DIR}" -name "*.br" -type f -print0 | \
    xargs -0 -P 10 -I {} bash -c 'upload_file "{}"'

echo "Upload complete!"
