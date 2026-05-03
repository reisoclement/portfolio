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

export const SCENE_DURATIONS = {
  intro: 180,
  self: 660,
  partner: 540,
  children: 400,
  fastRings: 120,
  worldZoom: 160,
  reversal: 600,
  closing: 120,
} as const;

export const TOTAL_DURATION = Object.values(SCENE_DURATIONS).reduce(
  (a, b) => a + b,
  0,
);
