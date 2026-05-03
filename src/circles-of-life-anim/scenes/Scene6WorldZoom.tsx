import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Background } from "../components/Background";
import { Dot } from "../components/Dot";
import { Ring } from "../components/Ring";
import { AnimatedText } from "../components/AnimatedText";
import { CENTER, VIDEO, RADII } from "../layout";
import { COLORS } from "../theme";
import { getSceneAnchor } from "../voiceover/anchors";
import { useLocale } from "../LocaleContext";

const SCENE_ID = "scene-6-world-zoom";
const FINAL_SCALE = 0.45;

export const Scene6WorldZoom: React.FC = () => {
  const frame = useCurrentFrame();
  const { locale, t } = useLocale();

  const countryFrame = getSceneAnchor(SCENE_ID, "country", 5, locale);
  const worldFrame = getSceneAnchor(SCENE_ID, "world", 50, locale);

  // Zoom from start of country reveal until shortly before world reveal
  const zoomEnd = Math.max(countryFrame + 30, worldFrame - 5);
  const scale = interpolate(frame, [countryFrame, zoomEnd], [1, FINAL_SCALE], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
          <Dot cx={CENTER.x} cy={CENTER.y} startFrame={-30} size={18} />
          {[
            { r: RADII.partner, c: COLORS.rings.partner },
            { r: RADII.children, c: COLORS.rings.children },
            { r: RADII.family, c: COLORS.rings.family },
            { r: RADII.friends, c: COLORS.rings.friends },
            { r: RADII.community, c: COLORS.rings.community },
          ].map((x) => (
            <Ring
              key={x.r}
              cx={CENTER.x}
              cy={CENTER.y}
              radius={x.r}
              color={x.c}
              startFrame={-60}
              strokeWidth={3}
            />
          ))}
          <Ring
            cx={CENTER.x}
            cy={CENTER.y}
            radius={RADII.country}
            color={COLORS.rings.country}
            startFrame={countryFrame}
            strokeWidth={4}
          />
          <Ring
            cx={CENTER.x}
            cy={CENTER.y}
            radius={RADII.world}
            color={COLORS.rings.world}
            startFrame={worldFrame}
            strokeWidth={5}
          />
        </svg>
      </AbsoluteFill>

      <AnimatedText
        text={t.text.worldZoom.country}
        startFrame={countryFrame}
        x={CENTER.x}
        y={CENTER.y - RADII.country * FINAL_SCALE - 40}
        fontSize={32}
        weight={600}
        color={COLORS.text}
        glow={COLORS.rings.country}
      />
      <AnimatedText
        text={t.text.worldZoom.world}
        startFrame={worldFrame}
        x={CENTER.x}
        y={CENTER.y - RADII.world * FINAL_SCALE - 40}
        fontSize={42}
        weight={700}
        color={COLORS.text}
        glow={COLORS.rings.world}
      />
    </AbsoluteFill>
  );
};
