import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { easeOutQuart } from "../anim";

type Variant = "do" | "dont";

type Props = {
  variant: Variant;
  title: string;
  items: string[];
  appearAt: number;
  width?: number;
};

export const ChecklistPanel: React.FC<Props> = ({
  variant,
  title,
  items,
  appearAt,
  width = 720,
}) => {
  const frame = useCurrentFrame();
  const isDo = variant === "do";
  const accent = isDo ? COLORS.sage : COLORS.coral;
  const accentSoft = isDo ? COLORS.sageSoft : COLORS.coralSoft;

  const panelReveal = interpolate(frame, [appearAt, appearAt + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  return (
    <div
      style={{
        width,
        padding: "44px 56px",
        borderRadius: 14,
        background: accentSoft,
        border: `1.5px solid ${accent}`,
        opacity: panelReveal,
        transform: `translateY(${(1 - panelReveal) * 18}px)`,
        boxShadow: `0 0 60px ${accentSoft}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          marginBottom: 32,
        }}
      >
        <Mark variant={variant} accent={accent} appearAt={appearAt + 6} />
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 38,
            color: COLORS.text,
            letterSpacing: -0.5,
          }}
        >
          {title}
        </div>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {items.map((item, i) => {
          const itemAppear = appearAt + 18 + i * 8;
          const itemReveal = interpolate(
            frame,
            [itemAppear, itemAppear + 14],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: easeOutQuart,
            },
          );
          return (
            <li
              key={i}
              style={{
                fontFamily: FONT.display,
                fontWeight: 400,
                fontSize: 26,
                color: COLORS.text,
                letterSpacing: 0.2,
                opacity: itemReveal,
                transform: `translateX(${(1 - itemReveal) * 16}px)`,
                display: "flex",
                alignItems: "baseline",
                gap: 14,
              }}
            >
              <span style={{ color: accent, fontSize: 18 }}>—</span>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Mark: React.FC<{
  variant: Variant;
  accent: string;
  appearAt: number;
}> = ({ variant, accent, appearAt }) => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [appearAt, appearAt + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 12,
        border: `2px solid ${accent}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: reveal,
        transform: `scale(${0.7 + 0.3 * reveal})`,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {variant === "do" ? (
          <path
            d="M6 17 L13 24 L26 9"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <>
            <path
              d="M8 8 L24 24"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M24 8 L8 24"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </div>
  );
};
