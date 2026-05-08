import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { Background } from "../components/Background";
import { fadeIn, fadeOut, rise, drawLine } from "../components/anim";
import { useLocale } from "../LocaleContext";

export const SceneEducation: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const sceneOpacity = Math.min(fadeIn(frame, 0, 22), fadeOut(frame, 210, 28));

  const headingOpacity = fadeIn(frame, 0, 22);
  const headingY = rise(frame, 0, 24, 12);
  const lineProgress = drawLine(frame, 16, 26);

  const capOpacity = fadeIn(frame, 30, 22);
  const capY = rise(frame, 30, 26, 14);

  const primaryOpacity = fadeIn(frame, 60, 22);
  const primaryY = rise(frame, 60, 26, 14);

  const secondaryOpacity = fadeIn(frame, 100, 22);
  const secondaryY = rise(frame, 100, 26, 12);

  return (
    <AbsoluteFill>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 40,
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
            gap: 14,
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
            {t.education.heading}
          </div>
          <div
            style={{
              width: 80 * lineProgress,
              height: 2,
              background: COLORS.accent,
              borderRadius: 2,
            }}
          />
        </div>

        <div
          style={{
            opacity: capOpacity,
            transform: `translateY(${capY}px)`,
            marginTop: 4,
          }}
        >
          <svg
            width="140"
            height="140"
            viewBox="0 0 24 24"
            fill="none"
            stroke={COLORS.accent}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 9.5l10-4.5 10 4.5-10 4.5z" />
            <path d="M6 11.3v4.2c0 1.9 2.7 3.4 6 3.4s6-1.5 6-3.4v-4.2" />
            <path d="M22 9.5v5.2" />
            <path d="M22 14.7l-1.1 2.3h2.2z" />
          </svg>
        </div>

        <div
          style={{
            opacity: primaryOpacity,
            transform: `translateY(${primaryY}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 56,
              fontWeight: 600,
              color: COLORS.text,
              letterSpacing: -1,
              lineHeight: 1.1,
            }}
          >
            {t.education.school}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 400,
              color: COLORS.gold,
              letterSpacing: 0.2,
              maxWidth: 1300,
            }}
          >
            {t.education.degree}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 22,
              fontWeight: 400,
              color: COLORS.textDim,
              letterSpacing: 1,
              marginTop: 2,
            }}
          >
            {t.education.years}
          </div>
        </div>

        <div
          style={{
            opacity: secondaryOpacity,
            transform: `translateY(${secondaryY}px)`,
            display: "flex",
            gap: 56,
            marginTop: 14,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 20,
              color: COLORS.textDim,
              letterSpacing: 0.3,
            }}
          >
            {t.education.secondary1}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 20,
              color: COLORS.textDim,
              letterSpacing: 0.3,
            }}
          >
            {t.education.secondary2}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
