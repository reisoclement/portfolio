import { AbsoluteFill } from "remotion";
import { QuestionCard } from "../components/QuestionCard";
import { FPS } from "../theme";
import { useLocale } from "../LocaleContext";

// Three question cards stack in. ~20s total.
export const Scene12Decision: React.FC = () => {
  const { t } = useLocale();
  const D = t.text.decision;
  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
        padding: "0 100px",
      }}
    >
      <QuestionCard
        index={1}
        question={D[0].question}
        ifYes={D[0].ifYes}
        appearAt={12}
      />
      <QuestionCard
        index={2}
        question={D[1].question}
        ifYes={D[1].ifYes}
        appearAt={5 * FPS + 12}
      />
      <QuestionCard
        index={3}
        question={D[2].question}
        ifYes={D[2].ifYes}
        appearAt={10 * FPS + 12}
      />
    </AbsoluteFill>
  );
};
