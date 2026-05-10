import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CATEGORY_COLORS, COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { SectionHeading } from "../components/SectionHeading";

// Show one editable row with all action buttons exposed, then a grid of
// "what each action does" mini-cards underneath. Bottom strip lists the
// three meta features (assessment, critical, trigger lock).
export const SceneTutorialRowActions: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 9 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const sub = rise(frame, 30, 22, 18);
  const row = rise(frame, 50, 22, 24);
  const grid = rise(frame, 90, 22, 22);
  const meta = rise(frame, 200, 22, 18);

  const actions = t.text.tutorialRowActions.actions;
  const items = [
    { name: actions.edit.name,      desc: actions.edit.desc,      color: COLORS.amber },
    { name: actions.split.name,     desc: actions.split.desc,     color: CATEGORY_COLORS.compliance },
    { name: actions.merge.name,     desc: actions.merge.desc,     color: CATEGORY_COLORS.expectation },
    { name: actions.duplicate.name, desc: actions.duplicate.desc, color: CATEGORY_COLORS.requirement },
    { name: actions.deleteAct.name, desc: actions.deleteAct.desc, color: COLORS.removed },
    { name: actions.add.name,       desc: actions.add.desc,       color: COLORS.added },
  ];

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 110, right: 120 }}>
        <SectionHeading kicker={t.text.tutorialRowActions.kicker} title={t.text.tutorialRowActions.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 290,
          fontFamily: FONT.display,
          fontSize: 28,
          color: COLORS.textDim,
          lineHeight: 1.4,
          opacity: sub.opacity,
          transform: `translateY(${sub.y}px)`,
        }}
      >
        {t.text.tutorialRowActions.sub}
      </div>

      {/* Hero row showing the action buttons inline */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 380,
          background: "#0F1620",
          border: `2px solid ${COLORS.amber}`,
          borderRadius: 12,
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          opacity: row.opacity,
          transform: `translateY(${row.y}px)`,
        }}
      >
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: 16,
            fontWeight: 700,
            color: CATEGORY_COLORS.obligation,
            background: `${CATEGORY_COLORS.obligation}28`,
            padding: "4px 10px",
            borderRadius: 4,
            letterSpacing: 1.2,
            minWidth: 110,
            textAlign: "center",
          }}
        >
          OBLIGATION
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontSize: 22,
            color: COLORS.text,
            flex: 1,
          }}
        >
          The device <Locked>shall</Locked> withstand 5 mm vibration.
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <ActionBtn label="✂" tip="split" />
          <ActionBtn label="⤵" tip="merge" />
          <ActionBtn label="⎘" tip="dup" />
          <ActionBtn label="✕" tip="del" color={COLORS.removed} />
        </div>
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: 16,
            fontWeight: 700,
            color: COLORS.added,
            background: `${COLORS.added}22`,
            padding: "4px 10px",
            borderRadius: 4,
            letterSpacing: 1,
          }}
        >
          OK
        </div>
      </div>

      {/* Grid of action cards */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 510,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 22,
          opacity: grid.opacity,
          transform: `translateY(${grid.y}px)`,
        }}
      >
        {items.map((it, i) => (
          <ActionCard key={i} name={it.name} desc={it.desc} color={it.color} />
        ))}
      </div>

      {/* Meta strip at the bottom */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 60,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          opacity: meta.opacity,
          transform: `translateY(${meta.y}px)`,
        }}
      >
        <MetaLine icon="◇" text={t.text.tutorialRowActions.meta.assessment} />
        <MetaLine icon="⚑" text={t.text.tutorialRowActions.meta.critical} />
        <MetaLine icon="🔒" text={t.text.tutorialRowActions.meta.triggerLocked} />
      </div>
    </AbsoluteFill>
  );
};

const Locked: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    style={{
      background: `${CATEGORY_COLORS.obligation}55`,
      borderBottom: `2px solid ${CATEGORY_COLORS.obligation}`,
      padding: "0 4px",
      borderRadius: 2,
      fontWeight: 700,
      cursor: "not-allowed",
    }}
    title="Trigger word, locked"
  >
    {children}
  </span>
);

const ActionBtn: React.FC<{ label: string; tip: string; color?: string }> = ({ label, color }) => (
  <div
    style={{
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: FONT.mono,
      fontSize: 22,
      color: color ?? COLORS.amber,
      background: `${color ?? COLORS.amber}22`,
      border: `1.5px solid ${color ?? COLORS.amber}`,
      borderRadius: 6,
    }}
  >
    {label}
  </div>
);

const ActionCard: React.FC<{ name: string; desc: string; color: string }> = ({
  name,
  desc,
  color,
}) => (
  <div
    style={{
      background: `${color}18`,
      border: `1.5px solid ${color}`,
      borderRadius: 12,
      padding: "20px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minHeight: 130,
    }}
  >
    <div
      style={{
        fontFamily: FONT.mono,
        fontSize: 28,
        fontWeight: 700,
        color,
        letterSpacing: -0.3,
      }}
    >
      {name}
    </div>
    <div
      style={{
        fontFamily: FONT.display,
        fontSize: 22,
        color: COLORS.text,
        lineHeight: 1.35,
        letterSpacing: -0.2,
      }}
    >
      {desc}
    </div>
  </div>
);

const MetaLine: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div
    style={{
      display: "flex",
      gap: 14,
      alignItems: "center",
      fontFamily: FONT.display,
      fontSize: 24,
      color: COLORS.textDim,
    }}
  >
    <span style={{ color: COLORS.amber, fontSize: 22, width: 28, textAlign: "center" }}>{icon}</span>
    <span>{text}</span>
  </div>
);
