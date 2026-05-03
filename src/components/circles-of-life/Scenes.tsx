import { ICONS } from "./icons";
import { COLORS, FONT_FAMILY, VIDEO, CENTER, RADII, ATTRIBUTES } from "./theme";
import type { LucideIcon } from "lucide-react";

const SCENE_TITLES = [
  "This is you",
  "What you must build",
  "Your partner",
  "Your children",
  "Family · Friends · Community",
  "Country and world",
  "Most people start here",
  "Master the center. Then expand.",
];

export function sceneTitle(i: number): string {
  return SCENE_TITLES[i] ?? "";
}

export const TOTAL_SCENES = 8;

const CIRCUMFERENCE = (r: number) => 2 * Math.PI * r;

interface RingStaticProps {
  r: number;
  color: string;
  strokeWidth?: number;
  glow?: boolean;
  draw?: boolean;
  drawDelay?: number;
  drawDuration?: number;
  opacity?: number;
}

function RingStatic({
  r,
  color,
  strokeWidth = 3,
  glow = true,
  draw = true,
  drawDelay = 0,
  drawDuration = 0.9,
  opacity = 1,
}: RingStaticProps) {
  const c = CIRCUMFERENCE(r);
  return (
    <g opacity={opacity}>
      {glow && (
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth + 6}
          opacity={0.25}
          style={{ filter: "blur(8px)" }}
        />
      )}
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={c}
        strokeDashoffset={draw ? c : 0}
        transform={`rotate(-90 ${CENTER.x} ${CENTER.y})`}
        style={
          draw
            ? {
                animation: `col-draw-ring ${drawDuration}s ease-out ${drawDelay}s forwards`,
              }
            : undefined
        }
      />
    </g>
  );
}

function Dot({ size = 18 }: { size?: number }) {
  return (
    <g>
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={size + 10}
        fill={COLORS.rings.self}
        opacity={0.25}
        style={{ filter: "blur(8px)" }}
      />
      <circle cx={CENTER.x} cy={CENTER.y} r={size} fill={COLORS.rings.self} />
    </g>
  );
}

interface IconLabelProps {
  text: string;
  x: number;
  y: number;
  fontSize?: number;
  iconSize?: number;
  align?: "left" | "right" | "center";
  color?: string;
  glow?: string;
  delay?: number;
}

function IconLabel({
  text,
  x,
  y,
  fontSize = 30,
  iconSize,
  align = "left",
  color = COLORS.text,
  glow,
  delay = 0,
}: IconLabelProps) {
  const Icon: LucideIcon | undefined = ICONS[text];
  const realIconSize = iconSize ?? Math.round(fontSize * 1.1);
  const translateX = align === "left" ? "0%" : align === "right" ? "-100%" : "-50%";
  const xPct = (x / VIDEO.width) * 100;
  const yPct = (y / VIDEO.height) * 100;
  return (
    <div
      className="col-fade-in"
      style={{
        position: "absolute",
        left: `${xPct}%`,
        top: `${yPct}%`,
        transform: `translate(${translateX}, -50%)`,
        animationDelay: `${delay}s`,
        display: "flex",
        alignItems: "center",
        gap: 14,
        flexDirection: align === "right" ? "row-reverse" : "row",
        fontFamily: FONT_FAMILY,
        fontSize: `${(fontSize / VIDEO.height) * 100}cqh`,
        fontWeight: 500,
        color,
        whiteSpace: "nowrap",
        textShadow: glow ? `0 0 18px ${glow}` : undefined,
        letterSpacing: "-0.01em",
      }}
    >
      {Icon ? (
        <Icon
          size={realIconSize}
          color={color}
          strokeWidth={1.8}
          style={{
            flexShrink: 0,
            width: `${(realIconSize / VIDEO.height) * 100}cqh`,
            height: `${(realIconSize / VIDEO.height) * 100}cqh`,
            filter: glow ? `drop-shadow(0 0 8px ${glow})` : undefined,
          }}
        />
      ) : null}
      <span>{text}</span>
    </div>
  );
}

interface TextLabelProps {
  text: string;
  x: number;
  y: number;
  fontSize?: number;
  weight?: number;
  align?: "left" | "right" | "center";
  color?: string;
  glow?: string;
  delay?: number;
}

function TextLabel({
  text,
  x,
  y,
  fontSize = 32,
  weight = 500,
  align = "center",
  color = COLORS.text,
  glow,
  delay = 0,
}: TextLabelProps) {
  const translateX = align === "left" ? "0%" : align === "right" ? "-100%" : "-50%";
  const xPct = (x / VIDEO.width) * 100;
  const yPct = (y / VIDEO.height) * 100;
  return (
    <div
      className="col-fade-in"
      style={{
        position: "absolute",
        left: `${xPct}%`,
        top: `${yPct}%`,
        transform: `translate(${translateX}, -50%)`,
        animationDelay: `${delay}s`,
        fontFamily: FONT_FAMILY,
        fontSize: `${(fontSize / VIDEO.height) * 100}cqh`,
        fontWeight: weight,
        color,
        whiteSpace: "nowrap",
        textShadow: glow ? `0 0 18px ${glow}` : undefined,
        letterSpacing: "-0.01em",
      }}
    >
      {text}
    </div>
  );
}

function StageSvg({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox={`0 0 ${VIDEO.width} ${VIDEO.height}`}
      preserveAspectRatio="xMidYMid meet"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
    >
      {children}
    </svg>
  );
}

// === Scenes ============================================================

function Scene1Intro() {
  return (
    <>
      <StageSvg>
        <Dot />
        <line
          x1={CENTER.x - 220}
          y1={CENTER.y - 170}
          x2={CENTER.x - 30}
          y2={CENTER.y - 30}
          stroke={COLORS.text}
          strokeWidth={3}
          strokeLinecap="round"
          opacity={0}
          style={{ animation: "col-fade-in-opacity 0.6s ease-out 0.5s forwards" }}
        />
        <polygon
          points={`${CENTER.x - 30},${CENTER.y - 30} ${CENTER.x - 46},${CENTER.y - 36} ${CENTER.x - 40},${CENTER.y - 44}`}
          fill={COLORS.text}
          opacity={0}
          style={{ animation: "col-fade-in-opacity 0.6s ease-out 0.5s forwards" }}
        />
      </StageSvg>
      <TextLabel
        text="This is you"
        x={CENTER.x - 380}
        y={CENTER.y - 220}
        fontSize={56}
        weight={600}
        glow={COLORS.rings.self}
        delay={0.8}
      />
    </>
  );
}

function Scene2Self() {
  const attrs = ATTRIBUTES.self;
  const half = Math.ceil(attrs.length / 2);
  const left = attrs.slice(0, half);
  const right = attrs.slice(half);
  const ROW_GAP = 90;
  const COL_OFFSET = 380;
  const colHeight = (Math.max(left.length, right.length) - 1) * ROW_GAP;
  const startY = CENTER.y - colHeight / 2;
  const STAGGER = 0.18;

  return (
    <>
      <StageSvg>
        <Dot />
      </StageSvg>
      <TextLabel
        text="What you must build"
        x={CENTER.x}
        y={120}
        fontSize={52}
        weight={700}
        glow={COLORS.rings.self}
        delay={0}
      />
      {left.map((attr, i) => (
        <IconLabel
          key={attr}
          text={attr}
          x={CENTER.x - COL_OFFSET}
          y={startY + i * ROW_GAP}
          fontSize={30}
          iconSize={36}
          align="right"
          glow={COLORS.rings.self}
          delay={0.3 + i * STAGGER}
        />
      ))}
      {right.map((attr, i) => (
        <IconLabel
          key={attr}
          text={attr}
          x={CENTER.x + COL_OFFSET}
          y={startY + i * ROW_GAP}
          fontSize={30}
          iconSize={36}
          align="left"
          glow={COLORS.rings.self}
          delay={0.3 + (left.length + i) * STAGGER}
        />
      ))}
    </>
  );
}

function Scene3Partner() {
  const attrs = ATTRIBUTES.partner;
  const STAGGER = 0.15;
  return (
    <>
      <StageSvg>
        <Dot />
        <RingStatic r={RADII.partner} color={COLORS.rings.partner} strokeWidth={4} drawDelay={0} />
      </StageSvg>
      <TextLabel
        text="Your partner"
        x={CENTER.x}
        y={120}
        fontSize={48}
        weight={700}
        glow={COLORS.rings.partner}
        delay={0.6}
      />
      {attrs.map((attr, i) => {
        const angle = (i / attrs.length) * Math.PI * 2 - Math.PI / 2;
        const r = RADII.partner + 180;
        const x = CENTER.x + Math.cos(angle) * r;
        const y = CENTER.y + Math.sin(angle) * r;
        const align: "left" | "right" | "center" =
          x < CENTER.x - 30 ? "right" : x > CENTER.x + 30 ? "left" : "center";
        return (
          <IconLabel
            key={attr}
            text={attr}
            x={x}
            y={y}
            fontSize={26}
            iconSize={32}
            align={align}
            glow={COLORS.rings.partner}
            delay={1.0 + i * STAGGER}
          />
        );
      })}
    </>
  );
}

function Scene4Children() {
  const attrs = ATTRIBUTES.children;
  const STAGGER = 0.15;
  return (
    <>
      <StageSvg>
        <Dot />
        <RingStatic r={RADII.partner} color={COLORS.rings.partner} strokeWidth={4} draw={false} />
        <RingStatic r={RADII.children} color={COLORS.rings.children} strokeWidth={4} drawDelay={0} />
      </StageSvg>
      <TextLabel
        text="Your children"
        x={CENTER.x}
        y={90}
        fontSize={48}
        weight={700}
        glow={COLORS.rings.children}
        delay={0.6}
      />
      {attrs.map((attr, i) => {
        const angle = (i / attrs.length) * Math.PI * 2 - Math.PI / 2;
        const r = RADII.children + 130;
        const x = CENTER.x + Math.cos(angle) * r;
        const y = CENTER.y + Math.sin(angle) * r;
        const align: "left" | "right" | "center" =
          x < CENTER.x - 30 ? "right" : x > CENTER.x + 30 ? "left" : "center";
        return (
          <IconLabel
            key={attr}
            text={attr}
            x={x}
            y={y}
            fontSize={24}
            iconSize={30}
            align={align}
            glow={COLORS.rings.children}
            delay={1.0 + i * STAGGER}
          />
        );
      })}
    </>
  );
}

function Scene5FastRings() {
  const STEPS = [
    { label: "Family", radius: RADII.family, color: COLORS.rings.family, delay: 0 },
    { label: "Friends", radius: RADII.friends, color: COLORS.rings.friends, delay: 0.7 },
    { label: "Community", radius: RADII.community, color: COLORS.rings.community, delay: 1.4 },
  ];
  return (
    <>
      <StageSvg>
        <Dot />
        <RingStatic r={RADII.partner} color={COLORS.rings.partner} strokeWidth={3} draw={false} />
        <RingStatic r={RADII.children} color={COLORS.rings.children} strokeWidth={3} draw={false} />
        {STEPS.map((s) => (
          <RingStatic
            key={s.label}
            r={s.radius}
            color={s.color}
            strokeWidth={4}
            drawDelay={s.delay}
            drawDuration={0.6}
          />
        ))}
      </StageSvg>
      {STEPS.map((s) => (
        <TextLabel
          key={s.label}
          text={s.label}
          x={CENTER.x}
          y={CENTER.y - s.radius - 28}
          fontSize={32}
          weight={600}
          glow={s.color}
          delay={s.delay + 0.4}
        />
      ))}
    </>
  );
}

function Scene6WorldZoom() {
  const FINAL_SCALE = 0.45;
  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${FINAL_SCALE})`,
          transformOrigin: "center center",
        }}
      >
        <StageSvg>
          <Dot />
          {[
            { r: RADII.partner, c: COLORS.rings.partner },
            { r: RADII.children, c: COLORS.rings.children },
            { r: RADII.family, c: COLORS.rings.family },
            { r: RADII.friends, c: COLORS.rings.friends },
            { r: RADII.community, c: COLORS.rings.community },
          ].map((x) => (
            <RingStatic key={x.r} r={x.r} color={x.c} strokeWidth={3} draw={false} />
          ))}
          <RingStatic r={RADII.country} color={COLORS.rings.country} strokeWidth={4} drawDelay={0.0} drawDuration={0.7} />
          <RingStatic r={RADII.world} color={COLORS.rings.world} strokeWidth={5} drawDelay={1.0} drawDuration={1.0} />
        </StageSvg>
      </div>
      <TextLabel
        text="Country"
        x={CENTER.x + RADII.country * FINAL_SCALE + 40}
        y={CENTER.y}
        fontSize={32}
        weight={600}
        align="left"
        glow={COLORS.rings.country}
        delay={0.5}
      />
      <TextLabel
        text="The world"
        x={CENTER.x}
        y={CENTER.y - RADII.world * FINAL_SCALE - 40}
        fontSize={42}
        weight={700}
        glow={COLORS.rings.world}
        delay={1.6}
      />
    </>
  );
}

const HOLES = [
  { dx: -6, dy: -7, path: "M -3 -1 C -3 -3, -1 -4, 1 -3 C 3 -2, 3 1, 1 2 C -1 3, -4 1, -3 -1 Z" },
  { dx: 6, dy: -5, path: "M -2 -2 C -1 -3, 2 -3, 2 -1 C 3 1, 1 3, -1 2 C -3 1, -3 -1, -2 -2 Z" },
  { dx: -8, dy: 4, path: "M -2 0 C -3 -2, 0 -3, 2 -1 C 3 1, 1 3, -1 2 C -3 2, -2 1, -2 0 Z" },
  { dx: 7, dy: 6, path: "M -2 -1 C -1 -3, 2 -2, 2 0 C 3 2, 0 3, -2 1 C -3 0, -3 0, -2 -1 Z" },
  { dx: 0, dy: -2, path: "M -2 0 C -2 -2, 1 -2, 2 0 C 2 2, -1 2, -2 0 Z" },
  { dx: -1, dy: 8, path: "M -3 -1 C -2 -2, 2 -2, 2 0 C 3 2, -1 3, -2 1 C -3 0, -3 0, -3 -1 Z" },
] as const;

const DOT_R = 18;

function Scene7Reversal() {
  return (
    <>
      {/* Phase A — orange ring focal, arrow + label */}
      <div
        className="col-phase-a"
        style={{
          position: "absolute",
          inset: 0,
          transform: "scale(0.45)",
          transformOrigin: "center center",
        }}
      >
        <StageSvg>
          {[
            { r: RADII.partner, c: COLORS.rings.partner },
            { r: RADII.children, c: COLORS.rings.children },
            { r: RADII.family, c: COLORS.rings.family },
            { r: RADII.friends, c: COLORS.rings.friends },
            { r: RADII.community, c: COLORS.rings.community },
            { r: RADII.country, c: COLORS.rings.country },
          ].map((x) => (
            <RingStatic key={x.r} r={x.r} color={x.c} strokeWidth={2} draw={false} glow={false} opacity={0.18} />
          ))}
          <RingStatic r={RADII.world} color={COLORS.rings.world} strokeWidth={5} draw={false} />
          <Dot />
        </StageSvg>
      </div>

      {/* Phase A text — fades in then out */}
      <div className="col-phase-a-text">
        <TextLabel
          text="Most people start here"
          x={CENTER.x + 700}
          y={CENTER.y - 320}
          fontSize={36}
          weight={600}
          align="left"
          color={COLORS.rings.world}
          glow={COLORS.rings.world}
          delay={0.2}
        />
        <TextLabel
          text="trying to fix the world"
          x={CENTER.x + 700}
          y={CENTER.y - 260}
          fontSize={28}
          align="left"
          delay={0.6}
        />
        <TextLabel
          text="— climate, wars,"
          x={CENTER.x + 700}
          y={CENTER.y - 210}
          fontSize={22}
          align="left"
          color={COLORS.textDim}
          delay={1.0}
        />
        <TextLabel
          text="politics of countries"
          x={CENTER.x + 700}
          y={CENTER.y - 175}
          fontSize={22}
          align="left"
          color={COLORS.textDim}
          delay={1.3}
        />
        <TextLabel
          text="they'll never visit."
          x={CENTER.x + 700}
          y={CENTER.y - 140}
          fontSize={22}
          align="left"
          color={COLORS.textDim}
          delay={1.6}
        />
      </div>

      {/* Phase B — zoom into yellow center with holes */}
      <div className="col-phase-b" style={{ position: "absolute", inset: 0 }}>
        <StageSvg>
          <defs>
            <clipPath id="col-dot-clip">
              <circle cx={CENTER.x} cy={CENTER.y} r={DOT_R - 1} />
            </clipPath>
          </defs>
          <Dot />
          <g clipPath="url(#col-dot-clip)">
            {HOLES.map((h, i) => (
              <path
                key={i}
                d={h.path}
                fill={COLORS.bg}
                transform={`translate(${CENTER.x + h.dx} ${CENTER.y + h.dy})`}
                style={{
                  opacity: 0,
                  animation: `col-fade-in-opacity 0.5s ease-out ${5.0 + i * 0.15}s forwards`,
                }}
              />
            ))}
          </g>
        </StageSvg>
      </div>

      <TextLabel
        text="…while the center"
        x={CENTER.x}
        y={VIDEO.height - 200}
        fontSize={42}
        weight={500}
        glow={COLORS.rings.self}
        delay={3.5}
      />
      <TextLabel
        text="is still not filled and balanced."
        x={CENTER.x}
        y={VIDEO.height - 140}
        fontSize={42}
        weight={500}
        glow={COLORS.rings.self}
        delay={5.5}
      />
    </>
  );
}

function Scene8Closing() {
  return (
    <>
      <StageSvg>
        <Dot size={22} />
      </StageSvg>
      <TextLabel
        text="Master the center."
        x={CENTER.x}
        y={CENTER.y - 90}
        fontSize={64}
        weight={700}
        glow={COLORS.rings.self}
        delay={0.3}
      />
      <TextLabel
        text="Then expand."
        x={CENTER.x}
        y={CENTER.y + 90}
        fontSize={56}
        weight={500}
        color={COLORS.rings.self}
        glow={COLORS.rings.partner}
        delay={1.6}
      />
    </>
  );
}

const SCENES = [
  Scene1Intro,
  Scene2Self,
  Scene3Partner,
  Scene4Children,
  Scene5FastRings,
  Scene6WorldZoom,
  Scene7Reversal,
  Scene8Closing,
];

export function Scene({ index }: { index: number }) {
  const Comp = SCENES[Math.max(0, Math.min(SCENES.length - 1, index))];
  return <Comp />;
}
