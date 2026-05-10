import { Easing, interpolate, spring } from "remotion";

export const easeOutQuart = Easing.bezier(0.25, 1, 0.5, 1);
export const easeInOutCubic = Easing.bezier(0.65, 0, 0.35, 1);
export const easeOutExpo = Easing.bezier(0.16, 1, 0.3, 1);

export function fadeIn(frame: number, start: number, duration = 12): number {
  if (duration <= 0) return frame >= start ? 1 : 0;
  return interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
}

export function fadeOut(frame: number, start: number, duration = 12): number {
  if (duration <= 0) return frame >= start ? 0 : 1;
  return interpolate(frame, [start, start + duration], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeInOutCubic,
  });
}

export function fadeInOut(
  frame: number,
  inStart: number,
  outStart: number,
  inDur = 12,
  outDur = 12,
): number {
  return Math.min(fadeIn(frame, inStart, inDur), fadeOut(frame, outStart, outDur));
}

export function snapIn(
  frame: number,
  start: number,
  fps: number,
): { scale: number; opacity: number } {
  const opacity = fadeIn(frame, start, 8);
  const scale = spring({
    frame: frame - start,
    fps,
    config: { damping: 18, stiffness: 180, mass: 0.6 },
    from: 0.85,
    to: 1,
  });
  return { scale, opacity };
}

export function rise(
  frame: number,
  start: number,
  duration = 18,
  distance = 24,
): { y: number; opacity: number } {
  const t = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  return { y: (1 - t) * distance, opacity: t };
}
