import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";

export const Background: React.FC<{ warm?: boolean }> = ({ warm = false }) => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 220) * 8;
  const top = warm ? COLORS.bgWarm : COLORS.bgGlow;
  const bottom = COLORS.bg;
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${180 + drift}deg, ${top} 0%, ${bottom} 70%)`,
      }}
    />
  );
};
