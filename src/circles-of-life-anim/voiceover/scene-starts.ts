import { getSceneDurations } from "../theme";
import type { Locale } from "../i18n";

// Absolute starting frame of each narration clip in the composition,
// computed from the per-locale SCENE_DURATIONS. Each locale has its own
// timeline because narration length varies significantly.
export function getSceneStartFrames(locale: Locale): Record<string, number> {
  const d = getSceneDurations(locale);
  return {
    "scene-1-intro": 0,
    "scene-2-self": d.intro,
    "scene-3-partner": d.intro + d.self,
    "scene-4-children": d.intro + d.self + d.partner,
    "scene-5-fast-rings": d.intro + d.self + d.partner + d.children,
    "scene-6-world-zoom":
      d.intro + d.self + d.partner + d.children + d.fastRings,
    "scene-7-reversal":
      d.intro + d.self + d.partner + d.children + d.fastRings + d.worldZoom,
    "scene-8-closing":
      d.intro +
      d.self +
      d.partner +
      d.children +
      d.fastRings +
      d.worldZoom +
      d.reversal,
  };
}
