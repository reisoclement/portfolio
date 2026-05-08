export { BuildAgents } from "./Composition";
export type { BuildAgentsProps } from "./Composition";
export { getSceneDurations, getTotalDuration, SCENE_DURATIONS, TOTAL_FRAMES } from "./theme";
export type { SceneDurations } from "./theme";
export { VIDEO } from "./layout";
export { LOCALES, getDict } from "./i18n";
export type { Locale, Dict } from "./i18n";

import { getSceneDurations } from "./theme";
import { getDict, type Locale, type Dict } from "./i18n";

const SCENE_KEYS = [
  "openingTitle",
  "markdown",
  "folders",
  "knowledge",
  "agentReads",
  "transitionToTask",
  "taskArc",
  "headline",
  "sticky",
  "rule",
  "terminal",
  "closing",
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
