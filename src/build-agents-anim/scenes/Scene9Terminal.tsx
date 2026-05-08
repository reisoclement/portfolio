import { AbsoluteFill, useCurrentFrame } from "remotion";
import { theme, fonts } from "../theme";
import { typewriter, blinkingCursor } from "../utils/typewriter";
import { fadeIn } from "../utils/anim";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

export const Scene9Terminal: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade();
  const { t } = useLocale();
  const term = t.text.terminal;

  const containerOpacity = fadeIn(frame, 0, 12);
  const command = term.command;
  const typed = typewriter(command, frame, 14, 0.8);
  const showCursor = blinkingCursor(frame);
  const enterPressed = frame > 14 + command.length / 0.8 + 8;

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity, justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          opacity: containerOpacity,
          width: 980,
          background: "#08090C",
          border: `1.5px solid ${theme.panelEdge}`,
          borderRadius: 12,
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          fontFamily: fonts.mono,
          fontSize: 26,
          color: theme.text,
        }}
      >
        <div
          style={{
            padding: "12px 18px",
            borderBottom: `1px solid ${theme.panelEdge}`,
            display: "flex",
            gap: 8,
          }}
        >
          <span style={{ width: 12, height: 12, borderRadius: 6, background: "#3a3a3a" }} />
          <span style={{ width: 12, height: 12, borderRadius: 6, background: "#3a3a3a" }} />
          <span style={{ width: 12, height: 12, borderRadius: 6, background: "#3a3a3a" }} />
        </div>
        <div style={{ padding: "32px 28px", minHeight: 180 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: theme.amber, marginRight: 14 }}>{">"}</span>
            <span>{typed}</span>
            <span
              style={{
                display: "inline-block",
                width: 3,
                height: 28,
                marginLeft: 4,
                background: theme.amber,
                opacity: showCursor ? 1 : 0,
              }}
            />
          </div>
          {enterPressed && (
            <div
              style={{
                marginTop: 22,
                color: theme.green,
                opacity: fadeIn(frame, 14 + command.length / 0.8 + 8, 8),
              }}
            >
              {term.executing}
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
