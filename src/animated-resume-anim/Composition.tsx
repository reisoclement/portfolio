import { AbsoluteFill, Series } from "remotion";
import { getSceneDurations } from "./theme";
import { LocaleProvider } from "./LocaleContext";
import type { Locale } from "./i18n";
import { SceneIntro } from "./scenes/SceneIntro";
import { SceneCareer } from "./scenes/SceneCareer";
import { SceneJourney } from "./scenes/SceneJourney";
import { SceneBuilds } from "./scenes/SceneBuilds";
import { SceneSideProject } from "./scenes/SceneSideProject";
import { SceneStack } from "./scenes/SceneStack";
import { SceneEducation } from "./scenes/SceneEducation";
import { SceneHobbies } from "./scenes/SceneHobbies";
import { SceneOutro } from "./scenes/SceneOutro";

export type AnimatedResumeProps = {
  locale: Locale;
};

export const AnimatedResume: React.FC<AnimatedResumeProps> = ({ locale }) => {
  const d = getSceneDurations(locale);
  return (
    <LocaleProvider locale={locale}>
      <AbsoluteFill>
        <Series>
          <Series.Sequence durationInFrames={d.intro}>
            <SceneIntro />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.career}>
            <SceneCareer />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.journey}>
            <SceneJourney />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.builds}>
            <SceneBuilds />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.sideProject}>
            <SceneSideProject />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.stack}>
            <SceneStack />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.education}>
            <SceneEducation />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.hobbies}>
            <SceneHobbies />
          </Series.Sequence>
          <Series.Sequence durationInFrames={d.outro}>
            <SceneOutro />
          </Series.Sequence>
        </Series>
      </AbsoluteFill>
    </LocaleProvider>
  );
};
