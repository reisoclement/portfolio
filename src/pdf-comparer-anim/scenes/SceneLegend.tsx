import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";

export const SceneLegend: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 6 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const items = [
    { label: t.text.legend.green, color: COLORS.added, soft: COLORS.addedSoft },
    { label: t.text.legend.red, color: COLORS.removed, soft: COLORS.removedSoft },
    { label: t.text.legend.grey, color: COLORS.moved, soft: COLORS.movedSoft },
    { label: t.text.legend.yellow, color: COLORS.caseOnly, soft: COLORS.caseOnlySoft },
  ];

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 200, right: 120 }}>
        <SectionHeading kicker="Reading the report" title={t.text.legend.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 480,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 36,
        }}
      >
        {items.map((it, i) => {
          const r = rise(frame, 24 + i * 8, 22, 24);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 30,
                padding: "32px 40px",
                background: it.soft,
                border: `2px solid ${it.color}`,
                borderRadius: 18,
                opacity: r.opacity,
                transform: `translateY(${r.y}px)`,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: it.color,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  fontFamily: FONT.display,
                  fontSize: 44,
                  fontWeight: 600,
                  color: COLORS.text,
                  letterSpacing: -0.5,
                }}
              >
                {it.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
