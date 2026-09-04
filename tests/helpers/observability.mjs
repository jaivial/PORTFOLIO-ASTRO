import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BUNDLE_DIR = join(process.cwd(), "test-results", "failure-bundles");

/**
 * Named observation points across boundaries. Every stage of the vertical
 * pipeline records a checkpoint tagged with the correlation ID so a failure
 * can be bisected to a single stage.
 *
 * Stages used by the CV PDF pipeline:
 *   stage_loaded       - module under test imported
 *   input_validated    - CV data shape checked before entering the engine
 *   render_started     - pdf() invoked (engine boundary entered)
 *   layout_done        - reconciler/layout completed without throwing
 *   blob_ready         - real Blob produced with %PDF magic bytes
 *   download_link_ready- anchor href/download wiring complete
 */
export function createTracker(corrId) {
  const t0 = performance.now();
  const checkpoints = [];
  const ckpt = (name, data) => {
    checkpoints.push({ name, ms: Math.round(performance.now() - t0), data });
    return { corrId, checkpoint: name };
  };
  const bundle = (error, extra = {}) => {
    let payload = error;
    try {
      payload = { message: error?.message ?? String(error), stack: error?.stack ?? null };
    } catch {}
    mkdirSync(BUNDLE_DIR, { recursive: true });
    const file = join(BUNDLE_DIR, `${corrId}.json`);
    writeFileSync(file, JSON.stringify({ corrId, checkpoints, error: payload, ...extra }, null, 2));
    console.error(`[failure-bundle] ${file}`);
    return file;
  };
  return { corrId, checkpoints, ckpt, bundle };
}

export function assert(condition, message) {
  if (!condition) throw new Error(`[assert] ${message}`);
}
