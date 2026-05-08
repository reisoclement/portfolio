import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { easeOutQuart } from "../anim";
import { LayerIcon } from "../components/LayerIcon";
import { LayerZoomCard } from "../components/LayerZoomCard";
import { LAYER_KEYS } from "../layers";
import { useLocale } from "../LocaleContext";

// Mini-beat: the layer the viewer just trusted (Python) was itself
// considered unreliable not long ago. Two side-by-side panels — same
// tool, different era — set up the History scene and reinforce the
// thesis that AI being unreliable now is just where Python was once.
export const SceneEarlyLanguage: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const E = t.text.earlyLanguage;

  const headerReveal = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const leftReveal = interpolate(frame, [12, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const rightReveal = interpolate(frame, [40, 58], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const arrowReveal = interpolate(frame, [56, 74], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const footerReveal = interpolate(frame, [80, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 80px",
      }}
    >
      {/* Layer anchor: matches the visual style used in the HW + Machine Code zoom scenes */}
      <div
        style={{
          opacity: headerReveal,
          transform: `translateY(${(1 - headerReveal) * 12}px)`,
          marginBottom: 28,
        }}
      >
        <LayerZoomCard
          label={t.text.layers.programmingLanguages}
          iconKey={LAYER_KEYS[1]}
          sub={E.sub}
        />
      </div>

      {/* Subline */}
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 600,
          fontSize: 30,
          color: COLORS.text,
          letterSpacing: -0.5,
          marginBottom: 24,
          opacity: headerReveal,
          textAlign: "center",
        }}
      >
        {E.headline}
      </div>

      {/* Two panels side-by-side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* LEFT: Python 1991 — coral, "unreliable"
            Sources: Python 0.9.0 released Feb 20, 1991 (Wikipedia History of Python).
            "Too slow / not for production / use Perl" reflects the documented
            industry sentiment through the 1990s — Perl + Java were the defaults. */}
        <Panel
          year={E.leftYear}
          tag={E.leftTag}
          quote={E.leftQuote}
          accent={COLORS.coral}
          accentSoft={COLORS.coralSoft}
          reveal={leftReveal}
        />

        {/* Arrow between panels */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            margin: "0 24px",
            opacity: arrowReveal,
          }}
        >
          <div
            style={{
              fontFamily: FONT.display,
              fontWeight: 500,
              fontSize: 18,
              color: COLORS.textDim,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {E.yearsBetween}
          </div>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
            <path
              d="M2 10 L50 10 M42 4 L52 10 L42 16"
              stroke={COLORS.amber}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* RIGHT: Python 2026 — sage, "trusted"
            Sources: NASA scientific computing (NASA ASTG Python courses); banks
            and ML (Pandas/QuantLib in finance, TensorFlow/PyTorch in ML). */}
        <Panel
          year={E.rightYear}
          tag={E.rightTag}
          quote={E.rightQuote}
          accent={COLORS.sage}
          accentSoft={COLORS.sageSoft}
          reveal={rightReveal}
        />
      </div>

      {/* Footer punch-line */}
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 500,
          fontSize: 28,
          color: COLORS.amber,
          letterSpacing: 0.5,
          marginTop: 44,
          opacity: footerReveal,
          transform: `translateY(${(1 - footerReveal) * 12}px)`,
          textAlign: "center",
        }}
      >
        {E.footer}
      </div>
    </AbsoluteFill>
  );
};

const Panel: React.FC<{
  year: string;
  tag: string;
  quote: string;
  accent: string;
  accentSoft: string;
  reveal: number;
}> = ({ year, tag, quote, accent, accentSoft, reveal }) => (
  <div
    style={{
      width: 380,
      height: 280,
      padding: "28px 32px",
      borderRadius: 14,
      background: accentSoft,
      border: `1.5px solid ${accent}`,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      opacity: reveal,
      transform: `translateY(${(1 - reveal) * 16}px)`,
      boxShadow: `0 0 50px ${accentSoft}`,
    }}
  >
    {/* Top row: icon + tag */}
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ color: accent, display: "flex" }}>
        <LayerIcon layer="Python" size={28} />
      </div>
      <div
        style={{
          fontFamily: FONT.mono,
          fontWeight: 500,
          fontSize: 16,
          color: COLORS.textDim,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        {tag}
      </div>
    </div>
    {/* Year */}
    <div
      style={{
        fontFamily: FONT.display,
        fontWeight: 700,
        fontSize: 56,
        color: accent,
        letterSpacing: -1.5,
        lineHeight: 1,
      }}
    >
      {year}
    </div>
    {/* Quote */}
    <div
      style={{
        fontFamily: FONT.display,
        fontWeight: 400,
        fontSize: 20,
        color: COLORS.text,
        letterSpacing: 0.2,
        lineHeight: 1.4,
        whiteSpace: "pre-line",
        marginTop: 4,
      }}
    >
      {quote}
    </div>
  </div>
);
