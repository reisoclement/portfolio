import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { pl } from "./pl";
import type { Dict } from "./types";

export type { Dict, HobbyKey } from "./types";

export const LOCALES = ["en", "fr", "es", "pl"] as const;
export type Locale = (typeof LOCALES)[number];

const DICTS: Record<Locale, Dict> = { en, fr, es, pl };

export function getDict(locale: Locale): Dict {
  return DICTS[locale];
}
