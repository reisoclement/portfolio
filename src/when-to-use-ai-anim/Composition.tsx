import { AbsoluteFill, Sequence } from "remotion";
import { SCENE_DURATIONS } from "./theme";
import { Background } from "./components/Background";
import { LocaleProvider } from "./LocaleContext";
import { getDict, type Locale } from "./i18n";

import { SceneHookQuestion } from "./scenes/SceneHookQuestion";
import { SceneHookStat } from "./scenes/SceneHookStat";
import { SceneTitleCard } from "./scenes/SceneTitleCard";
import { Scene1StackBuild } from "./scenes/Scene1StackBuild";
import { Scene2AILayer } from "./scenes/Scene2AILayer";
import { SceneHWStory } from "./scenes/SceneHWStory";
import { SceneCodeStory } from "./scenes/SceneCodeStory";
import { SceneEarlyLanguage } from "./scenes/SceneEarlyLanguage";
import { SceneLessonCard } from "./scenes/SceneLessonCard";
import { SceneHookToggle } from "./scenes/SceneHookToggle";
import { SceneLesson1Takeaway } from "./scenes/SceneLesson1Takeaway";
import { Scene7Rule10 } from "./scenes/Scene7Rule10";
import { Scene8Backwards } from "./scenes/Scene8Backwards";
import { Scene9DoUse } from "./scenes/Scene9DoUse";
import { Scene10DontUse } from "./scenes/Scene10DontUse";
import { Scene12Decision } from "./scenes/Scene12Decision";
import { Scene13Mindset } from "./scenes/Scene13Mindset";
import { Scene14Closer } from "./scenes/Scene14Closer";

const D = SCENE_DURATIONS;
const TOTAL_LESSONS = 4;

const ORDER = [
  "hookQuestion",
  "hookStat",
  "titleCard",
  "stackBuild",
  "aiLayer",
  "hwStory",
  "codeStory",
  "earlyLanguage",
  "lesson1Card",
  "hookToggle",
  "lesson1Takeaway",
  "lesson2Card",
  "backwards",
  "rule10",
  "lesson3Card",
  "doUse",
  "dontUse",
  "lesson4Card",
  "decision",
  "mindset",
  "closer",
] as const;

const starts: Record<(typeof ORDER)[number], number> = ORDER.reduce(
  (acc, key, i) => {
    acc[key] = i === 0 ? 0 : acc[ORDER[i - 1]] + D[ORDER[i - 1]];
    return acc;
  },
  {} as Record<(typeof ORDER)[number], number>,
);

export type WhenToUseAIProps = {
  locale?: Locale;
};

export const WhenToUseAI: React.FC<WhenToUseAIProps> = ({ locale = "en" }) => {
  const lessons = getDict(locale).text.lessons;

  return (
    <LocaleProvider locale={locale}>
      <AbsoluteFill>
        <Background />

        {/* ----- Setup hooks ----- */}
        <Sequence from={starts.hookQuestion} durationInFrames={D.hookQuestion}>
          <SceneHookQuestion />
        </Sequence>
        <Sequence from={starts.hookStat} durationInFrames={D.hookStat}>
          <SceneHookStat />
        </Sequence>
        <Sequence from={starts.titleCard} durationInFrames={D.titleCard}>
          <SceneTitleCard />
        </Sequence>

        {/* ----- Stack + layer zooms ----- */}
        <Sequence from={starts.stackBuild} durationInFrames={D.stackBuild}>
          <Scene1StackBuild />
        </Sequence>
        <Sequence from={starts.aiLayer} durationInFrames={D.aiLayer}>
          <Scene2AILayer />
        </Sequence>
        <Sequence from={starts.hwStory} durationInFrames={D.hwStory}>
          <SceneHWStory />
        </Sequence>
        <Sequence from={starts.codeStory} durationInFrames={D.codeStory}>
          <SceneCodeStory />
        </Sequence>
        <Sequence from={starts.earlyLanguage} durationInFrames={D.earlyLanguage}>
          <SceneEarlyLanguage />
        </Sequence>

        {/* ----- LESSON 1 ----- */}
        <Sequence from={starts.lesson1Card} durationInFrames={D.lesson1Card}>
          <SceneLessonCard index={1} total={TOTAL_LESSONS} title={lessons.one} />
        </Sequence>
        <Sequence from={starts.hookToggle} durationInFrames={D.hookToggle}>
          <SceneHookToggle />
        </Sequence>
        <Sequence from={starts.lesson1Takeaway} durationInFrames={D.lesson1Takeaway}>
          <SceneLesson1Takeaway />
        </Sequence>

        {/* ----- LESSON 2 ----- */}
        <Sequence from={starts.lesson2Card} durationInFrames={D.lesson2Card}>
          <SceneLessonCard index={2} total={TOTAL_LESSONS} title={lessons.two} />
        </Sequence>
        <Sequence from={starts.backwards} durationInFrames={D.backwards}>
          <Scene8Backwards />
        </Sequence>
        <Sequence from={starts.rule10} durationInFrames={D.rule10}>
          <Scene7Rule10 />
        </Sequence>

        {/* ----- LESSON 3 ----- */}
        <Sequence from={starts.lesson3Card} durationInFrames={D.lesson3Card}>
          <SceneLessonCard index={3} total={TOTAL_LESSONS} title={lessons.three} />
        </Sequence>
        <Sequence from={starts.doUse} durationInFrames={D.doUse}>
          <Scene9DoUse />
        </Sequence>
        <Sequence from={starts.dontUse} durationInFrames={D.dontUse}>
          <Scene10DontUse />
        </Sequence>

        {/* ----- LESSON 4 ----- */}
        <Sequence from={starts.lesson4Card} durationInFrames={D.lesson4Card}>
          <SceneLessonCard index={4} total={TOTAL_LESSONS} title={lessons.four} />
        </Sequence>
        <Sequence from={starts.decision} durationInFrames={D.decision}>
          <Scene12Decision />
        </Sequence>

        {/* ----- Close ----- */}
        <Sequence from={starts.mindset} durationInFrames={D.mindset}>
          <Scene13Mindset />
        </Sequence>
        <Sequence from={starts.closer} durationInFrames={D.closer}>
          <Scene14Closer />
        </Sequence>
      </AbsoluteFill>
    </LocaleProvider>
  );
};
