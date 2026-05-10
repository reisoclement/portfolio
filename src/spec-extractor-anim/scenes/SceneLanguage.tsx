import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";

// Three language cards (EN/FR/DE), one settles as winner with confidence.
export const SceneLanguage: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 7 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const explainer = rise(frame, 80, 22, 18);
  const bullet = rise(frame, 130, 22, 18);

  // Animate vote counts: EN wins, FR/DE lower
  const tally = interpolate(frame, [30, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  const enConfidence = Math.round(74 * tally);
  const frConfidence = Math.round(18 * tally);
  const deConfidence = Math.round(8 * tally);

  // Winner halo locks in late
  const settle = interpolate(frame, [110, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 130, right: 120 }}>
        <SectionHeading kicker={t.text.language.kicker} title={t.text.language.heading} />
      </div>

      {/* Three language cards */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 380,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 36,
        }}
      >
        {[
          { code: "EN", name: "English", conf: enConfidence, winner: true, sample: "shall · must · required" },
          { code: "FR", name: "Français", conf: frConfidence, winner: false, sample: "doit · devra · requis" },
          { code: "DE", name: "Deutsch", conf: deConfidence, winner: false, sample: "muss · soll · erforderlich" },
        ].map((lang, i) => {
          const r = rise(frame, 14 + i * 6, 18, 24);
          const isWinner = lang.winner && settle > 0.2;
          return (
            <div
              key={lang.code}
              style={{
                background: isWinner ? COLORS.amberSoft : COLORS.steelSoft,
                border: `2px solid ${isWinner ? COLORS.amber : COLORS.steelDim}`,
                borderRadius: 18,
                padding: "30px 32px",
                opacity: r.opacity,
                transform: `translateY(${r.y}px) scale(${1 + (isWinner ? settle * 0.03 : 0)})`,
                filter: isWinner
                  ? `drop-shadow(0 0 24px ${COLORS.amberHalo})`
                  : "none",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <div
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 56,
                    fontWeight: 700,
                    color: isWinner ? COLORS.amber : COLORS.steel,
                    letterSpacing: 1,
                  }}
                >
                  {lang.code}
                </div>
                <div
                  style={{
                    fontFamily: FONT.display,
                    fontSize: 28,
                    color: COLORS.textDim,
                  }}
                >
                  {lang.name}
                </div>
              </div>
              <div
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 26,
                  color: COLORS.text,
                  opacity: 0.7,
                  letterSpacing: 0.3,
                }}
              >
                {lang.sample}
              </div>
              {/* Confidence bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginTop: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 28,
                    fontWeight: 600,
                    color: isWinner ? COLORS.amber : COLORS.textDim,
                  }}
                >
                  {lang.conf}%
                </div>
                {isWinner && (
                  <div
                    style={{
                      fontFamily: FONT.mono,
                      fontSize: 22,
                      fontWeight: 700,
                      color: COLORS.amber,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      opacity: settle,
                    }}
                  >
                    ← {t.text.language.detected}
                  </div>
                )}
              </div>
              <div
                style={{
                  height: 8,
                  background: COLORS.steelSoft,
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${lang.conf}%`,
                    height: "100%",
                    background: isWinner ? COLORS.amber : COLORS.steel,
                    transition: "width 0.2s",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom explainer */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 130,
          fontFamily: FONT.display,
          fontSize: 32,
          color: COLORS.textDim,
          textAlign: "center",
          lineHeight: 1.4,
          opacity: explainer.opacity,
          transform: `translateY(${explainer.y}px)`,
        }}
      >
        {t.text.language.explainer}
      </div>
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 70,
          fontFamily: FONT.mono,
          fontSize: 28,
          fontWeight: 600,
          color: COLORS.amber,
          textAlign: "center",
          letterSpacing: 1,
          opacity: bullet.opacity,
          transform: `translateY(${bullet.y}px)`,
        }}
      >
        {t.text.language.bullet}
      </div>
    </AbsoluteFill>
  );
};
