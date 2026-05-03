import { AbsoluteFill, Series } from "remotion";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2Self } from "./scenes/Scene2Self";
import { Scene3Partner } from "./scenes/Scene3Partner";
import { Scene4Children } from "./scenes/Scene4Children";
import { Scene5FastRings } from "./scenes/Scene5FastRings";
import { Scene6WorldZoom } from "./scenes/Scene6WorldZoom";
import { Scene7Reversal } from "./scenes/Scene7Reversal";
import { Scene8Closing } from "./scenes/Scene8Closing";
import { getSceneDurations } from "./theme";
import { Voiceover } from "./voiceover/Voiceover";
import { LocaleProvider } from "./LocaleContext";
import type { Locale } from "./i18n";

export type CirclesOfLifeProps = {
  locale: Locale;
};

export const CirclesOfLife: React.FC<CirclesOfLifeProps> = ({ locale }) => {
  const d = getSceneDurations(locale);
  return (
    <LocaleProvider locale={locale}>
      <AbsoluteFill>
        <Series>
          <Series.Sequence durationInFrames={d.intro}>
            <Scene1Intro />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.self}>
            <Scene2Self />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.partner}>
            <Scene3Partner />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.children}>
            <Scene4Children />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.fastRings}>
            <Scene5FastRings />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.worldZoom}>
            <Scene6WorldZoom />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.reversal}>
            <Scene7Reversal />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.closing}>
            <Scene8Closing />
          </Series.Sequence>
        </Series>
        <Voiceover />
      </AbsoluteFill>
    </LocaleProvider>
  );
};
