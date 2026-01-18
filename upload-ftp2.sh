#!/bin/bash

# Bunny CDN FTP Upload - Manual upload with mkdir

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

# Function to upload file using FTP with mkdir
upload_ftp() {
    local local_path="$1"
    local remote_path="$2"
    local description="$3"

    if [ ! -f "${local_path}" ]; then
        echo -e "${YELLOW}SKIPPED${NC}: ${description}"
        return 0
    fi

    # Get directory of remote path
    local remote_dir=$(dirname "$remote_path")

    # Upload file
    result=$(curl -s -o /dev/null -w "%{http_code}" \
        -T "${local_path}" \
        --ftp-create-dirs \
        "ftp://${FTP_HOST}/${remote_path}" \
        --user "${FTP_USER}:${FTP_PASS}")

    if [ "$result" -eq 226 ] || [ "$result" -eq 0 ]; then
        echo -e "${GREEN}SUCCESS${NC}: ${description}"
        ((SUCCESS++))
    else
        echo -e "${RED}FAILED${NC}: ${description} (code: ${result})"
        ((FAILED++))
    fi
}

echo "=============================================="
echo "Bunny CDN Upload (curl with --ftp-create-dirs)"
echo "=============================================="
echo ""

# Start with root files
echo "--- Root files ---"
upload_ftp "${PROJECT_DIR}/public/profilephoto.webp" "profilephoto.webp" "profilephoto.webp"
upload_ftp "${PROJECT_DIR}/public/profilephoto.png" "profilephoto.png" "profilephoto.png"
upload_ftp "${PROJECT_DIR}/public/cursor.png" "cursor.png" "cursor.png"
upload_ftp "${PROJECT_DIR}/public/favicon.ico" "favicon.ico" "favicon.ico"
upload_ftp "${PROJECT_DIR}/public/image.jpeg" "image.jpeg" "image.jpeg"
upload_ftp "${PROJECT_DIR}/public/pfp.webp" "pfp.webp" "pfp.webp"

# images/
echo ""
echo "--- images/ ---"
upload_ftp "${PROJECT_DIR}/public/images/alqueriavillacarmen.webp" "images/alqueriavillacarmen.webp" "alqueriavillacarmen.webp"
upload_ftp "${PROJECT_DIR}/public/images/guillermofernandeznutricion.webp" "images/guillermofernandeznutricion.webp" "guillermofernandeznutricion.webp"
upload_ftp "${PROJECT_DIR}/public/images/herobudget/herobudgetimg1.webp" "images/herobudget/herobudgetimg1.webp" "herobudgetimg1.webp"
upload_ftp "${PROJECT_DIR}/public/images/centroneuroexpresion/centroneuroexpresion1.jpg" "images/centroneuroexpresion/centroneuroexpresion1.jpg" "centroneuroexpresion1.jpg"
upload_ftp "${PROJECT_DIR}/public/images/tourtovalencia/tourtovalencia11.jpg" "images/tourtovalencia/tourtovalencia11.jpg" "tourtovalencia11.jpg"

# Tech icons
for icon in expressjs i18n nextauth nodemailer openai paypal responsivedesign seo shadcnui stripe tailwind-css-seeklogo vps; do
    upload_ftp "${PROJECT_DIR}/public/images/newlanguagesicons/${icon}.png" "images/newlanguagesicons/${icon}.png" "${icon}.png"
done
for icon in framermotion next-intl nextjs-icon; do
    upload_ftp "${PROJECT_DIR}/public/images/newlanguagesicons/${icon}.svg" "images/newlanguagesicons/${icon}.svg" "${icon}.svg"
done

# assets/images/
echo ""
echo "--- assets/images/ ---"
upload_ftp "${PROJECT_DIR}/public/assets/images/waving_hand.png" "assets/images/waving_hand.png" "waving_hand.png"
upload_ftp "${PROJECT_DIR}/public/assets/images/profilephoto.png" "assets/images/profilephoto.png" "profilephoto.png"
upload_ftp "${PROJECT_DIR}/public/assets/images/guillermofernandeznutricion.png" "assets/images/guillermofernandeznutricion.png" "guillermofernandeznutricion.png"

# Tech logos
for icon in Go-Logo_Black Vercel_favicon postman-svgrepo-com mongodb-icon-1 logo-vercel logo-vercel-svgrepo-com postman netlify-original postgresql-svgrepo-com remix-letter-glowing; do
    upload_ftp "${PROJECT_DIR}/public/assets/images/${icon}.svg" "assets/images/${icon}.svg" "${icon}.svg"
done

# src/assets/images/
echo ""
echo "--- src/assets/images/ ---"

# Hero Budget
upload_ftp "${PROJECT_DIR}/src/assets/images/herobudget/herobudgeticon.png" "assets/images/herobudget/herobudgeticon.png" "herobudgeticon.png"
for i in 1 2 3 4 5 6 7 8 9 10; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/herobudget/herobudgetimg${i}.webp" "assets/images/herobudget/herobudgetimg${i}.webp" "herobudgetimg${i}.webp"
done
upload_ftp "${PROJECT_DIR}/src/assets/images/herobudget/herobudgetimg1ligh.png" "assets/images/herobudget/herobudgetimg1ligh.png" "herobudgetimg1ligh.png"
for suffix in dark2 light2 dark3 light3 dark4 light4; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/herobudget/herobudget${suffix}.png" "assets/images/herobudget/herobudget${suffix}.png" "herobudget${suffix}.png"
done
upload_ftp "${PROJECT_DIR}/src/assets/images/herobudget/herobudgetbills.png" "assets/images/herobudget/herobudgetbills.png" "herobudgetbills.png"
upload_ftp "${PROJECT_DIR}/src/assets/images/herobudget/herobudgetgoals.png" "assets/images/herobudget/herobudgetgoals.png" "herobudgetgoals.png"

# MenuStudio AI
upload_ftp "${PROJECT_DIR}/src/assets/images/menustudioai/icon.png" "assets/images/menustudioai/icon.png" "menustudioai_icon.png"
for i in 1 2 3 4 5 6 7 8 9 10; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/menustudioai/feature-${i}.png" "assets/images/menustudioai/feature-${i}.png" "menustudioai_feature-${i}.png"
done

# Diagrams
for diag in delta-sync-flow offline-first-infographic backend-microservices-diagram; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/herobudget/${diag}.svg" "assets/images/herobudget/${diag}.svg" "${diag}.svg"
done

for diag in 01-rest-api-architecture 02-websocket-realtime 03-session-authentication 06-nsfw-ban-system 07-stripe-integration 10-admin-panel; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/menustudioai/diagrams/${diag}.svg" "assets/images/menustudioai/diagrams/${diag}.svg" "${diag}.svg"
done

# Project images
for i in 1 2 3 4; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/frasesmarcosalcon/frasesmarcosalcon${i}.jpg" "assets/images/frasesmarcosalcon/frasesmarcosalcon${i}.jpg" "frasesmarcosalcon${i}.jpg"
done
for i in 1 2 3 4 5 6 7 8 9 10 11 12 13 14; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/catstore/catstore${i}.jpg" "assets/images/catstore/catstore${i}.jpg" "catstore${i}.jpg"
done
for i in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/villacarmen/villacarmen-${i}.jpg" "assets/images/villacarmen/villacarmen-${i}.jpg" "villacarmen-${i}.jpg"
done
for i in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/tourtovalencia/tourtovalencia${i}.jpg" "assets/images/tourtovalencia/tourtovalencia${i}.jpg" "tourtovalencia${i}.jpg"
done
for i in 1 2 3 4 5 6; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/todolist/todolist${i}.jpg" "assets/images/todolist/todolist${i}.jpg" "todolist${i}.jpg"
done
for i in 1 2 3; do
    upload_ftp "${PROJECT_DIR}/src/assets/images/guilleromofernandeznutricion/guille${i}.jpg" "assets/images/guilleromofernandeznutricion/guille${i}.jpg" "guille${i}.jpg"
done

echo ""
echo "=============================================="
echo "Summary"
echo "=============================================="
echo -e "${GREEN}Successful: ${SUCCESS}${NC}"
echo -e "${RED}Failed: ${FAILED}${NC}"
echo ""
echo "URL format: https://jaimedigitalstudio.bunnycdn.com/[path]"
