import { theme, fonts } from "../theme";

type Props = {
  text: string;
  color?: "yellow" | "green" | "red";
  rotation?: number;
  size?: "sm" | "md" | "lg";
};

export const Sticky: React.FC<Props> = ({
  text,
  color = "yellow",
  rotation = 0,
  size = "md",
}) => {
  const bg =
    color === "red"
      ? theme.stickyRed
      : color === "green"
      ? theme.stickyGreen
      : theme.stickyYellow;
  const dims = size === "lg" ? 220 : size === "sm" ? 110 : 150;
  const fontSize = size === "lg" ? 26 : size === "sm" ? 13 : 16;

  return (
    <div
      style={{
        width: dims,
        height: dims,
        background: bg,
        transform: `rotate(${rotation}deg)`,
        boxShadow: "0 8px 18px rgba(0,0,0,0.35)",
        padding: 14,
        fontFamily: fonts.hand,
        fontSize,
        color: "#2a2516",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        lineHeight: 1.2,
      }}
    >
      {text}
    </div>
  );
};
