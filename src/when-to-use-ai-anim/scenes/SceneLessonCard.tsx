import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";

// Chapter divider. Each lesson opens with one of these so the viewer always
// knows where they are in the argument: "Lesson 2/4 — title".
//
// Renders three stacked elements that land in sequence:
//   1. The "LESSON N / 4" kicker (small, amber, all-caps)
//   2. The lesson title (large display weight)
//   3. A thin amber underline rule that draws across after the title settles
//
// Used as a stand-alone scene placed before each lesson's content scenes.
type Props = {
  index: number;       // 1, 2, 3, 4
  total: number;       // total number of lessons (so we display "1 / 4")
  title: string;       // big display text
};

export const SceneLessonCard: React.FC<Props> = ({ index, total, title }) => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const sceneEnd = 4 * FPS; // hold long enough that viewer reads it; tuned per scene duration

  const kickerReveal = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const titleReveal = interpolate(frame, [12, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // Underline rule draws after the title settles
  const ruleProgress = interpolate(frame, [36, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // Exit fade
  const exit = interpolate(frame, [sceneEnd - 18, sceneEnd], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 36,
        opacity: exit,
        padding: "0 120px",
      }}
    >
      {/* Kicker: "LESSON 2 / 4" */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          opacity: kickerReveal,
          transform: `translateY(${(1 - kickerReveal) * 12}px)`,
        }}
      >
        <span
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 22,
            color: COLORS.amber,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          {t.text.lessons.kicker}
        </span>
        <span
          style={{
            fontFamily: FONT.mono,
            fontWeight: 600,
            fontSize: 22,
            color: COLORS.text,
            letterSpacing: 2,
          }}
        >
          {String(index).padStart(2, "0")}
          <span style={{ color: COLORS.textFaint, margin: "0 6px" }}>/</span>
          <span style={{ color: COLORS.textFaint }}>
            {String(total).padStart(2, "0")}
          </span>
        </span>
      </div>

      {/* Big title */}
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 600,
          fontSize: 76,
          color: COLORS.text,
          letterSpacing: -2,
          lineHeight: 1.05,
          textAlign: "center",
          maxWidth: 1500,
          opacity: titleReveal,
          transform: `translateY(${(1 - titleReveal) * 18}px)`,
        }}
      >
        {title}
      </div>

      {/* Underline rule — draws left-to-right */}
      <div
        style={{
          position: "relative",
          width: 320,
          height: 3,
          marginTop: 8,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: `${ruleProgress * 100}%`,
            height: "100%",
            background: COLORS.amber,
            transform: "translateX(-50%)",
            boxShadow: `0 0 12px ${COLORS.amberHalo}`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
