import { en } from "./en";
import type { Dict } from "./types";

export type { Dict } from "./types";

export const LOCALES = ["en"] as const;
export type Locale = (typeof LOCALES)[number];

const DICTS: Record<Locale, Dict> = { en };

export function getDict(locale: Locale): Dict {
  return DICTS[locale];
}
