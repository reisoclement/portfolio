import { AbsoluteFill } from "remotion";
import { Background } from "../components/Background";
import { Dot } from "../components/Dot";
import { Ring } from "../components/Ring";
import { IconLabel } from "../components/IconLabel";
import { AnimatedText } from "../components/AnimatedText";
import { CENTER, VIDEO, RADII, ATTRIBUTE_KEYS } from "../layout";
import { COLORS } from "../theme";
import { getSceneAnchor } from "../voiceover/anchors";
import { useLocale } from "../LocaleContext";

const SCENE_ID = "scene-4-children";

export const Scene4Children: React.FC = () => {
  const { locale, t } = useLocale();
  const keys = ATTRIBUTE_KEYS.children;

  const titleFrame = getSceneAnchor(SCENE_ID, "title", 30, locale);
  const ringFrame = Math.max(0, titleFrame - 30);
  const attrFrames = keys.map((_, i) =>
    getSceneAnchor(SCENE_ID, `attr-${String(i + 1).padStart(2, "0")}`, 50 + i * 40, locale),
  );

  return (
    <AbsoluteFill>
      <Background />
      <svg
        width={VIDEO.width}
        height={VIDEO.height}
        style={{ position: "absolute", inset: 0, overflow: "visible" }}
      >
        <Dot cx={CENTER.x} cy={CENTER.y} startFrame={-30} size={18} />
        <Ring
          cx={CENTER.x}
          cy={CENTER.y}
          radius={RADII.partner}
          color={COLORS.rings.partner}
          startFrame={-30}
          strokeWidth={4}
        />
        <Ring
          cx={CENTER.x}
          cy={CENTER.y}
          radius={RADII.children}
          color={COLORS.rings.children}
          startFrame={ringFrame}
          strokeWidth={4}
        />
      </svg>

      <AnimatedText
        text={t.text.children.title}
        startFrame={titleFrame}
        x={CENTER.x}
        y={90}
        fontSize={48}
        weight={700}
        color={COLORS.text}
        glow={COLORS.rings.children}
      />

      {keys.map((key, i) => {
        const angle = (i / keys.length) * Math.PI * 2 - Math.PI / 2;
        const r = RADII.children + 130;
        const x = CENTER.x + Math.cos(angle) * r;
        const y = CENTER.y + Math.sin(angle) * r;
        const align = x < CENTER.x - 30 ? "right" : x > CENTER.x + 30 ? "left" : "center";
        return (
          <IconLabel
            key={`${key}-${i}`}
            iconKey={key}
            text={t.text.attributes[key]}
            startFrame={attrFrames[i]}
            x={x}
            y={y}
            fontSize={24}
            iconSize={30}
            color={COLORS.text}
            align={align}
            glow={COLORS.rings.children}
          />
        );
      })}
    </AbsoluteFill>
  );
};
