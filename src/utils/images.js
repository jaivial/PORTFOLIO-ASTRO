/**
 * Image utility with cache-busting support and WebP conversion
 * This module provides functions to handle image URLs with versioning
 */

// Version for cache-busting - update this when images are changed
export const IMAGE_VERSION = '20260118_120000';

/**
 * Convert JPG/PNG URLs to WebP format
 * @param {string} url - The original image URL
 * @returns {string} - URL with .webp extension
 */
export function toWebP(url) {
    if (!url) return url;

    // Only convert CDN URLs that point to images
    if (!url.includes('cdn.jaimedigitalstudio.com')) {
        return url;
    }

    // Convert .jpg, .jpeg, .png to .webp
    return url.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

/**
 * Add cache-busting version parameter to image URLs
 * @param {string} url - The original image URL
 * @param {string} version - The version string to append
 * @returns {string} - URL with version query parameter
 */
export function addCacheBusting(url, version = IMAGE_VERSION) {
    if (!url) return url;

    // Skip if already has query params
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}v=${version}`;
}

/**
 * Convert to WebP and add cache-busting
 * @param {string} url - The original image URL
 * @param {string} version - The version string to append
 * @returns {string} - WebP URL with cache-busting
 */
export function toWebPCached(url, version = IMAGE_VERSION) {
    if (!url) return url;
    return addCacheBusting(toWebP(url), version);
}

/**
 * Get the versioned image URL
 * @param {string} url - The original image URL
 * @returns {string} - URL with cache-busting version
 */
export function getVersionedUrl(url) {
    return addCacheBusting(url, IMAGE_VERSION);
}

/**
 * Process an array of image objects to add version
 * @param {Array} images - Array of objects with url property
 * @returns {Array} - Array with versioned URLs
 */
export function versionImages(images) {
    if (!images) return images;

    return images.map(img => {
        if (typeof img === 'string') {
            return addCacheBusting(img);
        }
        if (img.url) {
            return { ...img, url: addCacheBusting(img.url) };
        }
        if (img.src) {
            return { ...img, src: addCacheBusting(img.src) };
        }
        return img;
    });
}

/**
 * Process features array to version images within
 * @param {Array} features - Array of feature objects
 * @returns {Array} - Features with versioned images
 */
export function versionFeatures(features) {
    if (!features) return features;

    return features.map(feature => {
        const newFeature = { ...feature };

        // Version main image if exists
        if (newFeature.image) {
            if (typeof newFeature.image === 'string') {
                newFeature.image = addCacheBusting(newFeature.image);
            } else if (newFeature.image.src) {
                newFeature.image = { ...newFeature.image, src: addCacheBusting(newFeature.image.src) };
            }
        }

        // Version carousel images
        if (newFeature.carousel) {
            newFeature.carousel = versionImages(newFeature.carousel);
        }

        // Version video posters
        if (newFeature.videos) {
            newFeature.videos = newFeature.videos.map(video => ({
                ...video,
                poster: video.poster ? addCacheBusting(video.poster) : undefined
            }));
        }

        return newFeature;
    });
}

// Export the version for use in other modules
export default {
    IMAGE_VERSION,
    toWebP,
    toWebPCached,
    addCacheBusting,
    getVersionedUrl,
    versionImages,
    versionFeatures
};
