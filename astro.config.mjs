import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdownConfig from './markdown.config';
// import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";

import playformCompress from "@playform/compress";

const isProduction = process.env.NODE_ENV === 'production';
const CDN_URL = process.env.CDN_URL || '';

// https://astro.build/config
export default defineConfig({
  site: "https://www.jaimedigitalstudio.com",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  build: {
    assetsPrefix: isProduction && CDN_URL ? CDN_URL : undefined,
    inlineStylesheets: 'auto',
    // More aggressive code splitting
    splitFactory: true,
  },
  compressHTML: true,
  vite: {
    build: {
      // Aggressive code splitting
      rollupOptions: {
        output: {
          manualChunks: {
            'framer-motion': ['framer-motion'],
            'rsuite': ['rsuite'],
            'react-icons': ['react-icons/fa', 'react-icons/di', 'react-icons/ai'],
            'apexcharts': ['react-apexcharts', 'apexcharts'],
          }
        }
      }
    }
  },
  markdown: {
    ...markdownConfig
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), robotsTxt({
    sitemap: ['https://www.jaimedigitalstudio.com/sitemap-0.xml', 'http://www.www.jaimedigitalstudio.com/sitemap-index.xml']
  }), playformCompress({
    CSS: true,
    HTML: {
      "removeComments": true,
      "removeAttributeQuotes": true,
      "collapseWhitespace": true
    },
    Image: false,
    JavaScript: true,
    SVG: false,
    // Enable Brotli compression for static files
    Brotli: true,
    Gzip: false
  })],
  output: "static",
  // SSG mode - no server adapter needed
  // API routes handled by external FastAPI backend
});