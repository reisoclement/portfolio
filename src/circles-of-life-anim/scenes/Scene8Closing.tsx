import { AbsoluteFill } from "remotion";
import { Background } from "../components/Background";
import { Dot } from "../components/Dot";
import { AnimatedText } from "../components/AnimatedText";
import { CENTER, VIDEO } from "../layout";
import { COLORS } from "../theme";
import { getSceneAnchor } from "../voiceover/anchors";
import { useLocale } from "../LocaleContext";

const SCENE_ID = "scene-8-closing";

export const Scene8Closing: React.FC = () => {
  const { locale, t } = useLocale();
  const masterFrame = getSceneAnchor(SCENE_ID, "master", 15, locale);
  const expandFrame = getSceneAnchor(SCENE_ID, "expand", 55, locale);
  const dotFrame = Math.max(0, masterFrame - 15);

  return (
    <AbsoluteFill>
      <Background />
      <svg
        width={VIDEO.width}
        height={VIDEO.height}
        style={{ position: "absolute", inset: 0 }}
      >
        <Dot cx={CENTER.x} cy={CENTER.y} startFrame={dotFrame} size={22} />
      </svg>

      <AnimatedText
        text={t.text.closing.master}
        startFrame={masterFrame}
        x={CENTER.x}
        y={CENTER.y - 90}
        fontSize={64}
        weight={700}
        color={COLORS.text}
        glow={COLORS.rings.self}
      />
      <AnimatedText
        text={t.text.closing.thenExpand}
        startFrame={expandFrame}
        x={CENTER.x}
        y={CENTER.y + 90}
        fontSize={56}
        weight={500}
        color={COLORS.rings.self}
        glow={COLORS.rings.partner}
      />
    </AbsoluteFill>
  );
};
