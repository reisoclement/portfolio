import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";

// Two "bad" choices on the left, FTL New Gen as the answer on the right.
export const SceneFTLIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 7 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const bad1 = rise(frame, 30, 22, 22);
  const bad2 = rise(frame, 60, 22, 22);
  const ftl = rise(frame, 110, 24, 30);
  const payoff = rise(frame, 150, 22, 22);

  const arrow = interpolate(frame, [100, 130], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 130, right: 120 }}>
        <SectionHeading kicker={t.text.ftlIntro.kicker} title={t.text.ftlIntro.heading} />
      </div>

      {/* Left: two bad options */}
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 380,
          width: 720,
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <BadOption text={t.text.ftlIntro.bad1} y={bad1.y} opacity={bad1.opacity} />
        <BadOption text={t.text.ftlIntro.bad2} y={bad2.y} opacity={bad2.opacity} />
      </div>

      {/* Center arrow */}
      <svg
        width={1920}
        height={1080}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <line
          x1={870}
          y1={520}
          x2={1080}
          y2={520}
          stroke={COLORS.amber}
          strokeWidth={4}
          strokeDasharray="10 8"
          opacity={arrow}
          strokeLinecap="round"
        />
        <polygon
          points={`1080,520 1062,510 1062,530`}
          fill={COLORS.amber}
          opacity={arrow}
        />
      </svg>

      {/* Right: FTL card */}
      <div
        style={{
          position: "absolute",
          right: 120,
          top: 380,
          width: 720,
          padding: "44px 48px",
          background: COLORS.amberSoft,
          border: `3px solid ${COLORS.amber}`,
          borderRadius: 20,
          opacity: ftl.opacity,
          transform: `translateY(${ftl.y}px)`,
        }}
      >
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: 28,
            color: COLORS.amber,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          The third option
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 80,
            fontWeight: 700,
            color: COLORS.text,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          {t.text.ftlIntro.ftl}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 32,
            color: COLORS.amber,
            marginTop: 22,
            fontWeight: 500,
            lineHeight: 1.35,
            opacity: payoff.opacity,
            transform: `translateY(${payoff.y}px)`,
          }}
        >
          {t.text.ftlIntro.payoff}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const BadOption: React.FC<{ text: string; y: number; opacity: number }> = ({ text, y, opacity }) => (
  <div
    style={{
      display: "flex",
      gap: 22,
      alignItems: "flex-start",
      padding: "26px 30px",
      background: COLORS.removedSoft,
      border: `2px solid ${COLORS.removed}`,
      borderRadius: 14,
      opacity,
      transform: `translateY(${y}px)`,
    }}
  >
    <div
      style={{
        fontFamily: FONT.mono,
        fontSize: 36,
        fontWeight: 700,
        color: COLORS.removed,
        flexShrink: 0,
        lineHeight: 1,
      }}
    >
      ✕
    </div>
    <div
      style={{
        fontFamily: FONT.display,
        fontSize: 32,
        color: COLORS.text,
        lineHeight: 1.35,
        letterSpacing: -0.3,
      }}
    >
      {text}
    </div>
  </div>
);
