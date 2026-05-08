import { AbsoluteFill, useCurrentFrame } from "remotion";
import { FileCard } from "../components/FileCard";
import { theme, fonts } from "../theme";
import { fadeIn } from "../utils/anim";
import { typewriter, blinkingCursor } from "../utils/typewriter";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

const READ_START = 30;
const READ_PER = 18;

export const Scene4Ring: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade();
  const { t } = useLocale();
  const a = t.text.agentReads;
  const knowledgeFiles = t.text.knowledgeFiles;

  const promptText = a.prompt;
  const typed = typewriter(promptText, frame, 4, 0.7);
  const showCursor = blinkingCursor(frame);
  const promptDone = frame > 4 + promptText.length / 0.7;

  const filesOpacity = fadeIn(frame, 16, 14);
  const readyOpacity = fadeIn(frame, READ_START + READ_PER * knowledgeFiles.length + 6, 14);

  return (
    <AbsoluteFill
      style={{
        opacity: sceneOpacity,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 50,
      }}
    >
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 22,
          color: theme.textMuted,
          letterSpacing: 0.5,
          opacity: fadeIn(frame, 0, 10),
        }}
      >
        {promptDone ? a.readingLabel : a.typingHint}
      </div>

      <div
        style={{
          width: 980,
          padding: "20px 26px",
          background: "#08090C",
          border: `1.5px solid ${promptDone ? theme.amber : theme.panelEdge}`,
          borderRadius: 12,
          fontFamily: fonts.mono,
          fontSize: 26,
          color: theme.text,
          display: "flex",
          alignItems: "center",
          gap: 14,
          boxShadow: promptDone ? `0 0 24px ${theme.amber}33` : "none",
        }}
      >
        <span style={{ color: theme.amber }}>{">"}</span>
        <span>{typed}</span>
        <span
          style={{
            display: "inline-block",
            width: 3,
            height: 28,
            background: theme.amber,
            opacity: showCursor && !promptDone ? 1 : 0,
          }}
        />
      </div>

      <div
        style={{
          opacity: filesOpacity,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          alignItems: "center",
        }}
      >
        {knowledgeFiles.map((file, i) => {
          const readStart = READ_START + i * READ_PER;
          const isReading = frame >= readStart && frame < readStart + READ_PER + 2;
          const hasRead = frame >= readStart + READ_PER + 2;

          const cardOpacity = fadeIn(frame, 16 + i * 4, 12);
          const highlight = isReading;

          return (
            <div
              key={file.name}
              style={{
                opacity: cardOpacity,
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <FileCard name={file.name} highlight={highlight} width={420} />
              <div
                style={{
                  width: 200,
                  fontFamily: fonts.mono,
                  fontSize: 18,
                  color: hasRead ? theme.green : isReading ? theme.amber : theme.textMuted,
                  opacity: isReading || hasRead ? 1 : 0.3,
                }}
              >
                {hasRead ? a.read : isReading ? a.reading : "..."}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          opacity: readyOpacity,
          padding: "14px 28px",
          background: `${theme.green}22`,
          border: `1.5px solid ${theme.green}`,
          borderRadius: 999,
          fontFamily: fonts.mono,
          fontSize: 22,
          color: theme.green,
          letterSpacing: 1,
        }}
      >
        {a.ready}
      </div>
    </AbsoluteFill>
  );
};
