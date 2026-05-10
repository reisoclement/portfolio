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

  // Diff highlight palette, same hues as pdf-comparer for FTL section.
  added: "#7AB386",
  addedSoft: "rgba(122, 179, 134, 0.32)",
  addedHalo: "rgba(122, 179, 134, 0.55)",
  removed: "#D9614C",
  removedSoft: "rgba(217, 97, 76, 0.32)",
  removedHalo: "rgba(217, 97, 76, 0.55)",
  moved: "#9AA5B1",
  movedSoft: "rgba(154, 165, 177, 0.32)",

  paper: "#F4ECD8",
  paperEdge: "rgba(0, 0, 0, 0.25)",
  paperShadow: "rgba(0, 0, 0, 0.45)",
  inkLine: "rgba(40, 40, 40, 0.6)",
  inkText: "#1A1A1A",

  rule: "rgba(242, 234, 216, 0.12)",
} as const;

// Per-category palette for the spec-extractor rule highlights. Same hue per
// category, the visual layering (paragraph/sentence/line) is done with
// different opacities at render time.
export const CATEGORY_COLORS = {
  obligation: "#E16E5E",      // red, must / shall
  application: "#F2A03D",     // amber, applies / applicable
  compliance: "#5BA3D9",      // blue, comply / conform
  requirement: "#B97AE0",     // violet, required / requested
  expectation: "#7ABF99",     // teal, expected / target
  assessment: "#E0B047",      // gold, assessed
  guarantee: "#3FBFB0",       // mint, ensure / guarantee
  numerical: "#D8D080",       // pale yellow, 5 mm, 80 dB
} as const;

export type Category = keyof typeof CATEGORY_COLORS;

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

// ~2:07 arc, split into PART 1 ("how it works") and PART 2 ("how to use it"):
//
//   PART 1, How it works
//     Hook → Title → Problem → Pipeline → Language → Rules →
//     Extract → Hybrid view (smart row granularity) → Outputs (3 deliverables)
//
//   PART 2, How to use it (in-report tutorial)
//     Tutorial divider → Side-by-side layout → Per-row actions → Toolbar
//
//   FTL, what's coming next
//     FTL intro → Diff → Drawer → Recap
export const SCENE_DURATIONS = {
  hook: 5 * FPS,                  // 0:00  "Thousands of pages. 50+ requirements."
  title: 5 * FPS,                 // 0:05  Spec Data Extractor V2.0
  problem: 7 * FPS,               // 0:10  manual review pain
  pipeline: 8 * FPS,              // 0:17  9-step pipeline overview
  language: 7 * FPS,              // 0:25  EN/FR/DE detection via stopwords
  rules: 9 * FPS,                 // 0:32  8 rule categories + numeric+unit rule
  extract: 9 * FPS,               // 0:41  scanning a page, hits highlight by category
  hybrid: 9 * FPS,                // 0:50  prose → sentence rows · table → kept whole
  outputs: 8 * FPS,               // 0:59  three deliverables

  // PART 2, tutorial
  tutorialDivider: 4 * FPS,       // 1:07  "Now, how to use it."
  tutorialLayout: 8 * FPS,        // 1:11  PDF preview + editable rows side-by-side
  tutorialRowActions: 9 * FPS,    // 1:19  edit / split / merge / dup / delete / add
  tutorialControls: 8 * FPS,      // 1:28  color mode · filter · table view · J/K · export

  // FTL teaser
  ftlIntro: 7 * FPS,              // 1:36  the v2 problem
  ftlDiff: 9 * FPS,               // 1:43  v2-master side-by-side
  ftlDrawer: 8 * FPS,             // 1:52  floating drawer with editable rows
  recap: 7 * FPS,                 // 2:00  recap + close (~2:07 total)
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
