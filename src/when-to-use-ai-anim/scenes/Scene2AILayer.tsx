import { AbsoluteFill } from "remotion";
import { Stack, type Rung } from "../components/Stack";
import { LAYER_KEYS, getLayerLabels } from "../layers";
import { Caption } from "../components/Caption";
import { FPS } from "../theme";
import { useLocale } from "../LocaleContext";

// AI rung slides in on top of the already-built 4-rung stack.
export const Scene2AILayer: React.FC = () => {
  const { t } = useLocale();
  const labels = getLayerLabels(t);

  // Lower rungs use a negative appearAt so they're already fully visible at
  // frame 0 — no fade-in, no flash. Only AI animates in.
  const ALREADY = -30;
  const rungs: Rung[] = [
    { label: labels[0], iconKey: LAYER_KEYS[0], state: "amber", appearAt: 12 },
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
        timeline={{
          fromLabel: "1804",
          toLabel: t.text.aiLayer.present,
          appearAt: -30,
        }}
        sideLabels={[
          { atIndex: 0, label: t.text.aiLayer.sideAi, appearAt: 24 },
          { atIndex: 4, label: t.text.aiLayer.sideElectrons, appearAt: -30 },
        ]}
      />
      <Caption
        text={t.text.aiLayer.caption}
        inFrame={1 * FPS + 18}
        outFrame={6 * FPS + 24}
        position="bottom"
        size={32}
      />
    </AbsoluteFill>
  );
};
