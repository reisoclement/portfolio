// Public surface for embedders (e.g. the website's interactive viewer).
// Studio entry stays in `index.ts`. This module is import-only — no side effects.

export { AnimatedResume } from "./Composition";
export type { AnimatedResumeProps } from "./Composition";
export {
  getSceneDurations,
  getTotalDuration,
  FPS,
  type SceneDurations,
} from "./theme";
export { LOCALES, getDict } from "./i18n";
export type { Locale, Dict } from "./i18n";

import { getSceneDurations } from "./theme";
import { getDict, type Locale, type Dict } from "./i18n";

const SCENE_KEYS = [
  "intro",
  "career",
  "journey",
  "builds",
  "sideProject",
  "stack",
  "education",
  "hobbies",
  "outro",
] as const;

export type SceneKey = (typeof SCENE_KEYS)[number];

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

// Video dimensions — match the registered <Composition> in Root.tsx.
export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
} as const;
