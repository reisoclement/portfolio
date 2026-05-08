import { Folder } from "./Folder";
import { FileCard } from "./FileCard";
import { useLocale } from "../LocaleContext";

export type ZoomTarget = "overview" | "knowledge" | "task";

type Props = {
  zoom: ZoomTarget;
  progress?: number;
  knowledgeFilesOpacity?: number;
  taskFilesOpacity?: number;
  pulse?: number;
  knowledgeFiles?: string[];
  taskFiles?: string[];
  taskExtra?: React.ReactNode;
};

const FOLDER_W = 620;
const FOLDER_H = 480;
const GAP = 100;
const FILE_CARD_W = 520;

const ZOOM_PRESETS: Record<ZoomTarget, { scale: number; tx: number }> = {
  overview: { scale: 1, tx: 0 },
  knowledge: { scale: 1.5, tx: (FOLDER_W + GAP) / 2 },
  task: { scale: 1.5, tx: -(FOLDER_W + GAP) / 2 },
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const FoldersStage: React.FC<Props> = ({
  zoom,
  progress = 1,
  knowledgeFilesOpacity = 1,
  taskFilesOpacity = 1,
  pulse = 0,
  knowledgeFiles,
  taskFiles,
  taskExtra,
}) => {
  const { t } = useLocale();
  const knowledgeLabel = t.text.folders.knowledge;
  const taskLabel = t.text.folders.task;
  const defaultKnowledgeFiles = t.text.knowledgeFiles.map((f) => f.name);
  const defaultTaskFiles = t.text.taskStages.map((s) => s.name);
  const kFiles = knowledgeFiles ?? defaultKnowledgeFiles;
  const tFiles = taskFiles ?? defaultTaskFiles;

  const target = ZOOM_PRESETS[zoom];
  const start = ZOOM_PRESETS.overview;
  const u = Math.max(0, Math.min(1, progress));
  const scale = lerp(start.scale, target.scale, u);
  const tx = lerp(start.tx, target.tx, u);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: GAP,
          transform: `translateX(${tx}px) scale(${scale})`,
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        <div>
          <Folder label={knowledgeLabel} open width={FOLDER_W} height={FOLDER_H} pulse={pulse}>
            <div
              style={{
                opacity: knowledgeFilesOpacity,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {kFiles.map((name) => (
                <FileCard key={name} name={name} width={FILE_CARD_W} />
              ))}
            </div>
          </Folder>
        </div>
        <div>
          <Folder label={taskLabel} open width={FOLDER_W} height={FOLDER_H} pulse={pulse}>
            <div
              style={{
                opacity: taskFilesOpacity,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                position: "relative",
                minHeight: "100%",
              }}
            >
              {tFiles.map((name) => (
                <FileCard key={name} name={name} width={FILE_CARD_W} />
              ))}
              {taskExtra}
            </div>
          </Folder>
        </div>
      </div>
    </div>
  );
};

export const FOLDER_LAYOUT = {
  FOLDER_W,
  FOLDER_H,
  GAP,
  FILE_CARD_W,
};
