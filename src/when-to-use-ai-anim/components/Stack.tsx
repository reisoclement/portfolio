import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { easeOutQuart } from "../anim";
import { LayerIcon } from "./LayerIcon";

export type RungState = "hidden" | "steel" | "amber" | "dim";

export type Rung = {
  /** Display text for the rung. Localized. */
  label: string;
  /** Stable key for picking the LayerIcon. Always the English label so the
   *  icon switch keeps working when `label` is translated. Defaults to
   *  `label` for backwards compatibility. */
  iconKey?: string;
  state: RungState;
  appearAt: number;
};

type Props = {
  rungs: Rung[];
  width?: number;
  rungHeight?: number;
  gap?: number;
  // Optional side annotations: { atIndex, label, appearAt }
  sideLabels?: { atIndex: number; label: string; appearAt: number }[];
  // Optional left timeline arrow: { fromLabel, toLabel, appearAt }
  timeline?: { fromLabel: string; toLabel: string; appearAt: number };
};

export const Stack: React.FC<Props> = ({
  rungs,
  width = 720,
  rungHeight = 78,
  gap = 8,
  sideLabels = [],
  timeline,
}) => {
  const frame = useCurrentFrame();
  const totalH = rungs.length * rungHeight + (rungs.length - 1) * gap;

  return (
    <div
      style={{
        position: "relative",
        width,
        height: totalH,
        margin: "0 auto",
      }}
    >
      {/* Left timeline arrow */}
      {timeline && (
        <TimelineArrow
          height={totalH}
          fromLabel={timeline.fromLabel}
          toLabel={timeline.toLabel}
          appearAt={timeline.appearAt}
          frame={frame}
        />
      )}

      {/* Rungs (rendered top-down from props order) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap,
          alignItems: "center",
        }}
      >
        {rungs.map((rung, i) => {
          const reveal = interpolate(
            frame,
            [rung.appearAt, rung.appearAt + 14],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: easeOutQuart,
            },
          );
          const isAmber = rung.state === "amber";
          const isSteel = rung.state === "steel";
          const isDim = rung.state === "dim";

          const fill = isAmber
            ? COLORS.amberSoft
            : isSteel
              ? COLORS.steelSoft
              : isDim
                ? "rgba(242, 234, 216, 0.03)"
                : "rgba(242, 234, 216, 0.06)";
          const border = isAmber
            ? COLORS.amber
            : isSteel
              ? COLORS.steel
              : isDim
                ? COLORS.steelDim
                : COLORS.rule;
          const textColor = isAmber
            ? COLORS.text
            : isSteel
              ? COLORS.text
              : isDim
                ? COLORS.textFaint
                : COLORS.text;
          const glow = isAmber
            ? `0 0 50px ${COLORS.amberHalo}, 0 0 12px ${COLORS.amberSoft}`
            : "none";

          return (
            <div
              key={i}
              style={{
                width,
                height: rungHeight,
                borderRadius: 8,
                background: fill,
                border: `1.5px solid ${border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONT.display,
                fontWeight: 500,
                fontSize: 30,
                letterSpacing: 0.5,
                color: textColor,
                opacity: reveal,
                transform: `translateY(${(1 - reveal) * -16}px)`,
                boxShadow: glow,
                transition: "none",
                position: "relative",
              }}
            >
              {/* Icon pinned to the left side of the rung */}
              <div
                style={{
                  position: "absolute",
                  left: 22,
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  color: textColor,
                }}
              >
                <LayerIcon layer={rung.iconKey ?? rung.label} size={48} />
              </div>
              <span>{rung.label}</span>
            </div>
          );
        })}
      </div>

      {/* Side labels: positioned to the right of a specific rung */}
      {sideLabels.map((s, i) => {
        const reveal = interpolate(
          frame,
          [s.appearAt, s.appearAt + 14],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: easeOutQuart,
          },
        );
        const top = s.atIndex * (rungHeight + gap) + rungHeight / 2;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: width + 28,
              top,
              transform: `translateY(-50%) translateX(${(1 - reveal) * 12}px)`,
              opacity: reveal,
              fontFamily: FONT.display,
              fontWeight: 400,
              fontSize: 20,
              color: COLORS.textDim,
              letterSpacing: 0.5,
              whiteSpace: "nowrap",
            }}
          >
            {s.label}
          </div>
        );
      })}
    </div>
  );
};

const TimelineArrow: React.FC<{
  height: number;
  fromLabel: string;
  toLabel: string;
  appearAt: number;
  frame: number;
}> = ({ height, fromLabel, toLabel, appearAt, frame }) => {
  const reveal = interpolate(frame, [appearAt, appearAt + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });
  return (
    <div
      style={{
        position: "absolute",
        left: -90,
        top: 0,
        height,
        opacity: reveal,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: `12px solid ${COLORS.sage}`,
        }}
      />
      <div
        style={{
          width: 2,
          flex: 1,
          background: COLORS.sage,
          margin: "2px 0",
        }}
      />
      <div
        style={{
          fontFamily: FONT.display,
          fontWeight: 500,
          fontSize: 18,
          color: COLORS.textDim,
          letterSpacing: 1,
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          position: "absolute",
          left: -28,
          top: "50%",
          translate: "0 -50%",
        }}
      >
        {fromLabel} → {toLabel}
      </div>
    </div>
  );
};
