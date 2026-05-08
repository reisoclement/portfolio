import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { easeOutQuart, easeInOutCubic } from "../anim";

type Props = {
  /** Percentage of amber wedge (0-100). 10 = "10% AI". 90 = inverted. */
  percent: number;
  /** Frame to start drawing in. */
  appearAt: number;
  /** Optional center label. */
  centerLabel?: string;
  /** Optional sublabel under centerLabel. */
  subLabel?: string;
  size?: number;
  /** If true, renders coral instead of amber for the wedge (used for the "wrong" beat). */
  coral?: boolean;
  /** If true, applies a subtle wobble (used for the "backwards" beat). */
  wobble?: boolean;
};

export const Disk: React.FC<Props> = ({
  percent,
  appearAt,
  centerLabel,
  subLabel,
  size = 360,
  coral = false,
  wobble = false,
}) => {
  const frame = useCurrentFrame();
  const draw = interpolate(frame, [appearAt, appearAt + 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const wedgeColor = coral ? COLORS.coral : COLORS.amber;
  const ringColor = COLORS.steel;

  // Wobble: small rotation oscillation after appear
  const wobbleAmount = wobble
    ? Math.sin((frame - appearAt) * 0.35) *
      interpolate(frame, [appearAt + 14, appearAt + 70], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: easeInOutCubic,
      }) *
      4
    : 0;

  // Animated percent-fill: 0 -> percent
  const filled = percent * draw;

  // Use conic-gradient to draw the pie
  const gradient = `conic-gradient(${wedgeColor} 0deg ${filled * 3.6}deg, ${ringColor} ${filled * 3.6}deg 360deg)`;

  const labelOpacity = interpolate(
    frame,
    [appearAt + 18, appearAt + 32],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOutQuart,
    },
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 28,
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: gradient,
          position: "relative",
          transform: `rotate(${wobbleAmount}deg) scale(${0.9 + 0.1 * draw})`,
          opacity: draw,
          boxShadow: coral
            ? `0 0 60px ${COLORS.coralSoft}`
            : `0 0 60px ${COLORS.amberSoft}`,
        }}
      >
        {/* Inner cutout to make it a ring/donut */}
        <div
          style={{
            position: "absolute",
            inset: size * 0.18,
            borderRadius: "50%",
            background: COLORS.bgCore,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: labelOpacity,
          }}
        >
          {centerLabel && (
            <div
              style={{
                fontFamily: FONT.display,
                fontWeight: 600,
                fontSize: size * 0.16,
                color: coral ? COLORS.coral : COLORS.amber,
                letterSpacing: -1,
                lineHeight: 1,
              }}
            >
              {centerLabel}
            </div>
          )}
          {subLabel && (
            <div
              style={{
                fontFamily: FONT.display,
                fontWeight: 400,
                fontSize: size * 0.06,
                color: COLORS.textDim,
                letterSpacing: 1.5,
                marginTop: 8,
                textTransform: "uppercase",
              }}
            >
              {subLabel}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
