import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Sticky } from "../components/Sticky";
import { theme, fonts } from "../theme";
import { fadeIn, rise, easeOut } from "../utils/anim";
import { typewriter } from "../utils/typewriter";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

const GREEN_NOTE_POSITIONS = [
  { x: 60, y: 40, rot: -6 },
  { x: 250, y: 100, rot: 4 },
  { x: 460, y: 30, rot: -3 },
  { x: 100, y: 280, rot: 5 },
  { x: 410, y: 270, rot: -4 },
];

export const Scene7Sticky: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade();
  const { t } = useLocale();
  const s = t.text.sticky;
  const notebookLines = s.notebook;
  const greenNotes = s.green;
  const redText = s.red;

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity, justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 480,
            height: 540,
            background: "#F5EFE0",
            padding: "44px 36px",
            position: "relative",
            boxShadow: "0 14px 30px rgba(0,0,0,0.4)",
            fontFamily: fonts.hand,
            fontSize: 30,
            color: "#2a2516",
            lineHeight: 1.6,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 36,
              top: 0,
              bottom: 0,
              width: 2,
              background: "#D8696955",
            }}
          />
          {notebookLines.map((line, i) => {
            const start = 6 + i * 18;
            const opacity = fadeIn(frame, start, 8);
            const typed = typewriter(line, frame, start, 1.2);
            return (
              <div
                key={i}
                style={{
                  opacity,
                  marginLeft: 14,
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: "#888070" }}>{i + 1}.</span>
                <span>{typed}</span>
              </div>
            );
          })}
        </div>

        <div
          style={{
            width: 600,
            height: 540,
            background: theme.panel,
            border: `2px solid ${theme.panelEdge}`,
            position: "relative",
            boxShadow: "0 14px 30px rgba(0,0,0,0.4)",
          }}
        >
          {greenNotes.map((text, i) => {
            const pos = GREEN_NOTE_POSITIONS[i % GREEN_NOTE_POSITIONS.length];
            const start = 30 + i * 14;
            const opacity = fadeIn(frame, start, 10);
            const ty = rise(frame, start, 14, 30);
            const dim = interpolate(frame, [150, 165], [1, 0.25], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: easeOut,
            });
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: pos.x,
                  top: pos.y,
                  opacity: opacity * dim,
                  transform: `translateY(${ty}px)`,
                }}
              >
                <Sticky text={text} color="green" rotation={pos.rot} size="sm" />
              </div>
            );
          })}

          {(() => {
            const redStart = 130;
            const opacity = fadeIn(frame, redStart, 12);
            const scale = interpolate(
              frame,
              [redStart, redStart + 16],
              [0.6, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: easeOut,
              }
            );
            const ty = rise(frame, redStart, 18, 60);
            return (
              <div
                style={{
                  position: "absolute",
                  left: 190,
                  top: 160,
                  opacity,
                  transform: `translateY(${ty}px) scale(${scale})`,
                }}
              >
                <Sticky text={redText} color="red" rotation={-3} size="lg" />
              </div>
            );
          })()}
        </div>
      </div>
    </AbsoluteFill>
  );
};
