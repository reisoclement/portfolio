import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";

// Toolbar tour: five tool cards in a 5-column row, with a small mock toolbar
// at the top for context. Bottom payoff line.
export const SceneTutorialControls: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 8 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const toolbar = rise(frame, 30, 22, 22);
  const payoff = rise(frame, 200, 22, 18);

  const items = t.text.tutorialControls.items;
  const cards: { name: string; desc: string; icon: string }[] = [
    { name: items.colorMode.name,      desc: items.colorMode.desc,      icon: "◐" },
    { name: items.categoryFilter.name, desc: items.categoryFilter.desc, icon: "▦" },
    { name: items.tableView.name,      desc: items.tableView.desc,      icon: "≡" },
    { name: items.pageNav.name,        desc: items.pageNav.desc,        icon: "↕" },
    { name: items.export.name,         desc: items.export.desc,         icon: "↓" },
  ];

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 110, right: 120 }}>
        <SectionHeading kicker={t.text.tutorialControls.kicker} title={t.text.tutorialControls.heading} />
      </div>

      {/* Mock toolbar */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 320,
          background: "#0F1620",
          border: `1.5px solid ${COLORS.steelDim}`,
          borderRadius: 10,
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          opacity: toolbar.opacity,
          transform: `translateY(${toolbar.y}px)`,
          flexWrap: "wrap",
        }}
      >
        <ToolbarChip label="Simple · Full" active />
        <ToolbarChip label="Categories: 8/8" />
        <ToolbarChip label="Table view" />
        <ToolbarChip label="Hide empty pages" />
        <ToolbarChip label="Assessment: all" />
        <div style={{ flex: 1 }} />
        <ToolbarChip label="Download CSV" highlight />
        <ToolbarChip label="Download JSON" highlight />
      </div>

      {/* 5-card grid */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 470,
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 18,
        }}
      >
        {cards.map((c, i) => {
          const r = rise(frame, 60 + i * 10, 22, 22);
          return (
            <div
              key={i}
              style={{
                background: COLORS.steelSoft,
                border: `1.5px solid ${COLORS.steelDim}`,
                borderRadius: 14,
                padding: "22px 22px",
                opacity: r.opacity,
                transform: `translateY(${r.y}px)`,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 270,
              }}
            >
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 44,
                  color: COLORS.amber,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {c.icon}
              </div>
              <div
                style={{
                  fontFamily: FONT.display,
                  fontSize: 28,
                  fontWeight: 600,
                  color: COLORS.text,
                  letterSpacing: -0.3,
                  lineHeight: 1.15,
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  fontFamily: FONT.display,
                  fontSize: 22,
                  color: COLORS.textDim,
                  lineHeight: 1.35,
                }}
              >
                {c.desc}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 60,
          fontFamily: FONT.display,
          fontSize: 30,
          color: COLORS.amber,
          textAlign: "center",
          fontWeight: 500,
          opacity: payoff.opacity,
          transform: `translateY(${payoff.y}px)`,
        }}
      >
        {t.text.tutorialControls.payoff}
      </div>
    </AbsoluteFill>
  );
};

const ToolbarChip: React.FC<{ label: string; active?: boolean; highlight?: boolean }> = ({
  label,
  active,
  highlight,
}) => (
  <div
    style={{
      fontFamily: FONT.mono,
      fontSize: 18,
      fontWeight: 600,
      color: highlight ? COLORS.amber : active ? COLORS.text : COLORS.textDim,
      background: highlight ? COLORS.amberSoft : active ? COLORS.steelSoft : "transparent",
      border: `1.5px solid ${highlight ? COLORS.amber : active ? COLORS.text : COLORS.steelDim}`,
      borderRadius: 6,
      padding: "6px 14px",
      letterSpacing: 0.3,
    }}
  >
    {label}
  </div>
);
