import { createRequire } from "node:module";

// Shared by astro.config.mjs (build) and vitest.config.mjs (tests) so test
// module resolution mirrors the production browser bundle exactly.
//
// @react-pdf/renderer's reconciler needs real React internals; the global
// preact/compat alias breaks it ("Cannot set properties of undefined
// (setting 'current')"). Route react-pdf's React imports — and the CV PDF
// document component rendered by it — back to real react.
export const PDF_REAL_REACT_RE = /[\\/]node_modules[\\/](@react-pdf|react-reconciler|scheduler|react-freeze|its-fine|react[\\/]cjs)[\\/]|[\\/]src[\\/]components[\\/]CV[\\/]CVPdfDocument\.jsx$/;

export const PREACT_MAP = {
  'react': 'preact/compat',
  'react/jsx-runtime': 'preact/compat/jsx-runtime',
  'react/jsx-dev-runtime': 'preact/compat/jsx-runtime',
  'react-dom': 'preact/compat',
  'react-dom/client': 'preact/compat/client',
  'react-dom/test-utils': 'preact/test-utils',
  'react-dom/server': 'preact/compat/server',
};

function resolvePreact(source) {
  const nodeRequire = createRequire(import.meta.url);
  const target = PREACT_MAP[source] ?? 'preact/compat';
  const resolved = nodeRequire.resolve(target, { paths: [process.cwd()] });
  return resolved;
}

export function reactPdfRealReact() {
  const nodeRequire = createRequire(import.meta.url);
  let isServerBuild = false;
  return {
    name: 'react-pdf-real-react',
    enforce: 'pre',
    // Client build: drop the preact alias (resolveId below handles it, with
    // importer-aware overrides). SSR keeps the preact/compat alias.
    config(config, env) {
      // Vitest executes every module through its SSR pipeline, but must
      // behave like the browser bundle, so the flag is ignored there.
      isServerBuild = !!env.isSsrBuild && !process.env.VITEST;
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
      return resolvePreact(source);
    }
  };
}
