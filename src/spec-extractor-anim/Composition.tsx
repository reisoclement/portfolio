import { AbsoluteFill, Sequence } from "remotion";
import { SCENE_DURATIONS } from "./theme";
import { Background } from "./components/Background";
import { LocaleProvider } from "./LocaleContext";
import { type Locale } from "./i18n";

import { SceneHook } from "./scenes/SceneHook";
import { SceneTitle } from "./scenes/SceneTitle";
import { SceneProblem } from "./scenes/SceneProblem";
import { ScenePipeline } from "./scenes/ScenePipeline";
import { SceneLanguage } from "./scenes/SceneLanguage";
import { SceneRules } from "./scenes/SceneRules";
import { SceneExtract } from "./scenes/SceneExtract";
import { SceneHybridView } from "./scenes/SceneHybridView";
import { SceneOutputs } from "./scenes/SceneOutputs";
import { SceneTutorialDivider } from "./scenes/SceneTutorialDivider";
import { SceneTutorialLayout } from "./scenes/SceneTutorialLayout";
import { SceneTutorialRowActions } from "./scenes/SceneTutorialRowActions";
import { SceneTutorialControls } from "./scenes/SceneTutorialControls";
import { SceneFTLIntro } from "./scenes/SceneFTLIntro";
import { SceneFTLDiff } from "./scenes/SceneFTLDiff";
import { SceneFTLDrawer } from "./scenes/SceneFTLDrawer";
import { SceneRecap } from "./scenes/SceneRecap";

const D = SCENE_DURATIONS;

const ORDER = [
  // Part 1 — How it works
  "hook",
  "title",
  "problem",
  "pipeline",
  "language",
  "rules",
  "extract",
  "hybrid",
  "outputs",

  // Part 2 — How to use it
  "tutorialDivider",
  "tutorialLayout",
  "tutorialRowActions",
  "tutorialControls",

  // FTL teaser
  "ftlIntro",
  "ftlDiff",
  "ftlDrawer",
  "recap",
] as const;

const starts: Record<(typeof ORDER)[number], number> = ORDER.reduce(
  (acc, key, i) => {
    acc[key] = i === 0 ? 0 : acc[ORDER[i - 1]] + D[ORDER[i - 1]];
    return acc;
  },
  {} as Record<(typeof ORDER)[number], number>,
);

export type SpecExtractorProps = {
  locale?: Locale;
};

export const SpecExtractor: React.FC<SpecExtractorProps> = ({ locale = "en" }) => {
  return (
    <LocaleProvider locale={locale}>
      <AbsoluteFill>
        <Background />

        <Sequence from={starts.hook} durationInFrames={D.hook}>
          <SceneHook />
        </Sequence>
        <Sequence from={starts.title} durationInFrames={D.title}>
          <SceneTitle />
        </Sequence>
        <Sequence from={starts.problem} durationInFrames={D.problem}>
          <SceneProblem />
        </Sequence>
        <Sequence from={starts.pipeline} durationInFrames={D.pipeline}>
          <ScenePipeline />
        </Sequence>
        <Sequence from={starts.language} durationInFrames={D.language}>
          <SceneLanguage />
        </Sequence>
        <Sequence from={starts.rules} durationInFrames={D.rules}>
          <SceneRules />
        </Sequence>
        <Sequence from={starts.extract} durationInFrames={D.extract}>
          <SceneExtract />
        </Sequence>
        <Sequence from={starts.hybrid} durationInFrames={D.hybrid}>
          <SceneHybridView />
        </Sequence>
        <Sequence from={starts.outputs} durationInFrames={D.outputs}>
          <SceneOutputs />
        </Sequence>

        <Sequence from={starts.tutorialDivider} durationInFrames={D.tutorialDivider}>
          <SceneTutorialDivider />
        </Sequence>
        <Sequence from={starts.tutorialLayout} durationInFrames={D.tutorialLayout}>
          <SceneTutorialLayout />
        </Sequence>
        <Sequence from={starts.tutorialRowActions} durationInFrames={D.tutorialRowActions}>
          <SceneTutorialRowActions />
        </Sequence>
        <Sequence from={starts.tutorialControls} durationInFrames={D.tutorialControls}>
          <SceneTutorialControls />
        </Sequence>

        <Sequence from={starts.ftlIntro} durationInFrames={D.ftlIntro}>
          <SceneFTLIntro />
        </Sequence>
        <Sequence from={starts.ftlDiff} durationInFrames={D.ftlDiff}>
          <SceneFTLDiff />
        </Sequence>
        <Sequence from={starts.ftlDrawer} durationInFrames={D.ftlDrawer}>
          <SceneFTLDrawer />
        </Sequence>
        <Sequence from={starts.recap} durationInFrames={D.recap}>
          <SceneRecap />
        </Sequence>
      </AbsoluteFill>
    </LocaleProvider>
  );
};
