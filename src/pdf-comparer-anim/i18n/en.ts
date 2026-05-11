import type { Dict } from "./types";

export const en: Dict = {
  text: {
    hook: {
      kicker: "Document versioning",
      line1: "Two PDFs.",
      line2: "What changed between them?",
    },
    title: {
      kicker: "Under the hood",
      title: "PDF Comparer",
      version: "Version 8.9",
      subtitle: "How it actually works.",
    },
    pipeline: {
      heading: "The pipeline, in six moves.",
      steps: [
        "Extract every word + position",
        "Strip headers and footers",
        "Pair the pages (text + visual)",
        "Diff twice — global, then render",
        "Word-level diff with SequenceMatcher",
        "Spatial fuzzy match for false alarms",
      ],
    },
    extract: {
      heading: "Step 1 — Read every word.",
      lib: "PyMuPDF",
      libNote: "pulls text + bounding box for every word, page by page.",
      bullet1: "Position is kept — we'll need it later to draw the highlights.",
      bullet2: "Pure decoration (bullets, borders, dashes) is filtered out.",
    },
    headers: {
      heading: "Step 2 — Strip the noise.",
      explainer:
        "Words that sit in the top or bottom 8% margin and repeat on 80%+ of pages…",
      tag: "Header / footer detected",
      bullet: "…are excluded, so page numbers and footers never become diffs.",
    },
    pageMatch: {
      heading: "Step 3 — Pair the pages.",
      formula: "Match score = 70% text overlap + 30% visual similarity",
      libText: "difflib",
      libVisual: "imagehash",
      explainer:
        "Every new page is scored against every old page — best score wins, no matter the distance.",
      reflowNote:
        "A ±2 page window then sweeps in any spillover that reflowed onto neighbors.",
    },
    twoPass: {
      heading: "Step 4 — Diff twice.",
      pass1: "Pass 1 — match every page, build a global word tracker.",
      pass2: "Pass 2 — render with full knowledge of where each word ended up.",
      payoff:
        "Content pushed to a new page shows grey, not red. No false deletions.",
    },
    wordDiff: {
      heading: "Step 5 — Word by word.",
      lib: "difflib.SequenceMatcher",
      opcodes: {
        equal: "equal",
        insert: "insert",
        delete: "delete",
        replace: "replace",
      },
      caseNote:
        "Case-only changes ('MASTER' → 'Master') are tagged yellow, not red.",
    },
    spatial: {
      heading: "Step 6 — Catch the false alarms.",
      explainer:
        "Short blocks (≤15 words) flagged as added or removed get a second check:",
      check: "Does the same text exist at the same position on the other page?",
      payoff:
        "If yes — reclassify as unchanged. Saves tables, formulas, weird layouts.",
    },
    legend: {
      heading: "How to read the highlights.",
      green: "Truly added",
      red: "Truly removed",
      grey: "Moved across pages",
      yellow: "Case only",
    },
    render: {
      heading: "Render the highlights.",
      explainer:
        "Each page is rasterized at 150 DPI. Colored rectangles are drawn over each changed word's bounding box — the same one we kept in step 1.",
      bullet: "No re-extraction. Same boxes, now color-coded.",
    },
    output: {
      heading: "One self-contained HTML report.",
      bullet1: "Every image is base64-embedded — no external files, no CDN.",
      bullet2: "Floating toolbar: zoom, jump between changes, dark mode, print.",
      bullet3:
        "Ctrl+F searches the rendered pages via invisible word overlays.",
    },
    aiReview: {
      heading: "Optional — let an AI double-check.",
      model: "Gemma 4 (vision)",
      runtime: "Runs locally via llama-server. No cloud. No upload.",
      explainer:
        "For each flagged change, the AI sees a tight crop of both versions and votes:",
      verdicts: {
        same: "SAME — extraction artifact",
        different: "DIFFERENT — real change",
        unclear: "UNCLEAR — needs a human",
      },
    },
    recap: {
      heading: "That's the whole loop.",
      bullets: [
        "Extract → filter → pair → diff → render → review.",
        "Local-first. One self-contained report. No upload.",
        "Cross-page reflow handled. False alarms caught.",
        "An optional local AI is the second pair of eyes.",
      ],
      closer: "Built so legal and compliance teams can trust what they see.",
    },
  },
};
