import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage } from "../components/PdfPage";
import { LibChip } from "../components/LibChip";
import { SectionHeading } from "../components/SectionHeading";

// Show: a PDF page sitting on the left, words being detected with little
// scanning rectangles around them, then "PyMuPDF" chip below.
export const SceneExtract: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 7 * FPS;

  const exit = fadeOut(frame, total - 14, 14);
  const page = rise(frame, 8, 20, 24);
  const chip = rise(frame, 60, 20, 18);
  const b1 = rise(frame, 80, 20, 18);
  const b2 = rise(frame, 95, 20, 18);

  // Animated bounding boxes scanning over words.
  const scanProg = interpolate(frame, [20, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const pageW = 540;
  const pageH = 720;

  // Generate fake word boxes — rows of 5-7 words at varying y, then reveal
  // their bounding-box outlines progressively.
  const wordBoxes: { x: number; y: number; w: number; h: number }[] = [];
  const wordRows = 12;
  for (let r = 0; r < wordRows; r++) {
    const y = 0.04 + r * 0.07;
    const wordsInRow = 5 + (r % 3);
    let x = 0.02;
    for (let w = 0; w < wordsInRow; w++) {
      const ww = 0.08 + ((r + w) % 4) * 0.03;
      wordBoxes.push({ x, y, w: ww, h: 0.04 });
      x += ww + 0.022;
      if (x > 0.92) break;
    }
  }
  const visibleCount = Math.floor(wordBoxes.length * scanProg);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      {/* Left side: PDF page */}
      <div
        style={{
          position: "absolute",
          left: 160,
          top: 180,
          opacity: page.opacity,
          transform: `translateY(${page.y}px)`,
        }}
      >
        <PdfPage width={pageW} height={pageH} lines={14} label="V1 / Page 1" />
        {/* overlay bbox outlines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          {wordBoxes.slice(0, visibleCount).map((b, i) => {
            const padX = pageW * 0.08;
            const padY = pageH * 0.08;
            const bodyW = pageW - padX * 2;
            const bodyH = pageH - padY * 2;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: padX + b.x * bodyW,
                  top: padY + b.y * bodyH,
                  width: b.w * bodyW,
                  height: b.h * bodyH,
                  border: `2px solid ${COLORS.amber}`,
                  borderRadius: 2,
                  background: COLORS.amberSoft,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Right side: heading + lib chip + bullets */}
      <div
        style={{
          position: "absolute",
          left: 820,
          top: 220,
          right: 120,
        }}
      >
        <SectionHeading
          kicker="Step 1"
          title={t.text.extract.heading}
          startFrame={4}
        />

        <div
          style={{
            opacity: chip.opacity,
            transform: `translateY(${chip.y}px)`,
            marginBottom: 36,
          }}
        >
          <LibChip name={t.text.extract.lib} note={t.text.extract.libNote} />
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li
            style={{
              fontFamily: FONT.display,
              fontSize: 36,
              color: COLORS.text,
              lineHeight: 1.4,
              opacity: b1.opacity,
              transform: `translateY(${b1.y}px)`,
              marginBottom: 24,
              display: "flex",
              gap: 16,
            }}
          >
            <span style={{ color: COLORS.amber }}>›</span>
            {t.text.extract.bullet1}
          </li>
          <li
            style={{
              fontFamily: FONT.display,
              fontSize: 36,
              color: COLORS.text,
              lineHeight: 1.4,
              opacity: b2.opacity,
              transform: `translateY(${b2.y}px)`,
              display: "flex",
              gap: 16,
            }}
          >
            <span style={{ color: COLORS.amber }}>›</span>
            {t.text.extract.bullet2}
          </li>
        </ul>
      </div>
    </AbsoluteFill>
  );
};
