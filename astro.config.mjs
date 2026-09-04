import { createRequire } from "node:module";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import markdownConfig from './markdown.config';
import robotsTxt from "astro-robots-txt";
import playformCompress from "@playform/compress";

// @react-pdf/renderer's reconciler needs real React internals; the global
// preact/compat alias breaks it ("Cannot set properties of undefined
// (setting 'current')"). Route react-pdf's React imports — and the CV PDF
// document component rendered by it — back to real react.
const PDF_REAL_REACT_RE = /[\\/]node_modules[\\/](@react-pdf|react-reconciler|scheduler|react-freeze|its-fine)[\\/]|[\\/]src[\\/]components[\\/]CV[\\/]CVPdfDocument\.jsx$/;

function reactPdfRealReact() {
  const nodeRequire = createRequire(import.meta.url);
  return {
    name: 'react-pdf-real-react',
    enforce: 'pre',
    resolveId(source, importer) {
      if ((source === 'react' || source.startsWith('react/')) && importer && PDF_REAL_REACT_RE.test(importer)) {
        // Node resolution bypasses the preact/compat alias
        return nodeRequire.resolve(source, { paths: [process.cwd()] });
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://www.jaimedigitalstudio.com",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  build: {
    inlineStylesheets: 'auto',
    splitFactory: true,
  },
  compressHTML: true,
  vite: {
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
      }
    },
    define: {
      // Replaced at build time. Use as ${__CDN_URL__}/path in source.
      __CDN_URL__: JSON.stringify(process.env.CDN_URL || 'https://jaimedigitalstudio.b-cdn.net'),
    },
    build: {
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
  }), preact(), robotsTxt({
    sitemap: ['https://www.jaimedigitalstudio.com/sitemap-0.xml']
  }), playformCompress({
    CSS: true,
    HTML: {
      removeComments: true,
      removeAttributeQuotes: true,
      collapseWhitespace: true
    },
    Image: false,
    JavaScript: true,
    SVG: false,
    Brotli: true,
    Gzip: false
  })],
  output: "static",
});
