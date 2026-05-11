import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";

// Two columns: Pass 1 (matching, blue) and Pass 2 (rendering, amber).
// A small example below shows a paragraph that "moved" — first red, then grey.
export const SceneTwoPass: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 8 * FPS;

  const exit = fadeOut(frame, total - 14, 14);
  const p1 = rise(frame, 30, 22, 24);
  const p2 = rise(frame, 70, 22, 24);
  const payoff = rise(frame, 130, 22, 18);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 130, right: 120 }}>
        <SectionHeading kicker="Step 4" title={t.text.twoPass.heading} />
      </div>

      {/* Two big cards side by side */}
      <div
        style={{
          position: "absolute",
          top: 380,
          left: 120,
          right: 120,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
        }}
      >
        <PassCard
          number="1"
          title={t.text.twoPass.pass1}
          color={COLORS.steel}
          softColor={COLORS.steelSoft}
          opacity={p1.opacity}
          y={p1.y}
          icon="match"
        />
        <PassCard
          number="2"
          title={t.text.twoPass.pass2}
          color={COLORS.amber}
          softColor={COLORS.amberSoft}
          opacity={p2.opacity}
          y={p2.y}
          icon="render"
        />
      </div>

      {/* Bottom payoff strip */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 120,
          textAlign: "center",
          fontFamily: FONT.display,
          fontSize: 40,
          color: COLORS.text,
          fontWeight: 500,
          letterSpacing: -0.5,
          lineHeight: 1.3,
          opacity: payoff.opacity,
          transform: `translateY(${payoff.y}px)`,
          padding: "0 80px",
        }}
      >
        {t.text.twoPass.payoff}
      </div>
    </AbsoluteFill>
  );
};

const PassCard: React.FC<{
  number: string;
  title: string;
  color: string;
  softColor: string;
  opacity: number;
  y: number;
  icon: "match" | "render";
}> = ({ number, title, color, softColor, opacity, y, icon }) => {
  return (
    <div
      style={{
        background: softColor,
        border: `2px solid ${color}`,
        borderRadius: 20,
        padding: "44px 48px",
        minHeight: 320,
        opacity,
        transform: `translateY(${y}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 26,
      }}
    >
      <div
        style={{
          fontFamily: FONT.mono,
          fontSize: 88,
          fontWeight: 700,
          color,
          lineHeight: 1,
          letterSpacing: -2,
        }}
      >
        Pass {number}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontSize: 36,
          color: COLORS.text,
          lineHeight: 1.35,
          letterSpacing: -0.3,
        }}
      >
        {title}
      </div>
      <PassIcon kind={icon} color={color} />
    </div>
  );
};

const PassIcon: React.FC<{ kind: "match" | "render"; color: string }> = ({
  kind,
  color,
}) => {
  if (kind === "match") {
    return (
      <svg width={120} height={60} viewBox="0 0 120 60" style={{ marginTop: 8 }}>
        <rect x="2" y="6" width="34" height="48" rx="3" fill="none" stroke={color} strokeWidth="2.5" />
        <rect x="84" y="6" width="34" height="48" rx="3" fill="none" stroke={color} strokeWidth="2.5" />
        <line x1="36" y1="30" x2="84" y2="30" stroke={color} strokeWidth="2.5" strokeDasharray="6 4" />
      </svg>
    );
  }
  return (
    <svg width={120} height={60} viewBox="0 0 120 60" style={{ marginTop: 8 }}>
      <rect x="2" y="6" width="48" height="48" rx="3" fill="none" stroke={color} strokeWidth="2.5" />
      <rect x="6" y="14" width="20" height="6" rx="2" fill={COLORS.added} opacity="0.6" />
      <rect x="6" y="26" width="34" height="6" rx="2" fill={COLORS.removed} opacity="0.6" />
      <rect x="6" y="38" width="14" height="6" rx="2" fill={COLORS.moved} opacity="0.6" />
      <path d="M62 30 L80 30 M76 24 L82 30 L76 36" fill="none" stroke={color} strokeWidth="2.5" />
      <rect x="86" y="6" width="32" height="48" rx="3" fill={color} opacity="0.18" stroke={color} strokeWidth="2.5" />
    </svg>
  );
};
