#!/usr/bin/env python3
"""
Script to compress images from Bunny CDN
Usage: python compress_images.py [--download-only] [--compress-only]
"""

import os
import json
import subprocess
import sys
import re
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError

# Configuration
CDN_BASE = "https://cdn.jaimedigitalstudio.com"
OUTPUT_DIR = Path("/tmp/images_to_compress")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Threshold in bytes (500KB)
SIZE_THRESHOLD = 500 * 1024

def get_relative_path(url):
    """Extract the relative path from a CDN URL"""
    if url.startswith(CDN_BASE + "/"):
        return url[len(CDN_BASE) + 1:]
    return url

def get_image_size(url):
    """Get the file size of an image from URL"""
    try:
        request = Request(url, method='HEAD')
        request.add_header('User-Agent', 'Mozilla/5.0')
        with urlopen(request, timeout=10) as response:
            return int(response.headers.get('Content-Length', 0))
    except (URLError, HTTPError) as e:
        print(f"Error getting size for {url}: {e}")
        return None

def download_image(url, output_path):
    """Download an image from URL"""
    try:
        # Create parent directories
        output_path.parent.mkdir(parents=True, exist_ok=True)

        request = Request(url)
        request.add_header('User-Agent', 'Mozilla/5.0')
        with urlopen(request, timeout=30) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def compress_to_webp(input_path, output_path, quality=85):
    """Compress image to WebP format using cwebp"""
    try:
        result = subprocess.run(
            ['cwebp', '-q', str(quality), str(input_path), '-o', str(output_path)],
            capture_output=True,
            text=True
        )
        if result.returncode == 0:
            original_size = os.path.getsize(input_path)
            compressed_size = os.path.getsize(output_path)
            reduction = (1 - compressed_size / original_size) * 100
            print(f"  Compressed: {original_size/1024:.1f}KB -> {compressed_size/1024:.1f}KB ({reduction:.1f}% reduction)")
            return True
        else:
            print(f"  cwebp error: {result.stderr}")
            return False
    except FileNotFoundError:
        print("  cwebp not found. Install with: brew install webp")
        return False

def extract_urls_from_js(filepath):
    """Extract all CDN URLs from a JavaScript file"""
    urls = set()
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all CDN URLs
    pattern = r'https://cdn\.jaimedigitalstudio\.com[^\s\'"]+'
    matches = re.findall(pattern, content)

    # Filter for image extensions
    image_exts = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}
    for url in matches:
        url_lower = url.lower()
        if any(ext in url_lower for ext in image_exts):
            # Remove any query params
            clean_url = url.split('?')[0]
            urls.add(clean_url)

    return list(urls)

def identify_large_images():
    """Identify images that are larger than threshold"""
    print("Scanning for large images...")
    large_images = []

    # Process src/utils/projects.js
    js_file = Path("src/utils/projects.js")
    if js_file.exists():
        urls = extract_urls_from_js(js_file)
        print(f"Found {len(urls)} image URLs in projects.js")

        for url in urls:
            size = get_image_size(url)
            if size and size > SIZE_THRESHOLD:
                relative_path = get_relative_path(url)
                large_images.append({
                    'url': url,
                    'size': size,
                    'size_mb': size / (1024 * 1024),
                    'path': relative_path
                })

    # Sort by size (largest first)
    large_images.sort(key=lambda x: x['size'], reverse=True)

    print(f"\nFound {len(large_images)} images > 500KB:\n")
    for img in large_images[:20]:  # Show top 20
        print(f"  {img['path']} - {img['size_mb']:.2f} MB")
    if len(large_images) > 20:
        print(f"  ... and {len(large_images) - 20} more")

    return large_images

def process_images(download_only=False, compress_only=False):
    """Process images: download and/or compress"""
    large_images = identify_large_images()

    if download_only:
        print("\n=== Downloading images ===")
        for img in large_images:
            rel_path = img['path']
            output_path = OUTPUT_DIR / rel_path
            output_path.parent.mkdir(parents=True, exist_ok=True)

            if download_image(img['url'], output_path):
                print(f"  Downloaded: {rel_path}")

    if compress_only:
        print("\n=== Compressing images to WebP ===")
        for img in large_images:
            rel_path = img['path']
            input_path = OUTPUT_DIR / rel_path
            webp_path = input_path.with_suffix('.webp')

            if input_path.exists():
                if compress_to_webp(input_path, webp_path):
                    print(f"  Created: {webp_path}")

    if not download_only and not compress_only:
        # Full process
        print("\n=== Downloading and compressing images ===")
        for img in large_images:
            rel_path = img['path']
            input_path = OUTPUT_DIR / rel_path
            webp_path = input_path.with_suffix('.webp')

            if download_image(img['url'], input_path):
                print(f"  Downloaded: {rel_path}")
                compress_to_webp(input_path, webp_path)

    print(f"\nCompressed images saved to: {OUTPUT_DIR}")

if __name__ == "__main__":
    download_only = "--download-only" in sys.argv
    compress_only = "--compress-only" in sys.argv

    process_images(download_only, compress_only)
