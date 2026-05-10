// Public surface for embedders (e.g. the website's interactive viewer).
// Studio entry point stays in `index.ts`. This module is import-only, no
// side effects.

export { SpecExtractor } from "./Composition";
export type { SpecExtractorProps } from "./Composition";
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
import { getDict, type Locale, type Dict } from "./i18n";

// Logical scene keys, in playback order. Maps 1:1 to the SCENE_DURATIONS
// fields and to the Composition.tsx ORDER list.
const SCENE_KEYS = [
  "hook",
  "title",
  "problem",
  "pipeline",
  "language",
  "rules",
  "extract",
  "hybrid",
  "outputs",
  "tutorialDivider",
  "tutorialLayout",
  "tutorialRowActions",
  "tutorialControls",
  "ftlIntro",
  "ftlDiff",
  "ftlDrawer",
  "recap",
] as const;

export type SceneKey = (typeof SCENE_KEYS)[number];

// Cumulative frame ranges for each scene: [start, endExclusive].
export type SceneRange = {
  key: SceneKey;
  title: string;
  start: number;
  end: number;
};

export function getSceneRanges(locale: Locale): SceneRange[] {
  const dict: Dict = getDict(locale);
  const d = getSceneDurations(locale);
  let acc = 0;
  return SCENE_KEYS.map((key) => {
    const start = acc;
    const end = acc + d[key];
    acc = end;
    return { key, title: dict.sceneTitles[key], start, end };
  });
}

export const TOTAL_SCENES = SCENE_KEYS.length;
