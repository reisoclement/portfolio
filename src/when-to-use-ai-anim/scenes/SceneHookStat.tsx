import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";

// Counter rolls from 0 to 95, then "% of AI projects fail" lands.
// Source: NANDA / MIT 2025 study on enterprise GenAI adoption.
export const SceneHookStat: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();

  // Number rolls 0 -> 95 over ~1.2s
  const rollStart = 12;
  const rollEnd = rollStart + Math.round(1.2 * FPS);
  const value = Math.round(
    interpolate(frame, [rollStart, rollEnd], [0, 95], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOutQuart,
    }),
  );

  const labelReveal = interpolate(frame, [rollEnd, rollEnd + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const subReveal = interpolate(
    frame,
    [rollEnd + 30, rollEnd + 48],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOutQuart,
    },
  );

  // Pulse the number once it reaches 95 to draw the eye
  const pulse =
    frame > rollEnd
      ? 1 + 0.04 * Math.sin((frame - rollEnd) * 0.18) *
        Math.max(0, 1 - (frame - rollEnd) / 30)
      : 1;

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 700,
          fontSize: 280,
          color: COLORS.coral,
          letterSpacing: -8,
          lineHeight: 1,
          transform: `scale(${pulse})`,
          textShadow: `0 0 60px ${COLORS.coralSoft}`,
        }}
      >
        {value}%
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 500,
          fontSize: 38,
          color: COLORS.text,
          letterSpacing: -0.5,
          marginTop: 12,
          opacity: labelReveal,
          transform: `translateY(${(1 - labelReveal) * 12}px)`,
        }}
      >
        {t.text.hookStat.percentLabel}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 400,
          fontSize: 20,
          color: COLORS.textFaint,
          letterSpacing: 1.5,
          marginTop: 36,
          opacity: subReveal,
          textTransform: "uppercase",
        }}
      >
        {t.text.hookStat.source}
      </div>
    </AbsoluteFill>
  );
};
