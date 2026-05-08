import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT } from "../theme";
import { Background } from "../components/Background";
import { Chip } from "../components/Chip";
import { fadeIn, fadeOut, rise, easeOut } from "../components/anim";
import { useLocale } from "../LocaleContext";

const TECH = [
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "Docker",
  "Git",
  "GitHub",
  "VS Code",
];

const TOOLS = [
  "Sinequa",
  "VocBench",
  "Palantir",
  "DELMIA",
  "FlexSim",
  "Catia",
  "Slack",
  "Asana",
];

export const SceneStack: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const sceneOpacity = Math.min(fadeIn(frame, 0, 22), fadeOut(frame, 390, 28));

  const headingOpacity = fadeIn(frame, 0, 22);
  const headingY = rise(frame, 0, 24, 12);

  const langStart = 240;
  const langOpacity = fadeIn(frame, langStart, 22);
  const langY = rise(frame, langStart, 26, 14);

  return (
    <AbsoluteFill>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 36,
          padding: "0 140px",
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
            marginBottom: 6,
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
            {t.stack.heading}
          </div>
          <div
            style={{
              width: 80,
              height: 2,
              background: COLORS.accent,
              borderRadius: 2,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            maxWidth: 1500,
          }}
        >
          {TECH.map((tech, i) => (
            <Chip key={tech} label={tech} startFrame={40 + i * 5} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            maxWidth: 1500,
          }}
        >
          {TOOLS.map((tool, i) => (
            <Chip key={tool} label={tool} startFrame={90 + i * 5} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 14,
            maxWidth: 1500,
            marginTop: 18,
          }}
        >
          {t.stack.skills.map((s, i) => (
            <Chip
              key={s}
              label={s}
              startFrame={160 + i * 8}
              emphasis="skill"
            />
          ))}
        </div>

        <div
          style={{
            opacity: langOpacity,
            transform: `translateY(${langY}px)`,
            display: "flex",
            justifyContent: "center",
            gap: 48,
            marginTop: 30,
          }}
        >
          {t.stack.languages.map((l, i) => {
            const barProgress = interpolate(
              frame,
              [langStart + 14 + i * 6, langStart + 50 + i * 6],
              [0, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: easeOut,
              },
            );
            return (
              <div
                key={l.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 8,
                  minWidth: 180,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 22,
                    fontWeight: 500,
                    color: COLORS.text,
                  }}
                >
                  {l.name}
                </div>
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 15,
                    color: COLORS.textDim,
                    letterSpacing: 0.4,
                  }}
                >
                  {l.level}
                </div>
                <div
                  style={{
                    width: 180,
                    height: 4,
                    background: COLORS.line,
                    borderRadius: 2,
                    overflow: "hidden",
                    marginTop: 2,
                  }}
                >
                  <div
                    style={{
                      width: `${l.bar * barProgress * 100}%`,
                      height: "100%",
                      background: COLORS.gold,
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
