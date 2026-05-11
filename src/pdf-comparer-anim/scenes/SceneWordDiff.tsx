import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise, easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";
import { LibChip } from "../components/LibChip";
import { SectionHeading } from "../components/SectionHeading";

type Side = "old" | "new";
type Tag = "equal" | "insert" | "delete" | "replace";

// Show two horizontal "word streams" — old + new — and overlay opcodes
// (equal/insert/delete/replace) word by word.
export const SceneWordDiff: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 9 * FPS;

  const exit = fadeOut(frame, total - 14, 14);
  const chip = rise(frame, 30, 20, 18);
  const opc = rise(frame, 110, 20, 18);
  const note = rise(frame, 180, 22, 18);

  const reveal = interpolate(frame, [50, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // OLD: [The] [agreement] [is]   [signed]   [on]      [Monday]
  // NEW: [The] [contract]  [is]   [signed]   [today]
  // difflib emits one `replace` opcode for the agreement→contract pair, plus a
  // `delete` for "on Monday" and an `insert` for "today". In the rendered
  // report a `replace` shows red on old and green on new.
  type Tok = { text: string; tag: Tag };
  const oldStream: Tok[] = [
    { text: "The", tag: "equal" },
    { text: "agreement", tag: "replace" },
    { text: "is", tag: "equal" },
    { text: "signed", tag: "equal" },
    { text: "on", tag: "delete" },
    { text: "Monday", tag: "delete" },
  ];
  const newStream: Tok[] = [
    { text: "The", tag: "equal" },
    { text: "contract", tag: "replace" },
    { text: "is", tag: "equal" },
    { text: "signed", tag: "equal" },
    { text: "today", tag: "insert" },
  ];

  // Side-aware coloring: replace shows red on OLD, green on NEW.
  const tagColor = (tag: Tag, side: Side) => {
    if (tag === "equal") return COLORS.text;
    if (tag === "insert") return COLORS.added;
    if (tag === "delete") return COLORS.removed;
    return side === "old" ? COLORS.removed : COLORS.added;
  };
  const tagBg = (tag: Tag, side: Side) => {
    if (tag === "equal") return "transparent";
    if (tag === "insert") return COLORS.addedSoft;
    if (tag === "delete") return COLORS.removedSoft;
    return side === "old" ? COLORS.removedSoft : COLORS.addedSoft;
  };

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 130, right: 120 }}>
        <SectionHeading kicker="Step 5" title={t.text.wordDiff.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          top: 340,
          opacity: chip.opacity,
          transform: `translateY(${chip.y}px)`,
        }}
      >
        <LibChip name={t.text.wordDiff.lib} />
      </div>

      {/* Old stream */}
      <StreamRow
        label="OLD"
        labelColor={COLORS.removed}
        side="old"
        tokens={oldStream}
        top={460}
        reveal={reveal}
        tagColor={tagColor}
        tagBg={tagBg}
      />

      {/* New stream */}
      <StreamRow
        label="NEW"
        labelColor={COLORS.added}
        side="new"
        tokens={newStream}
        top={620}
        reveal={reveal}
        tagColor={tagColor}
        tagBg={tagBg}
      />

      {/* Opcode legend — `replace` is one opcode that shows as red + green
          (delete on old + insert on new) in the rendered report. */}
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 800,
          right: 120,
          display: "flex",
          gap: 28,
          opacity: opc.opacity,
          transform: `translateY(${opc.y}px)`,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <OpcodePill label={t.text.wordDiff.opcodes.equal} color={COLORS.text} bg="transparent" />
        <OpcodePill label={t.text.wordDiff.opcodes.insert} color={COLORS.added} bg={COLORS.addedSoft} />
        <OpcodePill label={t.text.wordDiff.opcodes.delete} color={COLORS.removed} bg={COLORS.removedSoft} />
        <ReplacePill label={t.text.wordDiff.opcodes.replace} />
      </div>

      {/* Case-only note */}
      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 60,
          fontFamily: FONT.display,
          fontSize: 32,
          color: COLORS.textDim,
          textAlign: "center",
          opacity: note.opacity,
          transform: `translateY(${note.y}px)`,
        }}
      >
        {t.text.wordDiff.caseNote}
      </div>
    </AbsoluteFill>
  );
};

const StreamRow: React.FC<{
  label: string;
  labelColor: string;
  side: Side;
  tokens: { text: string; tag: Tag }[];
  top: number;
  reveal: number;
  tagColor: (tag: Tag, side: Side) => string;
  tagBg: (tag: Tag, side: Side) => string;
}> = ({ label, labelColor, side, tokens, top, reveal, tagColor, tagBg }) => {
  const visibleCount = Math.floor(reveal * tokens.length + 0.0001);
  return (
    <div style={{ position: "absolute", left: 120, top, right: 120 }}>
      <div
        style={{
          fontFamily: FONT.mono,
          fontSize: 28,
          fontWeight: 700,
          color: labelColor,
          letterSpacing: 4,
          marginBottom: 14,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        {tokens.map((tok, i) => {
          const visible = i < visibleCount;
          const c = tagColor(tok.tag, side);
          return (
            <div
              key={i}
              style={{
                fontFamily: FONT.mono,
                fontSize: 44,
                fontWeight: 600,
                color: c,
                background: tagBg(tok.tag, side),
                padding: "10px 22px",
                borderRadius: 8,
                border:
                  tok.tag === "equal"
                    ? `1px solid ${COLORS.rule}`
                    : `2px solid ${c}`,
                opacity: visible ? 1 : 0,
                transform: `translateY(${visible ? 0 : 10}px)`,
                transition: "opacity 0.2s, transform 0.2s",
              }}
            >
              {tok.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// REPLACE pill: a single opcode that surfaces on both sides — red on OLD,
// green on NEW. Two halves with a thin divider.
const ReplacePill: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "stretch",
        borderRadius: 999,
        overflow: "hidden",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        fontFamily: FONT.mono,
        fontSize: 30,
        fontWeight: 600,
      }}
    >
      <span
        style={{
          background: COLORS.removedSoft,
          color: COLORS.removed,
          padding: "10px 16px 10px 24px",
          border: `2px solid ${COLORS.removed}`,
          borderRight: "none",
          borderTopLeftRadius: 999,
          borderBottomLeftRadius: 999,
        }}
      >
        {label}
      </span>
      <span
        style={{
          background: COLORS.addedSoft,
          color: COLORS.added,
          padding: "10px 24px 10px 16px",
          border: `2px solid ${COLORS.added}`,
          borderLeft: "none",
          borderTopRightRadius: 999,
          borderBottomRightRadius: 999,
        }}
      >
        − / +
      </span>
    </div>
  );
};

const OpcodePill: React.FC<{ label: string; color: string; bg: string }> = ({
  label,
  color,
  bg,
}) => {
  return (
    <div
      style={{
        fontFamily: FONT.mono,
        fontSize: 30,
        fontWeight: 600,
        color,
        background: bg,
        border: `2px solid ${color === COLORS.text ? COLORS.rule : color}`,
        borderRadius: 999,
        padding: "10px 24px",
        textTransform: "uppercase",
        letterSpacing: 1.5,
      }}
    >
      {label}
    </div>
  );
};
