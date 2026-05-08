import { AbsoluteFill, useCurrentFrame } from "remotion";
import { theme, fonts } from "../theme";
import { typewriter, blinkingCursor } from "../utils/typewriter";
import { fadeIn } from "../utils/anim";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

export const Scene6Headline: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade();
  const { t } = useLocale();
  const h = t.text.headline;

  const typed = typewriter(h.title, frame, 6, 0.8);
  const showCursor = blinkingCursor(frame);
  const subOpacity = fadeIn(frame, 50, 16);

  return (
    <AbsoluteFill
      style={{
        opacity: sceneOpacity,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 72,
          fontWeight: 600,
          color: theme.text,
          letterSpacing: -1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>{typed}</span>
        <span
          style={{
            display: "inline-block",
            width: 4,
            height: 64,
            marginLeft: 6,
            background: theme.amber,
            opacity: showCursor ? 1 : 0,
          }}
        />
      </div>
      <div
        style={{
          opacity: subOpacity,
          fontFamily: fonts.mono,
          fontSize: 22,
          color: theme.textMuted,
          letterSpacing: 1,
        }}
      >
        {h.subtitle}
      </div>
    </AbsoluteFill>
  );
};
