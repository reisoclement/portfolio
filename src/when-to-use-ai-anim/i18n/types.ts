// Shape of a per-locale dictionary for the when-to-use-ai animation.
//
// Two data layers:
//   1. `text` - on-screen labels grouped by scene.
//   2. `sceneTitles` - short titles used by the interactive viewer chip.
//
// English is the source of truth. Other locales mirror this shape; TS will
// flag missing keys.

export type Dict = {
  text: {
    hookQuestion: { line: string };
    hookStat: {
      percentLabel: string;          // text under "95%"
      source: string;                 // "Source · MIT NANDA, 2025"
    };
    titleCard: {
      kicker: string;                 // "A short guide to understand"
      title: string;                  // "When to use AI."
      subtitle: string;               // "And, more importantly, when not to."
    };
    layers: {
      // The 5 stack rung labels, top -> bottom
      ai: string;
      programmingLanguages: string;
      machineCode: string;
      hardware: string;
      electrons: string;
    };
    stackBuild: {
      headline: string;               // "AI didn't come out of nowhere."
      subline: string;                // "It rests on 200 years of technology."
      caption: string;                // "Layer by layer."
    };
    aiLayer: {
      caption: string;                // "AI is the newest layer. Not a replacement."
      sideAi: string;                 // "AI · Now"
      sideElectrons: string;          // "1804"
      present: string;                // "Present" — used as "1804 → Present" on the stack timeline arrow
    };
    hwStory: {
      sub: string;                    // "The physical machine"
      year: string;                   // "1947"
      headline: string;               // "A moth got stuck in a relay."
      detail: string;                 // "Harvard Mark II. First actual computer bug. So we built debugging."
    };
    codeStory: {
      sub: string;                    // "The 1s and 0s"
      year: string;                   // "1962"
      headline: string;               // "One missing symbol blew up a rocket."
      detail: string;                 // "NASA Mariner 1. A missing overbar..."
    };
    earlyLanguage: {
      sub: string;                    // "The code we write"
      headline: string;               // "Take Python. Nobody trusted it at first."
      leftYear: string;               // "1991"
      leftTag: string;                // "Python · v0.9"
      leftQuote: string;              // "Too slow for production.\nUse Perl instead."
      yearsBetween: string;           // "35 years"
      rightYear: string;              // "2026"
      rightTag: string;               // "Python · everywhere"
      rightQuote: string;             // "Powering banks, NASA,\nML, web, science."
      footer: string;                 // "Same tool. We engineered the trust into it."
    };
    lessons: {
      kicker: string;                 // "Lesson"
      one: string;
      two: string;
      three: string;
      four: string;
    };
    hookToggle: {
      kicker: string;                 // "Real example"
      headline: string;               // "A virtual try-on app."
      tagline: string;                // "Upload your photo, see clothes on yourself..."
      cost1: string;                  // "6 months"
      cost2: string;                  // "$200K"
      cost3: string;                  // "Custom pipeline"
      googleLabel: string;            // "Native try-on"
      googleYear: string;             // "2025"
      toggleLabel: string;            // "Try-on"
      toggleOn: string;               // "ON"
      toggleOff: string;              // "OFF"
      // Workflow box labels
      box1: string;                   // "Upload\nphoto"
      box2: string;                   // "Detect\nbody pose"
      box3: string;                   // "Strip\nbackground"
      box4: string;                   // "Garment\nmodel API"
      box5: string;                   // "Generate\noutfit"
      box6: string;                   // "Composite\n+ post-process"
      box7: string;                   // "Final image"
      punch: string;                  // "Killed by one toggle."
    };
    lesson1Takeaway: {
      kicker: string;                 // "The lesson"
      headline: string;               // "Build something AI alone can't replace."
      rules: Array<{
        num: string;
        rule: string;
        detail: string;
      }>;
    };
    rule10: {
      kicker: string;                 // "The right way"
      headline: string;               // "AI is one layer on top of the others."
      arrowLabel: string;             // "≈ 10%"
      diskCenter: string;             // "10%"
      diskSub: string;                // "AI"
      subline: string;                // "About 10% AI. 90% classical code, rules, validation."
      legendAi: string;               // "AI"
      legendCode: string;             // "Classical code"
    };
    backwards: {
      title: string;                  // "What most teams do."
      diskCenter: string;             // "90%"
      diskSub: string;                // "AI"
      tags: [string, string, string]; // ["Hallucinations", "High cost", "Unpredictable"]
    };
    doUse: {
      title: string;                  // "Use AI when the task is fuzzy."
      items: string[];
    };
    dontUse: {
      title: string;                  // "Don't use AI when the answer is exact."
      items: string[];
    };
    decision: Array<{
      question: string;
      ifYes: string;
    }>;
    mindset: {
      caption: string;                // "Use the layers below first. Add AI only when needed."
    };
    closer: {
      lineOne: string;                // "10% AI."
      lineTwo: string;                // "90% everything else."
      kicker: string;                 // "When to use AI"
    };
  };
  sceneTitles: {
    hookQuestion: string;
    hookStat: string;
    titleCard: string;
    stackBuild: string;
    aiLayer: string;
    hwStory: string;
    codeStory: string;
    earlyLanguage: string;
    lesson1Card: string;
    hookToggle: string;
    lesson1Takeaway: string;
    lesson2Card: string;
    backwards: string;
    rule10: string;
    lesson3Card: string;
    doUse: string;
    dontUse: string;
    lesson4Card: string;
    decision: string;
    mindset: string;
    closer: string;
  };
};
