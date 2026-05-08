export const theme = {
  bg: "#0E1116",
  panel: "#161A21",
  panelEdge: "#222832",
  text: "#F2EAD3",
  textMuted: "#8A8676",
  amber: "#E8A85B",
  green: "#7AB87A",
  red: "#D87070",
  stickyYellow: "#F4E5A3",
  stickyGreen: "#A9D9A0",
  stickyRed: "#E89B9B",
};

export const fonts = {
  mono: `"JetBrains Mono", "IBM Plex Mono", "Fira Code", "Consolas", monospace`,
  sans: `"Inter", "Helvetica Neue", system-ui, sans-serif`,
  hand: `"Caveat", "Patrick Hand", "Comic Sans MS", cursive`,
};

export const FPS = 30;

import type { Locale } from "./i18n";

const SCENE3_PER_FILE = 80;
const KNOWLEDGE_FILE_COUNT = 4;
const SCENE3_DURATION = SCENE3_PER_FILE * KNOWLEDGE_FILE_COUNT;
const SCENE5_TASK_ARC_DURATION = 650;

export const SCENE_DURATIONS = {
  openingTitle: 150,
  markdown: 180,
  folders: 180,
  knowledge: SCENE3_DURATION,
  agentReads: 180,
  transitionToTask: 90,
  taskArc: SCENE5_TASK_ARC_DURATION,
  headline: 120,
  sticky: 240,
  rule: 120,
  terminal: 120,
  closing: 150,
} as const;

export type SceneDurations = typeof SCENE_DURATIONS;

export const TOTAL_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (a, b) => a + b,
  0,
);

export function getSceneDurations(_locale: Locale): SceneDurations {
  return SCENE_DURATIONS;
}

export function getTotalDuration(_locale: Locale): number {
  return TOTAL_FRAMES;
}
