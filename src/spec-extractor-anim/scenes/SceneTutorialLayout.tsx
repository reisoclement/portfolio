import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CATEGORY_COLORS, COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage } from "../components/PdfPage";
import { SectionHeading } from "../components/SectionHeading";

// A browser-frame mockup of the actual report layout: highlighted PDF page
// on the left, editable rows on the right. This is the "what you actually
// see when you open the report" scene.
export const SceneTutorialLayout: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 8 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const browser = rise(frame, 14, 22, 24);
  const explainer = rise(frame, 60, 22, 18);
  const bullet = rise(frame, 160, 22, 18);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 100, right: 120 }}>
        <SectionHeading kicker={t.text.tutorialLayout.kicker} title={t.text.tutorialLayout.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 290,
          fontFamily: FONT.display,
          fontSize: 28,
          color: COLORS.textDim,
          lineHeight: 1.4,
          opacity: explainer.opacity,
          transform: `translateY(${explainer.y}px)`,
        }}
      >
        {t.text.tutorialLayout.explainer}
      </div>

      {/* Browser frame */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 410,
          background: "#1B2330",
          border: `2px solid ${COLORS.steelDim}`,
          borderRadius: 16,
          opacity: browser.opacity,
          transform: `translateY(${browser.y}px)`,
          overflow: "hidden",
          boxShadow: `0 30px 60px ${COLORS.paperShadow}`,
        }}
      >
        {/* Title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 22px",
            background: "#0F1620",
            borderBottom: `1px solid ${COLORS.rule}`,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#D9614C" }} />
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#E6C84F" }} />
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#7AB386" }} />
          <div
            style={{
              marginLeft: 22,
              padding: "5px 16px",
              background: COLORS.steelSoft,
              borderRadius: 8,
              fontFamily: FONT.mono,
              fontSize: 18,
              color: COLORS.textDim,
            }}
          >
            spec_V2.0_extraction.html
          </div>
        </div>

        {/* Two-column body */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            padding: 28,
          }}
        >
          {/* Left: PDF preview */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 12 }}>
            <ColumnLabel text={t.text.tutorialLayout.leftLabel} color={COLORS.amber} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PdfPage
                width={620}
                height={400}
                lines={11}
                highlights={[
                  { x: 0.06, y: 0.18, w: 0.18, h: 0.05, color: CATEGORY_COLORS.obligation, opacity: 0.55 },
                  { x: 0.05, y: 0.34, w: 0.30, h: 0.05, color: CATEGORY_COLORS.compliance, opacity: 0.55 },
                  { x: 0.05, y: 0.62, w: 0.24, h: 0.05, color: CATEGORY_COLORS.numerical, opacity: 0.55 },
                  { x: 0.05, y: 0.84, w: 0.20, h: 0.05, color: CATEGORY_COLORS.requirement, opacity: 0.55 },
                ]}
              />
            </div>
          </div>

          {/* Right: editable rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ColumnLabel text={t.text.tutorialLayout.rightLabel} color={COLORS.added} />
            <Row label="OBLIGATION" cat="obligation" text="The device shall withstand 5 mm vibration." assess="OK" />
            <Row label="COMPLIANCE" cat="compliance" text="Compliance with ISO 16750-3 is required." assess="—" />
            <Row label="NUMERICAL" cat="numerical" text="Operating range −40 °C to +85 °C." assess="OK" />
            <Row label="REQUIREMENT" cat="requirement" text="Endurance test required before shipment." assess="NOK" critical />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 50,
          fontFamily: FONT.display,
          fontSize: 28,
          color: COLORS.amber,
          textAlign: "center",
          fontWeight: 500,
          opacity: bullet.opacity,
          transform: `translateY(${bullet.y}px)`,
        }}
      >
        {t.text.tutorialLayout.bullet}
      </div>
    </AbsoluteFill>
  );
};

const ColumnLabel: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <div
    style={{
      fontFamily: FONT.mono,
      fontSize: 22,
      fontWeight: 700,
      color,
      letterSpacing: 2,
      textTransform: "uppercase",
    }}
  >
    {text}
  </div>
);

const Row: React.FC<{
  label: string;
  cat: keyof typeof CATEGORY_COLORS;
  text: string;
  assess: "OK" | "NOK" | "N/A" | "—";
  critical?: boolean;
}> = ({ label, cat, text, assess, critical }) => {
  const c = CATEGORY_COLORS[cat];
  const assessColor =
    assess === "OK"
      ? COLORS.added
      : assess === "NOK"
        ? COLORS.removed
        : assess === "N/A"
          ? COLORS.moved
          : COLORS.textDim;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        background: critical ? `${COLORS.removed}18` : "#0F1620",
        border: `1.5px solid ${critical ? COLORS.removed : COLORS.steelDim}`,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          fontFamily: FONT.mono,
          fontSize: 16,
          fontWeight: 700,
          color: c,
          background: `${c}28`,
          padding: "3px 8px",
          borderRadius: 4,
          letterSpacing: 1.2,
          minWidth: 110,
          textAlign: "center",
          flexShrink: 0,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontSize: 20,
          color: COLORS.text,
          flex: 1,
          letterSpacing: -0.2,
          lineHeight: 1.25,
        }}
      >
        {text}
      </div>
      <div
        style={{
          fontFamily: FONT.mono,
          fontSize: 16,
          fontWeight: 700,
          color: assessColor,
          background: `${assessColor}22`,
          padding: "4px 10px",
          borderRadius: 4,
          letterSpacing: 1,
          flexShrink: 0,
          minWidth: 50,
          textAlign: "center",
        }}
      >
        {assess}
      </div>
      {critical && (
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: 14,
            fontWeight: 700,
            color: COLORS.removed,
            background: `${COLORS.removed}22`,
            padding: "4px 8px",
            borderRadius: 4,
            letterSpacing: 1.2,
            flexShrink: 0,
          }}
        >
          ⚑ CRIT
        </div>
      )}
    </div>
  );
};
