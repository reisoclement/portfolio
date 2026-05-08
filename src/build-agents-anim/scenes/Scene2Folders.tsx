import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { FoldersStage } from "../components/FoldersStage";
import { easeOut, easeInOut } from "../utils/anim";
import { useSceneFade } from "../utils/sceneFade";

export const Scene2Folders: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade();

  const revealOpacity = interpolate(frame, [0, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const pulse = interpolate(frame, [36, 50, 70], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const zoomProgress = interpolate(frame, [90, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeInOut,
  });

  const knowledgeFilesOpacity = 1;
  const taskFilesOpacity = interpolate(zoomProgress, [0.4, 1], [1, 0.1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: revealOpacity * sceneOpacity }}>
      <FoldersStage
        zoom="knowledge"
        progress={zoomProgress}
        knowledgeFilesOpacity={knowledgeFilesOpacity}
        taskFilesOpacity={taskFilesOpacity}
        pulse={pulse}
        taskFiles={[]}
      />
    </AbsoluteFill>
  );
};
