import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage } from "../components/PdfPage";
import { SectionHeading } from "../components/SectionHeading";

// Show three small page thumbnails with header/footer bands; once detected,
// they get an "X" struck through and a chip "header detected" appears.
export const SceneHeaders: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 6 * FPS;

  const exit = fadeOut(frame, total - 14, 14);
  const explainer = rise(frame, 30, 22, 18);
  const tag = rise(frame, 70, 18, 14);
  const bullet = rise(frame, 95, 22, 18);

  const detectionProg = interpolate(frame, [40, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const pageW = 280;
  const pageH = 380;

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 160, right: 120 }}>
        <SectionHeading kicker="Step 2" title={t.text.headers.heading} />
      </div>

      {/* Three pages in a row, each with shaded header/footer */}
      <div
        style={{
          position: "absolute",
          left: 140,
          top: 460,
          display: "flex",
          gap: 56,
        }}
      >
        {[0, 1, 2].map((i) => {
          const r = rise(frame, 14 + i * 6, 22, 30);
          return (
            <div
              key={i}
              style={{
                position: "relative",
                opacity: r.opacity,
                transform: `translateY(${r.y}px)`,
              }}
            >
              <PdfPage
                width={pageW}
                height={pageH}
                showHeaderFooter
                lines={9}
                pageNumber={i + 1}
                highlights={[
                  // Highlight the header strip with red gradually
                  {
                    x: 0,
                    y: -0.05,
                    w: 1,
                    h: 0.04,
                    color: COLORS.removed,
                    opacity: detectionProg * 0.4,
                  },
                ]}
              />
            </div>
          );
        })}
      </div>

      {/* Right side: explainer + chip + bullet */}
      <div
        style={{
          position: "absolute",
          left: 1100,
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
            marginBottom: 36,
          }}
        >
          {t.text.headers.explainer}
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 24px",
            background: COLORS.removedSoft,
            border: `2px solid ${COLORS.removed}`,
            borderRadius: 999,
            opacity: tag.opacity,
            transform: `translateY(${tag.y}px) scale(${0.94 + 0.06 * tag.opacity})`,
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: COLORS.removed,
            }}
          />
          <span
            style={{
              fontFamily: FONT.mono,
              fontSize: 28,
              fontWeight: 600,
              color: COLORS.removed,
              letterSpacing: 0.5,
            }}
          >
            {t.text.headers.tag}
          </span>
        </div>

        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 36,
            color: COLORS.text,
            lineHeight: 1.4,
            opacity: bullet.opacity,
            transform: `translateY(${bullet.y}px)`,
            display: "flex",
            gap: 16,
          }}
        >
          <span style={{ color: COLORS.amber }}>›</span>
          {t.text.headers.bullet}
        </div>
      </div>
    </AbsoluteFill>
  );
};
