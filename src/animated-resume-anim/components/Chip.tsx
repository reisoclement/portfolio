import { useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { fadeIn, rise } from "./anim";

export const Chip: React.FC<{
  label: string;
  startFrame: number;
  emphasis?: "tech" | "skill";
}> = ({ label, startFrame, emphasis = "tech" }) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, startFrame, 16);
  const y = rise(frame, startFrame, 22, 10);

  const isSkill = emphasis === "skill";

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        display: "inline-flex",
        alignItems: "center",
        gap: isSkill ? 12 : 10,
        padding: isSkill ? "14px 22px" : "10px 18px",
        borderRadius: 999,
        border: `1px solid ${COLORS.line}`,
        background: isSkill ? "rgba(233, 79, 124, 0.08)" : "rgba(255,255,255,0.02)",
        fontFamily: FONT,
        fontSize: isSkill ? 24 : 20,
        fontWeight: isSkill ? 500 : 400,
        color: COLORS.text,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: isSkill ? 8 : 6,
          height: isSkill ? 8 : 6,
          borderRadius: "50%",
          background: isSkill ? COLORS.accent : COLORS.gold,
        }}
      />
      {label}
    </div>
  );
};
