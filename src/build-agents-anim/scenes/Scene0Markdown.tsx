import { AbsoluteFill, useCurrentFrame } from "remotion";
import { theme, fonts } from "../theme";
import { fadeIn } from "../utils/anim";
import { useSceneFade } from "../utils/sceneFade";
import { useLocale } from "../LocaleContext";

type LineKind = "h1" | "blank" | "p" | "li";

export const Scene0Markdown: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneOpacity = useSceneFade();
  const { t } = useLocale();
  const m = t.text.markdown;

  const titleOpacity = fadeIn(frame, 0, 14);
  const leftPanelOpacity = fadeIn(frame, 14, 14);
  const rightPanelOpacity = fadeIn(frame, 70, 16);
  const arrowOpacity = fadeIn(frame, 60, 12);

  const classify = (text: string): LineKind => {
    if (text === "") return "blank";
    if (text.startsWith("#")) return "h1";
    if (text.startsWith("- ")) return "li";
    return "p";
  };

  return (
    <AbsoluteFill
      style={{
        opacity: sceneOpacity,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 50,
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          fontFamily: fonts.sans,
          fontSize: 56,
          fontWeight: 600,
          color: theme.text,
          letterSpacing: -1,
        }}
      >
        {m.titlePrefix} <span style={{ color: theme.amber }}>{m.titleAccent}</span>{m.titleSuffix}
      </div>

      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 24,
          color: theme.textMuted,
          opacity: titleOpacity,
        }}
      >
        {m.subtitle}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 50,
          marginTop: 20,
        }}
      >
        <div
          style={{
            opacity: leftPanelOpacity,
            width: 460,
            minHeight: 360,
            background: theme.panel,
            border: `1.5px solid ${theme.panelEdge}`,
            borderRadius: 12,
            padding: 32,
            fontFamily: fonts.mono,
            fontSize: 22,
            color: theme.text,
            lineHeight: 1.7,
          }}
        >
          {m.raw.map((text, i) => {
            const start = 18 + i * 6;
            const op = fadeIn(frame, start, 8);
            return (
              <div key={i} style={{ opacity: op, whiteSpace: "pre" }}>
                {colorizeRaw(text, classify(text))}
              </div>
            );
          })}
        </div>

        <div
          style={{
            opacity: arrowOpacity,
            fontSize: 40,
            color: theme.amber,
          }}
        >
          →
        </div>

        <div
          style={{
            opacity: rightPanelOpacity,
            width: 460,
            minHeight: 360,
            background: "#FBF7EE",
            borderRadius: 12,
            padding: 32,
            fontFamily: fonts.sans,
            fontSize: 22,
            color: "#1F1B14",
            lineHeight: 1.7,
            boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
          }}
        >
          <RenderedRow start={76} frame={frame}>
            <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>
              {m.rendered.title}
            </div>
          </RenderedRow>
          <RenderedRow start={82} frame={frame}>
            <div style={{ height: 8 }} />
          </RenderedRow>
          <RenderedRow start={88} frame={frame}>
            <div>
              {m.rendered.bodyBefore}
              <strong>{m.rendered.bodyBold}</strong>
              {m.rendered.bodyAfter}
            </div>
          </RenderedRow>
          <RenderedRow start={94} frame={frame}>
            <div style={{ height: 8 }} />
          </RenderedRow>
          {m.rendered.bullets.map((b, i) => (
            <RenderedRow key={i} start={100 + i * 6} frame={frame}>
              <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                <span>•</span>
                <span>{b}</span>
              </div>
            </RenderedRow>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

function colorizeRaw(text: string, kind: LineKind) {
  if (kind === "blank") return " ";
  if (kind === "h1") {
    return (
      <>
        <span style={{ color: theme.amber }}>#</span>
        <span> {text.replace(/^#\s*/, "")}</span>
      </>
    );
  }
  if (kind === "li") {
    return (
      <>
        <span style={{ color: theme.amber }}>-</span>
        <span> {text.replace(/^- /, "")}</span>
      </>
    );
  }
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} style={{ color: theme.amber }}>
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

const RenderedRow: React.FC<{ start: number; frame: number; children: React.ReactNode }> = ({
  start,
  frame,
  children,
}) => {
  const op = fadeIn(frame, start, 8);
  return <div style={{ opacity: op }}>{children}</div>;
};
