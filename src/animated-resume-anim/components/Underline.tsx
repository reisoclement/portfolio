import { COLORS } from "../theme";

export const Underline: React.FC<{
  progress: number;
  width: number;
  color?: string;
  thickness?: number;
}> = ({ progress, width, color = COLORS.accent, thickness = 2 }) => {
  return (
    <div
      style={{
        width: width * progress,
        height: thickness,
        background: color,
        borderRadius: thickness,
        transition: "none",
      }}
    />
  );
};
