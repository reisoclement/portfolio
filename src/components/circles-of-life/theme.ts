export const COLORS = {
  bg: "#05060a",
  bgGlow: "#0c1226",
  text: "#f5f7ff",
  textDim: "#8a93b8",
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

export const VIDEO = {
  width: 1920,
  height: 1080,
} as const;

export const CENTER = {
  x: VIDEO.width / 2,
  y: VIDEO.height / 2,
} as const;

export const RADII = {
  partner: 140,
  children: 230,
  family: 320,
  friends: 410,
  community: 500,
  country: 600,
  world: 720,
} as const;

export const ATTRIBUTES = {
  self: [
    "Physical health",
    "Mental health",
    "Intellectual growth",
    "Emotional regulation",
    "Financial stability",
    "Discipline & habits",
    "Purpose & meaning",
    "Integrity & values",
    "Skills & mastery",
    "Spirituality",
  ],
  partner: [
    "Communication",
    "Trust & honesty",
    "Shared values",
    "Emotional support",
    "Intimacy",
    "Conflict resolution",
    "Shared goals",
    "Patience",
  ],
  children: [
    "Presence & time",
    "Education",
    "Boundaries",
    "Unconditional love",
    "Modeling values",
    "Patience",
  ],
} as const;
