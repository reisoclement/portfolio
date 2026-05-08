import { AbsoluteFill } from "remotion";
import { Stack, type Rung } from "../components/Stack";
import { LAYER_KEYS, getLayerLabels } from "../layers";
import { Caption } from "../components/Caption";
import { FPS } from "../theme";
import { useLocale } from "../LocaleContext";

// Stack returns, fully lit. AI rung in amber, lower rungs all solid steel.
// Emotional close: AI on top of a solid base, not as the base.
export const Scene13Mindset: React.FC = () => {
  const { t } = useLocale();
  const labels = getLayerLabels(t);

  const ALREADY = -30;
  const rungs: Rung[] = [
    { label: labels[0], iconKey: LAYER_KEYS[0], state: "amber", appearAt: ALREADY },
    { label: labels[1], iconKey: LAYER_KEYS[1], state: "steel", appearAt: ALREADY },
    { label: labels[2], iconKey: LAYER_KEYS[2], state: "steel", appearAt: ALREADY },
    { label: labels[3], iconKey: LAYER_KEYS[3], state: "steel", appearAt: ALREADY },
    { label: labels[4], iconKey: LAYER_KEYS[4], state: "steel", appearAt: ALREADY },
  ];

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        rungs={rungs}
        timeline={{ fromLabel: "1804", toLabel: t.text.aiLayer.present, appearAt: -30 }}
      />
      <Caption
        text={t.text.mindset.caption}
        inFrame={2 * FPS}
        outFrame={9 * FPS}
        position="bottom"
        size={28}
      />
    </AbsoluteFill>
  );
};
