import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";

// End card. Two-line punchline.
export const Scene14Closer: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const C = t.text.closer;
  const reveal = interpolate(frame, [0, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  const subReveal = interpolate(frame, [30, 54], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  // Fade out the whole card at end
  const total = 12 * FPS;
  const exit = interpolate(frame, [total - 24, total], [1, 0], {
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
        gap: 32,
        opacity: exit,
      }}
    >
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 600,
          fontSize: 96,
          color: COLORS.amber,
          letterSpacing: -2,
          opacity: reveal,
          transform: `translateY(${(1 - reveal) * 20}px)`,
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        {C.lineOne}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 600,
          fontSize: 64,
          color: COLORS.text,
          letterSpacing: -1,
          opacity: subReveal,
          transform: `translateY(${(1 - subReveal) * 20}px)`,
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        {C.lineTwo}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 400,
          fontSize: 22,
          color: COLORS.textDim,
          letterSpacing: 4,
          textTransform: "uppercase",
          marginTop: 36,
          opacity: interpolate(frame, [3 * FPS, 4 * FPS], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeOutQuart,
          }),
        }}
      >
        {C.kicker}
      </div>
    </AbsoluteFill>
  );
};
