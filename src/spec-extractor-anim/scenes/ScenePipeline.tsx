import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FONT_SIZE, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";

// 3x3 grid of pipeline steps.
export const ScenePipeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 8 * FPS;

  const heading = rise(frame, 4, 22, 18);
  const exit = fadeOut(frame, total - 14, 14);
  const steps = t.text.pipeline.steps;

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", top: 120, left: 120, right: 120 }}>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 28,
            color: COLORS.amber,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 18,
            opacity: heading.opacity,
            transform: `translateY(${heading.y}px)`,
          }}
        >
          {t.text.pipeline.kicker}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 700,
            fontSize: FONT_SIZE.subtitle + 12,
            color: COLORS.text,
            letterSpacing: -1.5,
            lineHeight: 1.1,
            opacity: heading.opacity,
            transform: `translateY(${heading.y}px)`,
          }}
        >
          {t.text.pipeline.heading}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 360,
          left: 120,
          right: 120,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
        }}
      >
        {steps.map((step, i) => {
          const r = rise(frame, 24 + i * 6, 18, 22);
          return (
            <div
              key={i}
              style={{
                background: COLORS.steelSoft,
                border: `2px solid ${COLORS.steelDim}`,
                borderRadius: 16,
                padding: "26px 30px",
                opacity: r.opacity,
                transform: `translateY(${r.y}px)`,
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 28,
                  fontWeight: 700,
                  color: COLORS.amber,
                  letterSpacing: 1,
                }}
              >
                {`0${i + 1}`}
              </div>
              <div
                style={{
                  fontFamily: FONT.display,
                  fontSize: 32,
                  fontWeight: 500,
                  color: COLORS.text,
                  lineHeight: 1.25,
                  letterSpacing: -0.3,
                }}
              >
                {step}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
