import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage } from "../components/PdfPage";
import { SectionHeading } from "../components/SectionHeading";

// Browser-style frame containing v2 (left) + matched v1 pages (right). Mirrors
// pdf-comparer's output layout — same green/red/grey palette.
export const SceneFTLDiff: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 9 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const browser = rise(frame, 14, 22, 24);
  const explainer = rise(frame, 90, 22, 18);
  const legend = rise(frame, 130, 22, 18);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 90, right: 120 }}>
        <SectionHeading kicker={t.text.ftlDiff.kicker} title={t.text.ftlDiff.heading} />
      </div>

      {/* Browser */}
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 360,
          width: 1280,
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
            padding: "14px 22px",
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
              padding: "6px 18px",
              background: COLORS.steelSoft,
              borderRadius: 8,
              fontFamily: FONT.mono,
              fontSize: 18,
              color: COLORS.textDim,
            }}
          >
            spec_V2.0_ftl.html
          </div>
        </div>

        {/* Two rows of v2 (left) + v1 (right) */}
        <div style={{ padding: 28 }}>
          <DiffRow rowIndex={1} />
          <div style={{ height: 24 }} />
          <DiffRow rowIndex={2} />
        </div>
      </div>

      {/* Right side: explainer + legend */}
      <div
        style={{
          position: "absolute",
          left: 1440,
          top: 380,
          right: 60,
        }}
      >
        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 28,
            color: COLORS.textDim,
            lineHeight: 1.4,
            opacity: explainer.opacity,
            transform: `translateY(${explainer.y}px)`,
            marginBottom: 36,
          }}
        >
          {t.text.ftlDiff.explainer}
        </div>

        <div
          style={{
            opacity: legend.opacity,
            transform: `translateY(${legend.y}px)`,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <LegendChip label={t.text.ftlDiff.legend.added} color={COLORS.added} bg={COLORS.addedSoft} />
          <LegendChip label={t.text.ftlDiff.legend.removed} color={COLORS.removed} bg={COLORS.removedSoft} />
          <LegendChip label={t.text.ftlDiff.legend.moved} color={COLORS.moved} bg={COLORS.movedSoft} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

const DiffRow: React.FC<{ rowIndex: number }> = ({ rowIndex }) => {
  const v2Highlights =
    rowIndex === 1
      ? [
          { x: 0.05, y: 0.15, w: 0.18, h: 0.05, color: COLORS.added, opacity: 0.55 },
          { x: 0.4, y: 0.3, w: 0.22, h: 0.05, color: COLORS.added, opacity: 0.55 },
        ]
      : [
          { x: 0.1, y: 0.4, w: 0.3, h: 0.05, color: COLORS.added, opacity: 0.55 },
          { x: 0.05, y: 0.7, w: 0.18, h: 0.05, color: COLORS.moved, opacity: 0.45 },
        ];
  const v1Highlights =
    rowIndex === 1
      ? [
          { x: 0.3, y: 0.18, w: 0.16, h: 0.05, color: COLORS.removed, opacity: 0.55 },
          { x: 0.55, y: 0.5, w: 0.14, h: 0.05, color: COLORS.removed, opacity: 0.55 },
        ]
      : [
          { x: 0.15, y: 0.45, w: 0.18, h: 0.05, color: COLORS.removed, opacity: 0.55 },
        ];

  return (
    <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
      <PdfPage
        width={520}
        height={300}
        label={`v2 — page ${rowIndex}`}
        labelColor={COLORS.added}
        lines={9}
        highlights={v2Highlights}
      />
      <PdfPage
        width={520}
        height={300}
        label={`v1 — matched`}
        labelColor={COLORS.removed}
        lines={9}
        highlights={v1Highlights}
      />
    </div>
  );
};

const LegendChip: React.FC<{ label: string; color: string; bg: string }> = ({ label, color, bg }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 20px",
      background: bg,
      border: `2px solid ${color}`,
      borderRadius: 10,
    }}
  >
    <div style={{ width: 16, height: 16, borderRadius: 4, background: color }} />
    <div
      style={{
        fontFamily: FONT.mono,
        fontSize: 24,
        fontWeight: 600,
        color,
        letterSpacing: 0.5,
      }}
    >
      {label}
    </div>
  </div>
);
