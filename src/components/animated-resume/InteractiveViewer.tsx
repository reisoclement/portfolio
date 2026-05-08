import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Player, type PlayerRef, type CallbackListener } from "@remotion/player";
import {
  AnimatedResume,
  getSceneRanges,
  getTotalDuration,
  TOTAL_SCENES,
  VIDEO,
  type Locale,
} from "@animated-resume/embed";
import { getT, type Locale as WebLocale } from "../../i18n";
import "./animated-resume.css";

interface Props {
  locale: WebLocale;
}

export default function InteractiveViewer({ locale }: Props) {
  const playerRef = useRef<PlayerRef>(null);
  const [completedSceneIndex, setCompletedSceneIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const sceneRanges = useMemo(() => getSceneRanges(locale as Locale), [locale]);
  const tWeb = getT(locale);
  const tInteractive = tWeb.resume.interactive;

  const currentSceneIndex = Math.max(0, completedSceneIndex);
  const stopAtRef = useRef<number | null>(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const onFrame: CallbackListener<"frameupdate"> = (e) => {
      const target = stopAtRef.current;
      if (target == null) return;
      if (e.detail.frame >= target) {
        player.pause();
        player.seekTo(target);
        stopAtRef.current = null;
        setIsPlaying(false);
      }
    };

    player.addEventListener("frameupdate", onFrame);
    return () => {
      player.removeEventListener("frameupdate", onFrame);
    };
  }, []);

  const playToEndOfScene = useCallback(
    (sceneIdx: number) => {
      const player = playerRef.current;
      if (!player) return;
      const range = sceneRanges[sceneIdx];
      if (!range) return;
      const target = range.end - 1;
      stopAtRef.current = target;
      player.play();
      setIsPlaying(true);
      setCompletedSceneIndex(sceneIdx);
    },
    [sceneRanges],
  );

  const next = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    if (isPlaying) {
      const target = stopAtRef.current;
      if (target != null) {
        player.pause();
        player.seekTo(target);
        stopAtRef.current = null;
        setIsPlaying(false);
      }
      return;
    }

    const nextSceneIdx = completedSceneIndex + 1;
    if (nextSceneIdx >= TOTAL_SCENES) {
      player.pause();
      player.seekTo(0);
      setCompletedSceneIndex(-1);
      stopAtRef.current = null;
      setIsPlaying(false);
      return;
    }
    playToEndOfScene(nextSceneIdx);
  }, [completedSceneIndex, isPlaying, playToEndOfScene]);

  const prev = useCallback(() => {
    if (isPlaying) return;
    const player = playerRef.current;
    if (!player) return;
    if (completedSceneIndex <= 0) {
      player.pause();
      player.seekTo(0);
      setCompletedSceneIndex(-1);
      stopAtRef.current = null;
      return;
    }
    const prevIdx = completedSceneIndex - 1;
    const range = sceneRanges[prevIdx];
    player.pause();
    player.seekTo(range.end - 1);
    setCompletedSceneIndex(prevIdx);
    stopAtRef.current = null;
  }, [completedSceneIndex, isPlaying, sceneRanges]);

  const restart = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;
    player.pause();
    player.seekTo(0);
    setCompletedSceneIndex(-1);
    stopAtRef.current = null;
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "r" || e.key === "R") {
        restart();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, restart]);

  const isAtEnd = completedSceneIndex === TOTAL_SCENES - 1 && !isPlaying;
  const displayCount = Math.max(1, completedSceneIndex + 1);
  const displayTitle = sceneRanges[Math.max(0, currentSceneIndex)].title;

  return (
    <div className="ar-interactive">
      <button
        type="button"
        className="ar-stage-button"
        onClick={() => (isAtEnd ? restart() : next())}
        aria-label={
          isPlaying
            ? tInteractive.stageButtonAriaSkip
            : isAtEnd
              ? tInteractive.stageButtonAriaRestart
              : tInteractive.stageButtonAriaAdvance
        }
      >
        <div className="ar-stage">
          <Player
            ref={playerRef}
            component={AnimatedResume}
            inputProps={{ locale: locale as Locale }}
            durationInFrames={getTotalDuration(locale as Locale)}
            compositionWidth={VIDEO.width}
            compositionHeight={VIDEO.height}
            fps={VIDEO.fps}
            controls={false}
            clickToPlay={false}
            doubleClickToFullscreen={false}
            spaceKeyToPlayOrPause={false}
            overflowVisible={false}
            acknowledgeRemotionLicense
            style={{ width: "100%", height: "100%" }}
            initialFrame={0}
          />
        </div>
      </button>

      <div className="ar-controls">
        <div className="ar-progress" aria-hidden="true">
          {Array.from({ length: TOTAL_SCENES }).map((_, i) => (
            <span
              key={i}
              className={`ar-progress__dot ${i <= completedSceneIndex ? "is-on" : ""}`}
            />
          ))}
        </div>
        <div className="ar-meta">
          <span className="ar-meta__count">
            {displayCount} / {TOTAL_SCENES}
          </span>
          <span className="ar-meta__title">{displayTitle}</span>
        </div>
        <div className="ar-buttons">
          <button
            type="button"
            onClick={prev}
            disabled={isPlaying || completedSceneIndex < 0}
          >
            {tInteractive.back}
          </button>
          {isAtEnd ? (
            <button type="button" onClick={restart}>
              {tInteractive.restart}
            </button>
          ) : (
            <button
              type="button"
              onClick={next}
              className="ar-buttons__primary"
            >
              {isPlaying ? tInteractive.skip : tInteractive.next}
            </button>
          )}
        </div>
        <p
          className="ar-hint"
          dangerouslySetInnerHTML={{ __html: tInteractive.hintHtml }}
        />
      </div>
    </div>
  );
}
