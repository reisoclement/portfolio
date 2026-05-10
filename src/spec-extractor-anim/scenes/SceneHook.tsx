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
  const stat = rise(frame, 18, 22, 18);
  const line = rise(frame, 38, 22, 18);
  const stack = rise(frame, 14, 26, 30);

  const exitOpacity = fadeOut(frame, total - 18, 18);
  const inOpacity = fadeIn(frame, 0, 6);
  const overall = Math.min(exitOpacity, inOpacity);

  const pageW = 320;
  const pageH = 440;

  // Stacked PDFs to suggest "many pages"
  return (
    <AbsoluteFill style={{ opacity: overall }}>
      <div
        style={{
          position: "absolute",
          left: 180,
          top: 280,
          opacity: stack.opacity,
          transform: `translateY(${stack.y}px)`,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: i * 22,
              top: i * 18,
              transform: `rotate(${(-2 + i * 1.5).toFixed(2)}deg)`,
            }}
          >
            <PdfPage width={pageW} height={pageH} lines={11} />
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", left: 800, top: 340, width: 1000 }}>
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
            fontSize: 130,
            color: COLORS.text,
            letterSpacing: -3,
            lineHeight: 1.0,
            opacity: stat.opacity,
            transform: `translateY(${stat.y}px)`,
          }}
        >
          {t.text.hook.stat}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 500,
            fontSize: 48,
            color: COLORS.textDim,
            letterSpacing: -0.5,
            lineHeight: 1.2,
            marginTop: 24,
            opacity: line.opacity,
            transform: `translateY(${line.y}px)`,
          }}
        >
          {t.text.hook.line}
        </div>
      </div>
    </AbsoluteFill>
  );
};
