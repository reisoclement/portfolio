import { theme, fonts } from "../theme";

type Props = {
  name: string;
  width?: number;
  highlight?: boolean;
  opacity?: number;
  scale?: number;
};

export const FileCard: React.FC<Props> = ({
  name,
  width = 320,
  highlight = false,
  opacity = 1,
  scale = 1,
}) => {
  return (
    <div
      style={{
        width,
        padding: "14px 18px",
        background: theme.panel,
        border: `1px solid ${highlight ? theme.amber : theme.panelEdge}`,
        borderRadius: 8,
        fontFamily: fonts.mono,
        fontSize: 22,
        color: highlight ? theme.amber : theme.text,
        opacity,
        transform: `scale(${scale})`,
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: highlight ? `0 0 24px ${theme.amber}33` : "none",
        transition: "none",
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: 2,
          background: highlight ? theme.amber : theme.textMuted,
        }}
      />
      <span>{name}</span>
    </div>
  );
};
