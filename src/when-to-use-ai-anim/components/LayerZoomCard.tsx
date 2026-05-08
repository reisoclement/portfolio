import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { easeOutQuart } from "../anim";
import { LayerIcon } from "./LayerIcon";

// One large card representing a single layer of the stack, zoomed-in.
// Used by the per-layer historical-failure scenes (HW, Code, Lang).

type Props = {
  /** Display label (localized). */
  label: string;
  /** Optional stable English key for the icon switch. Defaults to `label`. */
  iconKey?: string;
  /** Frame to start drawing in. Default 0. */
  appearAt?: number;
  /** Optional sub-label shown under the title. */
  sub?: string;
};

export const LayerZoomCard: React.FC<Props> = ({
  label,
  iconKey,
  appearAt = 0,
  sub,
}) => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [appearAt, appearAt + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 28,
        padding: "28px 48px",
        borderRadius: 14,
        background: COLORS.steelSoft,
        border: `1.5px solid ${COLORS.steel}`,
        boxShadow: `0 0 50px rgba(0,0,0,0.4)`,
        opacity: reveal,
        transform: `translateY(${(1 - reveal) * 14}px) scale(${0.9 + 0.1 * reveal})`,
      }}
    >
      <div
        style={{
          color: COLORS.text,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 72,
          height: 72,
        }}
      >
        <LayerIcon layer={iconKey ?? label} size={64} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 44,
            color: COLORS.text,
            letterSpacing: -1,
            lineHeight: 1,
          }}
        >
          {label}
        </div>
        {sub && (
          <div
            style={{
              fontFamily: FONT.display,
              fontWeight: 400,
              fontSize: 18,
              color: COLORS.textDim,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginTop: 4,
            }}
          >
            {sub}
          </div>
        )}
      </div>
    </div>
  );
};
