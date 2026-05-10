# Interactive Viewer Pattern

Every animation page on this site has TWO display modes:

1. **Video mode** — a plain `<video>` tag plays the rendered MP4 from `public/animations/<slug>/<lang>/<slug>.mp4`. No code involved beyond the `.astro` page.
2. **Step-by-step mode** — a React component named `InteractiveViewer.tsx` mounts a Remotion `<Player>` and lets the viewer click through one scene at a time, like a slide deck.

This doc is about mode 2.

## Where the viewers live

One per animation, all under `src/components/<slug>/InteractiveViewer.tsx`:

- `src/components/animated-resume/InteractiveViewer.tsx`
- `src/components/build-agents/InteractiveViewer.tsx`
- `src/components/circles-of-life/InteractiveViewer.tsx`
- `src/components/spec-extractor/InteractiveViewer.tsx`
- `src/components/when-to-use-ai/InteractiveViewer.tsx`

They are near-clones of each other. Copy from `animated-resume` when adding a new one.

## How a step works

| State | What happens |
|-------|--------------|
| Page loads | Player mounted at `initialFrame={0}`, paused, on the very first frame. |
| User clicks **Next** (or Space / →) | `playToEndOfScene(0)` — set `stopAtRef = holdFrame(0)`, call `player.play()`. |
| `frameupdate` listener fires every frame | When `frame >= stopAtRef`, pause + `seekTo(stopAtRef)`. The held frame is the freeze. |
| User clicks **Next** again | Same pattern for scene 1, then scene 2, etc. |
| User clicks **Back** (or ←) | `seekTo(holdFrame(prevSceneIdx))`. No playback. |
| User clicks **Restart** (or R) | `seekTo(0)`, reset state. |

## The freeze-frame rule (do not change without reading this)

The held frame MUST be **past every fade-out window in the scene**. Stopping at `range.end - 1` lands inside the scene's fade-out and produces a near-black frozen frame, which breaks the slide-deck experience.

Every viewer therefore uses:

```ts
const HOLD_OFFSET = 30;
const holdFrame = (sceneIdx: number) => {
  const range = sceneRanges[sceneIdx];
  if (!range) return 0;
  return Math.max(range.start, range.end - HOLD_OFFSET);
};
```

`HOLD_OFFSET = 30` clears every fade-out window currently used in the source projects:

| Project | Fade-out helper | Window |
|---------|----------------|--------|
| `animated-resume` | per-scene `fadeOut(frame, X, 28)` | 28 frames |
| `build-agents-in-markdown` | `useSceneFade()` default `outDur=10` | 10 frames |
| `when-to-use-ai` | shared anim helper, default 10 | 10 frames |

If a future scene uses a longer fade-out, bump `HOLD_OFFSET` accordingly — but make the change in **all five viewers** (see "Audit all copies" below).

The `Math.max(range.start, ...)` clamp is required for any scene shorter than 30 frames; without it, the hold frame would fall before the scene starts.

## Required state machine

Every viewer must implement these four callbacks identically:

- `playToEndOfScene(sceneIdx)` — uses `holdFrame(sceneIdx)`, plays from current position, sets `setIsPlaying(true)`.
- `next` — if playing, snap to `holdFrame` immediately (skip behavior); else advance one scene.
- `prev` — `seekTo(holdFrame(prevIdx))`. Disabled while `isPlaying`.
- `restart` — `seekTo(0)`, `setCompletedSceneIndex(-1)`.

## Embed surface contract

Each animation source project under `projects/<slug>/` MUST export from its `embed.ts`:

```ts
export { <ComponentName> } from "./Composition";
export { getSceneDurations, getTotalDuration, FPS } from "./theme";
export { LOCALES, getDict } from "./i18n";
export type { Locale, Dict } from "./i18n";

// And — used by InteractiveViewer:
export const TOTAL_SCENES: number;
export type SceneRange = { key: string; title: string; start: number; end: number };
export function getSceneRanges(locale: Locale): SceneRange[];
export const VIDEO: { width: number; height: number; fps: number };
```

`getSceneRanges` MUST return ranges with **exclusive `end`** (so `range.end === nextRange.start`). The viewer relies on this when computing `holdFrame`.

## Adding a new animation

1. Copy `src/components/animated-resume/InteractiveViewer.tsx` to `src/components/<new-slug>/InteractiveViewer.tsx`.
2. Update imports to point at the new `@<new-slug>/embed`.
3. Update CSS class prefixes (`ar-` → your slug's prefix).
4. Add a row to the table in **Where the viewers live** above.
5. Verify the freeze frame visually — page through every scene, none should fade to black before the next click.

## Audit all copies before changing the pattern

Whenever you touch the freeze logic, the keybindings, the `frameupdate` handler, or the embed contract, change **every** viewer in the same commit. The viewers are intentional copy-pastes; if one gets out of sync, the bug only shows up on the page nobody clicked through during testing.

Search command: `grep -rln "InteractiveViewer" src/components/` — every match must be edited.

## Changelog

- **2026-05-10**: Added `HOLD_OFFSET = 30` to all five viewers; previously stopped at `range.end - 1` which fell inside scene fade-outs and showed a black freeze frame. Documented the pattern here so future viewers don't re-introduce the bug.
