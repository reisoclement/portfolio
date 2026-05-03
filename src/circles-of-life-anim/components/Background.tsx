import { AbsoluteFill } from "remotion";
import { COLORS } from "../theme";

export const Background: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 50%, ${COLORS.bgGlow} 0%, ${COLORS.bg} 70%)`,
      }}
    />
  );
};
