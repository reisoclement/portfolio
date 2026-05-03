import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../theme";

interface DotProps {
  cx: number;
  cy: number;
  startFrame?: number;
  size?: number;
}

export const Dot: React.FC<DotProps> = ({
  cx,
  cy,
  startFrame = 0,
  size = 14,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - startFrame;

  const scale = spring({
    frame: local,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      <circle r={size + 10} fill={COLORS.rings.self} opacity={0.25} style={{ filter: "blur(8px)" }} />
      <circle r={size} fill={COLORS.rings.self} />
    </g>
  );
};
