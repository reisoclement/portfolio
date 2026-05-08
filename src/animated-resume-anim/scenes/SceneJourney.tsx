import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT } from "../theme";
import { Background } from "../components/Background";
import { Flag } from "../components/Flag";
import { fadeIn, fadeOut, rise, drawLine, easeOut } from "../components/anim";
import { useLocale } from "../LocaleContext";

const PIN_LAYOUT: {
  key: "france" | "romania" | "poland";
  flag: "FR" | "RO" | "PL";
  year: string;
  x: number;
}[] = [
  { key: "france", flag: "FR", year: "2019", x: 0.18 },
  { key: "romania", flag: "RO", year: "2024", x: 0.5 },
  { key: "poland", flag: "PL", year: "2025", x: 0.82 },
];

export const SceneJourney: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const sceneOpacity = Math.min(fadeIn(frame, 0, 22), fadeOut(frame, 270, 28));

  const lineWidth = 1500;
  const lineProgress = interpolate(frame, [6, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const pinBase = 40;
  const pinStep = 30;

  const closingStart = 180;
  const closing = fadeIn(frame, closingStart, 22);
  const closingY = rise(frame, closingStart, 26, 14);

  const headingOpacity = fadeIn(frame, 0, 22);
  const headingY = rise(frame, 0, 24, 12);
  const headingLine = drawLine(frame, 14, 26);

  return (
    <AbsoluteFill>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
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
            marginBottom: 30,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: COLORS.textMute,
            }}
          >
            {t.journey.eyebrow}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 48,
              fontWeight: 600,
              color: COLORS.text,
              letterSpacing: -0.5,
            }}
          >
            {t.journey.company}
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
            position: "relative",
            width: lineWidth,
            height: 380,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 200,
              left: 0,
              width: lineWidth,
              height: 2,
              backgroundImage: `radial-gradient(${COLORS.line} 1.5px, transparent 1.5px)`,
              backgroundSize: "12px 2px",
              backgroundRepeat: "repeat-x",
              opacity: 0.7,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 199,
              left: 0,
              width: lineWidth * lineProgress,
              height: 4,
              background: `linear-gradient(90deg, transparent 0%, ${COLORS.accent} 40%, ${COLORS.accent} 60%, transparent 100%)`,
              borderRadius: 2,
              opacity: 0.85,
            }}
          />

          {PIN_LAYOUT.map((pin, i) => {
            const pinStart = pinBase + i * pinStep;
            const drop = interpolate(
              frame,
              [pinStart, pinStart + 20],
              [-60, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: easeOut,
              },
            );
            const pinOpacity = fadeIn(frame, pinStart, 20);
            const flagOpacity = fadeIn(frame, pinStart + 8, 22);
            const flagY = rise(frame, pinStart + 8, 24, 14);
            const labelOpacity = fadeIn(frame, pinStart + 14, 22);
            const labelY = rise(frame, pinStart + 14, 24, 12);

            const data = t.journey.pins[pin.key];

            return (
              <div
                key={pin.key}
                style={{
                  position: "absolute",
                  left: lineWidth * pin.x - 130,
                  top: 0,
                  width: 260,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    opacity: flagOpacity,
                    transform: `translateY(${flagY}px)`,
                    marginBottom: 14,
                    marginTop: 18,
                  }}
                >
                  <Flag country={pin.flag} height={44} />
                </div>

                <div
                  style={{
                    opacity: flagOpacity,
                    transform: `translateY(${flagY}px)`,
                    fontFamily: FONT,
                    fontSize: 36,
                    fontWeight: 600,
                    color: COLORS.text,
                    letterSpacing: -0.5,
                  }}
                >
                  {data.country}
                </div>

                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: COLORS.accent,
                    boxShadow: `0 0 28px ${COLORS.accent}`,
                    opacity: pinOpacity,
                    marginTop: 22,
                    transform: `translateY(${drop}px)`,
                  }}
                />

                <div
                  style={{
                    opacity: labelOpacity,
                    transform: `translateY(${labelY}px)`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 56,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT,
                      fontSize: 24,
                      fontWeight: 500,
                      color: COLORS.text,
                      letterSpacing: 0.2,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {data.role}
                  </div>
                  <div
                    style={{
                      fontFamily: FONT,
                      fontSize: 18,
                      fontWeight: 400,
                      color: COLORS.textDim,
                      letterSpacing: 2,
                    }}
                  >
                    {pin.year}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 80,
            fontFamily: FONT,
            fontSize: 36,
            fontWeight: 400,
            color: COLORS.text,
            opacity: closing,
            transform: `translateY(${closingY}px)`,
            letterSpacing: -0.3,
            textAlign: "center",
            maxWidth: 1400,
          }}
        >
          {t.journey.closing}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
