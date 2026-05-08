import { useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { fadeIn, drawLine, rise } from "./anim";

export const Heading: React.FC<{
  text: string;
  startFrame: number;
}> = ({ text, startFrame }) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, startFrame, 18);
  const y = rise(frame, startFrame, 22, 12);
  const lineProgress = drawLine(frame, startFrame + 10, 22);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: COLORS.textDim,
        }}
      >
        {text}
      </div>
      <div
        style={{
          width: 60 * lineProgress,
          height: 2,
          background: COLORS.accent,
          borderRadius: 2,
        }}
      />
    </div>
  );
};
