import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { FoldersStage } from "../components/FoldersStage";
import { FileCard } from "../components/FileCard";
import { CookingAnimation } from "../components/CookingAnimation";
import { theme, fonts } from "../theme";
import { fadeIn, easeOut, easeInOut } from "../utils/anim";
import { typewriter, blinkingCursor } from "../utils/typewriter";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

const B_END = 200;
const C_END = 320;
const D_END = 500;
const E_END = 650;

const FILE_GAP = 12;
const CARD_W = 520;

const cardEntrance = (frame: number, start: number) => {
  const opacity = fadeIn(frame, start, 12);
  const scale = interpolate(frame, [start, start + 16], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  return { opacity, scale };
};

export const Scene5TaskArc: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade();
  const { t } = useLocale();
  const stages = t.text.taskStages;
  const arc = t.text.taskArc;

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <FoldersStage
        zoom="task"
        progress={1}
        knowledgeFilesOpacity={0.15}
        taskFiles={[]}
        taskExtra={
          <TaskFolderContent
            frame={frame}
            stageNames={stages.map((s) => s.name)}
            emptyText={arc.empty}
            waitingText={arc.waiting}
          />
        }
      />

      <PromptOverlay frame={frame} promptText={arc.prompt} />
    </AbsoluteFill>
  );
};

const TaskFolderContent: React.FC<{
  frame: number;
  stageNames: string[];
  emptyText: string;
  waitingText: string;
}> = ({ frame, stageNames, emptyText, waitingText }) => {
  const showWaitingHint = frame < B_END - 30;
  const waitingOpacity = interpolate(frame, [0, 14, B_END - 50, B_END - 30], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const recipeStart = B_END - 20;
  const recipe = cardEntrance(frame, recipeStart);

  const planStart = C_END - 40;
  const plan = cardEntrance(frame, planStart);

  const D_START = C_END;
  const cookVisualOpacity = interpolate(
    frame,
    [D_START, D_START + 12, D_END - 40, D_END - 20],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeInOut,
    }
  );
  const cookProgress = interpolate(frame, [D_START, D_END - 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cookCardStart = D_END - 25;
  const cook = cardEntrance(frame, cookCardStart);

  const cakeFileStart = D_END;
  const cakeFile = cardEntrance(frame, cakeFileStart);

  const [recipeName, planName, cookName, cakeName] = stageNames;

  return (
    <>
      {showWaitingHint && (
        <div
          style={{
            position: "absolute",
            top: 80,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: waitingOpacity,
            fontFamily: fonts.mono,
            fontSize: 22,
            color: theme.textMuted,
            textAlign: "center",
            letterSpacing: 0.5,
          }}
        >
          {emptyText}
          <div style={{ marginTop: 8, fontSize: 18 }}>{waitingText}</div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: FILE_GAP,
        }}
      >
        {frame >= recipeStart && (
          <div style={{ opacity: recipe.opacity, transform: `scale(${recipe.scale})`, transformOrigin: "left center" }}>
            <FileCard name={recipeName} highlight width={CARD_W} />
          </div>
        )}

        {frame >= planStart && (
          <div style={{ opacity: plan.opacity, transform: `scale(${plan.scale})`, transformOrigin: "left center" }}>
            <FileCard name={planName} highlight width={CARD_W} />
          </div>
        )}

        {frame >= D_START && frame < cookCardStart && (
          <div style={{ opacity: cookVisualOpacity }}>
            <CookingAnimation progress={cookProgress} />
          </div>
        )}
        {frame >= cookCardStart && (
          <div style={{ opacity: cook.opacity, transform: `scale(${cook.scale})`, transformOrigin: "left center" }}>
            <FileCard name={cookName} highlight width={CARD_W} />
          </div>
        )}

        {frame >= cakeFileStart && (
          <div style={{ opacity: cakeFile.opacity, transform: `scale(${cakeFile.scale})`, transformOrigin: "left center" }}>
            <FileCard name={cakeName} highlight width={CARD_W} />
          </div>
        )}
      </div>

      <CakeReveal frame={frame} />
    </>
  );
};

const PromptOverlay: React.FC<{ frame: number; promptText: string }> = ({
  frame,
  promptText,
}) => {
  const promptStart = 80;
  const promptEnd = B_END - 25;

  const promptOpacity = interpolate(
    frame,
    [promptStart, promptStart + 14, promptEnd, promptEnd + 10],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOut,
    }
  );

  const ty = interpolate(frame, [promptEnd - 10, promptEnd + 10], [0, -200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeInOut,
  });
  const scale = interpolate(frame, [promptEnd - 10, promptEnd + 10], [1, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeInOut,
  });

  if (frame > promptEnd + 12) return null;

  const typed = typewriter(promptText, frame, promptStart + 18, 0.7);
  const showCursor = blinkingCursor(frame);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 80,
        left: "50%",
        transform: `translateX(-50%) translateY(${ty}px) scale(${scale})`,
        opacity: promptOpacity,
        width: 720,
        background: "#08090C",
        border: `1.5px solid ${theme.amber}`,
        borderRadius: 12,
        boxShadow: `0 0 24px ${theme.amber}33`,
        padding: "20px 26px",
        fontFamily: fonts.mono,
        fontSize: 26,
        color: theme.text,
        display: "flex",
        alignItems: "center",
        gap: 14,
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
          opacity: showCursor ? 1 : 0,
        }}
      />
    </div>
  );
};

const CakeReveal: React.FC<{ frame: number }> = ({ frame }) => {
  const revealStart = D_END;
  const revealPeak = D_END + 30;
  const revealEnd = E_END - 30;

  if (frame < revealStart || frame > revealEnd + 10) return null;

  const burstOpacity = interpolate(
    frame,
    [revealStart, revealStart + 6, revealPeak + 20, revealPeak + 40],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const burstScale = interpolate(
    frame,
    [revealStart, revealPeak + 30],
    [0.4, 2.0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOut,
    }
  );

  const cakeOpacity = interpolate(
    frame,
    [revealStart + 4, revealPeak, revealEnd, revealEnd + 10],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeInOut,
    }
  );
  const cakeScale = interpolate(
    frame,
    [revealStart + 4, revealPeak, revealPeak + 20, revealEnd],
    [0.2, 1.2, 1, 0.85],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOut,
    }
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.amber}77 0%, ${theme.amber}00 70%)`,
          opacity: burstOpacity,
          transform: `scale(${burstScale})`,
        }}
      />
      <div
        style={{
          position: "relative",
          opacity: cakeOpacity,
          transform: `scale(${cakeScale})`,
          fontSize: 140,
          lineHeight: 1,
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
        }}
      >
        🎂
      </div>
    </div>
  );
};
