import { AbsoluteFill } from "remotion";
import { theme } from "../theme";

export const Background: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at center, ${theme.panel} 0%, ${theme.bg} 70%)`,
      }}
    />
  );
};
