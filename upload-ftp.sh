#!/bin/bash

# Bunny CDN FTP Upload Script
# Uses FTP to upload files to jaimedigitalstudio storage zone

FTP_HOST="storage.bunnycdn.com"
FTP_USER="jaimedigitalstudio"
FTP_PASS="0ad9ada0-7f63-4cf5-a19ba8fd8404-0c0a-40fb"
PROJECT_DIR="/Users/usuario/Documents/Organized_Documents/Work_Projects/PROYECTOS/PROYECTOS_PUBLICADOS/PORTFOLIO-ASTRO"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

SUCCESS=0
FAILED=0
SKIPPED=0

# Function to upload file via FTP
upload_ftp() {
    local local_path="$1"
    local remote_path="$2"
    local description="$3"

    # Check if file exists
    if [ ! -f "${local_path}" ]; then
        echo -e "${YELLOW}SKIPPED${NC}: ${description} (file not found: ${local_path})"
        ((SKIPPED++))
        return 1
    fi

    # Upload using curl with FTP
    local result=$(curl -s -o /dev/null -w "%{http_code}" \
        -T "${local_path}" \
        "ftp://${FTP_HOST}/${remote_path}" \
        --user "${FTP_USER}:${FTP_PASS}")

    if [ "$result" -eq 226 ] || [ "$result" -eq 0 ]; then
        echo -e "${GREEN}SUCCESS${NC}: ${description}"
        echo "  URL: https://jaimedigitalstudio.bunnycdn.com/${remote_path}"
        ((SUCCESS++))
        return 0
    else
        echo -e "${RED}FAILED${NC}: ${description} (FTP code: ${result})"
        ((FAILED++))
        return 1
    fi
}

echo "=============================================="
echo "Bunny CDN FTP Upload for jaimedigitalstudio"
echo "=============================================="
echo ""
echo "Host: ${FTP_HOST}"
echo "User: ${FTP_USER}"
echo ""

# Create list of files to upload
declare -a FILES_TO_UPLOAD=()

# Root public files
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/profilephoto.webp|profilephoto.webp|Profile Photo WebP")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/profilephoto.png|profilephoto.png|Profile Photo PNG")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/cursor.png|cursor.png|Cursor")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/favicon.ico|favicon.ico|Favicon")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/image.jpeg|image.jpeg|Default Image")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/pfp.webp|pfp.webp|PFP WebP")

# Root images folder
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/alqueriavillacarmen.webp|images/alqueriavillacarmen.webp|Alqueria Villa Carmen WebP")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/guillermofernandeznutricion.webp|images/guillermofernandeznutricion.webp|Guillermo Fernandez Nutricion WebP")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/herobudget/herobudgetimg1.webp|images/herobudget/herobudgetimg1.webp|Hero Budget Hero Image")

# Tech logo icons
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/expressjs.png|images/newlanguagesicons/expressjs.png|ExpressJS Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/i18n.png|images/newlanguagesicons/i18n.png|i18n Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/nextauth.png|images/newlanguagesicons/nextauth.png|NextAuth Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/nodemailer.png|images/newlanguagesicons/nodemailer.png|Nodemailer Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/openai.png|images/newlanguagesicons/openai.png|OpenAI Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/paypal.png|images/newlanguagesicons/paypal.png|PayPal Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/responsivedesign.png|images/newlanguagesicons/responsivedesign.png|Responsive Design Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/seo.png|images/newlanguagesicons/seo.png|SEO Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/shadcnui.png|images/newlanguagesicons/shadcnui.png|Shadcn UI Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/stripe.png|images/newlanguagesicons/stripe.png|Stripe Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/tailwind-css-seeklogo.png|images/newlanguagesicons/tailwind-css-seeklogo.png|Tailwind CSS Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/vps.png|images/newlanguagesicons/vps.png|VPS Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/framermotion.svg|images/newlanguagesicons/framermotion.svg|Framer Motion Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/next-intl.svg|images/newlanguagesicons/next-intl.svg|next-intl Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/newlanguagesicons/nextjs-icon.svg|images/newlanguagesicons/nextjs-icon.svg|NextJS Icon SVG")

# Centro Neuro Expresion images
for i in {1..15}; do
    FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/centroneuroexpresion/centroneuroexpresion${i}.jpg|images/centroneuroexpresion/centroneuroexpresion${i}.jpg|Centro Neuro Expresion ${i}")
done

# Tour To Valencia images
for i in {1..15}; do
    FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/images/tourtovalencia/tourtovalencia${i}.jpg|images/tourtovalencia/tourtovalencia${i}.jpg|Tour To Valencia ${i}")
done

# assets/images folder
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/waving_hand.png|assets/images/waving_hand.png|Waving Hand")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/profilephoto.png|assets/images/profilephoto.png|Profile Photo (Assets)")

# Hero Budget
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgeticon.png|assets/images/herobudget/herobudgeticon.png|Hero Budget Icon")
for i in {1..10}; do
    FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetimg${i}.webp|assets/images/herobudget/herobudgetimg${i}.webp|Hero Budget Image ${i}")
done
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetimg1ligh.png|assets/images/herobudget/herobudgetimg1ligh.png|Hero Budget Light 1")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetdark2.png|assets/images/herobudget/herobudgetdark2.png|Hero Budget Dark 2")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetlight2.png|assets/images/herobudget/herobudgetlight2.png|Hero Budget Light 2")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetdark3.png|assets/images/herobudget/herobudgetdark3.png|Hero Budget Dark 3")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetlight3.png|assets/images/herobudget/herobudgetlight3.png|Hero Budget Light 3")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetdark4.png|assets/images/herobudget/herobudgetdark4.png|Hero Budget Dark 4")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetlight4.png|assets/images/herobudget/herobudgetlight4.png|Hero Budget Light 4")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetbills.png|assets/images/herobudget/herobudgetbills.png|Hero Budget Bills")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/herobudgetgoals.png|assets/images/herobudget/herobudgetgoals.png|Hero Budget Goals")

# MenuStudio AI
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/menustudioai/icon.png|assets/images/menustudioai/icon.png|MenuStudio AI Icon")
for i in {1..10}; do
    FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/menustudioai/feature-${i}.png|assets/images/menustudioai/feature-${i}.png|MenuStudio AI Feature ${i}")
done

# SVG Diagrams
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/delta-sync-flow.svg|assets/images/herobudget/delta-sync-flow.svg|Delta Sync Flow Diagram")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/offline-first-infographic.svg|assets/images/herobudget/offline-first-infographic.svg|Offline First Infographic")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/herobudget/backend-microservices-diagram.svg|assets/images/herobudget/backend-microservices-diagram.svg|Backend Microservices Diagram")

# MenuStudio AI Diagrams
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/menustudioai/diagrams/01-rest-api-architecture.svg|assets/images/menustudioai/diagrams/01-rest-api-architecture.svg|Tech Diagram 01 (REST API)")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/menustudioai/diagrams/02-websocket-realtime.svg|assets/images/menustudioai/diagrams/02-websocket-realtime.svg|Tech Diagram 02 (WebSocket)")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/menustudioai/diagrams/03-session-authentication.svg|assets/images/menustudioai/diagrams/03-session-authentication.svg|Tech Diagram 03 (Session Auth)")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/menustudioai/diagrams/06-nsfw-ban-system.svg|assets/images/menustudioai/diagrams/06-nsfw-ban-system.svg|Tech Diagram 06 (NSFW Ban)")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/menustudioai/diagrams/07-stripe-integration.svg|assets/images/menustudioai/diagrams/07-stripe-integration.svg|Tech Diagram 07 (Stripe)")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/menustudioai/diagrams/10-admin-panel.svg|assets/images/menustudioai/diagrams/10-admin-panel.svg|Tech Diagram 10 (Admin Panel)")

# Tech logos SVG (assets)
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/Go-Logo_Black.svg|assets/images/Go-Logo_Black.svg|Go Logo Black")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/Vercel_favicon.svg|assets/images/Vercel_favicon.svg|Vercel Favicon")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/postman-svgrepo-com.svg|assets/images/postman-svgrepo-com.svg|Postman Logo SVG")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/mongodb-icon-1.svg|assets/images/mongodb-icon-1.svg|MongoDB Icon")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/logo-vercel.svg|assets/images/logo-vercel.svg|Logo Vercel")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/logo-vercel-svgrepo-com.svg|assets/images/logo-vercel-svgrepo-com.svg|Logo Vercel SVGRepo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/postman.svg|assets/images/postman.svg|Postman SVG")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/netlify-original.svg|assets/images/netlify-original.svg|Netlify Original")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/postgresql-svgrepo-com.svg|assets/images/postgresql-svgrepo-com.svg|PostgreSQL Logo")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/remix-letter-glowing.svg|assets/images/remix-letter-glowing.svg|Remix Letter Logo")

# Project images
for i in {1..4}; do
    FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/frasesmarcosalcon/frasesmarcosalcon${i}.jpg|assets/images/frasesmarcosalcon/frasesmarcosalcon${i}.jpg|Frases Marcos Alcon ${i}")
done

for i in {1..14}; do
    FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/catstore/catstore${i}.jpg|assets/images/catstore/catstore${i}.jpg|Cat Store ${i}")
done

for i in {1..18}; do
    FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/villacarmen/villacarmen-${i}.jpg|assets/images/villacarmen/villacarmen-${i}.jpg|Alqueria Villacarmen ${i}")
done

for i in {1..6}; do
    FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/todolist/todolist${i}.jpg|assets/images/todolist/todolist${i}.jpg|Todo List ${i}")
done

FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/guilleromofernandeznutricion/guille1.jpg|assets/images/guilleromofernandeznutricion/guille1.jpg|Guillermo Fernandez Nutricion 1")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/guilleromofernandeznutricion/guille2.jpg|assets/images/guilleromofernandeznutricion/guille2.jpg|Guillermo Fernandez Nutricion 2")
FILES_TO_UPLOAD+=("${PROJECT_DIR}/public/assets/images/guilleromofernandeznutricion/guille3.jpg|assets/images/guilleromofernandeznutricion/guille3.jpg|Guillermo Fernandez Nutricion 3")

echo "Starting upload of ${#FILES_TO_UPLOAD[@]} files..."
echo ""

TOTAL=${#FILES_TO_UPLOAD[@]}
COUNTER=0

for entry in "${FILES_TO_UPLOAD[@]}"; do
    IFS='|' read -r local_path remote_path description <<< "$entry"
    ((COUNTER++))
    echo "[${COUNTER}/${TOTAL}] Uploading: ${description}"
    upload_ftp "$local_path" "$remote_path" "$description"
done

echo ""
echo "=============================================="
echo "Upload Summary"
echo "=============================================="
echo "Total files processed: ${TOTAL}"
echo -e "${GREEN}Successful uploads: ${SUCCESS}${NC}"
echo -e "${RED}Failed uploads: ${FAILED}${NC}"
echo -e "${YELLOW}Skipped files: ${SKIPPED}${NC}"
echo ""

if [ $FAILED -gt 0 ]; then
    echo -e "${RED}Some uploads failed. Please check the errors above.${NC}"
    exit 1
else
    echo -e "${GREEN}All uploads completed successfully!${NC}"
    echo ""
    echo "Your files are now available at:"
    echo "https://jaimedigitalstudio.bunnycdn.com/"
    exit 0
fi
