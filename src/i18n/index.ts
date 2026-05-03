// i18n entry point. All UI strings live in the per-locale files (en/fr/es/pl).
// English is the source of truth — sibling files mirror its shape, and TS will
// flag missing keys.

import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { pl } from "./pl";

export const LOCALES = ["en", "fr", "es", "pl"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  pl: "Polski",
};

// Locale codes as used in <html lang="…">.
export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  es: "es",
  pl: "pl",
};

// English type drives the shape; all other locales must match.
export type Dict = typeof en;

const DICTS: Record<Locale, Dict> = { en, fr, es, pl };

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function getT(locale: Locale): Dict {
  return DICTS[locale];
}

// Strip the locale prefix from a path so the language switcher can
// rebuild it for another locale.
export function stripLocaleFromPath(pathname: string, base: string): string {
  const rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, "");
  const segments = rest.replace(/^\/+|\/+$/g, "").split("/");
  if (segments.length > 0 && (LOCALES as readonly string[]).includes(segments[0])) {
    segments.shift();
  }
  return segments.join("/");
}

// Build a URL for the same page in another locale. Always trailing-slash.
export function localeUrl(base: string, locale: Locale, rest: string): string {
  const trimmed = rest.replace(/^\/+|\/+$/g, "");
  const tail = trimmed.length > 0 ? `${trimmed}/` : "";
  return `${base}${locale}/${tail}`;
}
