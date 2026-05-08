import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Disk } from "../components/Disk";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { useLocale } from "../LocaleContext";

// The wrong way: 90% AI / 10% code, wobbling, then a coral X overlays it.
// Plays FIRST in Lesson 2 to establish the problem before Rule10 shows the
// solution. The follow-up scene (Rule10) shows the correct stack + 10% disk.
export const Scene8Backwards: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const B = t.text.backwards;

  const titleReveal = interpolate(frame, [6, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // Coral X starts to draw at ~3s, fully visible by 4s, holds.
  const xStart = 3 * FPS;
  const xReveal = interpolate(frame, [xStart, xStart + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  // Failure tags fade in after the X
  const tagsReveal = interpolate(frame, [xStart + 18, xStart + 36], [0, 1], {
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
        gap: 28,
      }}
    >
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 600,
          fontSize: 36,
          color: COLORS.coral,
          letterSpacing: -0.5,
          opacity: titleReveal,
        }}
      >
        {B.title}
      </div>

      <div style={{ position: "relative" }}>
        <Disk
          percent={90}
          appearAt={6}
          centerLabel={B.diskCenter}
          subLabel={B.diskSub}
          size={420}
          coral
          wobble
        />
        {/* Big coral X overlay (drawn after wobble starts) */}
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: xReveal,
          }}
        >
          <path
            d="M40 40 L180 180"
            stroke={COLORS.coral}
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="200"
            strokeDashoffset={(1 - xReveal) * 200}
          />
          <path
            d="M180 40 L40 180"
            stroke={COLORS.coral}
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="200"
            strokeDashoffset={(1 - xReveal) * 200}
          />
        </svg>
      </div>

      {/* Failure tags appear under the disk after the X lands */}
      <div
        style={{
          display: "flex",
          gap: 18,
          opacity: tagsReveal,
          transform: `translateY(${(1 - tagsReveal) * 12}px)`,
          marginTop: 12,
        }}
      >
        {B.tags.map((tag) => (
          <div
            key={tag}
            style={{
              fontFamily: FONT.display,
              fontWeight: 500,
              fontSize: 22,
              color: COLORS.coral,
              padding: "10px 22px",
              border: `1.5px solid ${COLORS.coral}`,
              borderRadius: 999,
              background: COLORS.coralSoft,
              letterSpacing: 0.5,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
