import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart, easeInOutCubic } from "../anim";
import { useLocale } from "../LocaleContext";
import type { Dict } from "../i18n/types";

// Concrete failure example: a startup builds a custom virtual try-on app
// with a complex pipeline of APIs and models. Then Google ships native try-on
// in Shopping (2025). Months of work, killed by one toggle.
//
// Layout: text/labels on the LEFT half, the complex workflow on the RIGHT half.
// Boxes are large and readable. Arrows criss-cross to convey complexity (not mess).
//
// Source: Google launched AI Virtual Try-On in Shopping in 2025 (Google I/O 2025),
// now widely available across Search / Shopping / Images.
//
// Story beats (silent-readable):
//   0.0-2.0s   header lands ("Real example" + tagline)
//   2.0-5.5s   workflow boxes + arrows draw in on the right
//   5.5-7.5s   cost block lands beneath the header on the left
//   7.5-10s    Google chip drops in from above, hovering over the workflow
//   10-13s     workflow + cost collapse into a single toggle pill on the right
//   13-16s     punch line on the left
export const SceneHookToggle: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const HT = t.text.hookToggle;
  const total = 16 * FPS;

  // -- Timing markers --
  // The Google panel and its toggle land together. The toggle starts OFF,
  // then visibly flips to ON. The workflow collapses as a *result* of the
  // toggle flipping — so the viewer sees the cause (Google flipped the
  // switch) and the effect (custom workflow gone).
  const T = {
    header: 0,
    workflow: Math.round(2 * FPS),
    cost: Math.round(5.5 * FPS),
    googlePanel: Math.round(8 * FPS),     // Google + toggle (in OFF state) appear together
    toggleFlip: Math.round(9.5 * FPS),    // toggle slides OFF -> ON
    collapse: Math.round(10.5 * FPS),     // workflow starts collapsing right after the flip
    punch: Math.round(12.5 * FPS),
  };

  const headerReveal = interpolate(frame, [T.header, T.header + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const taglineReveal = interpolate(
    frame,
    [T.header + 12, T.header + 30],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: easeOutQuart,
    },
  );

  const workflowReveal = interpolate(
    frame,
    [T.workflow, T.workflow + Math.round(2.5 * FPS)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOutQuart },
  );

  const costReveal = interpolate(frame, [T.cost, T.cost + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // Google panel (chip + toggle, both visible at once) appears at T.googlePanel
  const panelReveal = interpolate(
    frame,
    [T.googlePanel, T.googlePanel + 20],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOutQuart },
  );

  // Toggle slider position 0 (OFF, knob left) -> 1 (ON, knob right)
  const togglePos = interpolate(
    frame,
    [T.toggleFlip, T.toggleFlip + 14],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeInOutCubic },
  );

  // Workflow collapses as a result of the toggle flipping ON
  const collapse = interpolate(
    frame,
    [T.collapse, T.collapse + Math.round(1.5 * FPS)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeInOutCubic },
  );

  const punchReveal = interpolate(frame, [T.punch, T.punch + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const exit = interpolate(frame, [total - 18, total], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // The whole "before" stage on the right (workflow + google chip) collapses
  const stageOpacity = 1 - collapse;
  const stageScale = 1 - 0.92 * collapse;

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      {/* ============ LEFT COLUMN ============ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 80,
          bottom: 0,
          width: 720,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {/* Kicker */}
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 500,
            fontSize: 18,
            color: COLORS.coral,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: headerReveal,
            transform: `translateY(${(1 - headerReveal) * 12}px)`,
          }}
        >
          {HT.kicker}
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 52,
            color: COLORS.text,
            letterSpacing: -1.2,
            lineHeight: 1.05,
            opacity: headerReveal,
            transform: `translateY(${(1 - headerReveal) * 14}px)`,
          }}
        >
          {HT.headline}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 400,
            fontSize: 24,
            color: COLORS.textDim,
            letterSpacing: 0.2,
            lineHeight: 1.4,
            maxWidth: 600,
            opacity: taglineReveal,
            transform: `translateY(${(1 - taglineReveal) * 12}px)`,
            marginTop: -8,
          }}
        >
          {HT.tagline}
        </div>

        {/* Cost block */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 18,
            padding: "16px 24px",
            borderRadius: 10,
            background: COLORS.amberSoft,
            border: `1.5px solid ${COLORS.amber}`,
            alignSelf: "flex-start",
            marginTop: 12,
            opacity: costReveal * (1 - collapse),
            transform: `translateY(${(1 - costReveal) * 14}px)`,
          }}
        >
          {[HT.cost1, HT.cost2, HT.cost3].map((s, i) => (
            <span
              key={i}
              style={{
                fontFamily: FONT.display,
                fontWeight: 600,
                fontSize: 22,
                color: COLORS.text,
                letterSpacing: 0.4,
                display: "inline-flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              {s}
              {i < 2 && (
                <span style={{ color: COLORS.amber, opacity: 0.6 }}>·</span>
              )}
            </span>
          ))}
        </div>

        {/* Punch line — closes the story. The takeaway scene that follows
            (SceneLesson1Takeaway) carries the moral, so this just needs
            to land the death emotionally. */}
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 36,
            color: COLORS.coral,
            letterSpacing: -0.5,
            lineHeight: 1.2,
            marginTop: 24,
            opacity: punchReveal,
            transform: `translateY(${(1 - punchReveal) * 14}px)`,
          }}
        >
          {HT.punch}
        </div>
      </div>

      {/* ============ RIGHT COLUMN ============ */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 1100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* The complex workflow (with criss-crossing arrows). Collapses
            after the toggle flip — visually showing it's been replaced. */}
        <div
          style={{
            opacity: stageOpacity,
            transform: `scale(${stageScale})`,
            transformOrigin: "50% 50%",
          }}
        >
          <Workflow reveal={workflowReveal} HT={HT} />
        </div>

        {/* Google action panel: chip + toggle appear together as one unit.
            The toggle starts OFF and visibly flips to ON, which is what
            triggers the workflow collapse. */}
        <GoogleTogglePanel
          panelReveal={panelReveal}
          togglePos={togglePos}
          HT={HT}
        />
      </div>
    </AbsoluteFill>
  );
};

// =====================================================================
// Google action panel: source chip + the toggle, as a single linked unit.
// togglePos: 0 = OFF (knob on left), 1 = ON (knob on right).
// =====================================================================
type HT = Dict["text"]["hookToggle"];

const GoogleTogglePanel: React.FC<{
  panelReveal: number;
  togglePos: number;
  HT: HT;
}> = ({ panelReveal, togglePos, HT }) => {
  // Toggle pill geometry
  const PILL_W = 100;
  const PILL_H = 50;
  const KNOB = 42;
  const KNOB_PAD = 4;
  const knobX = KNOB_PAD + togglePos * (PILL_W - KNOB - KNOB_PAD * 2);
  // Background tint goes from steel (off) -> amber (on)
  // (linear interpolation between two known colors via mix)
  const bgOff = COLORS.steelSoft;
  const bgOn = COLORS.amber;
  const fillBg = togglePos > 0.5 ? bgOn : bgOff;
  const knobBg = togglePos > 0.5 ? COLORS.text : COLORS.text;
  const stateLabel = togglePos > 0.5 ? HT.toggleOn : HT.toggleOff;
  const stateColor = togglePos > 0.5 ? COLORS.amber : COLORS.textDim;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) scale(${0.92 + 0.08 * panelReveal})`,
        opacity: panelReveal,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: 0,
        padding: "24px 32px 28px",
        borderRadius: 18,
        background: "rgba(15, 22, 32, 0.96)",
        border: `2px solid ${COLORS.steel}`,
        boxShadow: `0 0 70px rgba(0, 0, 0, 0.55)`,
        minWidth: 460,
      }}
    >
      {/* Top: Google source chip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          paddingBottom: 18,
          borderBottom: `1px solid ${COLORS.rule}`,
          marginBottom: 22,
        }}
      >
        <GoogleG size={28} />
        <span
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 22,
            color: COLORS.text,
            letterSpacing: 0.3,
            flex: 1,
          }}
        >
          {HT.googleLabel}
        </span>
        <span
          style={{
            fontFamily: FONT.mono,
            fontWeight: 500,
            fontSize: 13,
            color: COLORS.amber,
            letterSpacing: 1.5,
            padding: "4px 10px",
            borderRadius: 4,
            background: COLORS.amberSoft,
            textTransform: "uppercase",
          }}
        >
          {HT.googleYear}
        </span>
      </div>

      {/* Bottom: the toggle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <span
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 28,
            color: COLORS.text,
            letterSpacing: 0,
            flex: 1,
          }}
        >
          {HT.toggleLabel}
        </span>

        {/* The toggle pill */}
        <div
          style={{
            width: PILL_W,
            height: PILL_H,
            borderRadius: 999,
            background: fillBg,
            border: `1.5px solid ${togglePos > 0.5 ? COLORS.amber : COLORS.steel}`,
            position: "relative",
            transition: "none",
            boxShadow:
              togglePos > 0.5
                ? `0 0 24px ${COLORS.amberHalo}`
                : "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: KNOB_PAD,
              left: knobX,
              width: KNOB,
              height: KNOB,
              borderRadius: "50%",
              background: knobBg,
              boxShadow: `0 2px 6px rgba(0,0,0,0.4)`,
            }}
          />
        </div>

        {/* State label */}
        <span
          style={{
            fontFamily: FONT.mono,
            fontWeight: 700,
            fontSize: 22,
            color: stateColor,
            letterSpacing: 2,
            minWidth: 56,
            textAlign: "left",
          }}
        >
          {stateLabel}
        </span>
      </div>
    </div>
  );
};

// =====================================================================
// Workflow diagram — large readable boxes in a 2D layout, with several
// arrows that cross over each other to convey complexity (not mess).
// Box positions are absolute on a 900×640 stage.
// =====================================================================
type Box = {
  id: string;
  label: string;
  x: number; // top-left x
  y: number; // top-left y
};
type Arrow = {
  from: string;
  to: string;
  // Optional curve control offset to make arrows arc around each other
  curve?: number;
};

const W = 900;
const H = 640;
const BOX_W = 220;
const BOX_H = 96;

// Box geometry is fixed; labels come from the i18n dict at render time.
const BOX_DEFS: Array<{ id: string; x: number; y: number }> = [
  { id: "upload", x: 40, y: 40 },
  { id: "detect", x: 350, y: 0 },
  { id: "strip", x: 660, y: 70 },
  { id: "garment", x: 40, y: 280 },
  { id: "generate", x: 350, y: 240 },
  { id: "composite", x: 660, y: 320 },
  { id: "result", x: 350, y: 510 },
];

function boxesFromDict(HT: HT): Box[] {
  const labels: Record<string, string> = {
    upload: HT.box1,
    detect: HT.box2,
    strip: HT.box3,
    garment: HT.box4,
    generate: HT.box5,
    composite: HT.box6,
    result: HT.box7,
  };
  return BOX_DEFS.map((d) => ({ ...d, label: labels[d.id] }));
}

const ARROWS: Arrow[] = [
  { from: "upload", to: "detect" },
  { from: "upload", to: "strip", curve: -50 },        // arches up over detect
  { from: "detect", to: "strip" },
  { from: "detect", to: "generate" },
  { from: "garment", to: "generate" },
  { from: "garment", to: "composite", curve: 80 },    // arches down under generate
  { from: "strip", to: "composite" },
  { from: "generate", to: "composite" },
  { from: "composite", to: "result" },
  { from: "generate", to: "result" },
  { from: "strip", to: "result", curve: 120 },        // long arch from top right
];

const center = (b: Box) => ({ cx: b.x + BOX_W / 2, cy: b.y + BOX_H / 2 });

const Workflow: React.FC<{ reveal: number; HT: HT }> = ({ reveal, HT }) => {
  const BOXES = boxesFromDict(HT);
  const boxById = (id: string) => BOXES.find((b) => b.id === id)!;
  // Boxes appear with a stagger
  const boxAppear = (i: number) => {
    const start = i * 0.06;
    return Math.max(0, Math.min(1, (reveal - start) / 0.5));
  };
  // Arrows appear after the boxes
  const arrowAppear = (i: number) => {
    const start = 0.45 + i * 0.025;
    return Math.max(0, Math.min(1, (reveal - start) / 0.3));
  };

  return (
    <div style={{ position: "relative", width: W, height: H }}>
      {/* SVG layer for arrows (below boxes so they go through) */}
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill={COLORS.coral} />
          </marker>
        </defs>
        {ARROWS.map((arrow, i) => {
          const opacity = arrowAppear(i);
          if (opacity <= 0) return null;
          const a = boxById(arrow.from);
          const b = boxById(arrow.to);
          const ac = center(a);
          const bc = center(b);
          // Curve control point: midpoint shifted perpendicular by `curve`
          const mx = (ac.cx + bc.cx) / 2;
          const my = (ac.cy + bc.cy) / 2;
          const curve = arrow.curve ?? 0;
          // Perpendicular direction
          const dx = bc.cx - ac.cx;
          const dy = bc.cy - ac.cy;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const px = -dy / len;
          const py = dx / len;
          const cpx = mx + px * curve;
          const cpy = my + py * curve;

          // Shorten the line so the arrowhead lands on the box edge, not center
          const t = 1 - 22 / Math.sqrt((bc.cx - cpx) ** 2 + (bc.cy - cpy) ** 2);
          const ex = cpx + t * (bc.cx - cpx);
          const ey = cpy + t * (bc.cy - cpy);

          return (
            <path
              key={i}
              d={`M ${ac.cx} ${ac.cy} Q ${cpx} ${cpy} ${ex} ${ey}`}
              stroke={COLORS.coral}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity={opacity * 0.85}
              markerEnd="url(#arrowhead)"
              strokeDasharray="6 4"
            />
          );
        })}
      </svg>

      {/* Boxes layer */}
      {BOXES.map((box, i) => {
        const o = boxAppear(i);
        return (
          <div
            key={box.id}
            style={{
              position: "absolute",
              left: box.x,
              top: box.y,
              width: BOX_W,
              height: BOX_H,
              borderRadius: 10,
              background: "rgba(15, 22, 32, 0.95)",
              border: `1.5px solid ${COLORS.steel}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONT.display,
              fontWeight: 500,
              fontSize: 19,
              color: COLORS.text,
              letterSpacing: 0.3,
              whiteSpace: "pre-line",
              textAlign: "center",
              opacity: o,
              transform: `translateY(${(1 - o) * 10}px)`,
              boxShadow: `0 0 20px rgba(0,0,0,0.4)`,
            }}
          >
            {box.label}
          </div>
        );
      })}
    </div>
  );
};

// --- Google "G" mark (simplified) ---
const GoogleG: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path
      d="M21.6 12.227c0-.709-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.995 3.018v2.51h3.232c1.891-1.741 2.981-4.305 2.981-7.351z"
      fill="#4285F4"
    />
    <path
      d="M12 22c2.7 0 4.964-.895 6.619-2.422l-3.232-2.51c-.895.6-2.04.955-3.387.955-2.605 0-4.81-1.76-5.596-4.123H3.064v2.59A9.996 9.996 0 0 0 12 22z"
      fill="#34A853"
    />
    <path
      d="M6.404 13.9a6.014 6.014 0 0 1 0-3.8V7.51H3.064a9.996 9.996 0 0 0 0 8.98l3.34-2.59z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C16.96 2.99 14.695 2 12 2A9.996 9.996 0 0 0 3.064 7.51l3.34 2.59C7.19 7.737 9.395 5.977 12 5.977z"
      fill="#EA4335"
    />
  </svg>
);
