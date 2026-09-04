import { describe, it, beforeAll } from "vitest";
import { createTracker, assert } from "../helpers/observability.mjs";
import { publishTracker } from "../helpers/setup.mjs";

// Real production chain: real data -> CVPdfDocument (real React JSX runtime)
// -> @react-pdf/renderer reconciler + layout engine -> Blob. No mocks in the
// pipeline itself; this is the exact code path handleDownloadPDF uses.
let createCVPdfElement;
let pdf;
let cvData;
let allProjects;

beforeAll(async () => {
  globalThis.window = { location: { origin: "http://localhost:4321" } };
  ({ createCVPdfElement } = await import("../../src/components/CV/CVPdfDocument.jsx"));
  ({ pdf } = await import("@react-pdf/renderer"));
  cvData = (await import("../../src/data/cvData.js")).default;
  allProjects = (await import("../../src/utils/projects.js")).getData();
});

function validateCVData(data) {
  assert(data?.personal?.name, "personal.name missing");
  assert(data?.personal?.title, "personal.title missing");
  for (const k of ["email", "phone", "location", "website"]) {
    assert(data.personal[k], `personal.${k} missing`);
  }
  assert(Array.isArray(data.experience) && data.experience.length > 0, "experience empty");
  for (const exp of data.experience) {
    assert(exp.company && exp.position, `experience entry incomplete: ${exp.company}`);
    assert(Array.isArray(exp.achievements), `achievements not array for ${exp.company}`);
  }
  assert(Array.isArray(data.education) && data.education.length > 0, "education empty");
  assert(Array.isArray(data.skills?.technical) && data.skills.technical.length > 0, "skills.technical empty");
  assert(Array.isArray(data.skills?.languages) && data.skills.languages.length > 0, "skills.languages empty");
  assert(Array.isArray(data.skills?.soft) && data.skills.soft.length > 0, "skills.soft empty");
}

describe.each(["es", "en"])("CV PDF vertical pipeline [lang=%s]", (lang) => {
  it("data -> CVPdfDocument -> pdf engine -> %PDF Blob", async () => {
    const t = createTracker(`cvpdf-pipeline-${lang}`);
    publishTracker(t);

    t.ckpt("stage_loaded", { engine: "@react-pdf/renderer", component: "CVPdfDocument" });

    const data = { ...cvData[lang], language: lang, projects: allProjects };
    validateCVData(data);
    assert(Array.isArray(allProjects) && allProjects.length >= 15, `projects catalog too small: ${allProjects.length}`);
    for (const p of allProjects) {
      assert(p.slug, `project missing slug: ${p.name}`);
      assert(p.description, `project missing description: ${p.slug}`);
    }
    t.ckpt("input_validated", { experience: data.experience.length, education: data.education.length, projects: allProjects.length });

    const element = createCVPdfElement(data);
    assert(element, "createCVPdfElement returned falsy");
    t.ckpt("element_created", { type: String(element.type?.name ?? element.type) });

    const doc = pdf(element);
    t.ckpt("render_started", {});

    const blob = await doc.toBlob();
    t.ckpt("layout_done", {});

    assert(blob instanceof Blob, "did not produce a Blob");
    const buf = Buffer.from(await blob.arrayBuffer());
    const magic = buf.subarray(0, 5).toString("ascii");
    assert(magic === "%PDF-", `bad magic bytes: "${magic}"`);
    assert(buf.length > 10_000, `suspiciously small PDF: ${buf.length} bytes`);
    t.ckpt("blob_ready", { bytes: buf.length, magic });

    // Page count: /Type /Page occurrences in the raw PDF
    const pages = (buf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    assert(pages >= 3, `expected >= 3 pages, found ${pages}`);
    t.ckpt("pages_verified", { pages });
  });
});
