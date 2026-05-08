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
  resume: {
    title: "Resume — Clément Reiso",
    description:
      "An animated CV by Clément Reiso — career, AI work, side projects, languages and a few hobbies.",
    eyebrow: "Animated CV",
    heading: "My resume — animated",
    summaryShort:
      "Career, AI work, side projects, languages and a few hobbies — in motion.",
    lede:
      "A short animated walkthrough of who I am, where I've worked, what I've built, and what I do off the keyboard. Press play, or step through it scene by scene.",
    tabs: {
      ariaLabel: "Playback mode",
      video: "Video",
      interactive: "Step by step",
    },
    videoCaption: "Press play. Around 95 seconds, no audio.",
    videoFallback: "Your browser does not support the video tag.",
    interactiveCaption:
      "One scene per press. Use this version when you want to take it slowly, or talk over each beat.",
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
  whenToUseAi: {
    title: "When to use AI — Notebook",
    eyebrow: "Animation · 02",
    heading: "When to use AI (and when not to)",
    summaryShort:
      "A short visual guide to using AI well. Four lessons, no narration needed.",
    lede:
      "A short visual guide for non-technical teammates. Where AI fits in two hundred years of computing, why most AI projects fail, and four lessons that keep you on the right side of the rule.",
    tabs: {
      ariaLabel: "Playback mode",
      video: "Video",
      interactive: "Step by step",
    },
    videoCaption: "Press play. Around 3 minutes 20, no audio.",
    videoFallback: "Your browser does not support the video tag.",
    interactiveCaption:
      "One scene per press. Use this version when you want to take it slowly, or talk over each beat.",
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
  buildAgents: {
    title: "Build agents with natural language — Notebook",
    eyebrow: "Animation · 03",
    heading: "Build agents with natural language",
    summaryShort:
      "How an agent really works: two folders of markdown, no framework, no magic.",
    lede:
      "A short visual guide for non-technical teammates. The thesis: an agent is two folders of plain text — one for what it knows, one for what it does. Watch it bake a chocolate cake.",
    tabs: {
      ariaLabel: "Playback mode",
      video: "Video",
      interactive: "Step by step",
    },
    videoCaption: "Press play. Around 90 seconds, no audio.",
    videoFallback: "Your browser does not support the video tag.",
    interactiveCaption:
      "One scene per press. Use this version when you want to take it slowly, or talk over each beat.",
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
