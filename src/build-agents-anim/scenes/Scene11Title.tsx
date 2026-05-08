import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Folder } from "../components/Folder";
import { FileCard } from "../components/FileCard";
import { theme, fonts } from "../theme";
import { fadeIn, easeOut } from "../utils/anim";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

export const Scene11Title: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade({ fadeOut: false });
  const { t } = useLocale();
  const c = t.text.closingTitle;
  const knowledge = t.text.knowledgeFiles.map((f) => f.name);
  const task = t.text.taskStages.map((s) => s.name);
  const knowledgeLabel = t.text.folders.knowledge;
  const taskLabel = t.text.folders.task;

  const foldersOpacity = fadeIn(frame, 0, 16);
  const titleOpacity = fadeIn(frame, 28, 18);
  const titleScale = interpolate(frame, [28, 50], [0.96, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  return (
    <AbsoluteFill
      style={{
        opacity: sceneOpacity,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 60,
      }}
    >
      <div
        style={{
          opacity: foldersOpacity,
          display: "flex",
          gap: 60,
        }}
      >
        <Folder label={knowledgeLabel} open width={420} height={340}>
          {knowledge.map((f) => (
            <FileCard key={f} name={f} width={340} />
          ))}
        </Folder>
        <Folder label={taskLabel} open width={420} height={340}>
          {task.map((f) => (
            <FileCard key={f} name={f} width={340} />
          ))}
        </Folder>
      </div>

      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          fontFamily: fonts.sans,
          fontSize: 64,
          fontWeight: 600,
          color: theme.text,
          letterSpacing: -1,
          textAlign: "center",
        }}
      >
        {c.titlePrefix}{" "}
        <span style={{ color: theme.amber }}>{c.titleAccent}</span>
        {c.titleSuffix}
      </div>
    </AbsoluteFill>
  );
};
