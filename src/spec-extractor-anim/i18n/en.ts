import type { Dict } from "./types";

export const en: Dict = {
  text: {
    hook: {
      kicker: "Spec review at scale",
      stat: "Thousands of pages.",
      line: "50+ requirements buried in them.",
    },
    title: {
      kicker: "Under the hood",
      title: "Spec Data Extractor",
      version: "Version 2.0",
      subtitle: "How it actually works.",
    },
    problem: {
      heading: "Reading specs by hand is brutal.",
      bullets: [
        "Engineers skim hundreds of pages to find every constraint.",
        "Copy-paste into a spreadsheet — and you lose the page context.",
        "One missed 'shall' is a compliance gap.",
      ],
    },
    pipeline: {
      kicker: "Pipeline overview",
      heading: "Nine deterministic stages.",
      steps: [
        "Detect language",
        "Compile rules",
        "Parse PDF (words + bboxes)",
        "Match keywords + numerics",
        "Filter TOC, headings, refs",
        "Detect chapter for each hit",
        "Render highlights",
        "Build interactive HTML",
        "Export PDF / CSV / JSON",
      ],
    },
    language: {
      kicker: "Step 1",
      heading: "Detect the language.",
      explainer:
        "Counts ~20 high-signal stopwords across the first 3,000 words. Returns the winner with a confidence score.",
      bullet: "No ML model. Offline. Under 100 ms.",
      detected: "Detected",
    },
    rules: {
      kicker: "Step 2",
      heading: "Eight categories. One regex pass.",
      explainer:
        "Each language ships its own keyword set. Multi-word phrases sort longest-first so 'must not' beats 'must'.",
      categories: {
        obligation: "must · shall · prohibited",
        application: "applies · applicable",
        compliance: "comply · conform",
        requirement: "required · requested",
        expectation: "expected · target",
        assessment: "assessed · evaluated",
        guarantee: "ensure · guarantee",
        numerical: "5 mm · 80 dB · −40 °C",
      },
      labels: {
        obligation: "Obligation",
        application: "Application",
        compliance: "Compliance",
        requirement: "Requirement",
        expectation: "Expectation",
        assessment: "Assessment",
        guarantee: "Guarantee",
        numerical: "Numerical",
      },
      numericNote:
        "Numbers only count when followed by a unit — page numbers and bare digits stay quiet.",
    },
    extract: {
      kicker: "Steps 3–4",
      heading: "Walk every word.",
      libNote: "words + bounding boxes per page.",
      bullet:
        "Each hit records page, position, category and context.",
      matchesFound: "matches found",
    },
    hybrid: {
      kicker: "Step 5",
      heading: "One row, the smart way.",
      explainer:
        "The right granularity is picked per row, automatically — based on what the source actually looks like.",
      caseProse: "Prose paragraph → one row per matched sentence.",
      caseTable: "Table cell → one row per cell, kept whole.",
      payoff: "You see the cleanest cut for each match.",
    },
    outputs: {
      kicker: "Outputs",
      heading: "Three deliverables, one run.",
      a: {
        title: "Interactive HTML",
        sub: "Side-by-side: PDF preview + editable rows. Filters, color modes, in-page review.",
      },
      b: {
        title: "Summary PDF",
        sub: "Page · Chapter · Specification — printable for sign-off.",
      },
      c: {
        title: "Highlighted PDF",
        sub: "Native annotations. Text stays selectable in any reader.",
      },
    },
    tutorialDivider: {
      kicker: "Part 2",
      heading: "Now — how to use it.",
      sub: "The HTML report is a workspace, not a static report.",
    },
    tutorialLayout: {
      kicker: "The layout",
      heading: "PDF on the left. Live editable table on the right.",
      explainer:
        "Every page in the spec is a row in the report. The rendered page sits next to the rows extracted from it — so context is one glance away.",
      leftLabel: "Highlighted PDF page",
      rightLabel: "Editable rows",
      bullet: "Scroll page-by-page with ◀ ▶ or ↑ ↓. Edit as you go.",
    },
    tutorialRowActions: {
      kicker: "Per-row actions",
      heading: "Every row is a workspace.",
      sub: "Click any cell to edit it directly. Trigger words stay locked so a stray keystroke can't lose them.",
      actions: {
        edit:      { name: "Edit",      desc: "Click the text — it's editable in place." },
        split:     { name: "Split ✂",   desc: "Break a row into one row per sentence." },
        merge:     { name: "Merge ⤵",   desc: "Combine the row with the one below." },
        duplicate: { name: "Duplicate ⎘", desc: "Clone the row to copy/paste-like reuse." },
        deleteAct: { name: "Delete ✕",  desc: "Remove a row that doesn't belong." },
        add:       { name: "Add row +", desc: "Insert a blank row, type your own." },
      },
      meta: {
        assessment: "Per-row Assessment dropdown — OK · NOK · N/A · not-assessed",
        critical: "Critical toggle — flag the rows the supplier must address first.",
        triggerLocked: "Trigger words are read-only inside cells. The rest is yours.",
      },
    },
    tutorialControls: {
      kicker: "Toolbar",
      heading: "Tools to focus your review.",
      items: {
        colorMode: {
          name: "Color mode",
          desc: "Switch between simple 2-tone and full 8-category palette.",
        },
        categoryFilter: {
          name: "Category filter",
          desc: "Hide categories you don't care about for this review.",
        },
        tableView: {
          name: "Table view",
          desc: "Flatten the whole report into one big table for an audit pass.",
        },
        pageNav: {
          name: "Page nav",
          desc: "J / K or ↑ ↓ jumps between pages with matches. Skip empties.",
        },
        export: {
          name: "Export",
          desc: "Download the live table as CSV or JSON — your edits included.",
        },
      },
      toolbar: {
        colorMode: "Simple · Full",
        categories: "Categories: 8/8",
        tableView: "Table view",
        hideEmpty: "Hide empty pages",
        assessment: "Assessment: all",
        downloadCsv: "Download CSV",
        downloadJson: "Download JSON",
      },
      payoff: "Everything stays in one self-contained HTML — no install, no upload.",
    },
    ftlIntro: {
      kicker: "Coming next",
      heading: "Then v2 of the spec arrives…",
      bad1: "Re-run the extractor → lose every curated edit.",
      bad2: "Eyeball both PDFs by hand → days of work, mistakes guaranteed.",
      thirdOption: "The third option",
      ftl: "FTL New Gen",
      payoff: "Forward, Track, Learn — the workspace that keeps your work alive.",
    },
    ftlDiff: {
      kicker: "FTL · the diff",
      heading: "v2 on the left. Matched v1 on the right.",
      explainer:
        "Re-uses the PDF Comparer engine to pair pages — even if they moved across the document.",
      legend: { added: "Added in v2", removed: "Removed in v1", moved: "Already shown" },
    },
    ftlDrawer: {
      kicker: "FTL · the drawer",
      heading: "A floating workspace, anchored to the page in view.",
      explainer:
        "The drawer surfaces the v1 extraction rows that belong to the page you're scrolling past.",
      bullet1: "Edit text, change category, delete obsolete rows.",
      bullet2: "Add new rows by hand from what you see in green.",
      bullet3: "Save back as a fresh HTML — input for the next round.",
      philosophy: "Human helper, not human replacement.",
    },
    recap: {
      heading: "That's the whole loop.",
      bullets: [
        "Rule-based extraction — fast, offline, deterministic.",
        "A side-by-side workspace — review and edit in one screen.",
        "Three deliverables out — HTML, summary, annotated PDF.",
        "FTL keeps your curation alive across spec revisions.",
      ],
      closer: "Built so engineers spend less time hunting requirements.",
    },
  },
  sceneTitles: {
    hook: "The pain",
    title: "Spec Data Extractor",
    problem: "Why it matters",
    pipeline: "The pipeline",
    language: "Detect language",
    rules: "Eight categories",
    extract: "Walk every word",
    hybrid: "One row, smart",
    outputs: "Three deliverables",
    tutorialDivider: "Part 2 — How to use it",
    tutorialLayout: "Side-by-side layout",
    tutorialRowActions: "Per-row actions",
    tutorialControls: "Toolbar tour",
    ftlIntro: "Coming next — FTL",
    ftlDiff: "FTL · the diff",
    ftlDrawer: "FTL · the drawer",
    recap: "Recap",
  },
};
