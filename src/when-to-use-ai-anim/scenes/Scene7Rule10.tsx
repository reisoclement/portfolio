import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Disk } from "../components/Disk";
import { Stack, type Rung } from "../components/Stack";
import { LAYER_KEYS, getLayerLabels } from "../layers";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";

// The SOLUTION half of Lesson 2.
// Plays AFTER SceneBackwards (which shows the wrong way: 90% AI / X-ed out).
//
// Visual: side-by-side. On the left, the same stack from earlier in the
// piece — 5 layers, AI as a thin amber rung on top of solid steel layers.
// On the right, a 10% disk that maps to the AI rung's share of the system.
// The two visuals reinforce each other: AI is *one layer on top* and *about
// 10% of the system*.
export const Scene7Rule10: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const R = t.text.rule10;
  const labels = getLayerLabels(t);

  // Beat timing
  const titleAt = 0;
  const stackAt = Math.round(0.6 * FPS);
  const arrowAt = Math.round(2.0 * FPS);
  const diskAt = Math.round(2.4 * FPS);
  const subAt = Math.round(5.5 * FPS);

  const titleReveal = interpolate(frame, [titleAt, titleAt + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const arrowReveal = interpolate(frame, [arrowAt, arrowAt + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const subReveal = interpolate(frame, [subAt, subAt + 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // The familiar 5-rung stack with AI on top in amber.
  const rungs: Rung[] = [
    { label: labels[0], iconKey: LAYER_KEYS[0], state: "amber", appearAt: stackAt },
    { label: labels[1], iconKey: LAYER_KEYS[1], state: "steel", appearAt: stackAt },
    { label: labels[2], iconKey: LAYER_KEYS[2], state: "steel", appearAt: stackAt },
    { label: labels[3], iconKey: LAYER_KEYS[3], state: "steel", appearAt: stackAt },
    { label: labels[4], iconKey: LAYER_KEYS[4], state: "steel", appearAt: stackAt },
  ];

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      {/* Title at the top */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleReveal,
          transform: `translateY(${(1 - titleReveal) * 12}px)`,
          padding: "0 80px",
        }}
      >
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 500,
            fontSize: 18,
            color: COLORS.amber,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {R.kicker}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 44,
            color: COLORS.text,
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          {R.headline}
        </div>
      </div>

      {/* Side-by-side: stack on the left, disk on the right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 80,
          width: "100%",
          padding: "0 60px",
          marginTop: 30,
        }}
      >
        {/* LEFT: the stack */}
        <Stack
          rungs={rungs}
          width={520}
          rungHeight={64}
          gap={6}
        />

        {/* MIDDLE: connector arrow + label "= about 10%" */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            opacity: arrowReveal,
            transform: `translateY(${(1 - arrowReveal) * 8}px)`,
          }}
        >
          <div
            style={{
              fontFamily: FONT.display,
              fontWeight: 500,
              fontSize: 22,
              color: COLORS.amber,
              letterSpacing: 1,
              whiteSpace: "nowrap",
            }}
          >
            {R.arrowLabel}
          </div>
          <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
            <path
              d="M2 10 L70 10 M62 4 L72 10 L62 16"
              stroke={COLORS.amber}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* RIGHT: the disk */}
        <Disk
          percent={10}
          appearAt={diskAt}
          centerLabel={R.diskCenter}
          subLabel={R.diskSub}
          size={340}
        />
      </div>

      {/* Subline at the bottom */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 80,
          textAlign: "center",
          padding: "0 120px",
          opacity: subReveal,
          transform: `translateY(${(1 - subReveal) * 10}px)`,
        }}
      >
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 500,
            fontSize: 24,
            color: COLORS.text,
            letterSpacing: 0.3,
            marginBottom: 6,
          }}
        >
          {R.subline}
        </div>
        <div
          style={{
            display: "inline-flex",
            gap: 28,
            marginTop: 4,
          }}
        >
          <LegendDot color={COLORS.amber} label={R.legendAi} />
          <LegendDot color={COLORS.steel} label={R.legendCode} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

const LegendDot: React.FC<{ color: string; label: string }> = ({
  color,
  label,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: color,
      }}
    />
    <div
      style={{
        fontFamily: FONT.display,
        fontWeight: 500,
        fontSize: 18,
        color: COLORS.textDim,
        letterSpacing: 0.4,
      }}
    >
      {label}
    </div>
  </div>
);
