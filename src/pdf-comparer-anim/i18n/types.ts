// Shape of a per-locale dictionary for the pdf-comparer explainer.
// English is the source-of-truth; sibling locales mirror this shape exactly.

export type Dict = {
  text: {
    hook: {
      kicker: string;        // e.g. "Document version control"
      line1: string;         // e.g. "Two PDFs."
      line2: string;         // e.g. "What changed between them?"
    };
    title: {
      kicker: string;        // small uppercase tag
      title: string;         // "PDF Comparer"
      version: string;       // "Version 8.9"
      subtitle: string;      // "How it actually works."
    };
    pipeline: {
      heading: string;       // "The pipeline, in six moves."
      steps: [string, string, string, string, string, string];
    };
    extract: {
      heading: string;       // "Step 1 — Read every word."
      lib: string;            // "PyMuPDF"
      libNote: string;        // "extracts text + bounding boxes per page"
      bullet1: string;        // "Position is kept — we'll need it later."
      bullet2: string;        // "Pure decoration (bullets, borders) is filtered out."
    };
    headers: {
      heading: string;        // "Step 2 — Strip the noise."
      explainer: string;      // "Words that repeat in the top/bottom 8% on 80%+ of pages..."
      tag: string;            // "Header / footer detected"
      bullet: string;         // "...are excluded so we don't diff page numbers."
    };
    pageMatch: {
      heading: string;        // "Step 3 — Pair the pages."
      formula: string;        // "Score = 70% text overlap + 30% visual similarity"
      libText: string;        // "difflib"
      libVisual: string;      // "imagehash"
      explainer: string;      // "Each new page finds its best old-page match in a ±2 page window."
      reflowNote: string;     // "Catches reflow when content moves across pages."
    };
    twoPass: {
      heading: string;        // "Step 4 — Diff twice."
      pass1: string;          // "Pass 1 — match all pages, build a global word tracker."
      pass2: string;          // "Pass 2 — render with full knowledge."
      payoff: string;         // "Content that was just pushed to a new page shows grey, not red."
    };
    wordDiff: {
      heading: string;        // "Step 5 — Word-by-word."
      lib: string;            // "difflib.SequenceMatcher"
      opcodes: {
        equal: string;
        insert: string;
        delete: string;
        replace: string;
      };
      caseNote: string;       // "Pure case differences ('MASTER' → 'Master') are tagged yellow, not red."
    };
    spatial: {
      heading: string;        // "Step 6 — Catch the false alarms."
      explainer: string;      // "Short blocks (≤15 words) flagged as added/removed get a second look:"
      check: string;          // "Does the same text exist at the same position on the other page?"
      payoff: string;         // "If yes, reclassify as unchanged. Saves tables, formulas, weird PDF layouts."
    };
    legend: {
      heading: string;        // "How to read the highlights."
      green: string;          // "Truly added"
      red: string;            // "Truly removed"
      grey: string;           // "Moved across pages"
      yellow: string;         // "Case only"
    };
    render: {
      heading: string;        // "Step 7 — Burn the highlights."
      explainer: string;      // "Each page is rendered at 150 DPI. Colored rectangles are drawn over each changed word..."
      bullet: string;         // "Same bounding boxes from step 1, now color-coded."
    };
    output: {
      heading: string;        // "One self-contained HTML."
      bullet1: string;        // "All images base64-embedded — no external files."
      bullet2: string;        // "Floating toolbar: zoom, navigate changes, dark mode."
      bullet3: string;        // "Ctrl+F searches the rendered images via invisible word overlays."
    };
    aiReview: {
      heading: string;        // "Optional — let an AI double-check."
      model: string;          // "Gemma 4 (vision)"
      runtime: string;        // "Runs locally via llama-server — no cloud, no upload."
      explainer: string;      // "For each flagged change, the AI sees a tight crop and votes:"
      verdicts: {
        same: string;
        different: string;
        unclear: string;
      };
    };
    recap: {
      heading: string;        // "That's the whole loop."
      bullets: [string, string, string, string];
      closer: string;         // "Built so legal, compliance and contract teams can trust what they see."
    };
  };
};
