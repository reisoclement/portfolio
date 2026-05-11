import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage } from "../components/PdfPage";
import { LibChip } from "../components/LibChip";
import { SectionHeading } from "../components/SectionHeading";

// Two stacks of pages on left / right. As the scoring sweep settles on the
// best old-page match, both matched pages turn amber to signal the pairing.
export const ScenePageMatch: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 9 * FPS;

  const exit = fadeOut(frame, total - 14, 14);
  const formula = rise(frame, 60, 22, 18);
  const chips = rise(frame, 80, 20, 18);
  const explain = rise(frame, 110, 20, 18);
  const reflow = rise(frame, 160, 20, 18);

  // Sweep a "scoring" line connecting V2 page 2 to V1 candidates and finally
  // settling on V1 page 2.
  const sweep = interpolate(frame, [40, 110], [0, 3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  const matchedIdx = Math.min(2, Math.floor(sweep));

  const pageW = 160;
  const pageH = 210;
  const pageGap = 18;

  // Place V1 stack on left, V2 stack on right. Anchor V2 page index 1 (page 2).
  const v1Left = 220;
  const v2Left = 1540;
  const stackTop = 380;
  const numPages = 3;

  // The "match" is signaled by tinting both matched pages amber — no
  // connector line, so the center text column stays clean.
  const matchVisible = sweep > 2;

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 130, right: 120 }}>
        <SectionHeading kicker="Step 3" title={t.text.pageMatch.heading} />
      </div>

      {/* V1 stack */}
      <div style={{ position: "absolute", top: stackTop - 60, left: v1Left }}>
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: 28,
            color: COLORS.textDim,
            letterSpacing: 2,
            marginBottom: 16,
          }}
        >
          V1 — OLD
        </div>
      </div>
      {Array.from({ length: numPages }).map((_, i) => {
        const r = rise(frame, 14 + i * 4, 18, 24);
        const isMatched = i === matchedIdx && sweep > 2;
        return (
          <div
            key={`v1-${i}`}
            style={{
              position: "absolute",
              left: v1Left,
              top: stackTop + i * (pageH + pageGap),
              opacity: r.opacity,
              transform: `translateY(${r.y}px) scale(${isMatched ? 1.04 : 1})`,
              transition: "transform 0.2s",
              filter: isMatched
                ? `drop-shadow(0 0 24px ${COLORS.amberHalo})`
                : "none",
            }}
          >
            <PdfPage
              width={pageW}
              height={pageH}
              lines={6}
              pageNumber={i + 1}
              paperColor={isMatched ? COLORS.amber : COLORS.paper}
            />
          </div>
        );
      })}

      {/* V2 stack */}
      <div style={{ position: "absolute", top: stackTop - 60, left: v2Left }}>
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: 28,
            color: COLORS.textDim,
            letterSpacing: 2,
            marginBottom: 16,
          }}
        >
          V2 — NEW
        </div>
      </div>
      {Array.from({ length: numPages }).map((_, i) => {
        const r = rise(frame, 18 + i * 4, 18, 24);
        const isAnchor = i === 1;
        return (
          <div
            key={`v2-${i}`}
            style={{
              position: "absolute",
              left: v2Left,
              top: stackTop + i * (pageH + pageGap),
              opacity: r.opacity,
              transform: `translateY(${r.y}px)`,
              filter: isAnchor
                ? `drop-shadow(0 0 24px ${COLORS.amberHalo})`
                : "none",
            }}
          >
            <PdfPage
              width={pageW}
              height={pageH}
              lines={6}
              pageNumber={i + 1}
              paperColor={isAnchor && matchVisible ? COLORS.amber : COLORS.paper}
            />
          </div>
        );
      })}

      {/* Center: formula + chips + explainer */}
      <div
        style={{
          position: "absolute",
          left: 540,
          right: 540,
          top: 470,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: 36,
            color: COLORS.text,
            background: COLORS.steelSoft,
            border: `2px solid ${COLORS.steel}`,
            borderRadius: 14,
            padding: "20px 28px",
            opacity: formula.opacity,
            transform: `translateY(${formula.y}px)`,
            letterSpacing: -0.3,
          }}
        >
          {t.text.pageMatch.formula}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 18,
            marginTop: 30,
            opacity: chips.opacity,
            transform: `translateY(${chips.y}px)`,
            flexWrap: "wrap",
          }}
        >
          <LibChip name={t.text.pageMatch.libText} variant="primary" />
          <LibChip name={t.text.pageMatch.libVisual} variant="secondary" />
        </div>

        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 32,
            color: COLORS.textDim,
            marginTop: 36,
            lineHeight: 1.4,
            opacity: explain.opacity,
            transform: `translateY(${explain.y}px)`,
          }}
        >
          {t.text.pageMatch.explainer}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 30,
            color: COLORS.amber,
            marginTop: 22,
            fontWeight: 500,
            opacity: reflow.opacity,
            transform: `translateY(${reflow.y}px)`,
          }}
        >
          {t.text.pageMatch.reflowNote}
        </div>
      </div>
    </AbsoluteFill>
  );
};
