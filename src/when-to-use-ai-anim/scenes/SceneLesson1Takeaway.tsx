import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";

// The moral of Lesson 1 (the try-on app failure), turned into 3 rules.
//
// The takeaway is: if your only value-add is calling a foundation model,
// the model provider can replace you in one toggle. Defense comes from
// being SPECIFIC — to your data, your workflow, your domain.
//
// References (defensibility framing for AI products):
//   - "Why Generic AI Startups Are Dead" — BayTech Consulting
//   - Google Cloud VP on doomed wrapper startups (mlq.ai / techbuzz.ai)
//   - "Most AI Startups Are Just Prompt Wrappers" — Medium / Alexander Huseby
//
// Visual: a single header at top + 3 numbered rule cards stacked centrally.
// Each rule lands one after the other.
type Rule = {
  num: string;
  rule: string;
  detail: string;
};

export const SceneLesson1Takeaway: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const L = t.text.lesson1Takeaway;
  const RULES: Rule[] = L.rules;

  // Header lands first
  const headerReveal = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // Each rule appears in sequence (~1s apart)
  const ruleAppear = (i: number) => 24 + i * Math.round(1.0 * FPS);

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 120px",
        gap: 32,
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          opacity: headerReveal,
          transform: `translateY(${(1 - headerReveal) * 12}px)`,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 500,
            fontSize: 18,
            color: COLORS.amber,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {L.kicker}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 44,
            color: COLORS.text,
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          {L.headline}
        </div>
      </div>

      {/* Three rule cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
          maxWidth: 1100,
          marginTop: 8,
        }}
      >
        {RULES.map((r, i) => (
          <RuleCard key={i} rule={r} appearAt={ruleAppear(i)} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

const RuleCard: React.FC<{ rule: Rule; appearAt: number }> = ({
  rule,
  appearAt,
}) => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [appearAt, appearAt + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 28,
        padding: "22px 32px",
        borderRadius: 12,
        background: "rgba(242, 234, 216, 0.04)",
        border: `1.5px solid ${COLORS.rule}`,
        opacity: reveal,
        transform: `translateX(${(1 - reveal) * 24}px)`,
      }}
    >
      <div
        style={{
          fontFamily: FONT.mono,
          fontWeight: 700,
          fontSize: 36,
          color: COLORS.amber,
          letterSpacing: 0,
          minWidth: 64,
          textAlign: "center",
        }}
      >
        {rule.num}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 26,
            color: COLORS.text,
            letterSpacing: -0.3,
            marginBottom: 4,
          }}
        >
          {rule.rule}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 400,
            fontSize: 19,
            color: COLORS.textDim,
            letterSpacing: 0.2,
          }}
        >
          {rule.detail}
        </div>
      </div>
    </div>
  );
};
