import { AbsoluteFill } from "remotion";
import { ChecklistPanel } from "../components/ChecklistPanel";
import { useLocale } from "../LocaleContext";

export const Scene10DontUse: React.FC = () => {
  const { t } = useLocale();
  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ChecklistPanel
        variant="dont"
        title={t.text.dontUse.title}
        items={t.text.dontUse.items}
        appearAt={12}
        width={920}
      />
    </AbsoluteFill>
  );
};
