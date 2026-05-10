// Per-locale dictionary for the spec-extractor explainer.
// English is the source of truth; sibling locales mirror this exactly.

export type Dict = {
  text: {
    hook: {
      kicker: string;
      stat: string;          // big phrase, e.g. "Thousands of pages."
      line: string;          // supporting line e.g. "50+ requirements buried in them."
    };
    title: {
      kicker: string;
      title: string;         // "Spec Data Extractor"
      version: string;       // "Version 2.0"
      subtitle: string;
    };
    problem: {
      heading: string;
      bullets: [string, string, string];
    };
    pipeline: {
      kicker: string;
      heading: string;
      steps: [string, string, string, string, string, string, string, string, string];
    };
    language: {
      kicker: string;
      heading: string;
      explainer: string;     // stopword-counting on first 3000 words
      bullet: string;        // "no ML model, offline, <100ms"
      detected: string;      // label "DETECTED" used in UI
    };
    rules: {
      kicker: string;
      heading: string;
      explainer: string;     // 18 categories, multi-word phrases longest-first
      categories: {
        obligation: string;
        application: string;
        compliance: string;
        requirement: string;
        expectation: string;
        assessment: string;
        guarantee: string;
        numerical: string;
      };
      // Translatable category labels shown on each card. Keys mirror
      // `categories` but the values are localized (e.g. "Obligation" in EN,
      // "Obligation" in FR, "Obligación" in ES, "Obowiązek" in PL).
      labels: {
        obligation: string;
        application: string;
        compliance: string;
        requirement: string;
        expectation: string;
        assessment: string;
        guarantee: string;
        numerical: string;
      };
      numericNote: string;   // numbers must be followed by a unit
    };
    extract: {
      kicker: string;
      heading: string;
      libNote: string;       // "PyMuPDF — words + bounding boxes"
      bullet: string;        // every word tested against compiled regexes
      matchesFound: string;  // label next to the running hit count
    };
    hybrid: {
      kicker: string;
      heading: string;
      explainer: string;       // why we collapsed line/sentence/paragraph
      caseProse: string;        // "Prose → one row per sentence"
      caseTable: string;        // "Table cell → one row per cell"
      payoff: string;
    };
    outputs: {
      kicker: string;
      heading: string;
      a: { title: string; sub: string };
      b: { title: string; sub: string };
      c: { title: string; sub: string };
    };
    tutorialDivider: {
      kicker: string;        // "Part 2"
      heading: string;       // "Now — how to use it."
      sub: string;
    };
    tutorialLayout: {
      kicker: string;
      heading: string;       // "PDF on the left. Live table on the right."
      explainer: string;
      leftLabel: string;     // "Highlighted PDF page"
      rightLabel: string;    // "Editable rows"
      bullet: string;        // "Scroll page-by-page. Edit as you go."
    };
    tutorialRowActions: {
      kicker: string;
      heading: string;       // "Every row is a workspace."
      sub: string;
      actions: {
        edit: { name: string; desc: string };
        split: { name: string; desc: string };
        merge: { name: string; desc: string };
        duplicate: { name: string; desc: string };
        deleteAct: { name: string; desc: string };
        add: { name: string; desc: string };
      };
      meta: {
        assessment: string;     // "Assessment dropdown — OK / NOK / N/A"
        critical: string;       // "Critical toggle"
        triggerLocked: string;  // "Trigger words stay locked so you can't lose them"
      };
    };
    tutorialControls: {
      kicker: string;
      heading: string;       // "Tools to focus your review."
      items: {
        colorMode: { name: string; desc: string };
        categoryFilter: { name: string; desc: string };
        tableView: { name: string; desc: string };
        pageNav: { name: string; desc: string };
        export: { name: string; desc: string };
      };
      // Translatable labels for the demo toolbar shown above the cards.
      // These echo the chip text rendered inside the scene.
      toolbar: {
        colorMode: string;       // "Simple · Full"
        categories: string;      // "Categories: 8/8"
        tableView: string;       // "Table view"
        hideEmpty: string;       // "Hide empty pages"
        assessment: string;      // "Assessment: all"
        downloadCsv: string;     // "Download CSV"
        downloadJson: string;    // "Download JSON"
      };
      payoff: string;
    };
    ftlIntro: {
      kicker: string;        // "Coming next"
      heading: string;       // "When v2 of the spec arrives…"
      bad1: string;          // re-extract → lose curated edits
      bad2: string;          // diff by hand
      thirdOption: string;   // mono eyebrow above the FTL card, e.g. "The third option"
      ftl: string;           // FTL New Gen — Forward, Track, Learn
      payoff: string;
    };
    ftlDiff: {
      kicker: string;
      heading: string;
      explainer: string;
      legend: { added: string; removed: string; moved: string };
    };
    ftlDrawer: {
      kicker: string;
      heading: string;
      explainer: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      philosophy: string;    // human helper, not human replacement
    };
    recap: {
      heading: string;
      bullets: [string, string, string, string];
      closer: string;
    };
  };
  // Short titles shown by the website's interactive viewer chip — one per
  // SCENE_DURATIONS key. Order is independent of `text`.
  sceneTitles: {
    hook: string;
    title: string;
    problem: string;
    pipeline: string;
    language: string;
    rules: string;
    extract: string;
    hybrid: string;
    outputs: string;
    tutorialDivider: string;
    tutorialLayout: string;
    tutorialRowActions: string;
    tutorialControls: string;
    ftlIntro: string;
    ftlDiff: string;
    ftlDrawer: string;
    recap: string;
  };
};
