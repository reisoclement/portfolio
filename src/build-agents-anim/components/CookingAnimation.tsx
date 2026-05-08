import { useCurrentFrame, interpolate } from "remotion";
import { theme } from "../theme";

type Props = {
  progress: number;
};

export const CookingAnimation: React.FC<Props> = ({ progress }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: 520,
        height: 140,
        background: theme.panel,
        border: `1.5px solid ${theme.amber}`,
        borderRadius: 10,
        boxShadow: `0 0 24px ${theme.amber}33`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 24px",
      }}
    >
      <MixingBowl frame={frame} />
      <Oven frame={frame} progress={progress} />
      <CakePan progress={progress} />
    </div>
  );
};

const MixingBowl: React.FC<{ frame: number }> = ({ frame }) => {
  const w = 110;
  const h = 100;
  const wobble = Math.sin(frame * 0.2) * 1.5;

  const angle = (frame * 12) % 360;
  const rad = (angle * Math.PI) / 180;
  const c = Math.cos(rad);
  const w1 = Math.abs(c) * 11 + 0.6;
  const w2 = Math.abs(Math.cos(rad + Math.PI / 2)) * 11 + 0.6;

  const axisX = w / 2;
  const wireCy = 26;
  const wireRy = 14;

  return (
    <svg width={w} height={h} style={{ overflow: "visible" }}>
      <ellipse cx={w / 2} cy={32} rx={42} ry={10} fill="none" stroke={theme.text} strokeWidth={2.5} />
      <path
        d={`M ${w / 2 - 42} 32 Q ${w / 2} ${h - 4} ${w / 2 + 42} 32`}
        fill={theme.panel}
        stroke={theme.text}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
      <ellipse cx={w / 2} cy={36 + wobble} rx={36} ry={6} fill={theme.amber} opacity={0.55} />
      <line x1={axisX} y1={-6} x2={axisX} y2={36} stroke={theme.text} strokeWidth={3} strokeLinecap="round" />
      <ellipse cx={axisX} cy={wireCy} rx={w1} ry={wireRy} fill="none" stroke={theme.text} strokeWidth={2} />
      <ellipse cx={axisX} cy={wireCy} rx={w2} ry={wireRy} fill="none" stroke={theme.text} strokeWidth={2} />
    </svg>
  );
};

const Oven: React.FC<{ frame: number; progress: number }> = ({ frame, progress }) => {
  const w = 110;
  const h = 110;
  const timerAngle = (frame * 3) % 360;
  const heatOffset = (frame * 0.6) % 18;
  const heatOpacity = interpolate(progress, [0, 0.2, 1], [0.2, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const boxX = 8;
  const boxY = 18;
  const boxW = w - 16;
  const boxH = h - 28;

  const winX = boxX + 12;
  const winY = boxY + 24;
  const winW = boxW - 24;
  const winH = boxH - 44;

  const dialCx = boxX + boxW - 14;
  const dialCy = boxY + 12;
  const dialR = 8;
  const handX = dialCx + Math.cos((timerAngle - 90) * (Math.PI / 180)) * (dialR - 2);
  const handY = dialCy + Math.sin((timerAngle - 90) * (Math.PI / 180)) * (dialR - 2);

  return (
    <svg width={w} height={h} style={{ overflow: "visible" }}>
      <rect x={boxX} y={boxY} width={boxW} height={boxH} rx={6} fill={theme.panel} stroke={theme.text} strokeWidth={2.5} />
      <line x1={boxX} y1={boxY + 18} x2={boxX + boxW} y2={boxY + 18} stroke={theme.text} strokeWidth={1.5} />
      <circle cx={dialCx} cy={dialCy} r={dialR} fill="none" stroke={theme.text} strokeWidth={1.5} />
      <line x1={dialCx} y1={dialCy} x2={handX} y2={handY} stroke={theme.amber} strokeWidth={1.8} strokeLinecap="round" />
      <circle cx={dialCx} cy={dialCy} r={1.5} fill={theme.amber} />
      <line x1={boxX + 8} y1={boxY + 12} x2={boxX + 22} y2={boxY + 12} stroke={theme.text} strokeWidth={2.5} strokeLinecap="round" />
      <rect x={winX} y={winY} width={winW} height={winH} rx={3} fill="#08090C" stroke={theme.text} strokeWidth={1.5} />
      <g clipPath={`url(#oven-clip-${w})`}>
        <defs>
          <clipPath id={`oven-clip-${w}`}>
            <rect x={winX} y={winY} width={winW} height={winH} rx={3} />
          </clipPath>
        </defs>
        {[0, 1, 2].map((i) => {
          const y = winY + winH - 6 - i * 10 - heatOffset;
          return (
            <path
              key={i}
              d={`M ${winX + 6} ${y} q 5 -4 10 0 t 10 0 t 10 0 t 10 0`}
              fill="none"
              stroke={theme.red}
              strokeWidth={1.5}
              opacity={heatOpacity * (0.4 + i * 0.2)}
            />
          );
        })}
      </g>
    </svg>
  );
};

const CakePan: React.FC<{ progress: number }> = ({ progress }) => {
  const w = 110;
  const h = 90;
  const cx = w / 2;
  const rimY = 24;
  const rimRx = 44;
  const rimRy = 8;
  const panBottomY = h - 14;
  const panDepth = panBottomY - rimY;

  const fillPct = interpolate(progress, [0, 1], [0.1, 0.9], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const batterY = rimY + panDepth * (1 - fillPct);
  const batterRx = rimRx * 0.96;

  return (
    <svg width={w} height={h} style={{ overflow: "visible" }}>
      <path
        d={`
          M ${cx - rimRx} ${rimY}
          Q ${cx - rimRx} ${panBottomY} ${cx} ${panBottomY}
          Q ${cx + rimRx} ${panBottomY} ${cx + rimRx} ${rimY}
        `}
        fill={theme.panel}
        stroke={theme.text}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
      <defs>
        <clipPath id="pan-clip">
          <path
            d={`
              M ${cx - rimRx} ${rimY}
              Q ${cx - rimRx} ${panBottomY} ${cx} ${panBottomY}
              Q ${cx + rimRx} ${panBottomY} ${cx + rimRx} ${rimY}
              Z
            `}
          />
        </clipPath>
      </defs>
      <g clipPath="url(#pan-clip)">
        <rect x={cx - rimRx - 2} y={batterY} width={(rimRx + 2) * 2} height={panBottomY - batterY + 4} fill={theme.amber} opacity={0.75} />
        <ellipse cx={cx} cy={batterY} rx={batterRx} ry={rimRy * 0.85} fill={theme.amber} />
      </g>
      <ellipse cx={cx} cy={rimY} rx={rimRx} ry={rimRy} fill="none" stroke={theme.text} strokeWidth={2.5} />
    </svg>
  );
};
