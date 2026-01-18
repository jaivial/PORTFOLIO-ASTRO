#!/bin/bash

# Bunny CDN Upload Script
# Uploads all media files from the portfolio to the jaimedigitalstudio storage zone

STORAGE_ZONE="jaimedigitalstudio"
API_KEY="c6a0858c-9208-479b-8b5d-14ec8f2312b50d8cd3df-400c-483c-878e-061dca7bb281"
BASE_URL="https://storage.bunnycdn.com/${STORAGE_ZONE}"
PROJECT_DIR="/Users/usuario/Documents/Organized_Documents/Work_Projects/PROYECTOS/PROYECTOS_PUBLICADOS/PORTFOLIO-ASTRO"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
SUCCESS=0
FAILED=0
SKIPPED=0
TOTAL=0

# Function to upload a file
upload_file() {
    local local_path="$1"
    local bunny_path="$2"
    local description="$3"

    # Check if file exists
    if [ ! -f "${local_path}" ]; then
        echo -e "${YELLOW}SKIPPED${NC}: ${description} (file not found: ${local_path})"
        ((SKIPPED++))
        return 1
    fi

    # Create directory structure on Bunny if needed
    local dir_path=$(dirname "${bunny_path}")
    if [ "${dir_path}" != "." ]; then
        mkdir -p "/tmp/bunny_${STORAGE_ZONE}_${dir_path}"
    fi

    # Upload file using PUT
    local response=$(curl -s -o /dev/null -w "%{http_code}" \
        -X PUT \
        -H "AccessKey: ${API_KEY}" \
        -H "Content-Type: application/octet-stream" \
        --data-binary @"${local_path}" \
        "${BASE_URL}/${bunny_path}")

    if [ "$response" -eq 201 ] || [ "$response" -eq 200 ]; then
        echo -e "${GREEN}SUCCESS${NC}: ${description}"
        echo "  URL: https://${STORAGE_ZONE}.bunnycdn.com/${bunny_path}"
        ((SUCCESS++))
        return 0
    else
        echo -e "${RED}FAILED${NC}: ${description} (HTTP ${response})"
        ((FAILED++))
        return 1
    fi
}

echo "=============================================="
echo "Bunny CDN Upload Script for jaimedigitalstudio"
echo "=============================================="
echo ""
echo "Storage Zone: ${STORAGE_ZONE}"
echo "Base URL: ${BASE_URL}"
echo ""

# List of files to upload (local files only)
declare -a FILES_TO_UPLOAD=()

# Images from public folder
FILES_TO_UPLOAD+=("/public/profilephoto.webp|public/profilephoto.webp|Profile Photo WebP")
FILES_TO_UPLOAD+=("/public/profilephoto.png|public/profilephoto.png|Profile Photo PNG")
FILES_TO_UPLOAD+=("/public/assets/images/profilephoto.png|assets/images/profilephoto.png|Profile Photo (Assets)")
FILES_TO_UPLOAD+=("/public/cursor.png|public/cursor.png|Cursor")
FILES_TO_UPLOAD+=("/public/favicon.ico|public/favicon.ico|Favicon")
FILES_TO_UPLOAD+=("/public/image.jpeg|public/image.jpeg|Default Image")
FILES_TO_UPLOAD+=("/public/pfp.webp|public/pfp.webp|PFP WebP")
FILES_TO_UPLOAD+=("/public/assets/images/waving_hand.png|assets/images/waving_hand.png|Waving Hand")

# Hero Budget Images
for i in {1..10}; do
    FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetimg${i}.webp|assets/images/herobudget/herobudgetimg${i}.webp|Hero Budget Image ${i}")
done
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgeticon.png|assets/images/herobudget/herobudgeticon.png|Hero Budget Icon")
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetimg1ligh.png|assets/images/herobudget/herobudgetimg1ligh.png|Hero Budget Light 1")
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetdark2.png|assets/images/herobudget/herobudgetdark2.png|Hero Budget Dark 2")
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetlight2.png|assets/images/herobudget/herobudgetlight2.png|Hero Budget Light 2")
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetdark3.png|assets/images/herobudget/herobudgetdark3.png|Hero Budget Dark 3")
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetlight3.png|assets/images/herobudget/herobudgetlight3.png|Hero Budget Light 3")
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetdark4.png|assets/images/herobudget/herobudgetdark4.png|Hero Budget Dark 4")
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetlight4.png|assets/images/herobudget/herobudgetlight4.png|Hero Budget Light 4")
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetbills.png|assets/images/herobudget/herobudgetbills.png|Hero Budget Bills")
FILES_TO_UPLOAD+=("/public/assets/images/herobudget/herobudgetgoals.png|assets/images/herobudget/herobudgetgoals.png|Hero Budget Goals")

# MenuStudio AI Images
FILES_TO_UPLOAD+=("/public/assets/images/menustudioai/icon.png|assets/images/menustudioai/icon.png|MenuStudio AI Icon")
for i in {1..10}; do
    FILES_TO_UPLOAD+=("/public/assets/images/menustudioai/feature-${i}.png|assets/images/menustudioai/feature-${i}.png|MenuStudio AI Feature ${i}")
done

# Frases Marcos Alcon
for i in {1..4}; do
    FILES_TO_UPLOAD+=("/public/assets/images/frasesmarcosalcon/frasesmarcosalcon${i}.jpg|assets/images/frasesmarcosalcon/frasesmarcosalcon${i}.jpg|Frases Marcos Alcon ${i}")
done

# Cat Store
for i in {1..14}; do
    FILES_TO_UPLOAD+=("/public/assets/images/catstore/catstore${i}.jpg|assets/images/catstore/catstore${i}.jpg|Cat Store ${i}")
done

# Alqueria Villacarmen
for i in {1..18}; do
    FILES_TO_UPLOAD+=("/public/assets/images/villacarmen/villacarmen-${i}.jpg|assets/images/villacarmen/villacarmen-${i}.jpg|Alqueria Villacarmen ${i}")
done

# Tour To Valencia
for i in {1..15}; do
    FILES_TO_UPLOAD+=("/public/assets/images/tourtovalencia/tourtovalencia${i}.jpg|assets/images/tourtovalencia/tourtovalencia${i}.jpg|Tour To Valencia ${i}")
done

# Centro Neuro Expresion
for i in {1..15}; do
    FILES_TO_UPLOAD+=("/public/images/centroneuroexpresion/centroneuroexpresion${i}.jpg|images/centroneuroexpresion/centroneuroexpresion${i}.jpg|Centro Neuro Expresion ${i}")
done

# Todo List
for i in {1..6}; do
    FILES_TO_UPLOAD+=("/public/assets/images/todolist/todolist${i}.jpg|assets/images/todolist/todolist${i}.jpg|Todo List ${i}")
done

# Guillermo Fernandez Nutricion
FILES_TO_UPLOAD+=("/public/assets/images/guilleromofernandeznutricion/guille1.jpg|assets/images/guilleromofernandeznutricion/guille1.jpg|Guillermo Fernandez Nutricion 1")
FILES_TO_UPLOAD+=("/public/assets/images/guilleromofernandeznutricion/guille2.jpg|assets/images/guilleromofernandeznutricion/guille2.jpg|Guillermo Fernandez Nutricion 2")
FILES_TO_UPLOAD+=("/public/assets/images/guilleromofernandeznutricion/guille3.jpg|assets/images/guilleromofernandeznutricion/guille3.jpg|Guillermo Fernandez Nutricion 3")

# Tech Logos (PNG)
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/expressjs.png|images/newlanguagesicons/expressjs.png|ExpressJS Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/i18n.png|images/newlanguagesicons/i18n.png|i18n Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/nextauth.png|images/newlanguagesicons/nextauth.png|NextAuth Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/nodemailer.png|images/newlanguagesicons/nodemailer.png|Nodemailer Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/openai.png|images/newlanguagesicons/openai.png|OpenAI Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/paypal.png|images/newlanguagesicons/paypal.png|PayPal Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/responsivedesign.png|images/newlanguagesicons/responsivedesign.png|Responsive Design Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/seo.png|images/newlanguagesicons/seo.png|SEO Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/shadcnui.png|images/newlanguagesicons/shadcnui.png|Shadcn UI Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/stripe.png|images/newlanguagesicons/stripe.png|Stripe Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/tailwind-css-seeklogo.png|images/newlanguagesicons/tailwind-css-seeklogo.png|Tailwind CSS Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/vps.png|images/newlanguagesicons/vps.png|VPS Logo")

# Tech Logos (SVG)
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/framermotion.svg|images/newlanguagesicons/framermotion.svg|Framer Motion Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/next-intl.svg|images/newlanguagesicons/next-intl.svg|next-intl Logo")
FILES_TO_UPLOAD+=("/public/images/newlanguagesicons/nextjs-icon.svg|images/newlanguagesicons/nextjs-icon.svg|NextJS Icon SVG")

echo "Starting upload of ${#FILES_TO_UPLOAD[@]} files..."
echo ""

# Process uploads
for entry in "${FILES_TO_UPLOAD[@]}"; do
    IFS='|' read -r local_path bunny_path description <<< "$entry"
    full_local_path="${PROJECT_DIR}${local_path}"
    upload_file "$full_local_path" "$bunny_path" "$description"
    ((TOTAL++))
done

echo ""
echo "=============================================="
echo "Upload Summary"
echo "=============================================="
echo -e "Total files processed: ${TOTAL}"
echo -e "${GREEN}Successful uploads: ${SUCCESS}${NC}"
echo -e "${RED}Failed uploads: ${FAILED}${NC}"
echo -e "${YELLOW}Skipped files: ${SKIPPED}${NC}"
echo ""

if [ $FAILED -gt 0 ]; then
    echo -e "${RED}Some uploads failed. Please check the errors above.${NC}"
    exit 1
else
    echo -e "${GREEN}All uploads completed successfully!${NC}"
    exit 0
fi
