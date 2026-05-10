import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CATEGORY_COLORS, COLORS, FONT, FPS } from "../theme";
import { fadeOut, rise } from "../anim";
import { useLocale } from "../LocaleContext";
import { PdfPage } from "../components/PdfPage";
import { SectionHeading } from "../components/SectionHeading";

// PDF page on the left, a floating drawer window in front-right showing
// editable rows. Bullets list the drawer's powers.
export const SceneFTLDrawer: React.FC = () => {
  const frame = useCurrentFrame();
  const { t } = useLocale();
  const total = 8 * FPS;
  const exit = fadeOut(frame, total - 14, 14);

  const explainer = rise(frame, 30, 22, 18);
  const drawer = rise(frame, 50, 22, 30);
  const philosophy = rise(frame, 180, 22, 22);

  return (
    <AbsoluteFill style={{ opacity: exit }}>
      <div style={{ position: "absolute", left: 120, top: 90, right: 120 }}>
        <SectionHeading kicker={t.text.ftlDrawer.kicker} title={t.text.ftlDrawer.heading} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 320,
          fontFamily: FONT.display,
          fontSize: 28,
          color: COLORS.textDim,
          lineHeight: 1.4,
          opacity: explainer.opacity,
          transform: `translateY(${explainer.y}px)`,
          marginBottom: 30,
        }}
      >
        {t.text.ftlDrawer.explainer}
      </div>

      {/* Background page (the v2 PDF being scrolled) */}
      <div style={{ position: "absolute", left: 160, top: 460 }}>
        <PdfPage
          width={580}
          height={520}
          label="v2 page in view"
          labelColor={COLORS.added}
          lines={11}
          highlights={[
            { x: 0.05, y: 0.18, w: 0.22, h: 0.05, color: COLORS.added, opacity: 0.55 },
            { x: 0.5, y: 0.36, w: 0.2, h: 0.05, color: COLORS.added, opacity: 0.55 },
            { x: 0.05, y: 0.6, w: 0.16, h: 0.05, color: COLORS.added, opacity: 0.55 },
          ]}
        />
      </div>

      {/* Floating drawer window */}
      <div
        style={{
          position: "absolute",
          left: 880,
          top: 420,
          width: 920,
          background: "#161E2A",
          border: `2px solid ${COLORS.amber}`,
          borderRadius: 14,
          opacity: drawer.opacity,
          transform: `translateY(${drawer.y}px)`,
          boxShadow: `0 40px 80px ${COLORS.paperShadow}, 0 0 0 1px ${COLORS.amberHalo}`,
          overflow: "hidden",
        }}
      >
        {/* Drawer title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 22px",
            background: "#0F1620",
            borderBottom: `1px solid ${COLORS.amberSoft}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: FONT.mono,
              fontSize: 22,
              color: COLORS.amber,
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            <span>⤢</span>
            <span>FTL · drawer · v2 / page in view</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 6,
              fontFamily: FONT.mono,
              fontSize: 18,
              color: COLORS.textDim,
            }}
          >
            <span>—</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>

        {/* Drawer rows */}
        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 12 }}>
          <DrawerRow
            text="The device shall withstand 5 mm vibration for 24 h."
            cat="obligation"
            label="OBLIGATION"
            edit={false}
          />
          <DrawerRow
            text="Operating range: −40 °C to +85 °C."
            cat="numerical"
            label="NUMERICAL"
            edit
          />
          <DrawerRow
            text="Compliance with ISO 16750-3 is required."
            cat="compliance"
            label="COMPLIANCE"
            edit={false}
          />
          <DrawerRow
            text="Maximum noise emission: 80 dB."
            cat="numerical"
            label="NUMERICAL"
            edit={false}
            isNew
          />

          {/* Save bar */}
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 12,
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                padding: "10px 20px",
                background: COLORS.amber,
                color: "#0F1620",
                fontFamily: FONT.display,
                fontSize: 22,
                fontWeight: 600,
                borderRadius: 8,
                letterSpacing: 0.3,
              }}
            >
              Save → V2 HTML
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          bottom: 50,
          fontFamily: FONT.display,
          fontSize: 30,
          color: COLORS.amber,
          textAlign: "center",
          fontWeight: 500,
          opacity: philosophy.opacity,
          transform: `translateY(${philosophy.y}px)`,
        }}
      >
        “{t.text.ftlDrawer.philosophy}”
      </div>
    </AbsoluteFill>
  );
};

type CatKey = "obligation" | "compliance" | "numerical" | "requirement";

const DrawerRow: React.FC<{
  text: string;
  cat: CatKey;
  label: string;
  edit?: boolean;
  isNew?: boolean;
}> = ({ text, cat, label, edit, isNew }) => {
  const color = CATEGORY_COLORS[cat];
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "center",
        padding: "12px 14px",
        background: edit ? `${color}28` : "#0F1620",
        border: `1.5px solid ${edit || isNew ? color : COLORS.steelDim}`,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          fontFamily: FONT.mono,
          fontSize: 18,
          fontWeight: 700,
          color,
          background: `${color}28`,
          padding: "4px 10px",
          borderRadius: 4,
          letterSpacing: 1.5,
          flexShrink: 0,
          minWidth: 130,
          textAlign: "center",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: FONT.display,
          fontSize: 22,
          color: COLORS.text,
          flex: 1,
          letterSpacing: -0.2,
        }}
      >
        {text}
      </div>
      {edit && (
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: 16,
            fontWeight: 700,
            color: COLORS.amber,
            background: COLORS.amberSoft,
            padding: "4px 10px",
            borderRadius: 4,
            letterSpacing: 1,
          }}
        >
          EDIT
        </div>
      )}
      {isNew && (
        <div
          style={{
            fontFamily: FONT.mono,
            fontSize: 16,
            fontWeight: 700,
            color: COLORS.added,
            background: COLORS.addedSoft,
            padding: "4px 10px",
            borderRadius: 4,
            letterSpacing: 1,
          }}
        >
          NEW
        </div>
      )}
    </div>
  );
};

