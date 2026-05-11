import { en } from "./en";
import type { Dict } from "./types";

export type { Dict } from "./types";

// Add "fr", "es", "pl" etc. as locales land. Plumbing is in place — adding a
// locale is purely a content task: drop in <locale>.ts, append it here, add
// it to DICTS.
export const LOCALES = ["en"] as const;
export type Locale = (typeof LOCALES)[number];

const DICTS: Record<Locale, Dict> = { en };

export function getDict(locale: Locale): Dict {
  return DICTS[locale];
}
