import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT } from "../theme";
import { fadeIn, rise, easeOut } from "./anim";

export const StatCard: React.FC<{
  bigText: string;
  bigSubText?: string;
  caption: string;
  startFrame: number;
  dim?: boolean;
}> = ({ bigText, bigSubText, caption, startFrame, dim = false }) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, startFrame, 22);
  const y = rise(frame, startFrame, 26, 22);
  const dimFactor = dim
    ? interpolate(frame, [startFrame + 80, startFrame + 110], [1, 0.32], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: easeOut,
      })
    : 1;

  return (
    <div
      style={{
        opacity: opacity * dimFactor,
        transform: `translateY(${y}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "36px 40px",
        minWidth: 420,
        maxWidth: 520,
        borderRadius: 16,
        border: `1px solid ${COLORS.line}`,
        background: "rgba(255,255,255,0.025)",
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontSize: 56,
          fontWeight: 600,
          color: COLORS.accent,
          letterSpacing: -1.2,
          lineHeight: 1.05,
        }}
      >
        {bigText}
      </div>
      {bigSubText ? (
        <div
          style={{
            fontFamily: FONT,
            fontSize: 22,
            fontWeight: 500,
            color: COLORS.gold,
            letterSpacing: 0.3,
          }}
        >
          {bigSubText}
        </div>
      ) : null}
      <div
        style={{
          fontFamily: FONT,
          fontSize: 22,
          fontWeight: 400,
          color: COLORS.text,
          lineHeight: 1.45,
          opacity: 0.92,
        }}
      >
        {caption}
      </div>
    </div>
  );
};
