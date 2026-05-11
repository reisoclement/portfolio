import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";

export const SceneRecap: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 7 * FPS;
  const exit = fadeOut(frame, total - 18, 18);

  const heading = rise(frame, 4, 22, 18);
  const closer = rise(frame, 130, 22, 18);

  return (
    <AbsoluteFill
      style={{
        opacity: exit,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 700,
          fontSize: 96,
          color: COLORS.text,
          letterSpacing: -3,
          opacity: heading.opacity,
          transform: `translateY(${heading.y}px)`,
          marginBottom: 60,
          textAlign: "center",
        }}
      >
        {t.text.recap.heading}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 22,
          maxWidth: 1300,
          width: "100%",
          padding: "0 60px",
        }}
      >
        {t.text.recap.bullets.map((b, i) => {
          const r = rise(frame, 30 + i * 10, 22, 18);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 22,
                alignItems: "baseline",
                fontFamily: FONT.display,
                fontSize: 38,
                color: COLORS.text,
                lineHeight: 1.35,
                opacity: r.opacity,
                transform: `translateY(${r.y}px)`,
              }}
            >
              <span style={{ color: COLORS.amber, fontFamily: FONT.mono, fontWeight: 700 }}>
                {`0${i + 1}`}
              </span>
              <span>{b}</span>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 80,
          fontFamily: FONT.display,
          fontSize: 40,
          fontWeight: 500,
          color: COLORS.amber,
          letterSpacing: -0.5,
          textAlign: "center",
          maxWidth: 1300,
          padding: "0 80px",
          lineHeight: 1.3,
          opacity: closer.opacity,
          transform: `translateY(${closer.y}px)`,
        }}
      >
        {t.text.recap.closer}
      </div>
    </AbsoluteFill>
  );
};
