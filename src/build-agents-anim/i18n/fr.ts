import type { Dict } from "./types";

export const fr: Dict = {
  text: {
    openingTitle: {
      titlePrefix: "Construire des agents en",
      titleAccent: "langage naturel",
      titleSuffix: ".",
      subtitle: "Pas de framework. Pas de magie.",
    },
    markdown: {
      titlePrefix: "Qu'est-ce que le",
      titleAccent: "markdown",
      titleSuffix: " ?",
      subtitle: "Facile à lire pour un humain et pour un LLM.",
      raw: [
        "# Gâteau au chocolat",
        "",
        "Un dessert **simple**.",
        "",
        "- 200g de farine",
        "- 100g de sucre",
        "- 3 œufs",
      ],
      rendered: {
        title: "Gâteau au chocolat",
        bodyBefore: "Un dessert ",
        bodyBold: "simple",
        bodyAfter: ".",
        bullets: ["200g de farine", "100g de sucre", "3 œufs"],
      },
    },
    folders: {
      knowledge: "knowledge/",
      task: "task/",
    },
    knowledgeFiles: [
      {
        name: "context.md",
        preview: ["# Qu'est-ce que cette cuisine ?", "", "Nous sommes une petite pâtisserie.", "Nous faisons des gâteaux."],
      },
      {
        name: "references.md",
        preview: ["# Où trouver les choses", "", "- Les recettes sont dans le livre.", "- Demandez au chef."],
      },
      {
        name: "rules/conventions.md",
        preview: ["# Comment on cuisine", "", "- Toujours goûter avant de servir.", "- Nettoyer au fur et à mesure."],
      },
      {
        name: "rules/things-to-avoid.md",
        preview: ["# Ne jamais faire", "", "- Ne jamais ouvrir le four trop tôt.", "- Ne jamais sauter le minuteur."],
      },
    ],
    agentReads: {
      typingHint: "Vous tapez une demande...",
      readingLabel: "Avant d'agir, l'agent lit :",
      prompt: "Préparer un gâteau au chocolat.",
      reading: "Lecture...",
      read: "✓ Lu",
      ready: "✓ Prêt à travailler",
    },
    taskArc: {
      empty: "Vide.",
      waiting: "En attente d'une demande...",
      prompt: "Préparer un gâteau au chocolat.",
    },
    taskStages: [
      {
        name: "1-recipe.md",
        label: "Ce qu'il nous faut.",
        preview: ["# Ingrédients", "", "- 200g de farine", "- 100g de sucre", "- 100g de cacao", "- 3 œufs"],
      },
      {
        name: "2-plan.md",
        label: "L'ordre des étapes.",
        preview: ["# Plan", "", "- Préchauffer le four à 180°C.", "- Mélanger sec, puis liquide.", "- Cuire 30 minutes.", "- Laisser refroidir."],
      },
      {
        name: "3-cook/",
        label: "Cuisiner pour de vrai.",
        preview: ["# Étapes", "", "- Peser les ingrédients.", "- Préparer la pâte.", "- Cuire au four.", "- Décorer le dessus."],
      },
      {
        name: "4-cake.plate",
        label: "Le gâteau fini.",
        preview: ["# Servi", "", "🎂 Gâteau au chocolat.", "1 gâteau, 8 parts.", "Prêt à déguster."],
      },
    ],
    headline: {
      title: "D'abord, à la main.",
      subtitle: "Notez chaque étape. Surtout les erreurs.",
    },
    sticky: {
      notebook: [
        "Préchauffer le four à 180.",
        "Peser 200g de farine.",
        "Casser 3 œufs.",
        "Incorporer doucement. Ne pas remuer.",
        "Cuire 30 minutes.",
      ],
      green: ["Marche !", "Garder", "Oui", "OK", "Fait"],
      red: "Ne pas ouvrir le four avant 25 min.",
    },
    rule: {
      filename: "# rules/things-to-avoid.md",
      bullet: "- Ne jamais ouvrir le four avant 25 minutes.",
      detail: "  Le gâteau retombe. Attendre le minuteur.",
      stickyText: "Ne pas ouvrir le four avant 25 min.",
    },
    terminal: {
      command: "lancer agent : préparer un gâteau au chocolat.",
      executing: "⏎ Pipeline en cours...",
    },
    closingTitle: {
      titlePrefix: "Construire des agents en",
      titleAccent: "langage naturel",
      titleSuffix: ".",
    },
  },
  sceneTitles: {
    openingTitle: "Titre",
    markdown: "Qu'est-ce que le markdown",
    folders: "Les deux dossiers",
    knowledge: "Le dossier knowledge",
    agentReads: "L'agent lit",
    transitionToTask: "Passage à task",
    taskArc: "La tâche se déroule",
    headline: "D'abord, à la main",
    sticky: "Notes et erreurs",
    rule: "L'erreur devient règle",
    terminal: "Lancer l'agent",
    closing: "Construire des agents en markdown",
  },
};
