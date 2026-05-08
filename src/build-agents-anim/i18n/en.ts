import type { Dict } from "./types";

export const en: Dict = {
  text: {
    openingTitle: {
      titlePrefix: "Build agents with",
      titleAccent: "natural language",
      titleSuffix: ".",
      subtitle: "No framework. No magic.",
    },
    markdown: {
      titlePrefix: "What is",
      titleAccent: "markdown",
      titleSuffix: "?",
      subtitle: "Easy to read for a human and for an LLM.",
      raw: [
        "# Chocolate cake",
        "",
        "A **simple** dessert.",
        "",
        "- 200g flour",
        "- 100g sugar",
        "- 3 eggs",
      ],
      rendered: {
        title: "Chocolate cake",
        bodyBefore: "A ",
        bodyBold: "simple",
        bodyAfter: " dessert.",
        bullets: ["200g flour", "100g sugar", "3 eggs"],
      },
    },
    folders: {
      knowledge: "knowledge/",
      task: "task/",
    },
    knowledgeFiles: [
      {
        name: "context.md",
        preview: ["# What is this kitchen?", "", "We are a small bakery.", "We make cakes."],
      },
      {
        name: "references.md",
        preview: ["# Where to find things", "", "- Recipes are in the cookbook.", "- Ask the head chef for help."],
      },
      {
        name: "rules/conventions.md",
        preview: ["# How we cook", "", "- Always taste before serving.", "- Clean as you go."],
      },
      {
        name: "rules/things-to-avoid.md",
        preview: ["# Never do this", "", "- Never open the oven too early.", "- Never skip the timer."],
      },
    ],
    agentReads: {
      typingHint: "You type a request...",
      readingLabel: "Before doing anything, the agent reads:",
      prompt: "Bake a chocolate cake.",
      reading: "Reading...",
      read: "✓ Read",
      ready: "✓ Ready to work",
    },
    taskArc: {
      empty: "Empty.",
      waiting: "Waiting for a request...",
      prompt: "Bake a chocolate cake.",
    },
    taskStages: [
      {
        name: "1-recipe.md",
        label: "What we need.",
        preview: ["# Ingredients", "", "- 200g flour", "- 100g sugar", "- 100g cocoa", "- 3 eggs"],
      },
      {
        name: "2-plan.md",
        label: "The order of steps.",
        preview: ["# Plan", "", "- Preheat oven to 180°C.", "- Mix dry, then wet.", "- Bake 30 minutes.", "- Let it cool."],
      },
      {
        name: "3-cook/",
        label: "Actually cooking.",
        preview: ["# Steps", "", "- Weigh ingredients.", "- Mix the batter.", "- Bake in the oven.", "- Decorate the top."],
      },
      {
        name: "4-cake.plate",
        label: "The finished cake.",
        preview: ["# Served", "", "🎂 Chocolate cake.", "1 cake, 8 slices.", "Ready to eat."],
      },
    ],
    headline: {
      title: "First, do it by hand.",
      subtitle: "Write down every step. Especially the mistakes.",
    },
    sticky: {
      notebook: [
        "Preheat the oven to 180.",
        "Weigh 200g of flour.",
        "Crack 3 eggs.",
        "Fold gently. Don't stir.",
        "Bake for 30 minutes.",
      ],
      green: ["Worked!", "Keep this", "Yes", "OK", "Done"],
      red: "Don't open the oven before 25 min.",
    },
    rule: {
      filename: "# rules/things-to-avoid.md",
      bullet: "- Never open the oven before 25 minutes.",
      detail: "  The cake will sink. Wait for the timer.",
      stickyText: "Don't open the oven before 25 min.",
    },
    terminal: {
      command: "run agent: bake a chocolate cake.",
      executing: "⏎ Executing pipeline...",
    },
    closingTitle: {
      titlePrefix: "Build agents with",
      titleAccent: "natural language",
      titleSuffix: ".",
    },
  },
  sceneTitles: {
    openingTitle: "Title",
    markdown: "What is markdown",
    folders: "The two folders",
    knowledge: "Knowledge walkthrough",
    agentReads: "Agent reads",
    transitionToTask: "Move to task",
    taskArc: "The task unfolds",
    headline: "First, by hand",
    sticky: "Notes & mistakes",
    rule: "Mistake becomes rule",
    terminal: "Run the agent",
    closing: "Build agents in markdown",
  },
};
