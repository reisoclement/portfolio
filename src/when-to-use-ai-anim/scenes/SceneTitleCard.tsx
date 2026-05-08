import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";

// Title card. Lands cleanly with subtitle that frames the question.
export const SceneTitleCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 6 * FPS;

  const titleReveal = interpolate(frame, [6, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  const subReveal = interpolate(frame, [30, 54], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  const exit = interpolate(frame, [total - 18, total], [1, 0], {
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
        opacity: exit,
      }}
    >
      {/* Small kicker line */}
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 500,
          fontSize: 22,
          color: COLORS.amber,
          letterSpacing: 6,
          textTransform: "uppercase",
          marginBottom: 28,
          opacity: titleReveal,
        }}
      >
        {t.text.titleCard.kicker}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 700,
          fontSize: 144,
          color: COLORS.text,
          letterSpacing: -4,
          lineHeight: 1,
          opacity: titleReveal,
          transform: `translateY(${(1 - titleReveal) * 18}px)`,
        }}
      >
        {t.text.titleCard.title}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 400,
          fontSize: 32,
          color: COLORS.textDim,
          letterSpacing: 0.5,
          marginTop: 36,
          opacity: subReveal,
          transform: `translateY(${(1 - subReveal) * 12}px)`,
          textAlign: "center",
        }}
      >
        {t.text.titleCard.subtitle}
      </div>
    </AbsoluteFill>
  );
};
