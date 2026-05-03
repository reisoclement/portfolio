import { useCallback, useEffect, useState } from "react";
import { Scene, TOTAL_SCENES, sceneTitle } from "./Scenes";
import "./circles-of-life.css";

export default function InteractiveViewer() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0); // remount key to replay current scene's CSS animations
  const total = TOTAL_SCENES;

  const next = useCallback(() => {
    setIndex((i) => {
      if (i < total - 1) {
        setTick((t) => t + 1);
        return i + 1;
      }
      return i;
    });
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => {
      if (i > 0) {
        setTick((t) => t + 1);
        return i - 1;
      }
      return i;
    });
  }, []);

  const restart = useCallback(() => {
    setIndex(0);
    setTick((t) => t + 1);
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

  const isLast = index === total - 1;

  return (
    <div className="col-interactive">
      <button
        type="button"
        className="col-stage-button"
        onClick={() => (isLast ? restart() : next())}
        aria-label={isLast ? "Restart" : "Advance to next scene"}
      >
        <div className="col-stage" key={tick}>
          <Scene index={index} />
        </div>
      </button>

      <div className="col-controls">
        <div className="col-progress" aria-hidden="true">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`col-progress__dot ${i <= index ? "is-on" : ""}`}
            />
          ))}
        </div>
        <div className="col-meta">
          <span className="col-meta__count">
            {index + 1} / {total}
          </span>
          <span className="col-meta__title">{sceneTitle(index)}</span>
        </div>
        <div className="col-buttons">
          <button type="button" onClick={prev} disabled={index === 0}>
            ← Back
          </button>
          {isLast ? (
            <button type="button" onClick={restart}>
              Restart
            </button>
          ) : (
            <button type="button" onClick={next} className="col-buttons__primary">
              Next →
            </button>
          )}
        </div>
        <p className="col-hint">
          Press <kbd>Space</kbd> or click the canvas to advance · <kbd>R</kbd> to restart
        </p>
      </div>
    </div>
  );
}
