import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Sticky } from "../components/Sticky";
import { theme, fonts } from "../theme";
import { fadeIn, easeOut } from "../utils/anim";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

export const Scene8StickyToRule: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade();
  const { t } = useLocale();
  const r = t.text.rule;

  const ruleLines = [r.filename, "", r.bullet, r.detail];

  const stickyOpacity = interpolate(frame, [0, 8, 30, 42], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const stickyY = interpolate(frame, [10, 40], [0, -120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const stickyScale = interpolate(frame, [10, 40], [1, 0.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const fileOpacity = fadeIn(frame, 30, 14);
  const fileGlow = interpolate(frame, [40, 55, 90], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity, justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "relative", width: 700, height: 460 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: fileOpacity,
            background: theme.panel,
            border: `1.5px solid ${theme.amber}`,
            borderRadius: 12,
            padding: 36,
            fontFamily: fonts.mono,
            fontSize: 22,
            color: theme.text,
            lineHeight: 1.6,
            boxShadow: `0 0 ${50 * fileGlow}px ${theme.amber}66`,
          }}
        >
          {ruleLines.map((line, i) => {
            const start = 44 + i * 8;
            const opacity = fadeIn(frame, start, 8);
            const isComment = line.startsWith("#");
            return (
              <div
                key={i}
                style={{
                  opacity,
                  color: isComment ? theme.amber : theme.text,
                  whiteSpace: "pre",
                }}
              >
                {line || " "}
              </div>
            );
          })}
        </div>

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translateY(${stickyY}px) scale(${stickyScale})`,
            opacity: stickyOpacity,
          }}
        >
          <Sticky text={r.stickyText} color="red" rotation={-3} size="lg" />
        </div>
      </div>
    </AbsoluteFill>
  );
};
