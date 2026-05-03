import type { Locale } from "./i18n";

export const COLORS = {
  bg: "#05060a",
  bgGlow: "#0c1226",
  text: "#f5f7ff",
  textDim: "#8a93b8",
  accent: "#ffd166",
  rings: {
    self: "#ffd166",
    partner: "#ef476f",
    children: "#ff70a6",
    family: "#06d6a0",
    friends: "#1bc4e6",
    community: "#7c5cff",
    country: "#b388ff",
    world: "#ff8a3d",
  },
} as const;

export const FONT_FAMILY =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, system-ui, sans-serif';

export type SceneDurations = {
  intro: number;
  self: number;
  partner: number;
  children: number;
  fastRings: number;
  worldZoom: number;
  reversal: number;
  closing: number;
};

// Scene durations are per-locale because narration length varies a lot
// across languages (Polish/French run ~30% longer than English at the same
// word count). Each value is `ceil(audio_duration_frames) + 30 frames` margin,
// rounded up to the nearest 10. Recompute when narration changes.
const DURATIONS: Record<Locale, SceneDurations> = {
  en: {
    intro: 180,
    self: 650,
    partner: 530,
    children: 410,
    fastRings: 120,
    worldZoom: 120,
    reversal: 580,
    closing: 100,
  },
  fr: {
    intro: 190,
    self: 860,
    partner: 520,
    children: 480,
    fastRings: 140,
    worldZoom: 160,
    reversal: 710,
    closing: 120,
  },
  es: {
    intro: 190,
    self: 880,
    partner: 630,
    children: 430,
    fastRings: 100,
    worldZoom: 140,
    reversal: 640,
    closing: 130,
  },
  pl: {
    intro: 170,
    self: 890,
    partner: 610,
    children: 600,
    fastRings: 110,
    worldZoom: 140,
    reversal: 690,
    closing: 120,
  },
};

export function getSceneDurations(locale: Locale): SceneDurations {
  return DURATIONS[locale];
}

export function getTotalDuration(locale: Locale): number {
  const d = DURATIONS[locale];
  return (
    d.intro +
    d.self +
    d.partner +
    d.children +
    d.fastRings +
    d.worldZoom +
    d.reversal +
    d.closing
  );
}
