import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { easeOutQuart } from "../anim";

type Props = {
  index: number; // 1, 2, 3
  question: string;
  ifYes: string;
  appearAt: number;
  width?: number;
};

export const QuestionCard: React.FC<Props> = ({
  index,
  question,
  ifYes,
  appearAt,
  width = 1100,
}) => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [appearAt, appearAt + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  const answerReveal = interpolate(
    frame,
    [appearAt + 14, appearAt + 30],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOutQuart,
    },
  );

  return (
    <div
      style={{
        width,
        padding: "32px 44px",
        borderRadius: 14,
        background: "rgba(242, 234, 216, 0.04)",
        border: `1.5px solid ${COLORS.rule}`,
        opacity: reveal,
        transform: `translateY(${(1 - reveal) * 18}px)`,
        display: "flex",
        alignItems: "center",
        gap: 36,
      }}
    >
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 600,
          fontSize: 56,
          color: COLORS.textFaint,
          letterSpacing: -1,
          minWidth: 64,
          textAlign: "center",
        }}
      >
        {index}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 500,
            fontSize: 28,
            color: COLORS.text,
            letterSpacing: 0,
            marginBottom: 10,
          }}
        >
          {question}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 22,
            color: COLORS.amber,
            letterSpacing: 1,
            textTransform: "uppercase",
            opacity: answerReveal,
            transform: `translateX(${(1 - answerReveal) * 8}px)`,
          }}
        >
          → {ifYes}
        </div>
      </div>
    </div>
  );
};
