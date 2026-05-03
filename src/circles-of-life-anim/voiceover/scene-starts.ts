import { SCENE_DURATIONS } from "../theme";

// Absolute starting frame of each narration clip in the composition.
// Keyed by clip id (which matches the i18n narration `id`).
export const SCENE_START_FRAMES: Record<string, number> = {
  "scene-1-intro": 0,
  "scene-2-self": SCENE_DURATIONS.intro,
  "scene-3-partner": SCENE_DURATIONS.intro + SCENE_DURATIONS.self,
  "scene-4-children":
    SCENE_DURATIONS.intro + SCENE_DURATIONS.self + SCENE_DURATIONS.partner,
  "scene-5-fast-rings":
    SCENE_DURATIONS.intro +
    SCENE_DURATIONS.self +
    SCENE_DURATIONS.partner +
    SCENE_DURATIONS.children,
  "scene-6-world-zoom":
    SCENE_DURATIONS.intro +
    SCENE_DURATIONS.self +
    SCENE_DURATIONS.partner +
    SCENE_DURATIONS.children +
    SCENE_DURATIONS.fastRings,
  "scene-7-reversal":
    SCENE_DURATIONS.intro +
    SCENE_DURATIONS.self +
    SCENE_DURATIONS.partner +
    SCENE_DURATIONS.children +
    SCENE_DURATIONS.fastRings +
    SCENE_DURATIONS.worldZoom,
  "scene-8-closing":
    SCENE_DURATIONS.intro +
    SCENE_DURATIONS.self +
    SCENE_DURATIONS.partner +
    SCENE_DURATIONS.children +
    SCENE_DURATIONS.fastRings +
    SCENE_DURATIONS.worldZoom +
    SCENE_DURATIONS.reversal,
};
