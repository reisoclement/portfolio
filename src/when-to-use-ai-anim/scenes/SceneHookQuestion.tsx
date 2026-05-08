import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutExpo } from "../anim";
import { useLocale } from "../LocaleContext";

// Cold open. Big bold typographic hook: "Why does AI break?"
// The whole phrase appears as one unit — soft float-in with a blur-to-clear
// focus and a gentle rise. The amber question mark scales in with the line.
export const SceneHookQuestion: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 6 * FPS;

  // Single unified reveal for the whole line
  const REVEAL_START = 12;
  const REVEAL_DURATION = 32;

  const reveal = interpolate(
    frame,
    [REVEAL_START, REVEAL_START + REVEAL_DURATION],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOutExpo,
    },
  );

  const exit = interpolate(frame, [total - 22, total], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutExpo,
  });

  // Blur resolves from 8px -> 0 so the line "focuses in"
  const blurPx = (1 - reveal) * 8;

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        opacity: exit,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 24,
          fontFamily: FONT.display,
          fontWeight: 600,
          fontSize: 140,
          letterSpacing: -4,
          color: COLORS.text,
          opacity: reveal,
          transform: `translateY(${(1 - reveal) * 16}px)`,
          filter: `blur(${blurPx}px)`,
          willChange: "opacity, transform, filter",
        }}
      >
        <span>{t.text.hookQuestion.line}</span>
        <span
          style={{
            color: COLORS.amber,
            transform: `scale(${0.85 + 0.15 * reveal})`,
            transformOrigin: "center bottom",
            display: "inline-block",
          }}
        >
          ?
        </span>
      </div>
    </AbsoluteFill>
  );
};
