import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { easeInOut } from "./anim";

type Options = {
  inDur?: number;
  outDur?: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
};

export const useSceneFade = ({
  inDur = 10,
  outDur = 10,
  fadeIn = true,
  fadeOut = true,
}: Options = {}): number => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const maxHalf = Math.max(0, Math.floor((durationInFrames - 1) / 2));
  const safeIn = Math.max(0, Math.min(inDur, maxHalf));
  const safeOut = Math.max(0, Math.min(outDur, maxHalf));

  const t1 = 0;
  const t2 = Math.max(t1 + 1, safeIn);
  const t4 = durationInFrames;
  const t3 = Math.min(t4 - 1, Math.max(t2 + 1, durationInFrames - safeOut));

  const ramp = interpolate(
    frame,
    [t1, t2, t3, t4],
    [fadeIn ? 0 : 1, 1, 1, fadeOut ? 0 : 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeInOut,
    }
  );

  return ramp;
};
