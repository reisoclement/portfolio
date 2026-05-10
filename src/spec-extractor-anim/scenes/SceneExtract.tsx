import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CATEGORY_COLORS, COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage } from "../components/PdfPage";
import { SectionHeading } from "../components/SectionHeading";
import { LibChip } from "../components/LibChip";

// A page on the left, words being scanned. Hits flash as colored highlights
// matching the category palette. A counter on the right ticks up.
export const SceneExtract: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 9 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const page = rise(frame, 8, 20, 24);
  const chip = rise(frame, 50, 20, 18);
  const bullet = rise(frame, 150, 22, 18);

  // Scanning sweep across rows
  const sweep = interpolate(frame, [30, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const pageW = 540;
  const pageH = 700;

  // Pre-scripted "hits" on the page, each at a specific y-row, revealed once
  // sweep passes.
  const hits = [
    { x: 0.10, y: 0.12, w: 0.10, h: 0.04, cat: "obligation" as const, label: "shall" },
    { x: 0.42, y: 0.20, w: 0.14, h: 0.04, cat: "compliance" as const, label: "comply" },
    { x: 0.06, y: 0.32, w: 0.16, h: 0.04, cat: "numerical" as const, label: "5 mm" },
    { x: 0.55, y: 0.40, w: 0.12, h: 0.04, cat: "requirement" as const, label: "required" },
    { x: 0.20, y: 0.50, w: 0.08, h: 0.04, cat: "obligation" as const, label: "must" },
    { x: 0.05, y: 0.62, w: 0.18, h: 0.04, cat: "expectation" as const, label: "expected" },
    { x: 0.40, y: 0.74, w: 0.20, h: 0.04, cat: "numerical" as const, label: "−40 °C" },
    { x: 0.05, y: 0.84, w: 0.14, h: 0.04, cat: "guarantee" as const, label: "ensure" },
  ];

  // Each hit appears as the sweep passes over its y-row (y is normalized).
  const visibleHits = hits.filter((h) => h.y <= sweep + 0.04);

  // Scan line indicator
  const sweepY = sweep * pageH * 0.84;

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 100, right: 120 }}>
        <SectionHeading kicker={t.text.extract.kicker} title={t.text.extract.heading} />
      </div>

      {/* Left: PDF page with scanning highlights */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: 340,
          opacity: page.opacity,
          transform: `translateY(${page.y}px)`,
        }}
      >
        <PdfPage
          width={pageW}
          height={pageH}
          lines={16}
          highlights={visibleHits.map((h) => ({
            x: h.x,
            y: h.y,
            w: h.w,
            h: h.h,
            color: CATEGORY_COLORS[h.cat],
            opacity: 0.8,
          }))}
        />
        {/* Scan line */}
        <div
          style={{
            position: "absolute",
            left: pageW * 0.08,
            top: pageH * 0.08 + sweepY,
            width: pageW * 0.84,
            height: 3,
            background: COLORS.amber,
            opacity: 0.9,
            boxShadow: `0 0 18px ${COLORS.amberHalo}`,
            borderRadius: 1,
            display: sweep > 0 && sweep < 0.95 ? "block" : "none",
          }}
        />
      </div>

      {/* Right: lib chip + counter + most-recent hits */}
      <div
        style={{
          position: "absolute",
          left: 880,
          top: 340,
          right: 120,
        }}
      >
        <div
          style={{
            opacity: chip.opacity,
            transform: `translateY(${chip.y}px)`,
            marginBottom: 24,
          }}
        >
          <LibChip name="PyMuPDF" note={t.text.extract.libNote} />
        </div>

        {/* Counter */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 18,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontFamily: FONT.mono,
              fontSize: 92,
              fontWeight: 700,
              color: COLORS.amber,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            {visibleHits.length}
          </div>
          <div
            style={{
              fontFamily: FONT.display,
              fontSize: 32,
              color: COLORS.textDim,
              fontWeight: 500,
              letterSpacing: -0.3,
            }}
          >
            matches found
          </div>
        </div>

        {/* Recent hits stream */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxHeight: 360,
          }}
        >
          {visibleHits
            .slice(-4)
            .reverse()
            .map((h, i) => (
              <div
                key={`${h.label}-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "10px 18px",
                  background: `${CATEGORY_COLORS[h.cat]}20`,
                  border: `1.5px solid ${CATEGORY_COLORS[h.cat]}`,
                  borderRadius: 10,
                  opacity: 1 - i * 0.15,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    background: CATEGORY_COLORS[h.cat],
                  }}
                />
                <div
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 30,
                    fontWeight: 600,
                    color: COLORS.text,
                    letterSpacing: 0.3,
                  }}
                >
                  {h.label}
                </div>
                <div
                  style={{
                    fontFamily: FONT.display,
                    fontSize: 24,
                    color: COLORS.textDim,
                    marginLeft: "auto",
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                  }}
                >
                  {h.cat}
                </div>
              </div>
            ))}
        </div>

        <div
          style={{
            marginTop: 24,
            fontFamily: FONT.display,
            fontSize: 26,
            color: COLORS.textDim,
            lineHeight: 1.4,
            opacity: bullet.opacity,
            transform: `translateY(${bullet.y}px)`,
          }}
        >
          {t.text.extract.bullet}
        </div>
      </div>
    </AbsoluteFill>
  );
};
