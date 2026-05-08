export const COLORS = {
  bgCore: "#0F1620",
  bgEdge: "#1A2230",
  text: "#F2EAD8",
  textDim: "rgba(242, 234, 216, 0.55)",
  textFaint: "rgba(242, 234, 216, 0.25)",
  steel: "#5B7A99",
  steelDim: "rgba(91, 122, 153, 0.35)",
  steelSoft: "rgba(91, 122, 153, 0.18)",
  amber: "#F2A03D",
  amberSoft: "rgba(242, 160, 61, 0.18)",
  amberHalo: "rgba(242, 160, 61, 0.35)",
  coral: "#D9614C",
  coralSoft: "rgba(217, 97, 76, 0.18)",
  sage: "#7AB386",
  sageSoft: "rgba(122, 179, 134, 0.18)",
  rule: "rgba(242, 234, 216, 0.12)",
} as const;

export const FONT = {
  display: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

export const FPS = 30;

// Scene durations in frames (30fps).
//
// Story arc:
//   Hooks → Stack → Layer zooms (every layer started broken) →
//     LESSON 1: Build something AI alone can't replace
//       (HookToggle = the failure story, then the 3-rules takeaway)
//     LESSON 2: Don't rely only on AI
//       (Rule10 + Backwards)
//     LESSON 3: Pick the right tool for the task
//       (DoUse + DontUse)
//     LESSON 4: Three questions before adding AI
//       (Decision)
//   → Mindset → Closer
export const SCENE_DURATIONS = {
  hookQuestion: 6 * FPS,      // 0:00 - "Why does AI break?"
  hookStat: 8 * FPS,          // 0:06 - 95% of AI projects fail
  titleCard: 6 * FPS,         // 0:14 - "When to use AI"
  stackBuild: 7 * FPS,        // 0:20 - stack assembles bottom-up
  aiLayer: 7 * FPS,           // 0:27 - AI rung lands on top
  hwStory: 7 * FPS,           // 0:34 - HW zoom: 1947 moth in a relay
  codeStory: 7 * FPS,         // 0:41 - Machine Code zoom: 1962 Mariner 1 missing overbar
  earlyLanguage: 11 * FPS,    // 0:50 - Python zoom: "wasn't trusted at first"

  lesson1Card: 4 * FPS,       // 1:01 - "Lesson 1/4 — Build something AI alone can't replace"
  hookToggle: 16 * FPS,       // 1:05 - try-on app killed by Google's native toggle
  lesson1Takeaway: 8 * FPS,   // 1:21 - 3 defensibility rules

  lesson2Card: 4 * FPS,       // 1:29 - "Lesson 2/4 — Don't rely only on AI"
  backwards: 14 * FPS,        // 1:33 - the wrong way: 90% AI inverted + coral X
  rule10: 14 * FPS,           // 1:47 - the right way: stack with AI on top + 10% disk

  lesson3Card: 4 * FPS,       // 2:01 - "Lesson 3/4 — Pick the right tool for the task"
  doUse: 15 * FPS,            // 2:05 - green checklist
  dontUse: 15 * FPS,          // 2:20 - red checklist

  lesson4Card: 4 * FPS,       // 2:35 - "Lesson 4/4 — Ask three questions before adding AI"
  decision: 20 * FPS,         // 2:39 - three question cards

  mindset: 10 * FPS,          // 2:59 - stack returns fully lit
  closer: 10 * FPS,           // 3:09 - "10% AI. 90% everything else."
} as const;

export type SceneDurations = typeof SCENE_DURATIONS;

export const TOTAL_FRAMES = Object.values(SCENE_DURATIONS).reduce(
  (a, b) => a + b,
  0,
);

// Locale-aware accessor — currently durations are identical across locales,
// but the helper exists so future locale-specific tuning has a hook.
export function getSceneDurations(_locale: string): SceneDurations {
  return SCENE_DURATIONS;
}

export function getTotalDuration(_locale: string): number {
  return TOTAL_FRAMES;
}
