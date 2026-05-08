export const typewriter = (full: string, frame: number, start: number, charsPerFrame = 0.5) => {
  if (frame < start) return "";
  const elapsed = frame - start;
  const charCount = Math.floor(elapsed * charsPerFrame);
  return full.slice(0, Math.min(charCount, full.length));
};

export const blinkingCursor = (frame: number, on = true) => {
  if (!on) return false;
  return Math.floor(frame / 15) % 2 === 0;
};
