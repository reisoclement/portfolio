import { theme, fonts } from "../theme";

type Props = {
  lines: string[];
  width?: number;
  height?: number;
  opacity?: number;
};

export const FilePreview: React.FC<Props> = ({
  lines,
  width = 420,
  height = 180,
  opacity = 1,
}) => {
  return (
    <div
      style={{
        width,
        minHeight: height,
        background: "#FBF7EE",
        borderRadius: 10,
        padding: "20px 24px",
        fontFamily: fonts.sans,
        fontSize: 22,
        color: "#1F1B14",
        lineHeight: 1.5,
        boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
        opacity,
        position: "relative",
      }}
    >
      {lines.map((line, i) => {
        const isHeading = line.startsWith("#");
        const isBullet = line.startsWith("- ");
        if (isHeading) {
          return (
            <div
              key={i}
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                color: theme.textMuted,
                marginBottom: 8,
                letterSpacing: 0.5,
              }}
            >
              {line.replace(/^#\s*/, "")}
            </div>
          );
        }
        if (isBullet) {
          return (
            <div key={i} style={{ display: "flex", gap: 10 }}>
              <span style={{ color: theme.amber }}>•</span>
              <span>{line.replace(/^- /, "")}</span>
            </div>
          );
        }
        if (line === "") {
          return <div key={i} style={{ height: 8 }} />;
        }
        return <div key={i}>{line}</div>;
      })}
    </div>
  );
};
