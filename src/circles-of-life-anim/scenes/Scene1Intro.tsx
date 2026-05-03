import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "../components/Background";
import { Dot } from "../components/Dot";
import { AnimatedText } from "../components/AnimatedText";
import { CENTER, VIDEO } from "../layout";
import { COLORS } from "../theme";
import { getSceneAnchor } from "../voiceover/anchors";
import { useLocale } from "../LocaleContext";

const SCENE_ID = "scene-1-intro";

export const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { locale, t } = useLocale();

  const dotFrame = getSceneAnchor(SCENE_ID, "circles", 0, locale);
  const labelFrame = getSceneAnchor(SCENE_ID, "this-is-you", 50, locale);
  const arrowSpringStart = labelFrame - 20;

  const arrowProgress = spring({
    frame: frame - arrowSpringStart,
    fps,
    config: { damping: 18, stiffness: 70 },
  });

  const arrowEndX = CENTER.x - 30;
  const arrowEndY = CENTER.y - 30;
  const arrowStartX = arrowEndX - 180 * arrowProgress;
  const arrowStartY = arrowEndY - 140 * arrowProgress;

  return (
    <AbsoluteFill>
      <Background />
      <svg
        width={VIDEO.width}
        height={VIDEO.height}
        style={{ position: "absolute", inset: 0 }}
      >
        <Dot cx={CENTER.x} cy={CENTER.y} startFrame={dotFrame} />
        {arrowProgress > 0.05 && (
          <g opacity={arrowProgress}>
            <line
              x1={arrowStartX}
              y1={arrowStartY}
              x2={arrowEndX}
              y2={arrowEndY}
              stroke={COLORS.text}
              strokeWidth={3}
              strokeLinecap="round"
            />
            <polygon
              points={`${arrowEndX},${arrowEndY} ${arrowEndX - 16},${arrowEndY - 6} ${arrowEndX - 10},${arrowEndY - 14}`}
              fill={COLORS.text}
            />
          </g>
        )}
      </svg>
      <AnimatedText
        text={t.text.intro.thisIsYou}
        startFrame={labelFrame}
        x={CENTER.x - 380}
        y={CENTER.y - 220}
        fontSize={56}
        weight={600}
        glow={COLORS.rings.self}
      />
    </AbsoluteFill>
  );
};
