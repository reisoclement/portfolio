import { useCurrentFrame } from "remotion";
import { COLORS, FONT, FONT_SIZE } from "../theme";
import { rise } from "../anim";

type Props = {
  kicker?: string;
  title: string;
  startFrame?: number;
};

export const SectionHeading: React.FC<Props> = ({
  kicker,
  title,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const k = rise(frame, startFrame, 18, 16);
  const t = rise(frame, startFrame + 6, 22, 22);

  return (
    <div style={{ marginBottom: 60 }}>
      {kicker && (
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: COLORS.amber,
            opacity: k.opacity,
            transform: `translateY(${k.y}px)`,
            marginBottom: 18,
          }}
        >
          {kicker}
        </div>
      )}
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 700,
          fontSize: FONT_SIZE.subtitle,
          letterSpacing: -1.5,
          color: COLORS.text,
          opacity: t.opacity,
          transform: `translateY(${t.y}px)`,
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>
    </div>
  );
};
