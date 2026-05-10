import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CATEGORY_COLORS, COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";

// Show the hybrid decision: a prose paragraph (becomes 1 row per matched
// sentence) and a table cell (becomes 1 row, kept whole). The "old way" is
// briefly mentioned at the top so viewers know what changed.
export const SceneHybridView: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 9 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const explainer = rise(frame, 30, 22, 18);
  const proseSrc = rise(frame, 70, 22, 24);
  const proseRows = rise(frame, 100, 22, 24);
  const tableSrc = rise(frame, 140, 22, 24);
  const tableRow = rise(frame, 170, 22, 24);
  const payoff = rise(frame, 220, 22, 18);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 100, right: 120 }}>
        <SectionHeading kicker={t.text.hybrid.kicker} title={t.text.hybrid.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 280,
          fontFamily: FONT.display,
          fontSize: 28,
          color: COLORS.textDim,
          lineHeight: 1.4,
          opacity: explainer.opacity,
          transform: `translateY(${explainer.y}px)`,
        }}
      >
        {t.text.hybrid.explainer}
      </div>

      {/* Two cases side by side */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 420,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
        }}
      >
        {/* Prose case */}
        <CaseCard
          label={t.text.hybrid.caseProse}
          opacity={Math.min(proseSrc.opacity, proseRows.opacity)}
          y={Math.max(proseSrc.y, proseRows.y)}
          source={
            <>
              The device <Trigger cat="obligation">shall</Trigger> withstand 5 mm vibration over 24 hours.
              <br />
              Compliance with this clause is <Trigger cat="compliance">required</Trigger>.
            </>
          }
          rows={[
            { text: "The device shall withstand 5 mm vibration over 24 hours.", cat: "obligation", label: "OBLIGATION" },
            { text: "Compliance with this clause is required.", cat: "compliance", label: "COMPLIANCE" },
          ]}
          rowsOpacity={proseRows.opacity}
        />

        {/* Table case */}
        <CaseCard
          label={t.text.hybrid.caseTable}
          opacity={Math.min(tableSrc.opacity, tableRow.opacity)}
          y={Math.max(tableSrc.y, tableRow.y)}
          source={<TableSrc />}
          rows={[
            { text: "Operating range −40 °C to +85 °C", cat: "numerical", label: "NUMERICAL" },
          ]}
          rowsOpacity={tableRow.opacity}
        />
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
        {t.text.hybrid.payoff}
      </div>
    </AbsoluteFill>
  );
};

const CaseCard: React.FC<{
  label: string;
  source: React.ReactNode;
  rows: { text: string; cat: keyof typeof CATEGORY_COLORS; label: string }[];
  opacity: number;
  y: number;
  rowsOpacity: number;
}> = ({ label, source, rows, opacity, y, rowsOpacity }) => {
  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div
        style={{
          fontFamily: FONT.mono,
          fontSize: 24,
          fontWeight: 700,
          color: COLORS.amber,
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>

      {/* Source preview */}
      <div
        style={{
          background: COLORS.paper,
          color: COLORS.inkText,
          fontFamily: FONT.display,
          fontSize: 24,
          lineHeight: 1.45,
          padding: "20px 24px",
          borderRadius: 10,
          minHeight: 130,
          letterSpacing: -0.2,
        }}
      >
        {source}
      </div>

      {/* Arrow down */}
      <div
        style={{
          textAlign: "center",
          fontFamily: FONT.mono,
          fontSize: 30,
          color: COLORS.amber,
          opacity: rowsOpacity,
        }}
      >
        ↓
      </div>

      {/* Resulting rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, opacity: rowsOpacity }}>
        {rows.map((r, i) => {
          const c = CATEGORY_COLORS[r.cat];
          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                background: `${c}24`,
                border: `1.5px solid ${c}`,
                borderRadius: 10,
                padding: "12px 16px",
              }}
            >
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 18,
                  fontWeight: 700,
                  color: c,
                  background: `${c}30`,
                  padding: "4px 10px",
                  borderRadius: 4,
                  letterSpacing: 1.2,
                  minWidth: 130,
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                {r.label}
              </div>
              <div
                style={{
                  fontFamily: FONT.display,
                  fontSize: 22,
                  color: COLORS.text,
                  letterSpacing: -0.2,
                  lineHeight: 1.3,
                }}
              >
                {r.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Trigger: React.FC<{ cat: keyof typeof CATEGORY_COLORS; children: React.ReactNode }> = ({
  cat,
  children,
}) => (
  <span
    style={{
      background: `${CATEGORY_COLORS[cat]}55`,
      borderBottom: `2px solid ${CATEGORY_COLORS[cat]}`,
      padding: "0 4px",
      borderRadius: 2,
      fontWeight: 700,
    }}
  >
    {children}
  </span>
);

const TableSrc: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        borderBottom: `1px solid ${COLORS.inkLine}`,
        padding: "8px 0",
        fontWeight: 700,
        fontSize: 20,
        opacity: 0.7,
      }}
    >
      <span>Parameter</span>
      <span>Value</span>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        padding: "8px 0",
        fontSize: 22,
      }}
    >
      <span>Operating range</span>
      <span>
        <Trigger cat="numerical">−40 °C</Trigger> to <Trigger cat="numerical">+85 °C</Trigger>
      </span>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        padding: "8px 0",
        fontSize: 22,
        opacity: 0.65,
      }}
    >
      <span>Storage range</span>
      <span>−55 °C to +95 °C</span>
    </div>
  </div>
);
