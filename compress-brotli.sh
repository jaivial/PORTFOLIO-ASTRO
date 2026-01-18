#!/bin/bash
# Post-build Brotli compression script
# Comprime archivos JS, CSS y HTML con Brotli estático

SOURCE_DIR="dist/client"
LEVEL=11  # Maximum compression

echo "=== Compressing JS files with Brotli ==="
find "${SOURCE_DIR}" -name "*.js" -type f -print0 | xargs -0 -P 4 -I {} brotli -q $LEVEL -f {}

echo "=== Compressing CSS files with Brotli ==="
find "${SOURCE_DIR}" -name "*.css" -type f -print0 | xargs -0 -P 4 -I {} brotli -q $LEVEL -f {}

echo "=== Brotli compression complete ==="
echo "Files compressed:"
find "${SOURCE_DIR}" -name "*.br" | wc -l
