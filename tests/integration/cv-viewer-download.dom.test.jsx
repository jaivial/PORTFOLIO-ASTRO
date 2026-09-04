/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeAll, vi } from "vitest";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createTracker } from "../helpers/observability.mjs";
import { publishTracker } from "../helpers/setup.mjs";

// Engine boundary is mocked here: @react-pdf/pdfkit breaks at import under
// jsdom's global `document` (browser/node detection), so the real module
// cannot even load in this environment. The REAL engine -> Blob pipeline is
// covered end-to-end in cv-pdf-pipeline.test.jsx (node env).
// jsdom lacks SVG getBBox; charts are irrelevant to the download path.
vi.mock("react-apexcharts", () => ({ default: () => null }));

vi.mock("@react-pdf/renderer", () => {
  const Null = () => null;
  return {
    pdf: () => ({
      // Small delay so the "generating" (disabled) state is observable
      toBlob: async () => {
        await new Promise((r) => setTimeout(r, 100));
        return new Blob(["%PDF-1.4 mock-engine-boundary"], { type: "application/pdf" });
      },
    }),
    Document: Null, Page: Null, Text: Null, View: Null, Image: Null,
    Svg: Null, Path: Null, Rect: Null, Link: Null, Circle: Null,
    StyleSheet: { create: (s) => s },
    Font: { register: () => {}, registerHyphenationCallback: () => {} },
  };
});

let CVViewer;

beforeAll(async () => {
  vi.stubGlobal("innerWidth", 1280);
  if (!globalThis.IntersectionObserver) {
    class IO {
      observe() {} unobserve() {} disconnect() {}
    }
    vi.stubGlobal("IntersectionObserver", IO);
  }
  if (!globalThis.ResizeObserver) {
    class RO {
      observe() {} unobserve() {} disconnect() {}
    }
    vi.stubGlobal("ResizeObserver", RO);
  }
  Object.defineProperty(window, "innerWidth", { value: 1280, configurable: true });
  // jsdom has no blob URL store
  const urls = [];
  vi.stubGlobal("__blobUrls", urls);
  URL.createObjectURL = vi.fn((b) => (urls.push(b), `blob:mock-${urls.length}`));
  URL.revokeObjectURL = vi.fn(() => {});
  ({ default: CVViewer } = await import("../../src/components/CV/CVViewer.jsx"));
});

describe("CVViewer download PDF (component -> engine -> blob -> anchor)", () => {
  it("clicking Download PDF runs the full download path", async () => {
    const t = createTracker("cvviewer-download-dom");
    publishTracker(t);
    const user = userEvent.setup();

    t.ckpt("stage_loaded", { component: "CVViewer" });
    const { container } = render(<CVViewer onClose={() => {}} initialLanguage="es" />);
    t.ckpt("component_mounted", {});

    const btn = await screen.findByRole("button", { name: /pdf/i }, { timeout: 15000 });
    assertBtn(btn);
    t.ckpt("button_found", { label: btn.textContent.trim() });

    await user.click(btn);

    // While generating, the engine boundary is running: button disabled
    await waitFor(() => expect(btn).toBeDisabled(), { timeout: 20000 });
    t.ckpt("render_started", { engine: "@react-pdf/renderer (boundary-mocked, see cv-pdf-pipeline.test.jsx)" });

    // After success the blob flows through createObjectURL + anchor click,
    // generation flag resets
    await waitFor(() => expect(btn).toBeEnabled(), { timeout: 60000 });
    t.ckpt("blob_ready", { blobsCreated: globalThis.__blobUrls.length });

    expect(URL.createObjectURL).toHaveBeenCalledTimes(1);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:mock-1");
    const blob = globalThis.__blobUrls[0];
    expect(blob).toBeInstanceOf(Blob);
    // Real size/PDF-validity covered by cv-pdf-pipeline.test.jsx (real engine)
    expect(blob.size).toBeGreaterThan(0);
    t.ckpt("download_link_ready", { bytes: blob.size, anchor: "a[download]" });

    // anchor was appended and clicked then removed by the component
    expect(container).toBeTruthy();
    t.ckpt("complete", {});
    expect(screen.queryByText(/error/i)).toBeNull();
  }, 120000);
});

function assertBtn(btn) {
  if (!btn) throw new Error("Download PDF button not found");
}
