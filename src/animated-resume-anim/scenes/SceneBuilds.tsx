import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS, FONT } from "../theme";
import { Background } from "../components/Background";
import { StatCard } from "../components/StatCard";
import { fadeIn, fadeOut, rise } from "../components/anim";
import { useLocale } from "../LocaleContext";

export const SceneBuilds: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const sceneOpacity = Math.min(fadeIn(frame, 0, 22), fadeOut(frame, 330, 28));

  const headingOpacity = fadeIn(frame, 0, 22);
  const headingY = rise(frame, 0, 24, 12);

  return (
    <AbsoluteFill>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 70,
          opacity: sceneOpacity,
        }}
      >
        <div
          style={{
            opacity: headingOpacity,
            transform: `translateY(${headingY}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: COLORS.textDim,
            }}
          >
            {t.builds.heading}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 16,
              fontWeight: 400,
              letterSpacing: 2,
              color: COLORS.textMute,
              marginTop: 6,
            }}
          >
            {t.builds.subEyebrow}
          </div>
          <div
            style={{
              width: 80,
              height: 2,
              background: COLORS.accent,
              borderRadius: 2,
              marginTop: 14,
            }}
          />
        </div>

        <div style={{ display: "flex", gap: 48, alignItems: "stretch" }}>
          <StatCard
            startFrame={50}
            bigText={t.builds.chatbot.big}
            bigSubText={t.builds.chatbot.sub}
            caption={t.builds.chatbot.caption}
          />
          <StatCard
            startFrame={140}
            bigText={t.builds.glossary.big}
            bigSubText={t.builds.glossary.sub}
            caption={t.builds.glossary.caption}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
