import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage, type Highlight } from "../components/PdfPage";
import { SectionHeading } from "../components/SectionHeading";

// A single page renders. Highlights paint in waves: green words appear, then
// red, then grey. Caption: "150 DPI · color-coded bounding boxes."
export const SceneRender: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 7 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const explainer = rise(frame, 30, 22, 18);
  const bullet = rise(frame, 130, 22, 18);

  const tGreen = interpolate(frame, [30, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  const tRed = interpolate(frame, [60, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  const tGrey = interpolate(frame, [90, 130], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const greens: Highlight[] = [
    { x: 0.05, y: 0.18, w: 0.16, h: 0.04 },
    { x: 0.4, y: 0.32, w: 0.12, h: 0.04 },
    { x: 0.05, y: 0.62, w: 0.22, h: 0.04 },
  ].map((b) => ({
    ...b,
    color: COLORS.added,
    opacity: tGreen * 0.6,
  }));
  const reds: Highlight[] = [
    { x: 0.32, y: 0.18, w: 0.18, h: 0.04 },
    { x: 0.6, y: 0.46, w: 0.14, h: 0.04 },
  ].map((b) => ({
    ...b,
    color: COLORS.removed,
    opacity: tRed * 0.6,
  }));
  const greys: Highlight[] = [
    { x: 0.3, y: 0.74, w: 0.3, h: 0.04 },
  ].map((b) => ({
    ...b,
    color: COLORS.moved,
    opacity: tGrey * 0.55,
  }));

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 130, right: 120 }}>
        <SectionHeading kicker="Render" title={t.text.render.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 200,
          top: 380,
        }}
      >
        <PdfPage
          width={620}
          height={820}
          label="V2 / Page 1 — rendered"
          lines={14}
          highlights={[...greens, ...reds, ...greys]}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: 950,
          top: 420,
          right: 120,
        }}
      >
        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 34,
            color: COLORS.textDim,
            lineHeight: 1.45,
            opacity: explainer.opacity,
            transform: `translateY(${explainer.y}px)`,
            marginBottom: 36,
          }}
        >
          {t.text.render.explainer}
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 22px",
            background: COLORS.amberSoft,
            border: `2px solid ${COLORS.amber}`,
            borderRadius: 999,
            fontFamily: FONT.mono,
            fontSize: 28,
            fontWeight: 600,
            color: COLORS.amber,
            letterSpacing: 1,
            opacity: explainer.opacity,
            transform: `translateY(${explainer.y}px)`,
            marginBottom: 32,
          }}
        >
          150 DPI
        </div>

        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 36,
            color: COLORS.text,
            opacity: bullet.opacity,
            transform: `translateY(${bullet.y}px)`,
            display: "flex",
            gap: 16,
            lineHeight: 1.4,
          }}
        >
          <span style={{ color: COLORS.amber }}>›</span>
          {t.text.render.bullet}
        </div>
      </div>
    </AbsoluteFill>
  );
};
