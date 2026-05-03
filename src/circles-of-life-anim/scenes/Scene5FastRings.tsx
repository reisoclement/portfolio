import { AbsoluteFill } from "remotion";
import { Background } from "../components/Background";
import { Dot } from "../components/Dot";
import { Ring } from "../components/Ring";
import { AnimatedText } from "../components/AnimatedText";
import { CENTER, VIDEO, RADII } from "../layout";
import { COLORS } from "../theme";
import { getSceneAnchor } from "../voiceover/anchors";
import { useLocale } from "../LocaleContext";

const SCENE_ID = "scene-5-fast-rings";

export const Scene5FastRings: React.FC = () => {
  const { locale, t } = useLocale();
  const familyFrame = getSceneAnchor(SCENE_ID, "family", 0, locale);
  const friendsFrame = getSceneAnchor(SCENE_ID, "friends", 35, locale);
  const communityFrame = getSceneAnchor(SCENE_ID, "community", 70, locale);

  const STEPS = [
    { label: t.text.fastRings.family, radius: RADII.family, color: COLORS.rings.family, frame: familyFrame, key: "family" },
    { label: t.text.fastRings.friends, radius: RADII.friends, color: COLORS.rings.friends, frame: friendsFrame, key: "friends" },
    { label: t.text.fastRings.community, radius: RADII.community, color: COLORS.rings.community, frame: communityFrame, key: "community" },
  ];

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
          startFrame={-60}
          strokeWidth={3}
        />
        <Ring
          cx={CENTER.x}
          cy={CENTER.y}
          radius={RADII.children}
          color={COLORS.rings.children}
          startFrame={-60}
          strokeWidth={3}
        />
        {STEPS.map((s) => (
          <Ring
            key={s.key}
            cx={CENTER.x}
            cy={CENTER.y}
            radius={s.radius}
            color={s.color}
            startFrame={s.frame}
            strokeWidth={4}
          />
        ))}
      </svg>

      {STEPS.map((s) => {
        const r = s.radius;
        const x = CENTER.x;
        const y = CENTER.y - r - 28;
        return (
          <AnimatedText
            key={s.key}
            text={s.label}
            startFrame={s.frame}
            x={x}
            y={y}
            fontSize={32}
            weight={600}
            color={COLORS.text}
            glow={s.color}
          />
        );
      })}
    </AbsoluteFill>
  );
};
