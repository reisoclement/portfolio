import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme, fonts } from "../theme";
import { fadeIn, easeOut } from "../utils/anim";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

export const SceneOpeningTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade({ fadeIn: false });
  const { t } = useLocale();
  const o = t.text.openingTitle;

  const titleOpacity = fadeIn(frame, 6, 22);
  const titleScale = interpolate(frame, [6, 32], [0.96, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const subOpacity = fadeIn(frame, 36, 18);

  return (
    <AbsoluteFill
      style={{
        opacity: sceneOpacity,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          fontFamily: fonts.sans,
          fontSize: 84,
          fontWeight: 600,
          color: theme.text,
          letterSpacing: -1.5,
          textAlign: "center",
        }}
      >
        {o.titlePrefix}{" "}
        <span style={{ color: theme.amber }}>{o.titleAccent}</span>
        {o.titleSuffix}
      </div>
      <div
        style={{
          opacity: subOpacity,
          fontFamily: fonts.mono,
          fontSize: 24,
          color: theme.textMuted,
          letterSpacing: 1.5,
        }}
      >
        {o.subtitle}
      </div>
    </AbsoluteFill>
  );
};
