import type { Dict } from "./i18n/types";

// The 5 layers of the stack, top -> bottom.
// Designed for a non-technical viewer: we collapsed Assembly / C Interpreter /
// Bytecode / Python into a single "Programming Languages" rung. The lower
// layers stay familiar — everyone knows binary (0s and 1s), transistors,
// and the basic idea that a computer runs on electrons.
//
// Index 0 = AI (top). Index 4 = Electrons (bottom).

// English keys — used as the stable `iconKey` so LayerIcon's switch keeps
// working regardless of locale.
export const LAYER_KEYS = [
  "AI",
  "Programming Languages",
  "Machine Code",
  "Hardware / Transistors",
  "Electrons",
] as const;

// Backwards-compatible alias (older code referenced LAYER_LABELS).
export const LAYER_LABELS = LAYER_KEYS;

export type LayerIndex = 0 | 1 | 2 | 3 | 4;

export const AI_INDEX = 0;
export const LANG_INDEX = 1;
export const ELECTRONS_INDEX = 4;

/** Localized display labels for each rung, ordered top -> bottom. */
export function getLayerLabels(t: Dict): readonly string[] {
  const L = t.text.layers;
  return [
    L.ai,
    L.programmingLanguages,
    L.machineCode,
    L.hardware,
    L.electrons,
  ] as const;
}
