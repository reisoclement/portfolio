import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { Background } from "../components/Background";
import { fadeIn, fadeOut, rise, drawLine } from "../components/anim";
import { useLocale } from "../LocaleContext";

export const SceneSideProject: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const sceneOpacity = Math.min(fadeIn(frame, 0, 22), fadeOut(frame, 360, 28));

  const headingOpacity = fadeIn(frame, 0, 22);
  const headingY = rise(frame, 0, 24, 12);
  const headingLine = drawLine(frame, 16, 26);

  const bigOpacity = fadeIn(frame, 32, 26);
  const bigY = rise(frame, 32, 28, 18);
  const labelOpacity = fadeIn(frame, 60, 26);
  const labelY = rise(frame, 60, 26, 14);

  const descOpacity = fadeIn(frame, 100, 26);
  const descY = rise(frame, 100, 28, 14);

  const supportingStart = 150;

  const supporting = [
    t.sideProject.supporting.team,
    t.sideProject.supporting.realtime,
    t.sideProject.supporting.cto,
  ];

  return (
    <AbsoluteFill>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 28,
          padding: "0 160px",
          opacity: sceneOpacity,
        }}
      >
        <div
          style={{
            opacity: headingOpacity,
            transform: `translateY(${headingY}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            marginBottom: 4,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: COLORS.textDim,
            }}
          >
            {t.sideProject.heading}
          </div>
          <div
            style={{
              width: 80 * headingLine,
              height: 2,
              background: COLORS.accent,
              borderRadius: 2,
            }}
          />
        </div>

        <div
          style={{
            opacity: bigOpacity,
            transform: `translateY(${bigY}px)`,
            fontFamily: FONT,
            fontSize: 220,
            fontWeight: 700,
            color: COLORS.accent,
            letterSpacing: -6,
            lineHeight: 0.95,
            textShadow: `0 0 60px rgba(233, 79, 124, 0.25)`,
          }}
        >
          3,640
        </div>
        <div
          style={{
            opacity: labelOpacity,
            transform: `translateY(${labelY}px)`,
            fontFamily: FONT,
            fontSize: 32,
            fontWeight: 500,
            color: COLORS.gold,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginTop: -12,
            textAlign: "center",
            maxWidth: 1300,
          }}
        >
          {t.sideProject.bigLabel}
        </div>

        <div
          style={{
            opacity: descOpacity,
            transform: `translateY(${descY}px)`,
            fontFamily: FONT,
            fontSize: 26,
            fontWeight: 400,
            color: COLORS.text,
            lineHeight: 1.5,
            maxWidth: 1200,
            textAlign: "center",
            marginTop: 18,
          }}
        >
          {t.sideProject.description}
        </div>

        <div
          style={{
            display: "flex",
            gap: 80,
            marginTop: 30,
          }}
        >
          {supporting.map((s, i) => {
            const start = supportingStart + i * 18;
            const op = fadeIn(frame, start, 22);
            const y = rise(frame, start, 24, 12);
            return (
              <div
                key={s.value}
                style={{
                  opacity: op,
                  transform: `translateY(${y}px)`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  minWidth: 220,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 30,
                    fontWeight: 600,
                    color: COLORS.text,
                    letterSpacing: -0.4,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 17,
                    fontWeight: 400,
                    color: COLORS.textDim,
                    letterSpacing: 0.6,
                    textAlign: "center",
                  }}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
