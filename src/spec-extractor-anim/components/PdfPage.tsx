import { COLORS, FONT } from "../theme";

// A stylized PDF page. Uses CSS strokes to suggest text lines so we don't
// depend on a real renderer. `lines` controls density. `highlights` overlays
// colored rectangles in normalized 0..1 coordinates.
export type Highlight = {
  // 0..1 normalized to the page rect, excluding inner padding.
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  opacity?: number;
};

type Props = {
  width: number;
  height: number;
  label?: string;
  labelColor?: string;
  lines?: number;
  highlights?: Highlight[];
  // Render header/footer bands shaded out.
  showHeaderFooter?: boolean;
  rotation?: number;
  shadowed?: boolean;
  // Optional text rows overlaid on the lines (used in word-diff scene).
  // Each row is a horizontal band of small word boxes with optional colors.
  rows?: Row[];
  pageNumber?: number;
  // Replaces the default paper color, used to mark "selected" / "matched"
  // pages without drawing connection lines.
  paperColor?: string;
};

export type Row = {
  // y position 0..1 of the row baseline within the body area.
  y: number;
  // height 0..1 of the row.
  h: number;
  // word widths in 0..1 across the body width, summing roughly to ~0.85.
  words: { w: number; gap?: number; color?: string; opacity?: number }[];
  // optional visible text for word-diff scene
};

export const PdfPage: React.FC<Props> = ({
  width,
  height,
  label,
  labelColor = COLORS.textDim,
  lines = 14,
  highlights = [],
  showHeaderFooter = false,
  rotation = 0,
  shadowed = true,
  rows,
  pageNumber,
  paperColor = COLORS.paper,
}) => {
  const padX = width * 0.08;
  const padY = height * 0.08;
  const bodyW = width - padX * 2;
  const bodyH = height - padY * 2;

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        background: paperColor,
        borderRadius: 8,
        boxShadow: shadowed
          ? `0 24px 48px ${COLORS.paperShadow}, 0 2px 6px ${COLORS.paperEdge}`
          : "none",
        transform: `rotate(${rotation}deg)`,
        overflow: "hidden",
      }}
    >
      {/* Header band (shaded if highlighted) */}
      {showHeaderFooter && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: padY,
            background: COLORS.steelSoft,
            borderBottom: `1px dashed ${COLORS.inkLine}`,
          }}
        />
      )}
      {showHeaderFooter && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: padY,
            background: COLORS.steelSoft,
            borderTop: `1px dashed ${COLORS.inkLine}`,
          }}
        />
      )}

      {/* If explicit rows supplied, render those; otherwise generic line strokes */}
      {rows ? (
        <div
          style={{
            position: "absolute",
            left: padX,
            top: padY,
            width: bodyW,
            height: bodyH,
          }}
        >
          {rows.map((row, ri) => {
            let cursor = 0;
            return (
              <div
                key={ri}
                style={{
                  position: "absolute",
                  left: 0,
                  top: row.y * bodyH,
                  width: bodyW,
                  height: row.h * bodyH,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row.words.map((wd, wi) => {
                  const left = cursor;
                  cursor += wd.w + (wd.gap ?? 0.012);
                  return (
                    <div
                      key={wi}
                      style={{
                        position: "absolute",
                        left: `${left * 100}%`,
                        top: 0,
                        width: `${wd.w * 100}%`,
                        height: "100%",
                        background: wd.color ?? COLORS.inkLine,
                        opacity: wd.opacity ?? 0.85,
                        borderRadius: 2,
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            left: padX,
            top: padY,
            width: bodyW,
            height: bodyH,
          }}
        >
          {Array.from({ length: lines }).map((_, i) => {
            const widthPct = 60 + ((i * 13) % 35);
            const isShort = i === lines - 1;
            return (
              <div
                key={i}
                style={{
                  height: 6,
                  width: `${isShort ? 30 : widthPct}%`,
                  background: COLORS.inkLine,
                  opacity: 0.55,
                  borderRadius: 2,
                  marginBottom: bodyH / lines - 6,
                }}
              />
            );
          })}
        </div>
      )}

      {/* Highlight rectangles */}
      {highlights.map((h, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: padX + h.x * bodyW,
            top: padY + h.y * bodyH,
            width: h.w * bodyW,
            height: h.h * bodyH,
            background: h.color,
            opacity: h.opacity ?? 0.55,
            borderRadius: 3,
            mixBlendMode: "multiply",
          }}
        />
      ))}

      {/* Page label / number */}
      {label && (
        <div
          style={{
            position: "absolute",
            top: -42,
            left: 0,
            fontFamily: FONT.display,
            fontWeight: 600,
            fontSize: 28,
            letterSpacing: 1.5,
            color: labelColor,
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      )}
      {pageNumber !== undefined && (
        <div
          style={{
            position: "absolute",
            bottom: padY * 0.3,
            right: padX,
            fontFamily: FONT.mono,
            fontSize: 18,
            color: COLORS.inkLine,
            opacity: 0.6,
          }}
        >
          {pageNumber}
        </div>
      )}
    </div>
  );
};
