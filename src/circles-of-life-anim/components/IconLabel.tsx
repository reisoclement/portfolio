import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY } from "../theme";
import { ICONS } from "../icons";

interface IconLabelProps {
  /** Stable identifier used to look up the icon (language-independent). */
  iconKey: string;
  /** Localized text shown next to the icon. */
  text: string;
  startFrame: number;
  x: number;
  y: number;
  fontSize?: number;
  iconSize?: number;
  color?: string;
  align?: "left" | "center" | "right";
  glow?: string;
}

export const IconLabel: React.FC<IconLabelProps> = ({
  iconKey,
  text,
  startFrame,
  x,
  y,
  fontSize = 28,
  iconSize,
  color = "#f5f7ff",
  align = "left",
  glow,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - startFrame;

  const opacity = spring({
    frame: local,
    fps,
    config: { damping: 18, stiffness: 90 },
  });
  const offset = interpolate(opacity, [0, 1], [10, 0]);

  const Icon = ICONS[iconKey];
  const realIconSize = iconSize ?? Math.round(fontSize * 1.1);
  const translateX = align === "left" ? "0%" : align === "right" ? "-100%" : "-50%";

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translate(${translateX}, calc(-50% + ${offset}px))`,
        opacity,
        display: "flex",
        alignItems: "center",
        gap: 14,
        flexDirection: align === "right" ? "row-reverse" : "row",
        fontFamily: FONT_FAMILY,
        fontSize,
        fontWeight: 500,
        color,
        whiteSpace: "nowrap",
        textShadow: glow ? `0 0 18px ${glow}` : undefined,
        letterSpacing: "-0.01em",
      }}
    >
      {Icon ? (
        <Icon
          size={realIconSize}
          color={color}
          strokeWidth={1.8}
          style={{
            flexShrink: 0,
            filter: glow ? `drop-shadow(0 0 8px ${glow})` : undefined,
          }}
        />
      ) : null}
      <span>{text}</span>
    </div>
  );
};
