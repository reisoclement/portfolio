import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { LayerZoomCard } from "../components/LayerZoomCard";
import { LAYER_KEYS } from "../layers";
import { useLocale } from "../LocaleContext";

// Zoom into the Hardware / Transistors layer.
// One historical failure: 1947 moth in the Harvard Mark II relay.
//
// Source: 1947 Mark II "First actual case of bug being found" — Grace Hopper's
// team at Harvard (moth taped into the operator's logbook with that note).
export const SceneHWStory: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();

  const cardAt = 0;
  const storyAt = Math.round(1.2 * FPS);

  const cardReveal = interpolate(frame, [cardAt, cardAt + 18], [0, 1], {
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
        gap: 36,
      }}
    >
      <div style={{ opacity: cardReveal }}>
        <LayerZoomCard
          label={t.text.layers.hardware}
          iconKey={LAYER_KEYS[3]}
          sub={t.text.hwStory.sub}
        />
      </div>

      <FailureRow
        year={t.text.hwStory.year}
        headline={t.text.hwStory.headline}
        detail={t.text.hwStory.detail}
        appearAt={storyAt}
      />
    </AbsoluteFill>
  );
};

const FailureRow: React.FC<{
  year: string;
  headline: string;
  detail: string;
  appearAt: number;
}> = ({ year, headline, detail, appearAt }) => {
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
        gap: 32,
        opacity: reveal,
        transform: `translateX(${(1 - reveal) * 24}px)`,
        maxWidth: 1200,
      }}
    >
      <div
        style={{
          fontFamily: FONT.mono,
          fontWeight: 600,
          fontSize: 40,
          color: COLORS.coral,
          letterSpacing: 3,
          minWidth: 120,
          textAlign: "right",
        }}
      >
        {year}
      </div>
      <div
        style={{
          width: 2,
          height: 60,
          background: COLORS.coral,
          opacity: 0.4,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 32,
            color: COLORS.text,
            letterSpacing: -0.5,
            lineHeight: 1.2,
            marginBottom: 6,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            fontFamily: FONT.display,
            fontWeight: 400,
            fontSize: 20,
            color: COLORS.textDim,
            letterSpacing: 0.2,
            lineHeight: 1.4,
          }}
        >
          {detail}
        </div>
      </div>
    </div>
  );
};
