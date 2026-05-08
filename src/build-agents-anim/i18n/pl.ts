import type { Dict } from "./types";

export const pl: Dict = {
  text: {
    openingTitle: {
      titlePrefix: "Buduj agentów w",
      titleAccent: "języku naturalnym",
      titleSuffix: ".",
      subtitle: "Bez frameworka. Bez magii.",
    },
    markdown: {
      titlePrefix: "Czym jest",
      titleAccent: "markdown",
      titleSuffix: "?",
      subtitle: "Łatwy do czytania dla człowieka i dla LLM.",
      raw: [
        "# Ciasto czekoladowe",
        "",
        "**Prosty** deser.",
        "",
        "- 200g mąki",
        "- 100g cukru",
        "- 3 jajka",
      ],
      rendered: {
        title: "Ciasto czekoladowe",
        bodyBefore: "",
        bodyBold: "Prosty",
        bodyAfter: " deser.",
        bullets: ["200g mąki", "100g cukru", "3 jajka"],
      },
    },
    folders: {
      knowledge: "knowledge/",
      task: "task/",
    },
    knowledgeFiles: [
      {
        name: "context.md",
        preview: ["# Czym jest ta kuchnia?", "", "Jesteśmy małą cukiernią.", "Pieczemy ciasta."],
      },
      {
        name: "references.md",
        preview: ["# Gdzie szukać rzeczy", "", "- Przepisy są w książce.", "- Zapytaj szefa kuchni."],
      },
      {
        name: "rules/conventions.md",
        preview: ["# Jak gotujemy", "", "- Zawsze próbuj przed podaniem.", "- Sprzątaj na bieżąco."],
      },
      {
        name: "rules/things-to-avoid.md",
        preview: ["# Nigdy tego nie rób", "", "- Nigdy nie otwieraj piekarnika za wcześnie.", "- Nigdy nie pomijaj timera."],
      },
    ],
    agentReads: {
      typingHint: "Wpisujesz prośbę...",
      readingLabel: "Zanim cokolwiek zrobi, agent czyta:",
      prompt: "Upiec ciasto czekoladowe.",
      reading: "Czytanie...",
      read: "✓ Przeczytane",
      ready: "✓ Gotowy do pracy",
    },
    taskArc: {
      empty: "Pusto.",
      waiting: "Czekam na prośbę...",
      prompt: "Upiec ciasto czekoladowe.",
    },
    taskStages: [
      {
        name: "1-recipe.md",
        label: "Czego potrzebujemy.",
        preview: ["# Składniki", "", "- 200g mąki", "- 100g cukru", "- 100g kakao", "- 3 jajka"],
      },
      {
        name: "2-plan.md",
        label: "Kolejność kroków.",
        preview: ["# Plan", "", "- Nagrzej piekarnik do 180°C.", "- Wymieszaj suche, potem mokre.", "- Piecz 30 minut.", "- Pozostaw do ostygnięcia."],
      },
      {
        name: "3-cook/",
        label: "Pieczenie naprawdę.",
        preview: ["# Kroki", "", "- Zważ składniki.", "- Wymieszaj ciasto.", "- Włóż do piekarnika.", "- Udekoruj wierzch."],
      },
      {
        name: "4-cake.plate",
        label: "Gotowe ciasto.",
        preview: ["# Podane", "", "🎂 Ciasto czekoladowe.", "1 ciasto, 8 porcji.", "Gotowe do jedzenia."],
      },
    ],
    headline: {
      title: "Najpierw zrób to ręcznie.",
      subtitle: "Zapisz każdy krok. Zwłaszcza błędy.",
    },
    sticky: {
      notebook: [
        "Nagrzej piekarnik do 180.",
        "Zważ 200g mąki.",
        "Rozbij 3 jajka.",
        "Mieszaj delikatnie. Nie kręć.",
        "Piecz 30 minut.",
      ],
      green: ["Działa!", "Zachowaj", "Tak", "OK", "Gotowe"],
      red: "Nie otwieraj piekarnika przed 25 min.",
    },
    rule: {
      filename: "# rules/things-to-avoid.md",
      bullet: "- Nigdy nie otwieraj piekarnika przed 25 minutą.",
      detail: "  Ciasto opadnie. Poczekaj na timer.",
      stickyText: "Nie otwieraj piekarnika przed 25 min.",
    },
    terminal: {
      command: "uruchom agenta: upiec ciasto czekoladowe.",
      executing: "⏎ Uruchamianie pipeline'u...",
    },
    closingTitle: {
      titlePrefix: "Buduj agentów w",
      titleAccent: "języku naturalnym",
      titleSuffix: ".",
    },
  },
  sceneTitles: {
    openingTitle: "Tytuł",
    markdown: "Czym jest markdown",
    folders: "Dwa foldery",
    knowledge: "Folder knowledge",
    agentReads: "Agent czyta",
    transitionToTask: "Przejście do task",
    taskArc: "Zadanie się rozwija",
    headline: "Najpierw ręcznie",
    sticky: "Notatki i błędy",
    rule: "Błąd staje się regułą",
    terminal: "Uruchom agenta",
    closing: "Buduj agentów w markdown",
  },
};
