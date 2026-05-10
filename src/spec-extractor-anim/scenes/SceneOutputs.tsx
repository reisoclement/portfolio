import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";
// (rise is already imported above; the duplicate import at the bottom is removed)

// Three deliverable cards: HTML, Summary PDF, Highlighted PDF.
export const SceneOutputs: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 8 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 130, right: 120 }}>
        <SectionHeading kicker={t.text.outputs.kicker} title={t.text.outputs.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 400,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 36,
        }}
      >
        <DeliverableCard
          icon="html"
          title={t.text.outputs.a.title}
          sub={t.text.outputs.a.sub}
          inFrame={20}
          frame={frame}
        />
        <DeliverableCard
          icon="summary"
          title={t.text.outputs.b.title}
          sub={t.text.outputs.b.sub}
          inFrame={40}
          frame={frame}
        />
        <DeliverableCard
          icon="annot"
          title={t.text.outputs.c.title}
          sub={t.text.outputs.c.sub}
          inFrame={60}
          frame={frame}
        />
      </div>
    </AbsoluteFill>
  );
};

const DeliverableCard: React.FC<{
  icon: "html" | "summary" | "annot";
  title: string;
  sub: string;
  inFrame: number;
  frame: number;
}> = ({ icon, title, sub, inFrame, frame }) => {
  const r = rise(frame, inFrame, 22, 26);
  return (
    <div
      style={{
        background: COLORS.steelSoft,
        border: `2px solid ${COLORS.steelDim}`,
        borderRadius: 18,
        padding: "36px 36px",
        minHeight: 460,
        opacity: r.opacity,
        transform: `translateY(${r.y}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <DeliverableIcon kind={icon} />
      <div
        style={{
          fontFamily: FONT.display,
          fontSize: 40,
          fontWeight: 600,
          color: COLORS.text,
          letterSpacing: -0.5,
          marginTop: 16,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontSize: 28,
          color: COLORS.textDim,
          lineHeight: 1.4,
        }}
      >
        {sub}
      </div>
    </div>
  );
};

const DeliverableIcon: React.FC<{ kind: "html" | "summary" | "annot" }> = ({ kind }) => {
  if (kind === "html") {
    return (
      <svg width={120} height={140} viewBox="0 0 120 140">
        <rect x="6" y="6" width="108" height="128" rx="8" fill="none" stroke={COLORS.amber} strokeWidth="3" />
        <rect x="14" y="22" width="92" height="12" rx="2" fill={COLORS.amber} opacity="0.5" />
        <rect x="14" y="42" width="60" height="6" rx="2" fill={COLORS.amberSoft} />
        <rect x="14" y="54" width="80" height="6" rx="2" fill={COLORS.amberSoft} />
        <rect x="14" y="66" width="50" height="6" rx="2" fill={COLORS.amberSoft} />
        <rect x="14" y="84" width="92" height="20" rx="3" fill={COLORS.amber} opacity="0.2" />
        <rect x="14" y="110" width="40" height="14" rx="3" fill={COLORS.amber} opacity="0.4" />
        <rect x="60" y="110" width="46" height="14" rx="3" fill={COLORS.amber} opacity="0.4" />
      </svg>
    );
  }
  if (kind === "summary") {
    return (
      <svg width={120} height={140} viewBox="0 0 120 140">
        <rect x="6" y="6" width="108" height="128" rx="6" fill={COLORS.paper} stroke={COLORS.amber} strokeWidth="3" />
        <rect x="14" y="20" width="92" height="14" rx="2" fill={COLORS.amber} opacity="0.6" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(0, ${42 + i * 16})`}>
            <rect x="14" y="0" width="22" height="10" rx="2" fill={COLORS.inkLine} opacity="0.6" />
            <rect x="40" y="0" width="32" height="10" rx="2" fill={COLORS.inkLine} opacity="0.6" />
            <rect x="76" y="0" width="30" height="10" rx="2" fill={COLORS.inkLine} opacity="0.4" />
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg width={120} height={140} viewBox="0 0 120 140">
      <rect x="6" y="6" width="108" height="128" rx="6" fill={COLORS.paper} stroke={COLORS.amber} strokeWidth="3" />
      <rect x="14" y="20" width="64" height="6" rx="2" fill={COLORS.inkLine} opacity="0.55" />
      <rect x="14" y="34" width="92" height="6" rx="2" fill={COLORS.inkLine} opacity="0.55" />
      <rect x="14" y="48" width="80" height="6" rx="2" fill={COLORS.inkLine} opacity="0.55" />
      <rect x="14" y="62" width="60" height="6" rx="2" fill={COLORS.inkLine} opacity="0.55" />
      <rect x="14" y="76" width="92" height="6" rx="2" fill={COLORS.inkLine} opacity="0.55" />
      <rect x="14" y="90" width="50" height="6" rx="2" fill={COLORS.inkLine} opacity="0.55" />

      {/* Annotations */}
      <rect x="14" y="44" width="40" height="14" rx="2" fill="#E0B047" opacity="0.55" />
      <rect x="14" y="72" width="65" height="14" rx="2" fill="#E16E5E" opacity="0.55" />
      <circle cx="98" cy="44" r="6" fill="#E0B047" />
      <circle cx="98" cy="72" r="6" fill="#E16E5E" />
    </svg>
  );
};
