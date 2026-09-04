import { defineConfig } from "vitest/config";
import { reactPdfRealReact } from "./vite.react-pdf-real-react.mjs";

// Real-engine pipeline tests (node env): the react-pdf subsystem resolves to
// real React exactly like the production browser bundle.
export default defineConfig({
  plugins: [reactPdfRealReact()],
  define: {
    __CDN_URL__: JSON.stringify(process.env.CDN_URL || 'https://jaimedigitalstudio.b-cdn.net'),
  },
  test: {
    environment: 'node',
    include: ['tests/integration/cv-pdf-pipeline.test.jsx'],
    testTimeout: 120000,
    hookTimeout: 30000,
  },
});
