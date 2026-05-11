import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";
import { PdfPage } from "../components/PdfPage";

// Show a "browser window" containing two side-by-side highlighted pages with
// a floating toolbar. Bullets on the right.
export const SceneOutput: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 7 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const browser = rise(frame, 20, 22, 24);
  const b1 = rise(frame, 50, 20, 18);
  const b2 = rise(frame, 75, 20, 18);
  const b3 = rise(frame, 100, 20, 18);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 100, right: 120 }}>
        <SectionHeading kicker="Output" title={t.text.output.heading} />
      </div>

      {/* Browser frame with two pages */}
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 360,
          width: 1080,
          height: 600,
          background: "#1B2330",
          border: `2px solid ${COLORS.steelDim}`,
          borderRadius: 16,
          opacity: browser.opacity,
          transform: `translateY(${browser.y}px)`,
          overflow: "hidden",
          boxShadow: `0 30px 60px ${COLORS.paperShadow}`,
        }}
      >
        {/* Browser title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 20px",
            background: "#0F1620",
            borderBottom: `1px solid ${COLORS.rule}`,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#D9614C" }} />
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#E6C84F" }} />
          <div style={{ width: 12, height: 12, borderRadius: 99, background: "#7AB386" }} />
          <div
            style={{
              marginLeft: 24,
              padding: "6px 18px",
              background: COLORS.steelSoft,
              borderRadius: 8,
              fontFamily: FONT.mono,
              fontSize: 18,
              color: COLORS.textDim,
            }}
          >
            contract_V8.9_diff.html
          </div>
        </div>

        {/* Two pages side by side, V2 on left (per project convention) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: 32,
            gap: 24,
          }}
        >
          <PdfPage
            width={420}
            height={500}
            label="V2 (NEW)"
            labelColor={COLORS.added}
            lines={11}
            highlights={[
              { x: 0.05, y: 0.18, w: 0.18, h: 0.05, color: COLORS.added, opacity: 0.55 },
              { x: 0.5, y: 0.4, w: 0.2, h: 0.05, color: COLORS.added, opacity: 0.55 },
              { x: 0.05, y: 0.7, w: 0.3, h: 0.05, color: COLORS.moved, opacity: 0.5 },
            ]}
          />
          <PdfPage
            width={420}
            height={500}
            label="V1 (OLD)"
            labelColor={COLORS.removed}
            lines={11}
            highlights={[
              { x: 0.3, y: 0.25, w: 0.18, h: 0.05, color: COLORS.removed, opacity: 0.55 },
              { x: 0.6, y: 0.55, w: 0.14, h: 0.05, color: COLORS.removed, opacity: 0.55 },
            ]}
          />
        </div>

        {/* Floating toolbar */}
        <div
          style={{
            position: "absolute",
            right: 28,
            top: 90,
            background: "#0F1620",
            border: `1px solid ${COLORS.steelDim}`,
            borderRadius: 12,
            padding: "10px 8px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {["⌕", "⊕", "⊖", "↑", "↓", "☾"].map((s, i) => (
            <div
              key={i}
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: COLORS.textDim,
                fontFamily: FONT.mono,
                fontSize: 22,
                background: COLORS.steelSoft,
                borderRadius: 6,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Right-side bullets */}
      <div
        style={{
          position: "absolute",
          left: 1240,
          top: 380,
          right: 120,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Bullet text={t.text.output.bullet1} y={b1.y} opacity={b1.opacity} />
        <Bullet text={t.text.output.bullet2} y={b2.y} opacity={b2.opacity} />
        <Bullet text={t.text.output.bullet3} y={b3.y} opacity={b3.opacity} />
      </div>
    </AbsoluteFill>
  );
};

const Bullet: React.FC<{ text: string; y: number; opacity: number }> = ({
  text,
  y,
  opacity,
}) => (
  <div
    style={{
      display: "flex",
      gap: 16,
      fontFamily: FONT.display,
      fontSize: 32,
      color: COLORS.text,
      lineHeight: 1.4,
      opacity,
      transform: `translateY(${y}px)`,
    }}
  >
    <span style={{ color: COLORS.amber }}>›</span>
    {text}
  </div>
);
