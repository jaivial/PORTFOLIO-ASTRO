#!/bin/bash
# Post-build compression script (Brotli + Gzip)
# Comprime archivos estáticos para servicio rápido

SOURCE_DIR="dist"
BROTLI_LEVEL=11  # Maximum Brotli compression
GZIP_LEVEL=9     # High gzip compression

echo "=== Compressing HTML with Gzip ==="
find "${SOURCE_DIR}" -name "*.html" -type f -print0 | xargs -0 -P 4 -I {} gzip -"${GZIP_LEVEL}" -k -f {}

echo "=== Compressing JS files with Gzip ==="
find "${SOURCE_DIR}" -name "*.js" -type f -print0 | xargs -0 -P 4 -I {} gzip -"${GZIP_LEVEL}" -k -f {}

echo "=== Compressing CSS files with Gzip ==="
find "${SOURCE_DIR}" -name "*.css" -type f -print0 | xargs -0 -P 4 -I {} gzip -"${GZIP_LEVEL}" -k -f {}

echo "=== Compressing JS files with Brotli ==="
find "${SOURCE_DIR}" -name "*.js" -type f -print0 | xargs -0 -P 4 -I {} brotli -q $BROTLI_LEVEL -f {}

echo "=== Compressing CSS files with Brotli ==="
find "${SOURCE_DIR}" -name "*.css" -type f -print0 | xargs -0 -P 4 -I {} brotli -q $BROTLI_LEVEL -f {}

echo ""
echo "=== Compression complete ==="
echo "Gzip files:"
find "${SOURCE_DIR}" -name "*.gz" | wc -l
echo "Brotli files:"
find "${SOURCE_DIR}" -name "*.br" | wc -l
