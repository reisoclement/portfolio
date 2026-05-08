import { COLORS, FONT } from "../theme";
import { fadeInOut } from "../anim";
import { useCurrentFrame } from "remotion";

type Props = {
  text: string;
  inFrame: number;
  outFrame: number;
  position?: "top" | "bottom" | "center";
  size?: number;
  weight?: number;
  color?: string;
  letterSpacing?: number;
};

export const Caption: React.FC<Props> = ({
  text,
  inFrame,
  outFrame,
  position = "bottom",
  size = 36,
  weight = 500,
  color = COLORS.text,
  letterSpacing = -0.5,
}) => {
  const frame = useCurrentFrame();
  const opacity = fadeInOut(frame, inFrame, outFrame, 14, 14);

  const yPos =
    position === "top" ? "8%" : position === "center" ? "50%" : "92%";
  const translateY = position === "center" ? "-50%" : "0";

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: yPos,
        transform: `translateY(${translateY})`,
        textAlign: "center",
        opacity,
        fontFamily: FONT.display,
        fontWeight: weight,
        fontSize: size,
        color,
        letterSpacing,
        padding: "0 120px",
      }}
    >
      {text}
    </div>
  );
};
