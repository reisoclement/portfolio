import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { WatermarkLogo } from "../components/WatermarkLogo";

export const SceneTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 5 * FPS;

  const k = rise(frame, 4, 18, 12);
  const title = rise(frame, 14, 22, 22);
  const ver = rise(frame, 32, 18, 18);
  const sub = rise(frame, 50, 22, 18);
  const exit = fadeOut(frame, total - 14, 14);

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: exit,
      }}
    >
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 600,
          fontSize: 28,
          color: COLORS.amber,
          letterSpacing: 8,
          textTransform: "uppercase",
          marginBottom: 32,
          opacity: k.opacity,
          transform: `translateY(${k.y}px)`,
        }}
      >
        {t.text.title.kicker}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 700,
          fontSize: 140,
          color: COLORS.text,
          letterSpacing: -5,
          lineHeight: 0.95,
          textAlign: "center",
          opacity: title.opacity,
          transform: `translateY(${title.y}px)`,
        }}
      >
        {t.text.title.title}
      </div>
      <div
        style={{
          fontFamily: FONT.mono,
          fontWeight: 500,
          fontSize: 36,
          color: COLORS.amber,
          letterSpacing: 2,
          marginTop: 28,
          opacity: ver.opacity,
          transform: `translateY(${ver.y}px)`,
          padding: "8px 24px",
          border: `2px solid ${COLORS.amberHalo}`,
          borderRadius: 8,
          background: COLORS.amberSoft,
        }}
      >
        {t.text.title.version}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 400,
          fontSize: 40,
          color: COLORS.textDim,
          letterSpacing: -0.5,
          marginTop: 40,
          opacity: sub.opacity,
          transform: `translateY(${sub.y}px)`,
          textAlign: "center",
        }}
      >
        {t.text.title.subtitle}
      </div>

      {/* Watermark, bottom-right corner. 5s scene, plays its full arc. */}
      <div
        style={{
          position: "absolute",
          right: 80,
          bottom: 80,
          opacity: 0.55,
        }}
      >
        <WatermarkLogo
          mode="embedded"
          color={COLORS.text}
          size={130}
          idSuffix="title"
        />
      </div>
    </AbsoluteFill>
  );
};
