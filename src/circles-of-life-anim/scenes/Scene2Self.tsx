import { AbsoluteFill } from "remotion";
import { Background } from "../components/Background";
import { Dot } from "../components/Dot";
import { IconLabel } from "../components/IconLabel";
import { AnimatedText } from "../components/AnimatedText";
import { CENTER, VIDEO, ATTRIBUTE_KEYS } from "../layout";
import { COLORS } from "../theme";
import { getSceneAnchor } from "../voiceover/anchors";
import { useLocale } from "../LocaleContext";

const SCENE_ID = "scene-2-self";
const ROW_GAP = 90;
const COL_OFFSET = 380;

export const Scene2Self: React.FC = () => {
  const { locale, t } = useLocale();
  const keys = ATTRIBUTE_KEYS.self;
  const half = Math.ceil(keys.length / 2);
  const left = keys.slice(0, half);
  const right = keys.slice(half);

  const colHeight = (Math.max(left.length, right.length) - 1) * ROW_GAP;
  const startY = CENTER.y - colHeight / 2;

  const titleFrame = getSceneAnchor(SCENE_ID, "title", 5, locale);
  const attrFrames = keys.map((_, i) =>
    getSceneAnchor(SCENE_ID, `attr-${String(i + 1).padStart(2, "0")}`, 25 + i * 40, locale),
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
      </svg>

      <AnimatedText
        text={t.text.self.title}
        startFrame={titleFrame}
        x={CENTER.x}
        y={120}
        fontSize={52}
        weight={700}
        color={COLORS.text}
        glow={COLORS.rings.self}
      />

      {left.map((key, i) => (
        <IconLabel
          key={key}
          iconKey={key}
          text={t.text.attributes[key]}
          startFrame={attrFrames[i]}
          x={CENTER.x - COL_OFFSET}
          y={startY + i * ROW_GAP}
          fontSize={30}
          iconSize={36}
          color={COLORS.text}
          align="right"
          glow={COLORS.rings.self}
        />
      ))}

      {right.map((key, i) => (
        <IconLabel
          key={key}
          iconKey={key}
          text={t.text.attributes[key]}
          startFrame={attrFrames[left.length + i]}
          x={CENTER.x + COL_OFFSET}
          y={startY + i * ROW_GAP}
          fontSize={30}
          iconSize={36}
          color={COLORS.text}
          align="left"
          glow={COLORS.rings.self}
        />
      ))}
    </AbsoluteFill>
  );
};
