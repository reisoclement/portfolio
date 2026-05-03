export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
} as const;

export const CENTER = {
  x: VIDEO.width / 2,
  y: VIDEO.height / 2,
} as const;

export const RADII = {
  self: 0,
  partner: 140,
  children: 230,
  family: 320,
  friends: 410,
  community: 500,
  country: 600,
  world: 720,
} as const;

// Attribute keys are stable, language-independent identifiers used by
// scenes, icons, and the i18n dictionaries. Display labels live in
// `src/i18n/<locale>.ts`.
export const ATTRIBUTE_KEYS = {
  self: [
    "physical-health",
    "mental-health",
    "intellectual-growth",
    "emotional-regulation",
    "financial-stability",
    "discipline-habits",
    "purpose-meaning",
    "integrity-values",
    "skills-mastery",
    "spirituality",
  ],
  partner: [
    "communication",
    "trust-honesty",
    "shared-values",
    "emotional-support",
    "intimacy",
    "conflict-resolution",
    "shared-goals",
    "patience",
  ],
  children: [
    "presence-time",
    "education",
    "boundaries",
    "unconditional-love",
    "modeling-values",
    "patience",
  ],
} as const;

export type AttributeKey = (typeof ATTRIBUTE_KEYS)[
  keyof typeof ATTRIBUTE_KEYS
][number];
