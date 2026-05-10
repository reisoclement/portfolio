import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Player, type PlayerRef, type CallbackListener } from "@remotion/player";
import {
  WhenToUseAI,
  getSceneRanges,
  getTotalDuration,
  TOTAL_SCENES,
  VIDEO,
  type Locale,
} from "@when-to-use-ai/embed";
import { getT, type Locale as WebLocale } from "../../i18n";
import "./when-to-use-ai.css";

// One press = play from current frame to the end of the next scene, then pause.
// Mirrors the InteractiveViewer used for circles-of-life so the UX is consistent.

interface Props {
  locale: WebLocale;
}

export default function InteractiveViewer({ locale }: Props) {
  const playerRef = useRef<PlayerRef>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [completedSceneIndex, setCompletedSceneIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sceneRanges = useMemo(() => getSceneRanges(locale as Locale), [locale]);
  const tWeb = getT(locale);
  const tInteractive = tWeb.whenToUseAi.interactive;

  const currentSceneIndex = Math.max(0, completedSceneIndex);
  const stopAtRef = useRef<number | null>(null);

  // Pause this many frames before the scene boundary so the freeze frame is
  // fully opaque. Scenes fade out in their last ~10 frames; stopping at
  // `range.end - 1` lands on a near-invisible frame that looks black.
  const HOLD_OFFSET = 30;
  const holdFrame = (sceneIdx: number) => {
    const range = sceneRanges[sceneIdx];
    if (!range) return 0;
    return Math.max(range.start, range.end - HOLD_OFFSET);
  };

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
      const target = holdFrame(sceneIdx);
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

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    if (document.fullscreenElement === el) {
      void document.exitFullscreen();
    } else {
      void el.requestFullscreen();
    }
  }, []);

  const isAtEnd = completedSceneIndex === TOTAL_SCENES - 1 && !isPlaying;
  const displayTitle = sceneRanges[Math.max(0, currentSceneIndex)].title;

  return (
    <div ref={rootRef} className={`wta-interactive${isFullscreen ? " is-fullscreen" : ""}`}>
      <button
        type="button"
        className="wta-stage-button"
        onClick={() => (isAtEnd ? restart() : next())}
        aria-label={
          isPlaying
            ? tInteractive.stageButtonAriaSkip
            : isAtEnd
              ? tInteractive.stageButtonAriaRestart
              : tInteractive.stageButtonAriaAdvance
        }
      >
        <div className="wta-stage">
          <Player
            ref={playerRef}
            component={WhenToUseAI}
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

      <div className="wta-controls">
        <div className="wta-progress" aria-hidden="true">
          {Array.from({ length: TOTAL_SCENES }).map((_, i) => (
            <span
              key={i}
              className={`wta-progress__dot ${i <= completedSceneIndex ? "is-on" : ""}`}
            />
          ))}
        </div>
        <div className="wta-meta">
          <span className="wta-meta__title">{displayTitle}</span>
        </div>
        <div className="wta-buttons">
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
            <button type="button" onClick={next} className="wta-buttons__primary">
              {isPlaying ? tInteractive.skip : tInteractive.next}
            </button>
          )}

          <button
            type="button"
            className="wta-buttons__icon"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? tInteractive.exitFullscreen : tInteractive.fullscreen}
            title={isFullscreen ? tInteractive.exitFullscreen : tInteractive.fullscreen}
          >
            {isFullscreen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 2v4H2 M10 2v4h4 M6 14v-4H2 M10 14v-4h4" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 6V2h4 M14 6V2h-4 M2 10v4h4 M14 10v4h-4" />
              </svg>
            )}
          </button>
        </div>
        <p
          className="wta-hint"
          dangerouslySetInnerHTML={{ __html: tInteractive.hintHtml }}
        />
      </div>
    </div>
  );
}
