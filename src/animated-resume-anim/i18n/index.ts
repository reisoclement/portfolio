import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { pl } from "./pl";
import { zh } from "./zh";
import type { Dict } from "./types";

export type { Dict, HobbyKey } from "./types";

export const LOCALES = ["en", "fr", "es", "pl", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

const DICTS: Record<Locale, Dict> = { en, fr, es, pl, zh };

export function getDict(locale: Locale): Dict {
  return DICTS[locale];
}
