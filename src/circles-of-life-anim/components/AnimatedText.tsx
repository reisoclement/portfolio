import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY } from "../theme";

interface AnimatedTextProps {
  text: string;
  startFrame: number;
  x: number;
  y: number;
  fontSize?: number;
  color?: string;
  weight?: number;
  align?: "left" | "center" | "right";
  glow?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  startFrame,
  x,
  y,
  fontSize = 28,
  color = "#f5f7ff",
  weight = 500,
  align = "center",
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

  const translateX = align === "left" ? "0%" : align === "right" ? "-100%" : "-50%";

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translate(${translateX}, calc(-50% + ${offset}px))`,
        opacity,
        fontFamily: FONT_FAMILY,
        fontSize,
        fontWeight: weight,
        color,
        whiteSpace: "nowrap",
        textShadow: glow ? `0 0 18px ${glow}` : undefined,
        letterSpacing: "-0.01em",
      }}
    >
      {text}
    </div>
  );
};
