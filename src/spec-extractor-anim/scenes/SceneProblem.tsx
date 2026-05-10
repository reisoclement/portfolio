import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";

export const SceneProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 7 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 200, right: 120 }}>
        <SectionHeading kicker={t.sceneTitles.problem} title={t.text.problem.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 480,
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        {t.text.problem.bullets.map((b, i) => {
          const r = rise(frame, 24 + i * 14, 22, 24);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 24,
                alignItems: "baseline",
                fontFamily: FONT.display,
                fontSize: 40,
                color: COLORS.text,
                lineHeight: 1.35,
                opacity: r.opacity,
                transform: `translateY(${r.y}px)`,
                padding: "20px 32px",
                background: COLORS.steelSoft,
                border: `1px solid ${COLORS.steelDim}`,
                borderRadius: 14,
              }}
            >
              <span
                style={{
                  color: COLORS.amber,
                  fontFamily: FONT.mono,
                  fontWeight: 700,
                  fontSize: 32,
                }}
              >
                {`0${i + 1}`}
              </span>
              <span>{b}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
