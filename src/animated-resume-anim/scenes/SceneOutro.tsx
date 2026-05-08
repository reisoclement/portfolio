import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { Background } from "../components/Background";
import { fadeIn, rise, drawLine } from "../components/anim";
import { useLocale } from "../LocaleContext";

export const SceneOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const sceneOpacity = fadeIn(frame, 0, 22);

  const nameOpacity = fadeIn(frame, 6, 22);
  const nameY = rise(frame, 6, 24, 14);

  const contactOpacity = fadeIn(frame, 36, 22);
  const contactY = rise(frame, 36, 24, 12);

  const ctaOpacity = fadeIn(frame, 80, 22);
  const ctaY = rise(frame, 80, 26, 14);
  const ctaUnderline = drawLine(frame, 100, 26);

  return (
    <AbsoluteFill>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 36,
          opacity: sceneOpacity,
        }}
      >
        <div
          style={{
            opacity: nameOpacity,
            transform: `translateY(${nameY}px)`,
            fontFamily: FONT,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: COLORS.textDim,
          }}
        >
          {t.outro.nameSmall}
        </div>

        <div
          style={{
            opacity: contactOpacity,
            transform: `translateY(${contactY}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 30,
              fontWeight: 500,
              color: COLORS.text,
              letterSpacing: 0.2,
            }}
          >
            {t.outro.email}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 22,
              color: COLORS.textDim,
              letterSpacing: 0.4,
            }}
          >
            {t.outro.location}
          </div>
        </div>

        <div
          style={{
            opacity: ctaOpacity,
            transform: `translateY(${ctaY}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            marginTop: 20,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 64,
              fontWeight: 600,
              color: COLORS.text,
              letterSpacing: -1,
            }}
          >
            {t.outro.cta}
          </div>
          <div
            style={{
              width: 220 * ctaUnderline,
              height: 3,
              background: COLORS.accent,
              borderRadius: 3,
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
