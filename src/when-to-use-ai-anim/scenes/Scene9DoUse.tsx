import { AbsoluteFill } from "remotion";
import { ChecklistPanel } from "../components/ChecklistPanel";
import { useLocale } from "../LocaleContext";

export const Scene9DoUse: React.FC = () => {
  const { t } = useLocale();
  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ChecklistPanel
        variant="do"
        title={t.text.doUse.title}
        items={t.text.doUse.items}
        appearAt={12}
        width={920}
      />
    </AbsoluteFill>
  );
};
