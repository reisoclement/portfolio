import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface RingProps {
  cx: number;
  cy: number;
  radius: number;
  color: string;
  startFrame: number;
  strokeWidth?: number;
  glow?: boolean;
  filled?: number;
}

export const Ring: React.FC<RingProps> = ({
  cx,
  cy,
  radius,
  color,
  startFrame,
  strokeWidth = 3,
  glow = true,
  filled = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - startFrame;

  const drawProgress = spring({
    frame: local,
    fps,
    config: { damping: 14, stiffness: 80 },
  });

  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - drawProgress);

  const fillOpacity = interpolate(filled, [0, 1], [0, 0.12]);

  return (
    <g>
      {glow && (
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth + 6}
          opacity={drawProgress * 0.25}
          style={{ filter: `blur(8px)` }}
        />
      )}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={color}
        opacity={fillOpacity}
      />
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        transform={`rotate(-90 ${cx} ${cy})`}
        opacity={drawProgress}
      />
    </g>
  );
};
