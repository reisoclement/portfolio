// Helpers to read voice anchor frames extracted from ElevenLabs alignment.
// Frames are *absolute* in the composition; convert to scene-local with
// `getSceneAnchor` so scenes (which use a per-scene frame counter) can use
// them directly.
//
// Anchors are per-locale: alignment depends on the language being spoken.

import enAnchors from "./anchors.en.json";
import frAnchors from "./anchors.fr.json";
import esAnchors from "./anchors.es.json";
import plAnchors from "./anchors.pl.json";
import type { Locale } from "../i18n";

type AnchorFrame = { frame: number; audioSeconds: number };
type SceneAnchors = {
  sceneStart: number;
  audioStartOffset: number;
  durationSeconds: number;
  durationFrames: number | null;
  anchors: Record<string, AnchorFrame>;
};

const ANCHORS_BY_LOCALE: Record<Locale, Record<string, SceneAnchors>> = {
  en: enAnchors as Record<string, SceneAnchors>,
  fr: frAnchors as Record<string, SceneAnchors>,
  es: esAnchors as Record<string, SceneAnchors>,
  pl: plAnchors as Record<string, SceneAnchors>,
};

// Returns the frame (within the scene) when the anchor word is spoken in
// `locale`. Falls back to `fallbackFrame` when the anchor is missing — keeps
// scenes renderable before audio for that locale has been generated.
export function getSceneAnchor(
  sceneId: string,
  anchorName: string,
  fallbackFrame: number,
  locale: Locale,
): number {
  const anchors = ANCHORS_BY_LOCALE[locale] ?? ANCHORS_BY_LOCALE.en;
  const scene = anchors[sceneId];
  if (!scene) return fallbackFrame;
  const a = scene.anchors[anchorName];
  if (!a) return fallbackFrame;
  return a.frame - scene.sceneStart;
}
