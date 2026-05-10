import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Player, type PlayerRef, type CallbackListener } from "@remotion/player";
import {
  CirclesOfLife,
  getSceneRanges,
  getTotalDuration,
  TOTAL_SCENES,
  VIDEO,
  type Locale,
} from "@circles-of-life/embed";
import { getT, type Locale as WebLocale } from "../../i18n";
import "./circles-of-life.css";

// Each "scene press" plays from the current frame to the *last* frame of that scene,
// then pauses. The first press plays scene 0 → end of scene 0.
// Pressing on the final scene restarts from frame 0.

interface Props {
  locale: WebLocale;
}

export default function InteractiveViewer({ locale }: Props) {
  const playerRef = useRef<PlayerRef>(null);
  // -1 means "not started yet" — the player sits on frame 0 showing scene 0's first frame.
  const [completedSceneIndex, setCompletedSceneIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const sceneRanges = useMemo(() => getSceneRanges(locale as Locale), [locale]);
  const tWeb = getT(locale);
  const tInteractive = tWeb.circlesOfLife.interactive;

  // The scene we're CURRENTLY displaying (or about to play through)
  const currentSceneIndex = Math.max(0, completedSceneIndex);

  const stopAtRef = useRef<number | null>(null);

  // Pause this many frames before the scene boundary so the freeze frame is
  // fully opaque. Scenes fade out in their last ~10–28 frames; stopping at
  // `range.end - 1` lands on a near-invisible frame that looks black.
  const HOLD_OFFSET = 30;
  const holdFrame = (sceneIdx: number) => {
    const range = sceneRanges[sceneIdx];
    if (!range) return 0;
    return Math.max(range.start, range.end - HOLD_OFFSET);
  };

  // Pause the player precisely at our target frame.
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const onFrame: CallbackListener<"frameupdate"> = (e) => {
      const target = stopAtRef.current;
      if (target == null) return;
      if (e.detail.frame >= target) {
        player.pause();
        // Snap exactly to the target frame so we always land on the same final state.
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

  const playToEndOfScene = useCallback((sceneIdx: number) => {
    const player = playerRef.current;
    if (!player) return;
    const range = sceneRanges[sceneIdx];
    if (!range) return;
    // Hold on a fully opaque frame — past every scene's fade-out window.
    const target = holdFrame(sceneIdx);
    stopAtRef.current = target;
    player.play();
    setIsPlaying(true);
    setCompletedSceneIndex(sceneIdx);
  }, [sceneRanges]);

  const next = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    // If a scene is currently playing, snap to its end instead of ignoring the input.
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
      // restart
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
      // back to the very beginning
      player.pause();
      player.seekTo(0);
      setCompletedSceneIndex(-1);
      stopAtRef.current = null;
      return;
    }
    const prevIdx = completedSceneIndex - 1;
    player.pause();
    player.seekTo(holdFrame(prevIdx));
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
    <div className="col-interactive">
      <button
        type="button"
        className="col-stage-button"
        onClick={() => (isAtEnd ? restart() : next())}
        aria-label={
          isPlaying
            ? tInteractive.stageButtonAriaSkip
            : isAtEnd
              ? tInteractive.stageButtonAriaRestart
              : tInteractive.stageButtonAriaAdvance
        }
      >
        <div className="col-stage">
          <Player
            ref={playerRef}
            component={CirclesOfLife}
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

      <div className="col-controls">
        <div className="col-progress" aria-hidden="true">
          {Array.from({ length: TOTAL_SCENES }).map((_, i) => (
            <span
              key={i}
              className={`col-progress__dot ${i <= completedSceneIndex ? "is-on" : ""}`}
            />
          ))}
        </div>
        <div className="col-meta">
          <span className="col-meta__count">
            {displayCount} / {TOTAL_SCENES}
          </span>
          <span className="col-meta__title">{displayTitle}</span>
        </div>
        <div className="col-buttons">
          <button type="button" onClick={prev} disabled={isPlaying || completedSceneIndex < 0}>
            {tInteractive.back}
          </button>
          {isAtEnd ? (
            <button type="button" onClick={restart}>
              {tInteractive.restart}
            </button>
          ) : (
            <button type="button" onClick={next} className="col-buttons__primary">
              {isPlaying ? tInteractive.skip : tInteractive.next}
            </button>
          )}
        </div>
        <p className="col-hint" dangerouslySetInnerHTML={{ __html: tInteractive.hintHtml }} />
      </div>
    </div>
  );
}
