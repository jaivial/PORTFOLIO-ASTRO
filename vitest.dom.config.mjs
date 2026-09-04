import { defineConfig } from "vitest/config";

// DOM tests (jsdom): rendered with real React. The CV components are plain
// React code that production runs through preact/compat; the download-path
// logic under test is identical across both runtimes, and this avoids
// vitest's externalized-dep resolution mixing the two runtimes.
// The react-pdf engine boundary is mocked here (pdfkit cannot load under
// jsdom); the real engine is covered by vitest.config.mjs
// (cv-pdf-pipeline.test.jsx).
export default defineConfig({
  define: {
    __CDN_URL__: JSON.stringify(process.env.CDN_URL || 'https://jaimedigitalstudio.b-cdn.net'),
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.dom.test.jsx', 'tests/**/*.dom.test.js'],
    testTimeout: 120000,
    hookTimeout: 30000,
    setupFiles: ['tests/helpers/setup.mjs'],
  },
});
