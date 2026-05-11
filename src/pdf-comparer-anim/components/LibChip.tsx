import { COLORS, FONT } from "../theme";

type Props = {
  name: string;
  note?: string;
  opacity?: number;
  // visual variant
  variant?: "primary" | "secondary";
};

export const LibChip: React.FC<Props> = ({
  name,
  note,
  opacity = 1,
  variant = "primary",
}) => {
  const isPrimary = variant === "primary";
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 26px",
        background: isPrimary ? COLORS.amberSoft : COLORS.steelSoft,
        border: `2px solid ${isPrimary ? COLORS.amber : COLORS.steel}`,
        borderRadius: 999,
        opacity,
      }}
    >
      <span
        style={{
          fontFamily: FONT.mono,
          fontSize: 32,
          fontWeight: 600,
          color: isPrimary ? COLORS.amber : COLORS.steel,
          letterSpacing: 0.5,
        }}
      >
        {name}
      </span>
      {note && (
        <span
          style={{
            fontFamily: FONT.display,
            fontSize: 28,
            color: COLORS.textDim,
            fontWeight: 400,
          }}
        >
          {note}
        </span>
      )}
    </div>
  );
};
