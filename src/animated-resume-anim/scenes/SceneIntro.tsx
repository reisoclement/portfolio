import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { Background } from "../components/Background";
import { fadeIn, fadeOut, rise, drawLine } from "../components/anim";
import { useLocale } from "../LocaleContext";

export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();

  const nameOpacity = fadeIn(frame, 6, 22);
  const nameY = rise(frame, 6, 28, 18);

  const roleOpacity = fadeIn(frame, 22, 22);
  const roleY = rise(frame, 22, 28, 14);

  const lineProgress = drawLine(frame, 40, 26);

  const taglineOpacity = fadeIn(frame, 60, 22);
  const taglineY = rise(frame, 60, 28, 12);

  const exitMul = fadeOut(frame, 240, 28);

  return (
    <AbsoluteFill>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 160px",
          opacity: exitMul,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 400,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: COLORS.textDim,
              opacity: nameOpacity,
              transform: `translateY(${nameY}px)`,
            }}
          >
            {t.intro.name}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: -1.5,
              color: COLORS.text,
              lineHeight: 1.05,
              opacity: roleOpacity,
              transform: `translateY(${roleY}px)`,
              whiteSpace: "pre-line",
            }}
          >
            {t.intro.role}
          </div>
          <div
            style={{
              width: 220 * lineProgress,
              height: 3,
              background: COLORS.accent,
              borderRadius: 3,
              marginTop: 8,
            }}
          />
          <div
            style={{
              fontFamily: FONT,
              fontSize: 30,
              fontWeight: 400,
              color: COLORS.textDim,
              maxWidth: 1100,
              lineHeight: 1.45,
              marginTop: 16,
              opacity: taglineOpacity,
              transform: `translateY(${taglineY}px)`,
            }}
          >
            {t.intro.tagline}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
