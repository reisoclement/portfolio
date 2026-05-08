import type { Dict } from "./types";

export const en: Dict = {
  text: {
    hookQuestion: { line: "Why does AI break" },
    hookStat: {
      percentLabel: "of corporate AI projects fail.",
      source: "Source · MIT NANDA, 2025",
    },
    titleCard: {
      kicker: "A short guide to understand",
      title: "When to use AI.",
      subtitle: "And, more importantly, when not to.",
    },
    layers: {
      ai: "AI",
      programmingLanguages: "Programming Languages",
      machineCode: "Machine Code",
      hardware: "Hardware / Transistors",
      electrons: "Electrons",
    },
    stackBuild: {
      headline: "AI didn’t come out of nowhere.",
      subline: "It rests on 200 years of technology.",
      caption: "Layer by layer.",
    },
    aiLayer: {
      caption: "AI is the newest layer. Not a replacement.",
      sideAi: "AI  ·  Now",
      sideElectrons: "1804",
      present: "Present",
    },
    hwStory: {
      sub: "The physical machine",
      year: "1947",
      headline: "A moth got stuck in a relay.",
      detail:
        "Harvard Mark II. First actual computer bug. So we built debugging.",
    },
    codeStory: {
      sub: "The 1s and 0s",
      year: "1962",
      headline: "One missing symbol blew up a rocket.",
      detail:
        "NASA Mariner 1. A missing overbar in hand-written code sent the rocket off course. $18.5M lost. So we built code review.",
    },
    earlyLanguage: {
      sub: "The code we write",
      headline: "Take Python. Nobody trusted it at first.",
      leftYear: "1991",
      leftTag: "Python · v0.9",
      leftQuote: "Too slow for production.\nUse Perl instead.",
      yearsBetween: "35 years",
      rightYear: "2026",
      rightTag: "Python · everywhere",
      rightQuote: "Powering banks, NASA,\nML, web, science.",
      footer: "Same tool. We engineered the trust into it.",
    },
    lessons: {
      kicker: "Lesson",
      one: "Build something AI alone can’t replace.",
      two: "Don’t rely only on AI.",
      three: "Pick the right tool for the task.",
      four: "Ask three questions before adding AI.",
    },
    hookToggle: {
      kicker: "Real example",
      headline: "A virtual try-on app.",
      tagline:
        "Upload your photo, see clothes on yourself before buying. Built on a custom pipeline of image models and APIs.",
      cost1: "6 months",
      cost2: "$200K",
      cost3: "Custom pipeline",
      googleLabel: "Native try-on",
      googleYear: "2025",
      toggleLabel: "Try-on",
      toggleOn: "ON",
      toggleOff: "OFF",
      box1: "Upload\nphoto",
      box2: "Detect\nbody pose",
      box3: "Strip\nbackground",
      box4: "Garment\nmodel API",
      box5: "Generate\noutfit",
      box6: "Composite\n+ post-process",
      box7: "Final image",
      punch: "Killed by one toggle.",
    },
    lesson1Takeaway: {
      kicker: "The lesson",
      headline: "Build something AI alone can’t replace.",
      rules: [
        {
          num: "01",
          rule: "Build on data only YOU have.",
          detail: "Internal data, customer signals, proprietary signals.",
        },
        {
          num: "02",
          rule: "Wrap it in YOUR workflow.",
          detail:
            "Domain logic and integrations the model alone can’t replicate.",
        },
        {
          num: "03",
          rule: "Don’t compete with model providers on their turf.",
          detail: "If OpenAI or Google can ship it natively, they will.",
        },
      ],
    },
    rule10: {
      kicker: "The right way",
      headline: "AI is one layer on top of the others.",
      arrowLabel: "≈ 10%",
      diskCenter: "10%",
      diskSub: "AI",
      subline: "About 10% AI. 90% classical code, rules, validation.",
      legendAi: "AI",
      legendCode: "Classical code",
    },
    backwards: {
      title: "What most teams do.",
      diskCenter: "90%",
      diskSub: "AI",
      tags: ["Hallucinations", "High cost", "Unpredictable"],
    },
    doUse: {
      title: "Use AI when the task is fuzzy.",
      items: [
        "Summarize, translate, reformulate text",
        "Describe what’s in an image",
        "Classify sentiment or intent from free-form input",
        "Draft a first version (email, doc, code)",
        "Bridge ambiguous concepts",
      ],
    },
    dontUse: {
      title: "Don’t use AI when the answer is exact.",
      items: [
        "Diff two versions of a document or spec",
        "Extract exact values from a structured file",
        "Query a database, filter, sort",
        "Check tolerances or compliance rules",
        "Anything reproducible and auditable",
      ],
    },
    decision: [
      {
        question: "Does the task have an exact, verifiable answer?",
        ifYes: "Write code",
      },
      {
        question: "Does it touch sensitive or confidential data?",
        ifYes: "No external model",
      },
      {
        question:
          "Would an error here be serious without a human checking?",
        ifYes: "Keep a human in the loop",
      },
    ],
    mindset: {
      caption: "Use the layers below first. Add AI only when needed.",
    },
    closer: {
      lineOne: "10% AI.",
      lineTwo: "90% everything else.",
      kicker: "When to use AI",
    },
  },
  sceneTitles: {
    hookQuestion: "Why does AI break?",
    hookStat: "95% fail",
    titleCard: "Title",
    stackBuild: "The stack",
    aiLayer: "AI lands",
    hwStory: "Hardware · 1947",
    codeStory: "Machine Code · 1962",
    earlyLanguage: "Python · 1991 → 2026",
    lesson1Card: "Lesson 1",
    hookToggle: "Try-on app failure",
    lesson1Takeaway: "Defensibility rules",
    lesson2Card: "Lesson 2",
    backwards: "What most teams do",
    rule10: "The 10% rule",
    lesson3Card: "Lesson 3",
    doUse: "When to use AI",
    dontUse: "When not to",
    lesson4Card: "Lesson 4",
    decision: "Three questions",
    mindset: "Layers below first",
    closer: "10% AI · 90% else",
  },
};
