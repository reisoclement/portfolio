import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { Background } from "../components/Background";
import { fadeIn, fadeOut, rise } from "../components/anim";
import {
  IconChess,
  IconBee,
  IconSnowboard,
  IconVolley,
  IconBike,
  IconMotor,
  IconFitness,
  IconGlider,
  IconCode,
} from "../components/HobbyIcons";
import { useLocale } from "../LocaleContext";
import type { HobbyKey } from "../i18n";

const ICONS: Record<HobbyKey, React.FC> = {
  chess: IconChess,
  bee: IconBee,
  snowboard: IconSnowboard,
  volley: IconVolley,
  bike: IconBike,
  motor: IconMotor,
  fitness: IconFitness,
  glider: IconGlider,
  code: IconCode,
};

export const SceneHobbies: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const sceneOpacity = Math.min(fadeIn(frame, 0, 22), fadeOut(frame, 300, 28));

  const headingOpacity = fadeIn(frame, 0, 22);
  const headingY = rise(frame, 0, 24, 12);

  return (
    <AbsoluteFill>
      <Background warm />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 48,
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
            {t.hobbies.heading}
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
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(260px, auto))",
            gap: 36,
          }}
        >
          {t.hobbies.items.map((h, i) => {
            const start = 40 + i * 10;
            const op = fadeIn(frame, start, 22);
            const y = rise(frame, start, 24, 10);
            const Icon = ICONS[h.key];
            return (
              <div
                key={h.key}
                style={{
                  opacity: op,
                  transform: `translateY(${y}px)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 22px",
                }}
              >
                <Icon />
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 22,
                    fontWeight: 400,
                    color: COLORS.text,
                    letterSpacing: 0.2,
                  }}
                >
                  {h.label}
                </div>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
