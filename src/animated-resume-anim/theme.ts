import type { Locale } from "./i18n";

export const COLORS = {
  bg: "#0c1f33",
  bgGlow: "#16304a",
  bgWarm: "#1a2a3e",
  text: "#f3ecdf",
  textDim: "#9aa6b8",
  textMute: "#6f7a8e",
  accent: "#e94f7c",
  gold: "#d4a85a",
  line: "#2a3d52",
} as const;

export const FONT =
  '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';

export const FPS = 30;

export type SceneDurations = {
  intro: number;
  career: number;
  journey: number;
  builds: number;
  sideProject: number;
  stack: number;
  education: number;
  hobbies: number;
  outro: number;
};

// Durations are silent (no narration), driven by reading speed.
// French/Spanish/Polish text averages 15–25% longer than English so I bump
// reading-heavy scenes a touch in those locales. Pure visual scenes (career
// timeline, journey pins, hobbies icons) stay identical across locales.
const BASE: SceneDurations = {
  intro: 9 * FPS,
  career: 12 * FPS,
  journey: 10 * FPS,
  builds: 12 * FPS,
  sideProject: 13 * FPS,
  stack: 14 * FPS,
  education: 8 * FPS,
  hobbies: 10 * FPS,
  outro: 8 * FPS,
};

const PAD = (s: SceneDurations, padFrames: number): SceneDurations => ({
  intro: s.intro + Math.round(padFrames * 0.5),
  career: s.career + padFrames,
  journey: s.journey + Math.round(padFrames * 0.5),
  builds: s.builds + padFrames,
  sideProject: s.sideProject + padFrames,
  stack: s.stack + padFrames,
  education: s.education + Math.round(padFrames * 0.5),
  hobbies: s.hobbies,
  outro: s.outro,
});

const DURATIONS: Record<Locale, SceneDurations> = {
  en: BASE,
  fr: PAD(BASE, 18),
  es: PAD(BASE, 18),
  pl: PAD(BASE, 22),
  // Chinese is character-dense but the line-counts on screen are similar to
  // English; keep timing identical to en. Adjust if reading feels rushed.
  zh: BASE,
};

export function getSceneDurations(locale: Locale): SceneDurations {
  return DURATIONS[locale];
}

export function getTotalDuration(locale: Locale): number {
  const d = DURATIONS[locale];
  return (
    d.intro +
    d.career +
    d.journey +
    d.builds +
    d.sideProject +
    d.stack +
    d.education +
    d.hobbies +
    d.outro
  );
}

// Backwards-compat for any place still importing the flat keys map.
// New code should call getSceneDurations(locale).
export const SCENE_FRAMES = BASE;

export const TOTAL_FRAMES = Object.values(BASE).reduce((a, b) => a + b, 0);
