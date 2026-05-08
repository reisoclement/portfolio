import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT, FPS } from "../theme";
import { easeOutQuart } from "../anim";
import { LayerZoomCard } from "../components/LayerZoomCard";
import { LAYER_KEYS } from "../layers";
import { useLocale } from "../LocaleContext";

// Zoom into the Machine Code layer.
// Historical failure: 1962 Mariner 1. A single missing overbar in the
// guidance equations made the rocket misread normal velocity variations as
// dangerous, sending it off course. Range safety blew it up. $18.5M loss.
//
// Sits between the 1947 moth (Hardware) and the 1991+ Python era (Programming
// Languages), preserving the chronological flow of the piece.
//
// Source (the popular "missing hyphen" framing is wrong — it was a missing
// overbar in a hand-transcribed equation): NASA Mariner 1 mission page,
// Wikipedia "Mariner 1", and EDN historical archive.
export const SceneCodeStory: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();

  const cardAt = 0;
  const storyAt = Math.round(1.2 * FPS);

  const cardReveal = interpolate(frame, [cardAt, cardAt + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOutQuart,
  });

  const storyReveal = interpolate(frame, [storyAt, storyAt + 16], [0, 1], {
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
          label={t.text.layers.machineCode}
          iconKey={LAYER_KEYS[2]}
          sub={t.text.codeStory.sub}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
          opacity: storyReveal,
          transform: `translateX(${(1 - storyReveal) * 24}px)`,
          maxWidth: 1100,
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
          {t.text.codeStory.year}
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
            {t.text.codeStory.headline}
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
            {t.text.codeStory.detail}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
