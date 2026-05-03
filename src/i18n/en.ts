// English — source of truth for the website's UI strings.
// All other locales mirror this shape; missing keys will surface as TS errors.

export const en = {
  meta: {
    siteDescription:
      "A personal collection of animations capturing ideas worth keeping.",
  },
  nav: {
    brand: "Notebook",
    home: "Home",
    primaryAriaLabel: "Primary",
    languageSwitcherAriaLabel: "Language",
  },
  footer: {
    builtWith: "Built with Remotion + Astro",
  },
  home: {
    title: "Notebook — Animations capturing ideas worth keeping · Clément Reiso",
    description:
      "A personal collection of animations by Clément Reiso. Short videos that turn abstract ideas into something you can watch — built with Remotion.",
    eyebrow: "A personal notebook",
    headlineLine1: "Animations to remember",
    headlineLine2: "what I learn.",
    lede:
      "This is a small corner of the internet where I keep the ideas I want to hold onto. Each one is turned into a short animation — a way to make abstract knowledge feel concrete, and to revisit it later without re-reading a book.",
    whatYouFindHeading: "What you'll find here",
    whatYouFindParagraph:
      "Every page on this site is one animation. Press play, watch it through, and the idea will probably stick longer than a paragraph would. The collection grows slowly — quality over volume.",
    builtWithParagraphHtml:
      'Built with <a href="https://www.remotion.dev/">Remotion</a> for the videos and <a href="https://astro.build/">Astro</a> for the site itself. Both are open and the source lives on GitHub.',
    currentlyHeading: "Currently",
  },
  circlesOfLife: {
    title: "Circles of Life — Notebook",
    eyebrow: "Animation · 01",
    heading: "Circles of life",
    summaryShort:
      "Concentric rings of responsibility. Master the centre before you reach for the world.",
    lede:
      "Concentric circles of responsibility. You earn the right to influence the next ring only by mastering the inner one — yet most people invert it, trying to fix the outside while the centre stays unfinished.",
    tabs: {
      ariaLabel: "Playback mode",
      video: "Video",
      interactive: "Interactive",
    },
    videoCaption: "Press play. Around 95 seconds, with narration.",
    videoFallback: "Your browser does not support the video tag.",
    interactiveCaption:
      "One scene per press. Use this version when you want to talk over each beat — for a presentation, a discussion, or just to take it slowly.",
    interactive: {
      stageButtonAriaSkip: "Skip to end of current scene",
      stageButtonAriaRestart: "Restart",
      stageButtonAriaAdvance: "Advance to next scene",
      back: "← Back",
      restart: "Restart",
      next: "Next →",
      skip: "Skip →",
      hintHtml:
        "Press <kbd>Space</kbd> or click the canvas to advance · <kbd>R</kbd> to restart",
    },
  },
  animation: {
    backToNotebook: "← Notebook",
    publishedLabel: "Published",
    durationLabel: "Duration",
    tagsLabel: "Tags",
    sourceLabel: "Source",
    adjacentNavAriaLabel: "Adjacent animations",
    // Used by toLocaleDateString — locale tag.
    dateLocaleTag: "en-US",
  },
} as const;
