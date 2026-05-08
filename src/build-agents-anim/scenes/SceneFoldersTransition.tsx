import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { FoldersStage, type ZoomTarget } from "../components/FoldersStage";
import { easeInOut } from "../utils/anim";
import { useSceneFade } from "../utils/sceneFade";

type Props = {
  from?: ZoomTarget;
  to?: ZoomTarget;
};

export const SceneFoldersTransition: React.FC<Props> = ({
  from = "knowledge",
  to = "task",
}) => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade();

  const fromProgress = interpolate(frame, [0, 30], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeInOut,
  });

  const toProgress = interpolate(frame, [35, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeInOut,
  });

  const inPhase2 = frame >= 33;

  let knowledgeFilesOpacity: number;
  let taskFilesOpacity: number;
  if (!inPhase2) {
    knowledgeFilesOpacity = 1;
    taskFilesOpacity = interpolate(fromProgress, [0, 1], [1, 0.1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else {
    knowledgeFilesOpacity = interpolate(toProgress, [0, 1], [1, 0.1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    taskFilesOpacity = 1;
  }

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <FoldersStage
        zoom={inPhase2 ? to : from}
        progress={inPhase2 ? toProgress : fromProgress}
        knowledgeFilesOpacity={knowledgeFilesOpacity}
        taskFilesOpacity={taskFilesOpacity}
        taskFiles={[]}
      />
    </AbsoluteFill>
  );
};
