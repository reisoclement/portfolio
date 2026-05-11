import { AbsoluteFill, Sequence } from "remotion";
import { SCENE_DURATIONS } from "./theme";
import { Background } from "./components/Background";
import { LocaleProvider } from "./LocaleContext";
import { type Locale } from "./i18n";

import { SceneHook } from "./scenes/SceneHook";
import { SceneTitle } from "./scenes/SceneTitle";
import { ScenePipeline } from "./scenes/ScenePipeline";
import { SceneExtract } from "./scenes/SceneExtract";
import { SceneHeaders } from "./scenes/SceneHeaders";
import { ScenePageMatch } from "./scenes/ScenePageMatch";
import { SceneTwoPass } from "./scenes/SceneTwoPass";
import { SceneWordDiff } from "./scenes/SceneWordDiff";
import { SceneSpatial } from "./scenes/SceneSpatial";
import { SceneLegend } from "./scenes/SceneLegend";
import { SceneRender } from "./scenes/SceneRender";
import { SceneOutput } from "./scenes/SceneOutput";
import { SceneAIReview } from "./scenes/SceneAIReview";
import { SceneRecap } from "./scenes/SceneRecap";

const D = SCENE_DURATIONS;

const ORDER = [
  "hook",
  "title",
  "pipeline",
  "extract",
  "headers",
  "pageMatch",
  "twoPass",
  "wordDiff",
  "spatial",
  "legend",
  "render",
  "output",
  "aiReview",
  "recap",
] as const;

const starts: Record<(typeof ORDER)[number], number> = ORDER.reduce(
  (acc, key, i) => {
    acc[key] = i === 0 ? 0 : acc[ORDER[i - 1]] + D[ORDER[i - 1]];
    return acc;
  },
  {} as Record<(typeof ORDER)[number], number>,
);

export type PdfComparerProps = {
  locale?: Locale;
};

export const PdfComparer: React.FC<PdfComparerProps> = ({ locale = "en" }) => {
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
        <Sequence from={starts.pipeline} durationInFrames={D.pipeline}>
          <ScenePipeline />
        </Sequence>
        <Sequence from={starts.extract} durationInFrames={D.extract}>
          <SceneExtract />
        </Sequence>
        <Sequence from={starts.headers} durationInFrames={D.headers}>
          <SceneHeaders />
        </Sequence>
        <Sequence from={starts.pageMatch} durationInFrames={D.pageMatch}>
          <ScenePageMatch />
        </Sequence>
        <Sequence from={starts.twoPass} durationInFrames={D.twoPass}>
          <SceneTwoPass />
        </Sequence>
        <Sequence from={starts.wordDiff} durationInFrames={D.wordDiff}>
          <SceneWordDiff />
        </Sequence>
        <Sequence from={starts.spatial} durationInFrames={D.spatial}>
          <SceneSpatial />
        </Sequence>
        <Sequence from={starts.legend} durationInFrames={D.legend}>
          <SceneLegend />
        </Sequence>
        <Sequence from={starts.render} durationInFrames={D.render}>
          <SceneRender />
        </Sequence>
        <Sequence from={starts.output} durationInFrames={D.output}>
          <SceneOutput />
        </Sequence>
        <Sequence from={starts.aiReview} durationInFrames={D.aiReview}>
          <SceneAIReview />
        </Sequence>
        <Sequence from={starts.recap} durationInFrames={D.recap}>
          <SceneRecap />
        </Sequence>
      </AbsoluteFill>
    </LocaleProvider>
  );
};
