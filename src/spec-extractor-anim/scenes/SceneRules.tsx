import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CATEGORY_COLORS, COLORS, FONT, FPS, type Category } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";

// Show all 8 categories as colored chips with sample keywords. The numeric
// note flashes in last with the unit constraint.
export const SceneRules: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 9 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const explain = rise(frame, 30, 22, 18);
  const numeric = rise(frame, 200, 22, 18);

  const cats: { key: Category; label: string; sample: string }[] = [
    { key: "obligation",  label: "Obligation",   sample: t.text.rules.categories.obligation },
    { key: "application", label: "Application",  sample: t.text.rules.categories.application },
    { key: "compliance",  label: "Compliance",   sample: t.text.rules.categories.compliance },
    { key: "requirement", label: "Requirement",  sample: t.text.rules.categories.requirement },
    { key: "expectation", label: "Expectation",  sample: t.text.rules.categories.expectation },
    { key: "assessment",  label: "Assessment",   sample: t.text.rules.categories.assessment },
    { key: "guarantee",   label: "Guarantee",    sample: t.text.rules.categories.guarantee },
    { key: "numerical",   label: "Numerical",    sample: t.text.rules.categories.numerical },
  ];

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 110, right: 120 }}>
        <SectionHeading kicker={t.text.rules.kicker} title={t.text.rules.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 290,
          fontFamily: FONT.display,
          fontSize: 30,
          color: COLORS.textDim,
          lineHeight: 1.4,
          opacity: explain.opacity,
          transform: `translateY(${explain.y}px)`,
          marginBottom: 36,
        }}
      >
        {t.text.rules.explainer}
      </div>

      {/* 4x2 grid of category cards */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 420,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 22,
        }}
      >
        {cats.map((c, i) => {
          const r = rise(frame, 50 + i * 8, 20, 22);
          const color = CATEGORY_COLORS[c.key];
          return (
            <div
              key={c.key}
              style={{
                background: `${color}20`,
                border: `2px solid ${color}`,
                borderRadius: 14,
                padding: "20px 24px",
                opacity: r.opacity,
                transform: `translateY(${r.y}px)`,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 130,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 4,
                    background: color,
                  }}
                />
                <div
                  style={{
                    fontFamily: FONT.display,
                    fontSize: 28,
                    fontWeight: 600,
                    color: COLORS.text,
                    letterSpacing: -0.3,
                  }}
                >
                  {c.label}
                </div>
              </div>
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 24,
                  color: COLORS.textDim,
                  letterSpacing: 0.3,
                  lineHeight: 1.35,
                }}
              >
                {c.sample}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom numeric note */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 70,
          fontFamily: FONT.display,
          fontSize: 30,
          color: COLORS.amber,
          textAlign: "center",
          fontWeight: 500,
          lineHeight: 1.35,
          opacity: numeric.opacity,
          transform: `translateY(${numeric.y}px)`,
        }}
      >
        {t.text.rules.numericNote}
      </div>
    </AbsoluteFill>
  );
};
