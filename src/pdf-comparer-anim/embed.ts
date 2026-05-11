// Public surface for embedders (e.g. the website's interactive viewer).
// Mirrors the spec-extractor embed shape. No side effects.

export { PdfComparer } from "./Composition";
export type { PdfComparerProps } from "./Composition";
export {
  getSceneDurations,
  getTotalDuration,
  SCENE_DURATIONS,
  TOTAL_FRAMES,
} from "./theme";
export type { SceneDurations } from "./theme";
export { VIDEO } from "./layout";
export { LOCALES, getDict } from "./i18n";
export type { Locale, Dict } from "./i18n";

import { getSceneDurations } from "./theme";
import { type Locale } from "./i18n";

// Logical scene keys, in playback order. Maps 1:1 to SCENE_DURATIONS keys and
// to the Composition.tsx ORDER list.
const SCENE_KEYS = [
  "hook",
  "title",
  "pipeline",
  "extract",
  "headers",
  "pageMatch",
  "twoPass",
  "wordDiff",
  "spatial",
  "legend",
  "render",
  "output",
  "aiReview",
  "recap",
] as const;

export type SceneKey = (typeof SCENE_KEYS)[number];

// Side-panel scene titles. The pdf-comparer dict doesn't ship a sceneTitles
// block, so we inline them here. They're stable across locales for now
// (English-only animation); a per-locale map can replace this when more
// locales land in the animation source.
const SCENE_TITLES: Record<SceneKey, string> = {
  hook: "Hook",
  title: "Title",
  pipeline: "Pipeline overview",
  extract: "Step 1 — Read every word",
  headers: "Step 2 — Strip headers/footers",
  pageMatch: "Step 3 — Pair the pages",
  twoPass: "Step 4 — Diff twice",
  wordDiff: "Step 5 — Word-by-word",
  spatial: "Step 6 — Spatial fuzzy match",
  legend: "Legend",
  render: "Render highlights",
  output: "Output report",
  aiReview: "AI review",
  recap: "Recap",
};

// Cumulative frame ranges for each scene: [start, endExclusive].
export type SceneRange = {
  key: SceneKey;
  title: string;
  start: number;
  end: number;
};

export function getSceneRanges(locale: Locale): SceneRange[] {
  const d = getSceneDurations(locale);
  let acc = 0;
  return SCENE_KEYS.map((key) => {
    const start = acc;
    const end = acc + d[key];
    acc = end;
    return { key, title: SCENE_TITLES[key], start, end };
  });
}

export const TOTAL_SCENES = SCENE_KEYS.length;
