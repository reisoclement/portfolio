import { AbsoluteFill, Series } from "remotion";
import { SCENE_DURATIONS } from "./theme";
import { Background } from "./components/Background";
import { LocaleProvider } from "./LocaleContext";
import { type Locale } from "./i18n";

import { SceneOpeningTitle } from "./scenes/SceneOpeningTitle";
import { Scene0Markdown } from "./scenes/Scene0Markdown";
import { Scene2Folders } from "./scenes/Scene2Folders";
import { Scene3Knowledge } from "./scenes/Scene3Knowledge";
import { Scene4Ring } from "./scenes/Scene4Ring";
import { SceneFoldersTransition } from "./scenes/SceneFoldersTransition";
import { Scene5TaskArc } from "./scenes/Scene5TaskArc";
import { Scene6Headline } from "./scenes/Scene6Headline";
import { Scene7Sticky } from "./scenes/Scene7Sticky";
import { Scene8StickyToRule } from "./scenes/Scene8StickyToRule";
import { Scene9Terminal } from "./scenes/Scene9Terminal";
import { Scene11Title } from "./scenes/Scene11Title";

const D = SCENE_DURATIONS;

export type BuildAgentsProps = {
  locale?: Locale;
};

export const BuildAgents: React.FC<BuildAgentsProps> = ({ locale = "en" }) => {
  return (
    <LocaleProvider locale={locale}>
      <AbsoluteFill>
        <Background />
        <Series>
          <Series.Sequence durationInFrames={D.openingTitle}>
            <SceneOpeningTitle />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.markdown}>
            <Scene0Markdown />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.folders}>
            <Scene2Folders />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.knowledge}>
            <Scene3Knowledge />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.agentReads}>
            <Scene4Ring />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.transitionToTask}>
            <SceneFoldersTransition from="knowledge" to="task" />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.taskArc}>
            <Scene5TaskArc />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.headline}>
            <Scene6Headline />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.sticky}>
            <Scene7Sticky />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.rule}>
            <Scene8StickyToRule />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.terminal}>
            <Scene9Terminal />
          </Series.Sequence>
          <Series.Sequence durationInFrames={D.closing}>
            <Scene11Title />
          </Series.Sequence>
        </Series>
      </AbsoluteFill>
    </LocaleProvider>
  );
};
