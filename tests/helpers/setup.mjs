import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Automatic failure bundle: on any test failure, dump correlation ID,
// checkpoints recorded so far and the error to test-results/failure-bundles/.
afterEach((ctx) => {
  if (ctx.task?.result?.status !== "fail") return;
  const state = globalThis.__CV_TEST_TRACKER__;
  if (!state) return;
  const dir = join(process.cwd(), "test-results", "failure-bundles");
  mkdirSync(dir, { recursive: true });
  const file = join(dir, `${state.corrId}.json`);
  const vitestErr = ctx.task.result?.errors?.[0];
  const err =
    state.error ??
    (vitestErr ? { message: vitestErr.message, stack: vitestErr.stack } : null) ??
    { message: "test failed (error not captured)" };
  writeFileSync(
    file,
    JSON.stringify({ corrId: state.corrId, test: ctx.task.fullName, checkpoints: state.checkpoints, error: err }, null, 2)
  );
  console.error(`[failure-bundle] ${file}`);
});

export function publishTracker(tracker) {
  globalThis.__CV_TEST_TRACKER__ = tracker;
}
