import { interpolate, Easing } from "remotion";

export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const easeInOut = Easing.bezier(0.45, 0, 0.55, 1);

export const fadeIn = (frame: number, start: number, dur = 18) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

export const fadeOut = (frame: number, start: number, dur = 18) =>
  interpolate(frame, [start, start + dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeInOut,
  });

export const rise = (frame: number, start: number, dur = 22, distance = 16) =>
  interpolate(frame, [start, start + dur], [distance, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

export const drawLine = (frame: number, start: number, dur = 26) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

export const window_ = (
  frame: number,
  inAt: number,
  outAt: number,
  inDur = 18,
  outDur = 18,
) => Math.min(fadeIn(frame, inAt, inDur), fadeOut(frame, outAt, outDur));
