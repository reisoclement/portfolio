import { theme, fonts } from "../theme";

type Props = {
  label: string;
  width?: number;
  height?: number;
  open?: boolean;
  pulse?: number;
  children?: React.ReactNode;
};

export const Folder: React.FC<Props> = ({
  label,
  width = 520,
  height = 360,
  open = false,
  pulse = 0,
  children,
}) => {
  const alpha = Math.round(pulse * 100).toString(16).padStart(2, "0");
  const bodyGlow =
    pulse > 0
      ? `0 0 ${40 * pulse}px ${theme.amber}${alpha}, 0 0 ${14 * pulse}px ${theme.amber}${alpha}`
      : "none";
  const tabGlow =
    pulse > 0 ? `0 -6px ${24 * pulse}px ${theme.amber}${alpha}` : "none";
  const borderColor = pulse > 0 ? theme.amber : theme.panelEdge;

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 28,
          width: 160,
          height: 24,
          background: theme.panelEdge,
          borderRadius: "8px 8px 0 0",
          boxShadow: tabGlow,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          marginTop: 44,
          background: open ? theme.panel : theme.panelEdge,
          border: `1.5px solid ${borderColor}`,
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          padding: 28,
          gap: 14,
          overflow: "hidden",
          boxShadow: bodyGlow,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 20,
            color: theme.textMuted,
            letterSpacing: 0.5,
          }}
        >
          {label}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
          {children}
        </div>
      </div>
    </div>
  );
};
