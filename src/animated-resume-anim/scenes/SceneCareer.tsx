import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT } from "../theme";
import { Background } from "../components/Background";
import { fadeIn, fadeOut, rise, easeOut } from "../components/anim";
import { useLocale } from "../LocaleContext";

type Role = {
  key: "reservist" | "apprentice" | "dataAi" | "leadAi";
  startYear: number;
  endYear: number | "now";
  fill: "gold" | "mech-to-ai" | "ai" | "current";
};

const YEAR_START = 2018;
const YEAR_END = 2026.4;

const ROLES: Role[] = [
  { key: "reservist", startYear: 2019, endYear: "now", fill: "gold" },
  { key: "apprentice", startYear: 2021, endYear: 2024, fill: "mech-to-ai" },
  { key: "dataAi", startYear: 2024, endYear: 2025, fill: "ai" },
  { key: "leadAi", startYear: 2025, endYear: "now", fill: "current" },
];

const SELF_LEARNING_START = 2021;

const fillFor = (
  fill: Role["fill"],
): { background: string; shadow?: string } => {
  switch (fill) {
    case "gold":
      return { background: COLORS.gold };
    case "mech-to-ai":
      return {
        background: `linear-gradient(90deg, ${COLORS.gold} 0%, ${COLORS.gold} 55%, ${COLORS.accent} 100%)`,
      };
    case "ai":
      return {
        background: `linear-gradient(90deg, ${COLORS.gold} 0%, ${COLORS.accent} 25%, ${COLORS.accent} 100%)`,
      };
    case "current":
      return {
        background: COLORS.accent,
        shadow: `0 0 16px ${COLORS.accent}`,
      };
  }
};

export const SceneCareer: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const sceneOpacity = Math.min(fadeIn(frame, 0, 22), fadeOut(frame, 320, 28));

  const headingOpacity = fadeIn(frame, 0, 22);
  const headingY = rise(frame, 0, 24, 12);

  const axisLeft = 220;
  const axisRight = 1700;
  const axisWidth = axisRight - axisLeft;

  const xFor = (y: number) =>
    axisLeft + ((y - YEAR_START) / (YEAR_END - YEAR_START)) * axisWidth;

  const axisProgress = interpolate(frame, [20, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });

  const selfStart = 60 + ROLES.length * 30;
  const selfOpacity = fadeIn(frame, selfStart, 22);
  const selfY = rise(frame, selfStart, 26, 14);
  const selfDrawProgress = interpolate(
    frame,
    [selfStart + 6, selfStart + 50],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOut,
    },
  );

  const selfLeft = xFor(SELF_LEARNING_START);
  const selfRight = xFor(YEAR_END);
  const selfFullWidth = selfRight - selfLeft;

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
            fontFamily: FONT,
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: COLORS.textDim,
            marginBottom: 60,
          }}
        >
          {t.career.heading}
        </div>

        <div style={{ position: "relative", width: 1920, height: 560 }}>
          <div
            style={{
              position: "absolute",
              left: axisLeft,
              top: 470,
              width: axisWidth * axisProgress,
              height: 2,
              background: COLORS.line,
            }}
          />
          {[2019, 2021, 2023, 2025].map((y) => {
            const tickOpacity = fadeIn(frame, 30 + (y - 2019) * 4, 22);
            return (
              <div
                key={y}
                style={{
                  position: "absolute",
                  left: xFor(y) - 24,
                  top: 482,
                  width: 48,
                  textAlign: "center",
                  fontFamily: FONT,
                  fontSize: 16,
                  color: COLORS.textMute,
                  letterSpacing: 1,
                  opacity: tickOpacity,
                }}
              >
                {y}
              </div>
            );
          })}

          {ROLES.map((role, i) => {
            const start = 60 + i * 30;
            const opacity = fadeIn(frame, start, 22);
            const yOffset = rise(frame, start, 26, 14);
            const left = xFor(role.startYear);
            const endY = role.endYear === "now" ? YEAR_END : role.endYear;
            const right = xFor(endY);
            const barProgress = interpolate(
              frame,
              [start + 6, start + 36],
              [0, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: easeOut,
              },
            );
            const top = 30 + i * 70;

            const pulseSettled = Math.max(0, frame - (start + 36));
            const pulse =
              role.fill === "current"
                ? 0.82 + (Math.sin(pulseSettled / 10) * 0.5 + 0.5) * 0.16
                : 1;

            const fullWidth = right - left;
            const fill = fillFor(role.fill);
            const r = t.career.roles[role.key];

            return (
              <div
                key={role.key}
                style={{
                  position: "absolute",
                  left,
                  top,
                  opacity,
                  transform: `translateY(${yOffset}px)`,
                }}
              >
                <div
                  style={{
                    width: fullWidth,
                    height: 6,
                    borderRadius: 3,
                    overflow: "hidden",
                    opacity: pulse,
                    boxShadow: fill.shadow,
                  }}
                >
                  <div
                    style={{
                      width: fullWidth,
                      height: "100%",
                      background: fill.background,
                      clipPath: `inset(0 ${(1 - barProgress) * 100}% 0 0)`,
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontFamily: FONT,
                    fontSize: 20,
                    fontWeight: 500,
                    color: COLORS.text,
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.title}
                </div>
                <div
                  style={{
                    marginTop: 2,
                    fontFamily: FONT,
                    fontSize: 16,
                    color: COLORS.textDim,
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.org} · {r.city}
                </div>
              </div>
            );
          })}

          <div
            style={{
              position: "absolute",
              left: selfLeft,
              top: 510,
              opacity: selfOpacity,
              transform: `translateY(${selfY}px)`,
            }}
          >
            <div
              style={{
                position: "relative",
                width: selfFullWidth,
                height: 4,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 1,
                  width: selfFullWidth * selfDrawProgress,
                  height: 2,
                  backgroundImage: `linear-gradient(90deg, ${COLORS.accent} 60%, transparent 0%)`,
                  backgroundSize: "12px 2px",
                  backgroundRepeat: "repeat-x",
                  opacity: 0.85,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: selfFullWidth * selfDrawProgress - 4,
                  top: -2,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: COLORS.accent,
                  boxShadow: `0 0 14px ${COLORS.accent}`,
                  opacity:
                    selfDrawProgress >= 1
                      ? 0.8 + Math.sin(frame / 10) * 0.2
                      : 1,
                }}
              />
            </div>
            <div
              style={{
                marginTop: 12,
                fontFamily: FONT,
                fontSize: 18,
                fontWeight: 500,
                color: COLORS.accent,
                letterSpacing: 1.2,
                textTransform: "uppercase",
              }}
            >
              {t.career.selfLearning.title}
            </div>
            <div
              style={{
                marginTop: 2,
                fontFamily: FONT,
                fontSize: 14,
                color: COLORS.textDim,
                fontStyle: "italic",
              }}
            >
              {t.career.selfLearning.subtitle}
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
