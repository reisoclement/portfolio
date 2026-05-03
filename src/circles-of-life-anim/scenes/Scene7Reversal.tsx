import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "../components/Background";
import { Ring } from "../components/Ring";
import { AnimatedText } from "../components/AnimatedText";
import { CENTER, VIDEO, RADII } from "../layout";
import { COLORS } from "../theme";
import { getSceneAnchor } from "../voiceover/anchors";
import { useLocale } from "../LocaleContext";

const SCENE_ID = "scene-7-reversal";

const OUTER_RINGS = [
  { r: RADII.partner, c: COLORS.rings.partner },
  { r: RADII.children, c: COLORS.rings.children },
  { r: RADII.family, c: COLORS.rings.family },
  { r: RADII.friends, c: COLORS.rings.friends },
  { r: RADII.community, c: COLORS.rings.community },
  { r: RADII.country, c: COLORS.rings.country },
];

const DOT_R = 18;

const HOLES = [
  { dx: -6, dy: -7, path: "M -3 -1 C -3 -3, -1 -4, 1 -3 C 3 -2, 3 1, 1 2 C -1 3, -4 1, -3 -1 Z" },
  { dx: 6, dy: -5, path: "M -2 -2 C -1 -3, 2 -3, 2 -1 C 3 1, 1 3, -1 2 C -3 1, -3 -1, -2 -2 Z" },
  { dx: -8, dy: 4, path: "M -2 0 C -3 -2, 0 -3, 2 -1 C 3 1, 1 3, -1 2 C -3 2, -2 1, -2 0 Z" },
  { dx: 7, dy: 6, path: "M -2 -1 C -1 -3, 2 -2, 2 0 C 3 2, 0 3, -2 1 C -3 0, -3 0, -2 -1 Z" },
  { dx: 0, dy: -2, path: "M -2 0 C -2 -2, 1 -2, 2 0 C 2 2, -1 2, -2 0 Z" },
  { dx: -1, dy: 8, path: "M -3 -1 C -2 -2, 2 -2, 2 0 C 3 2, -1 3, -2 1 C -3 0, -3 0, -3 -1 Z" },
] as const;

export const Scene7Reversal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { locale, t } = useLocale();

  const mostPeopleFrame = getSceneAnchor(SCENE_ID, "most-people", 5, locale);
  const fixWorldFrame = getSceneAnchor(SCENE_ID, "fix-world", 22, locale);
  const climateWarsFrame = getSceneAnchor(SCENE_ID, "climate-wars", 42, locale);
  const politicsFrame = getSceneAnchor(SCENE_ID, "politics", 54, locale);
  const neverHeardFrame = getSceneAnchor(SCENE_ID, "never-heard", 66, locale);
  const socialMediaFrame = getSceneAnchor(SCENE_ID, "social-media", 78, locale);
  const toldThemFrame = getSceneAnchor(SCENE_ID, "told-them", 90, locale);
  const whileCenterFrame = getSceneAnchor(SCENE_ID, "while-center", 150, locale);
  const notBalancedFrame = getSceneAnchor(SCENE_ID, "not-balanced", 230, locale);

  // Phase B (zoom into the broken yellow center) starts at "while the center"
  // and completes by "broken".
  const zoomStart = whileCenterFrame;
  const zoomEnd = notBalancedFrame;

  const baseScale = 0.45;
  const scale = interpolate(frame, [zoomStart, zoomEnd], [baseScale, 14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const outerRingsOpacity = interpolate(frame, [zoomStart, zoomStart + 30], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const phaseAOpacity = interpolate(frame, [zoomStart - 10, zoomStart + 15], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Arrow lands a few frames before the "Most people start here" line so it's
  // visible by the time the voice gets there.
  const arrowSpringStart = mostPeopleFrame - 20;
  const arrowProgress = spring({
    frame: frame - arrowSpringStart,
    fps,
    config: { damping: 18, stiffness: 70 },
  });

  const worldR = RADII.world * baseScale;
  const angle = -Math.PI / 4;
  const ringTouchX = CENTER.x + Math.cos(angle) * worldR;
  const ringTouchY = CENTER.y + Math.sin(angle) * worldR;
  const arrowStartX = CENTER.x + Math.cos(angle) * (worldR + 220);
  const arrowStartY = CENTER.y + Math.sin(angle) * (worldR + 220);
  const tipX = arrowStartX + (ringTouchX - arrowStartX) * arrowProgress;
  const tipY = arrowStartY + (ringTouchY - arrowStartY) * arrowProgress;

  const dirAngle = Math.atan2(ringTouchY - arrowStartY, ringTouchX - arrowStartX);
  const headLen = 18;
  const headSpread = 8;
  const headBackX = tipX - Math.cos(dirAngle) * headLen;
  const headBackY = tipY - Math.sin(dirAngle) * headLen;
  const head1X = headBackX + Math.cos(dirAngle + Math.PI / 2) * headSpread;
  const head1Y = headBackY + Math.sin(dirAngle + Math.PI / 2) * headSpread;
  const head2X = headBackX - Math.cos(dirAngle + Math.PI / 2) * headSpread;
  const head2Y = headBackY - Math.sin(dirAngle + Math.PI / 2) * headSpread;

  const yellowFill = COLORS.rings.self;

  return (
    <AbsoluteFill>
      <Background />

      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: `${CENTER.x}px ${CENTER.y}px`,
        }}
      >
        <svg
          width={VIDEO.width}
          height={VIDEO.height}
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          <defs>
            <clipPath id="dot-clip">
              <circle cx={CENTER.x} cy={CENTER.y} r={DOT_R - 1} />
            </clipPath>
          </defs>

          <g opacity={outerRingsOpacity * 0.18}>
            {OUTER_RINGS.map((x, i) => (
              <Ring
                key={x.r}
                cx={CENTER.x}
                cy={CENTER.y}
                radius={x.r}
                color={x.c}
                startFrame={-60 + i * 2}
                strokeWidth={2}
                glow={false}
              />
            ))}
          </g>

          <g opacity={outerRingsOpacity}>
            <Ring
              cx={CENTER.x}
              cy={CENTER.y}
              radius={RADII.world}
              color={COLORS.rings.world}
              startFrame={-60}
              strokeWidth={5}
            />
          </g>

          <circle
            cx={CENTER.x}
            cy={CENTER.y}
            r={DOT_R + 10}
            fill={yellowFill}
            opacity={0.25}
            style={{ filter: "blur(8px)" }}
          />
          <circle cx={CENTER.x} cy={CENTER.y} r={DOT_R} fill={yellowFill} />

          <g clipPath="url(#dot-clip)">
            {HOLES.map((h, i) => {
              const localFrame = frame - (zoomStart + 45 + i * 5);
              const holeOpacity = interpolate(localFrame, [0, 14], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <path
                  key={i}
                  d={h.path}
                  fill={COLORS.bg}
                  opacity={holeOpacity}
                  transform={`translate(${CENTER.x + h.dx} ${CENTER.y + h.dy})`}
                />
              );
            })}
          </g>
        </svg>
      </AbsoluteFill>

      <div style={{ opacity: phaseAOpacity }}>
        <svg
          width={VIDEO.width}
          height={VIDEO.height}
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {arrowProgress > 0.05 && (
            <g opacity={arrowProgress}>
              <line
                x1={arrowStartX}
                y1={arrowStartY}
                x2={tipX}
                y2={tipY}
                stroke={COLORS.rings.world}
                strokeWidth={3}
                strokeLinecap="round"
              />
              <polygon
                points={`${tipX},${tipY} ${head1X},${head1Y} ${head2X},${head2Y}`}
                fill={COLORS.rings.world}
              />
            </g>
          )}
        </svg>

        <AnimatedText
          text={t.text.reversal.mostPeople}
          startFrame={mostPeopleFrame}
          x={arrowStartX + 20}
          y={arrowStartY - 90}
          fontSize={36}
          weight={600}
          color={COLORS.rings.world}
          align="left"
          glow={COLORS.rings.world}
        />
        <AnimatedText
          text={t.text.reversal.tryingToFix}
          startFrame={fixWorldFrame}
          x={arrowStartX + 20}
          y={arrowStartY - 40}
          fontSize={28}
          color={COLORS.text}
          align="left"
        />
        <AnimatedText
          text={t.text.reversal.climateWars}
          startFrame={climateWarsFrame}
          x={arrowStartX + 20}
          y={arrowStartY + 4}
          fontSize={22}
          color={COLORS.textDim}
          align="left"
        />
        <AnimatedText
          text={t.text.reversal.politicsCountries}
          startFrame={politicsFrame}
          x={arrowStartX + 20}
          y={arrowStartY + 36}
          fontSize={22}
          color={COLORS.textDim}
          align="left"
        />
        <AnimatedText
          text={t.text.reversal.neverHeardOf}
          startFrame={neverHeardFrame}
          x={arrowStartX + 20}
          y={arrowStartY + 68}
          fontSize={22}
          color={COLORS.textDim}
          align="left"
        />
        <AnimatedText
          text={t.text.reversal.socialMediaTV}
          startFrame={socialMediaFrame}
          x={arrowStartX + 20}
          y={arrowStartY + 100}
          fontSize={22}
          color={COLORS.textDim}
          align="left"
        />
        <AnimatedText
          text={t.text.reversal.toldThem}
          startFrame={toldThemFrame}
          x={arrowStartX + 20}
          y={arrowStartY + 132}
          fontSize={22}
          color={COLORS.textDim}
          align="left"
        />
      </div>

      <AnimatedText
        text={t.text.reversal.whileCenter}
        startFrame={whileCenterFrame}
        x={CENTER.x}
        y={VIDEO.height - 200}
        fontSize={42}
        weight={500}
        color={COLORS.text}
        glow={COLORS.rings.self}
      />
      <AnimatedText
        text={t.text.reversal.stillUnfilled}
        startFrame={notBalancedFrame}
        x={CENTER.x}
        y={VIDEO.height - 140}
        fontSize={42}
        weight={500}
        color={COLORS.text}
        glow={COLORS.rings.self}
      />
    </AbsoluteFill>
  );
};
