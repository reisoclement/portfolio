import { AbsoluteFill, Sequence } from "remotion";
import { Scene3KnowledgeStep } from "./Scene3KnowledgeStep";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

const PER_FILE = 80;

export const Scene3Knowledge: React.FC = () => {
  const sceneOpacity = useSceneFade();
  const { t } = useLocale();
  const files = t.text.knowledgeFiles;
  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      {files.map((_, i) => (
        <Sequence key={i} from={i * PER_FILE} durationInFrames={PER_FILE}>
          <Scene3KnowledgeStep fileIndex={i} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
