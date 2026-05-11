import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { LibChip } from "../components/LibChip";
import { SectionHeading } from "../components/SectionHeading";
import { WatermarkLogo } from "../components/WatermarkLogo";

// Show two side-by-side cropped images (rectangles representing crops),
// connected to a "Gemma 4" box. Below: three verdict chips that flip in.
export const SceneAIReview: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 8 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const chip = rise(frame, 30, 20, 18);
  const runtime = rise(frame, 50, 20, 18);
  const explainer = rise(frame, 130, 22, 18);

  const arrows = interpolate(frame, [70, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 130, right: 120 }}>
        <SectionHeading kicker="Optional" title={t.text.aiReview.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 340,
          opacity: chip.opacity,
          transform: `translateY(${chip.y}px)`,
          display: "flex",
          gap: 16,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <LibChip name={t.text.aiReview.model} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 410,
          fontFamily: FONT.display,
          fontSize: 30,
          color: COLORS.textDim,
          opacity: runtime.opacity,
          transform: `translateY(${runtime.y}px)`,
        }}
      >
        {t.text.aiReview.runtime}
      </div>

      {/* Crop A */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: 540,
          width: 280,
          height: 160,
          background: COLORS.paper,
          borderRadius: 8,
          boxShadow: `0 8px 24px ${COLORS.paperShadow}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          padding: 18,
          opacity: rise(frame, 60, 18, 18).opacity,
        }}
      >
        <div style={{ height: 8, width: "70%", background: COLORS.inkLine, opacity: 0.6, borderRadius: 2 }} />
        <div style={{ height: 8, width: "85%", background: COLORS.inkLine, opacity: 0.6, borderRadius: 2 }} />
        <div style={{ height: 8, width: "55%", background: COLORS.inkLine, opacity: 0.6, borderRadius: 2 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: `3px solid ${COLORS.removed}`,
            borderRadius: 8,
          }}
        />
      </div>
      <Label x={200} y={520} text="V1 crop" color={COLORS.removed} />

      {/* Crop B */}
      <div
        style={{
          position: "absolute",
          left: 540,
          top: 540,
          width: 280,
          height: 160,
          background: COLORS.paper,
          borderRadius: 8,
          boxShadow: `0 8px 24px ${COLORS.paperShadow}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
          padding: 18,
          opacity: rise(frame, 65, 18, 18).opacity,
        }}
      >
        <div style={{ height: 8, width: "70%", background: COLORS.inkLine, opacity: 0.6, borderRadius: 2 }} />
        <div style={{ height: 8, width: "85%", background: COLORS.inkLine, opacity: 0.6, borderRadius: 2 }} />
        <div style={{ height: 8, width: "55%", background: COLORS.inkLine, opacity: 0.6, borderRadius: 2 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: `3px solid ${COLORS.added}`,
            borderRadius: 8,
          }}
        />
      </div>
      <Label x={540} y={520} text="V2 crop" color={COLORS.added} />

      {/* Arrows to Gemma */}
      <svg
        width={1920}
        height={1080}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <line
          x1={480}
          y1={620}
          x2={1000}
          y2={620}
          stroke={COLORS.amber}
          strokeWidth={3}
          strokeDasharray="6 6"
          opacity={arrows}
        />
        <line
          x1={820}
          y1={620}
          x2={1000}
          y2={620}
          stroke={COLORS.amber}
          strokeWidth={3}
          strokeDasharray="6 6"
          opacity={arrows}
        />
      </svg>

      {/* Gemma box */}
      <div
        style={{
          position: "absolute",
          left: 1000,
          top: 540,
          width: 220,
          height: 160,
          background: COLORS.amberSoft,
          border: `3px solid ${COLORS.amber}`,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT.mono,
          fontSize: 28,
          fontWeight: 700,
          color: COLORS.amber,
          letterSpacing: 1,
          opacity: arrows,
        }}
      >
        GEMMA 4
      </div>

      {/* Verdict chips */}
      <div
        style={{
          position: "absolute",
          left: 1280,
          top: 480,
          right: 120,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <VerdictChip
          label={t.text.aiReview.verdicts.same}
          color={COLORS.moved}
          bg={COLORS.movedSoft}
          frame={frame}
          inFrame={140}
        />
        <VerdictChip
          label={t.text.aiReview.verdicts.different}
          color={COLORS.removed}
          bg={COLORS.removedSoft}
          frame={frame}
          inFrame={155}
        />
        <VerdictChip
          label={t.text.aiReview.verdicts.unclear}
          color={COLORS.caseOnly}
          bg={COLORS.caseOnlySoft}
          frame={frame}
          inFrame={170}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 80,
          fontFamily: FONT.display,
          fontSize: 32,
          color: COLORS.textDim,
          opacity: explainer.opacity,
          transform: `translateY(${explainer.y}px)`,
        }}
      >
        {t.text.aiReview.explainer}
      </div>

      {/* Watermark — top-right corner, subtle. Plays its 5s arc, then sits
          frozen for the remaining 3s of this 8s scene. Top-right avoids
          collision with the explainer text along the bottom edge. */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 80,
          opacity: 0.55,
        }}
      >
        <WatermarkLogo
          mode="embedded"
          color={COLORS.text}
          size={130}
          idSuffix="aireview"
        />
      </div>
    </AbsoluteFill>
  );
};

const Label: React.FC<{ x: number; y: number; text: string; color: string }> = ({
  x,
  y,
  text,
  color,
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y - 36,
      fontFamily: FONT.mono,
      fontSize: 24,
      fontWeight: 700,
      color,
      letterSpacing: 1.5,
    }}
  >
    {text}
  </div>
);

const VerdictChip: React.FC<{
  label: string;
  color: string;
  bg: string;
  frame: number;
  inFrame: number;
}> = ({ label, color, bg, frame, inFrame }) => {
  const r = rise(frame, inFrame, 18, 16);
  return (
    <div
      style={{
        fontFamily: FONT.mono,
        fontSize: 28,
        fontWeight: 600,
        color,
        background: bg,
        border: `2px solid ${color}`,
        borderRadius: 12,
        padding: "16px 24px",
        opacity: r.opacity,
        transform: `translateY(${r.y}px)`,
        letterSpacing: 0.5,
      }}
    >
      {label}
    </div>
  );
};
