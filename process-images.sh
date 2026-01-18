#!/bin/bash

# Configuración de Bunny CDN
STORAGE_NAME="jaimedigitalstudio"
API_KEY="0ad9ada0-7f63-4cf5-a19ba8fd8404-0c0a-40fb"
BASE_URL="https://cdn.jaimedigitalstudio.com"

# Directorios de imágenes
PUBLIC_DIR="/Users/usuario/Documents/Organized_Documents/Work_Projects/PROYECTOS/PROYECTOS_PUBLICADOS/PORTFOLIO-ASTRO/public"
SRC_DIR="/Users/usuario/Documents/Organized_Documents/Work_Projects/PROYECTOS/PROYECTOS_PUBLICADOS/PORTFOLIO-ASTRO/src/assets/images"

# Crear directorio temporal para webp
TEMP_DIR="/tmp/portfolio-images"
rm -rf "$TEMP_DIR"
mkdir -p "$TEMP_DIR"

echo "=== Convirtiendo imágenes a WebP (calidad 50%) ==="

# Función para convertir imagen
convert_to_webp() {
    local input="$1"
    local output="$TEMP_DIR/$(basename "$input" .png).webp"
    cwebp -q 50 "$input" -o "$output" 2>/dev/null
    if [ $? -eq 0 ]; then
        echo "Convertido: $(basename "$input") -> $(basename "$output")"
        orig_size=$(stat -f%z "$input" 2>/dev/null || stat -c%s "$input" 2>/dev/null)
        new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        echo "  Original: $orig_size bytes -> Nuevo: $new_size bytes"
    else
        echo "Error convirtiendo: $input"
    fi
}

# Convertir imágenes de newlanguagesicons
echo ""
echo "--- Directorio: public/images/newlanguagesicons ---"
for img in "$PUBLIC_DIR"/images/newlanguagesicons/*.png; do
    if [ -f "$img" ]; then
        convert_to_webp "$img"
    fi
done

# Convertir imágenes de tecnologies
echo ""
echo "--- Directorio: src/assets/images/tecnologies ---"
for img in "$SRC_DIR"/tecnologies/*.png; do
    if [ -f "$img" ]; then
        convert_to_webp "$img"
    fi
done

echo ""
echo "=== Subiendo imágenes a Bunny CDN ==="

# Función para subir archivo
upload_file() {
    local file="$1"
    local remote_path="$2"
    local filename=$(basename "$file")

    echo "Subiendo: $filename..."

    response=$(curl -X PUT \
        -H "AccessKey: $API_KEY" \
        -H "Content-Type: image/webp" \
        --data-binary @"$file" \
        "https://storage.bunnycdn.com/$STORAGE_NAME/$remote_path" \
        -w "%{http_code}" -o /dev/null)

    if [ "$response" = "201" ] || [ "$response" = "200" ]; then
        echo "  OK - https://$BASE_URL/$remote_path"
        return 0
    else
        echo "  Error (HTTP $response): $filename"
        return 1
    fi
}

# Subir imágenes de newlanguagesicons
echo ""
echo "--- Subiendo: newlanguagesicons ---"
for img in "$TEMP_DIR"/*.webp; do
    upload_file "$img" "assets/images/newlanguagesicons/$(basename "$img")"
done

# Subir imágenes de tecnologies
echo ""
echo "--- Subiendo: tecnologies ---"
for img in "$TEMP_DIR"/*.{webp,WEBP}; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        if [ "$filename" = "jotai.webp" ] || [ "$filename" = "i18next.webp" ]; then
            upload_file "$img" "assets/images/tecnologies/$filename"
        fi
    fi
done

echo ""
echo "=== Proceso completado ==="
echo "Archivos WebP en: $TEMP_DIR"
