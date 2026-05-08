import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { easeOutQuart, fadeInOut } from "../anim";

type Props = {
  year: string;
  headline: string;
  detail: string;
  inFrame: number;
  outFrame: number;
  /** When true, accent the headline word coral (the failure). */
  accentWord?: string;
};

export const HistoryCard: React.FC<Props> = ({
  year,
  headline,
  detail,
  inFrame,
  outFrame,
  accentWord,
}) => {
  const frame = useCurrentFrame();
  const opacity = fadeInOut(frame, inFrame, outFrame, 14, 14);
  const yShift = interpolate(frame, [inFrame, inFrame + 18], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // Highlight a single word in coral if requested
  const renderHeadline = () => {
    if (!accentWord) return headline;
    const idx = headline.toLowerCase().indexOf(accentWord.toLowerCase());
    if (idx === -1) return headline;
    const before = headline.slice(0, idx);
    const match = headline.slice(idx, idx + accentWord.length);
    const after = headline.slice(idx + accentWord.length);
    return (
      <>
        {before}
        <span style={{ color: COLORS.coral }}>{match}</span>
        {after}
      </>
    );
  };

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${yShift}px)`,
        textAlign: "center",
        maxWidth: 980,
      }}
    >
      <div
        style={{
          fontFamily: FONT.mono,
          fontWeight: 500,
          fontSize: 34,
          color: COLORS.amber,
          letterSpacing: 4,
          marginBottom: 28,
        }}
      >
        {year}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 600,
          fontSize: 60,
          color: COLORS.text,
          letterSpacing: -1,
          lineHeight: 1.15,
          marginBottom: 24,
        }}
      >
        {renderHeadline()}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 400,
          fontSize: 26,
          color: COLORS.textDim,
          letterSpacing: 0.2,
          lineHeight: 1.4,
        }}
      >
        {detail}
      </div>
    </div>
  );
};
