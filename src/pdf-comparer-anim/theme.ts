export const COLORS = {
  bgCore: "#0F1620",
  bgEdge: "#1A2230",
  text: "#F2EAD8",
  textDim: "rgba(242, 234, 216, 0.6)",
  textFaint: "rgba(242, 234, 216, 0.28)",
  steel: "#5B7A99",
  steelDim: "rgba(91, 122, 153, 0.35)",
  steelSoft: "rgba(91, 122, 153, 0.18)",
  amber: "#F2A03D",
  amberSoft: "rgba(242, 160, 61, 0.18)",
  amberHalo: "rgba(242, 160, 61, 0.35)",

  // Diff highlight palette — matches the actual report colors.
  added: "#7AB386",
  addedSoft: "rgba(122, 179, 134, 0.32)",
  addedHalo: "rgba(122, 179, 134, 0.55)",
  removed: "#D9614C",
  removedSoft: "rgba(217, 97, 76, 0.32)",
  removedHalo: "rgba(217, 97, 76, 0.55)",
  moved: "#9AA5B1",
  movedSoft: "rgba(154, 165, 177, 0.32)",
  caseOnly: "#E6C84F",
  caseOnlySoft: "rgba(230, 200, 79, 0.32)",

  paper: "#F4ECD8",
  paperEdge: "rgba(0, 0, 0, 0.25)",
  paperShadow: "rgba(0, 0, 0, 0.45)",
  inkLine: "rgba(40, 40, 40, 0.6)",

  rule: "rgba(242, 234, 216, 0.12)",
} as const;

export const FONT = {
  display: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

// Typed font-size scale per visual-quality.md. Hard floor 24px.
export const FONT_SIZE = {
  title: 96,
  subtitle: 56,
  body: 40,
  caption: 32,
  floor: 24,
} as const;

export const FPS = 30;

// 90-second explainer arc:
//  Hook → Title → "What's a diff really?" → Page Match → Two-Pass Diff →
//  Word Diff (SequenceMatcher) → Spatial Fuzzy Match → Headers/Footers →
//  Render Highlights → Output Report → Optional AI Review → Recap
export const SCENE_DURATIONS = {
  hook: 5 * FPS,            // 0:00  "Two PDFs. What changed?"
  title: 5 * FPS,           // 0:05  PDF Comparer V8.9
  pipeline: 8 * FPS,        // 0:10  6-step pipeline overview
  extract: 7 * FPS,         // 0:18  PyMuPDF extracts words + bboxes
  headers: 6 * FPS,         // 0:25  header/footer detection
  pageMatch: 9 * FPS,       // 0:31  best-match page pairing (text 70 + visual 30)
  twoPass: 8 * FPS,         // 0:40  why two passes — global word tracker
  wordDiff: 9 * FPS,        // 0:48  difflib SequenceMatcher opcodes
  spatial: 7 * FPS,         // 0:57  spatial fuzzy match for tables/formulas
  legend: 6 * FPS,          // 1:04  green/red/grey/yellow legend
  render: 7 * FPS,          // 1:10  highlight rectangles burned in
  output: 7 * FPS,          // 1:17  one self-contained HTML
  aiReview: 8 * FPS,        // 1:24  optional Gemma 4 verifier
  recap: 7 * FPS,           // 1:32  recap + close
} as const;

export type SceneDurations = typeof SCENE_DURATIONS;

export const TOTAL_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (a, b) => a + b,
  0,
);

export function getSceneDurations(_locale: string): SceneDurations {
  return SCENE_DURATIONS;
}

export function getTotalDuration(_locale: string): number {
  return TOTAL_FRAMES;
}
