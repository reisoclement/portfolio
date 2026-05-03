// Public surface for embedders (e.g. the website's interactive viewer).
// Studio entry point stays in `index.ts`. This module is import-only — no side effects.

export { CirclesOfLife } from "./Composition";
export type { CirclesOfLifeProps } from "./Composition";
export { SCENE_DURATIONS, TOTAL_DURATION } from "./theme";
export { VIDEO } from "./layout";
export { LOCALES, getDict } from "./i18n";
export type { Locale, Dict } from "./i18n";

import { SCENE_DURATIONS } from "./theme";
import { getDict, type Locale, type Dict } from "./i18n";

const SCENE_KEYS = [
  "intro",
  "self",
  "partner",
  "children",
  "fastRings",
  "worldZoom",
  "reversal",
  "closing",
] as const;

export type SceneKey = (typeof SCENE_KEYS)[number];

// Cumulative frame ranges for each scene: [startFrame, endFrameExclusive].
// Localized titles live on the dict per `getSceneRanges(locale)`.
export type SceneRange = {
  key: SceneKey;
  title: string;
  start: number;
  end: number;
};

export function getSceneRanges(locale: Locale): SceneRange[] {
  const dict: Dict = getDict(locale);
  let acc = 0;
  return SCENE_KEYS.map((key) => {
    const start = acc;
    const end = acc + SCENE_DURATIONS[key];
    acc = end;
    return { key, title: dict.sceneTitles[key], start, end };
  });
}

export const TOTAL_SCENES = SCENE_KEYS.length;
