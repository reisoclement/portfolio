// Shape of a per-locale dictionary for the circles-of-life animation.
//
// Three data layers live here:
//  1. `text`        — on-screen labels (titles, captions, attributes)
//  2. `narration`   — text-to-speech scripts (one per scene), with `anchors`
//                     mapping logical reveal IDs to spoken-word triggers in
//                     the *translated* sentence. The English source has the
//                     canonical anchor names; non-EN locales reuse those names
//                     but map them to local words.
//  3. `sceneTitles` — short titles used by the interactive viewer chip.

export type Anchor = {
  /** Logical reveal name shared across all locales (e.g. "title", "attr-01"). */
  name: string;
  /** Word in the localized text that drives the reveal. Case-insensitive. */
  word: string;
  /** When `word` repeats, which 1-based occurrence to match. */
  occurrence?: number;
  /** Optional offset (frames) added to the spoken-word frame. */
  offsetFrames?: number;
};

export type SceneNarration = {
  /** Identifier shared across locales — same scene, different language. */
  id: string;
  text: string;
  anchors: Anchor[];
};

export type Dict = {
  text: {
    intro: { thisIsYou: string };
    self: { title: string };
    partner: { title: string };
    children: { title: string };
    fastRings: { family: string; friends: string; community: string };
    worldZoom: { country: string; world: string };
    reversal: {
      mostPeople: string;
      tryingToFix: string;
      climateWars: string;
      politicsCountries: string;
      neverHeardOf: string;
      socialMediaTV: string;
      toldThem: string;
      whileCenter: string;
      stillUnfilled: string;
    };
    closing: { master: string; thenExpand: string };
    /** Localized attribute labels keyed by stable attribute key. */
    attributes: Record<string, string>;
  };
  sceneTitles: {
    intro: string;
    self: string;
    partner: string;
    children: string;
    fastRings: string;
    worldZoom: string;
    reversal: string;
    closing: string;
  };
  narration: SceneNarration[];
};
