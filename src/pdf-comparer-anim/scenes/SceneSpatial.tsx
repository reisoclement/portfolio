import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage } from "../components/PdfPage";
import { SectionHeading } from "../components/SectionHeading";

// Two pages with a small "table" area. Word X-Y appears as red on left, green
// on right at the same coords. Then they reclassify both to grey "unchanged".
export const SceneSpatial: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 7 * FPS;

  const exit = fadeOut(frame, total - 14, 14);
  const explainer = rise(frame, 30, 22, 18);
  const check = rise(frame, 90, 22, 18);
  const payoff = rise(frame, 160, 22, 18);

  // 0..1 progress from "false alarm" red+green to "reclassify" unchanged.
  const reclassify = interpolate(frame, [120, 170], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const pageW = 380;
  const pageH = 510;

  // Identical bbox on both pages
  const bbox = { x: 0.18, y: 0.55, w: 0.18, h: 0.05 };

  // mix red/green into a neutral as reclassify -> 1
  const mix = (a: string, _b: string) => a; // we'll just fade the color

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 130, right: 120 }}>
        <SectionHeading kicker="Step 6" title={t.text.spatial.heading} />
      </div>

      {/* Left page (V1) — red highlight (false-alarm "removed") */}
      <div style={{ position: "absolute", left: 200, top: 380 }}>
        <PdfPage
          width={pageW}
          height={pageH}
          label="V1"
          lines={11}
          highlights={[
            {
              ...bbox,
              color: mix(COLORS.removed, COLORS.moved),
              opacity: 0.75 - reclassify * 0.45,
            },
            {
              ...bbox,
              color: COLORS.moved,
              opacity: reclassify * 0.55,
            },
          ]}
        />
      </div>

      {/* Right page (V2) — green highlight (false-alarm "added") */}
      <div style={{ position: "absolute", left: 700, top: 380 }}>
        <PdfPage
          width={pageW}
          height={pageH}
          label="V2"
          lines={11}
          highlights={[
            {
              ...bbox,
              color: COLORS.added,
              opacity: 0.75 - reclassify * 0.45,
            },
            {
              ...bbox,
              color: COLORS.moved,
              opacity: reclassify * 0.55,
            },
          ]}
        />
      </div>

      {/* Center connecting line + label */}
      <svg
        width={1920}
        height={1080}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <line
          x1={200 + pageW + 10}
          y1={380 + pageH * 0.575}
          x2={700 - 10}
          y2={380 + pageH * 0.575}
          stroke={reclassify > 0.4 ? COLORS.moved : COLORS.amber}
          strokeWidth={3}
          strokeDasharray="6 6"
          opacity={interpolate(frame, [60, 80], [0, 0.9], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
        />
      </svg>

      {/* Right side: explainer */}
      <div
        style={{
          position: "absolute",
          left: 1200,
          top: 380,
          right: 120,
        }}
      >
        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 34,
            color: COLORS.textDim,
            lineHeight: 1.4,
            opacity: explainer.opacity,
            transform: `translateY(${explainer.y}px)`,
            marginBottom: 28,
          }}
        >
          {t.text.spatial.explainer}
        </div>

        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 36,
            color: COLORS.text,
            fontWeight: 600,
            lineHeight: 1.35,
            letterSpacing: -0.5,
            background: COLORS.amberSoft,
            border: `2px solid ${COLORS.amber}`,
            borderRadius: 14,
            padding: "22px 28px",
            opacity: check.opacity,
            transform: `translateY(${check.y}px)`,
            marginBottom: 32,
          }}
        >
          {t.text.spatial.check}
        </div>

        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 34,
            color: COLORS.added,
            fontWeight: 500,
            lineHeight: 1.4,
            opacity: payoff.opacity,
            transform: `translateY(${payoff.y}px)`,
          }}
        >
          {t.text.spatial.payoff}
        </div>
      </div>
    </AbsoluteFill>
  );
};
