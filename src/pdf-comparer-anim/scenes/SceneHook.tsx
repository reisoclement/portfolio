import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeIn, fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage } from "../components/PdfPage";

export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 5 * FPS;

  const kicker = rise(frame, 4, 18, 12);
  const line1 = rise(frame, 18, 22, 18);
  const line2 = rise(frame, 38, 22, 18);
  const pageL = rise(frame, 14, 24, 30);
  const pageR = rise(frame, 24, 24, 30);

  // Pull page-pair leftward as exit so it leads into the title.
  const exitOpacity = fadeOut(frame, total - 18, 18);
  const exitOpacityFI = fadeIn(frame, 0, 6);
  const overall = Math.min(exitOpacity, exitOpacityFI);

  const pageW = 380;
  const pageH = 510;

  return (
    <AbsoluteFill style={{ opacity: overall }}>
      {/* Two stylized PDFs floating left of center */}
      <div
        style={{
          position: "absolute",
          left: 140,
          top: 280,
          opacity: pageL.opacity,
          transform: `translateY(${pageL.y}px) rotate(-3deg)`,
        }}
      >
        <PdfPage width={pageW} height={pageH} label="V1" lines={12} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 540,
          top: 320,
          opacity: pageR.opacity,
          transform: `translateY(${pageR.y}px) rotate(2.5deg)`,
        }}
      >
        <PdfPage width={pageW} height={pageH} label="V2" lines={12} />
      </div>

      {/* Right-side text block */}
      <div
        style={{
          position: "absolute",
          left: 1040,
          top: 340,
          width: 740,
        }}
      >
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 28,
            color: COLORS.amber,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: kicker.opacity,
            transform: `translateY(${kicker.y}px)`,
            marginBottom: 28,
          }}
        >
          {t.text.hook.kicker}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 700,
            fontSize: 96,
            color: COLORS.text,
            letterSpacing: -3,
            lineHeight: 1.05,
            opacity: line1.opacity,
            transform: `translateY(${line1.y}px)`,
          }}
        >
          {t.text.hook.line1}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 500,
            fontSize: 56,
            color: COLORS.textDim,
            letterSpacing: -1,
            lineHeight: 1.15,
            marginTop: 24,
            opacity: line2.opacity,
            transform: `translateY(${line2.y}px)`,
          }}
        >
          {t.text.hook.line2}
        </div>
      </div>
    </AbsoluteFill>
  );
};
