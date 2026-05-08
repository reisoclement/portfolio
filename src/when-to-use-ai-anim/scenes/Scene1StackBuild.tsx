import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Stack, type Rung } from "../components/Stack";
import { LAYER_KEYS, getLayerLabels } from "../layers";
import { Caption } from "../components/Caption";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";

// Builds the stack bottom-up: Electrons -> Hardware -> Machine Code ->
// Programming Languages. The AI rung is HIDDEN here; it lands in Scene2.
export const Scene1StackBuild: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const labels = getLayerLabels(t);

  // Title lands first (before any rungs)
  const titleReveal = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  const subReveal = interpolate(frame, [14, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // Cadence: ~16f between each rung. Start late so title gets to breathe.
  const step = 16;
  const start = 36;
  const rungs: Rung[] = [
    { label: labels[0], iconKey: LAYER_KEYS[0], state: "hidden", appearAt: 9999 }, // AI hidden
    { label: labels[1], iconKey: LAYER_KEYS[1], state: "amber", appearAt: start + 3 * step },
    { label: labels[2], iconKey: LAYER_KEYS[2], state: "steel", appearAt: start + 2 * step },
    { label: labels[3], iconKey: LAYER_KEYS[3], state: "steel", appearAt: start + 1 * step },
    { label: labels[4], iconKey: LAYER_KEYS[4], state: "steel", appearAt: start + 0 * step },
  ];

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          padding: "0 120px",
        }}
      >
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 44,
            color: COLORS.text,
            letterSpacing: -1,
            lineHeight: 1.1,
            opacity: titleReveal,
            transform: `translateY(${(1 - titleReveal) * 14}px)`,
            marginBottom: 10,
          }}
        >
          {t.text.stackBuild.headline}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 500,
            fontSize: 22,
            color: COLORS.amber,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: subReveal,
          }}
        >
          {t.text.stackBuild.subline}
        </div>
      </div>

      <Stack
        rungs={rungs}
        timeline={{
          fromLabel: "1804",
          toLabel: t.text.aiLayer.present,
          appearAt: start - 6,
        }}
      />

      <Caption
        text={t.text.stackBuild.caption}
        inFrame={start + 4 * step}
        outFrame={6 * FPS + 24}
        position="bottom"
        size={32}
      />
    </AbsoluteFill>
  );
};
