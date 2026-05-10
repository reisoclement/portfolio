import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";

// Short divider card between "Part 1, How it works" and "Part 2, How to use it".
export const SceneTutorialDivider: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 4 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const k = rise(frame, 4, 18, 12);
  const heading = rise(frame, 14, 22, 22);
  const sub = rise(frame, 32, 22, 18);

  return (
    <AbsoluteFill
      style={{
        opacity: exit,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: FONT.mono,
          fontWeight: 700,
          fontSize: 28,
          color: COLORS.amber,
          letterSpacing: 8,
          textTransform: "uppercase",
          opacity: k.opacity,
          transform: `translateY(${k.y}px)`,
          marginBottom: 28,
        }}
      >
        {t.text.tutorialDivider.kicker}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 700,
          fontSize: 120,
          color: COLORS.text,
          letterSpacing: -4,
          lineHeight: 1.0,
          textAlign: "center",
          opacity: heading.opacity,
          transform: `translateY(${heading.y}px)`,
        }}
      >
        {t.text.tutorialDivider.heading}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 400,
          fontSize: 36,
          color: COLORS.textDim,
          letterSpacing: -0.3,
          marginTop: 36,
          textAlign: "center",
          maxWidth: 1300,
          padding: "0 80px",
          opacity: sub.opacity,
          transform: `translateY(${sub.y}px)`,
        }}
      >
        {t.text.tutorialDivider.sub}
      </div>
    </AbsoluteFill>
  );
};
