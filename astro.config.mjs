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
const PDF_REAL_REACT_RE = /[\\/]node_modules[\\/](@react-pdf|react-reconciler|scheduler|react-freeze|its-fine|react[\\/]cjs)[\\/]|[\\/]src[\\/]components[\\/]CV[\\/]CVPdfDocument\.jsx$/;

function reactPdfRealReact() {
  const nodeRequire = createRequire(import.meta.url);
  // React -> preact/compat aliasing (formerly done via resolve.alias, which
  // runs before user plugins and left no room for importer-aware overrides).
  const PREACT_MAP = {
    'react': 'preact/compat',
    'react/jsx-runtime': 'preact/compat/jsx-runtime',
    'react/jsx-dev-runtime': 'preact/compat/jsx-runtime',
    'react-dom': 'preact/compat',
    'react-dom/client': 'preact/compat/client',
    'react-dom/test-utils': 'preact/test-utils',
    'react-dom/server': 'preact/compat/server',
  };
  let isServerBuild = false;
  return {
    name: 'react-pdf-real-react',
    enforce: 'pre',
    // Client build: drop the preact alias (resolveId below handles it, with
    // importer-aware overrides). SSR keeps the preact/compat alias.
    config(config, env) {
      isServerBuild = !!env.isSsrBuild;
      if (!isServerBuild && config.resolve?.alias) {
        const alias = Array.isArray(config.resolve.alias)
          ? config.resolve.alias.filter((e) => !/^react(-dom)?$|^react-dom\//.test(e.find))
          : Object.fromEntries(Object.entries(config.resolve.alias).filter(([k]) => !/^react$|^react-dom(\/|$)/.test(k)));
        config.resolve.alias = alias;
      }
    },
    resolveId(source, importer) {
      if (isServerBuild) return;
      const isReactish = source === 'react' || source.startsWith('react/') || source === 'react-dom' || source.startsWith('react-dom/');
      if (!isReactish) return;
      if (importer && PDF_REAL_REACT_RE.test(importer)) {
        // Real react (node resolution) for react-pdf's reconciler and the
        // CV PDF document component it renders.
        return nodeRequire.resolve(source, { paths: [process.cwd()] });
      }
      return nodeRequire.resolve(PREACT_MAP[source] ?? 'preact/compat', { paths: [process.cwd()] });
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
    plugins: [reactPdfRealReact()],
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
