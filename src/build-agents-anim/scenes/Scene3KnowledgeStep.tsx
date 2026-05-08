import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { FileCard } from "../components/FileCard";
import { FilePreview } from "../components/FilePreview";
import { theme, fonts } from "../theme";
import { fadeIn, easeOut } from "../utils/anim";
import { useLocale } from "../LocaleContext";

type Props = {
  fileIndex: number;
};

export const Scene3KnowledgeStep: React.FC<Props> = ({ fileIndex }) => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const files = t.text.knowledgeFiles;
  const totalFiles = files.length;
  const file = files[fileIndex];
  const folderLabel = t.text.folders.knowledge;

  const cardOpacity = fadeIn(frame, 0, 16);
  const cardX = interpolate(frame, [0, 16], [-40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const previewOpacity = fadeIn(frame, 14, 14);
  const previewX = interpolate(frame, [14, 28], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 26,
          color: theme.textMuted,
          letterSpacing: 1.5,
          marginBottom: 10,
        }}
      >
        {folderLabel}
      </div>

      <div
        style={{
          width: 1100,
          minHeight: 280,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 80,
        }}
      >
        <div style={{ opacity: cardOpacity, transform: `translateX(${cardX}px)` }}>
          <FileCard name={file.name} highlight width={380} />
        </div>
        <div style={{ fontSize: 32, color: theme.amber, opacity: previewOpacity }}>→</div>
        <div style={{ opacity: previewOpacity, transform: `translateX(${previewX}px)` }}>
          <FilePreview lines={file.preview} width={460} />
        </div>
      </div>

      <div style={{ marginTop: 30, display: "flex", gap: 12 }}>
        {Array.from({ length: totalFiles }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 36,
              height: 4,
              borderRadius: 2,
              background: i === fileIndex ? theme.amber : theme.panelEdge,
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
