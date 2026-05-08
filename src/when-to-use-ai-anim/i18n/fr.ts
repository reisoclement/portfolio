import type { Dict } from "./types";

export const fr: Dict = {
  text: {
    hookQuestion: { line: "Pourquoi l’IA casse" },
    hookStat: {
      percentLabel: "des projets d’IA en entreprise échouent.",
      source: "Source · MIT NANDA, 2025",
    },
    titleCard: {
      kicker: "Un guide rapide pour comprendre",
      title: "Quand utiliser l’IA.",
      subtitle: "Et surtout, quand ne pas l’utiliser.",
    },
    layers: {
      ai: "IA",
      programmingLanguages: "Langages de programmation",
      machineCode: "Code machine",
      hardware: "Matériel / Transistors",
      electrons: "Électrons",
    },
    stackBuild: {
      headline: "L’IA n’est pas sortie de nulle part.",
      subline: "Elle repose sur 200 ans de technologie.",
      caption: "Couche par couche.",
    },
    aiLayer: {
      caption: "L’IA est la couche la plus récente. Pas un remplacement.",
      sideAi: "IA  ·  Aujourd’hui",
      sideElectrons: "1804",
      present: "Aujourd’hui",
    },
    hwStory: {
      sub: "La machine physique",
      year: "1947",
      headline: "Un papillon coincé dans un relais.",
      detail:
        "Harvard Mark II. Premier vrai bug informatique. On a inventé le débogage.",
    },
    codeStory: {
      sub: "Les 1 et les 0",
      year: "1962",
      headline: "Un symbole manquant a fait exploser une fusée.",
      detail:
        "NASA Mariner 1. Une barre oubliée dans un code écrit à la main a fait dévier la fusée. 18,5 M$ perdus. On a inventé la revue de code.",
    },
    earlyLanguage: {
      sub: "Le code que nous écrivons",
      headline: "Prends Python. Personne n’y croyait au début.",
      leftYear: "1991",
      leftTag: "Python · v0.9",
      leftQuote: "Trop lent pour la production.\nUtilise plutôt Perl.",
      yearsBetween: "35 ans",
      rightYear: "2026",
      rightTag: "Python · partout",
      rightQuote: "Banques, NASA,\nML, web, sciences.",
      footer: "Même outil. La confiance, on l’a construite.",
    },
    lessons: {
      kicker: "Leçon",
      one: "Construis quelque chose que l’IA seule ne peut pas remplacer.",
      two: "Ne dépends pas uniquement de l’IA.",
      three: "Choisis le bon outil pour la tâche.",
      four: "Pose trois questions avant d’ajouter de l’IA.",
    },
    hookToggle: {
      kicker: "Exemple réel",
      headline: "Une appli d’essayage virtuel.",
      tagline:
        "Téléverse ta photo, vois les vêtements sur toi avant d’acheter. Construit sur un pipeline maison de modèles d’image et d’API.",
      cost1: "6 mois",
      cost2: "200 K$",
      cost3: "Pipeline maison",
      googleLabel: "Essayage natif",
      googleYear: "2025",
      toggleLabel: "Essayage",
      toggleOn: "ON",
      toggleOff: "OFF",
      box1: "Téléverser\nla photo",
      box2: "Détecter\nla pose",
      box3: "Détourer\nle fond",
      box4: "API modèle\nde vêtements",
      box5: "Générer\nla tenue",
      box6: "Composer\n+ retoucher",
      box7: "Image finale",
      punch: "Tué par un seul interrupteur.",
    },
    lesson1Takeaway: {
      kicker: "La leçon",
      headline: "Construis quelque chose que l’IA seule ne peut pas remplacer.",
      rules: [
        {
          num: "01",
          rule: "Bâtis sur des données que TOI seul possèdes.",
          detail: "Données internes, signaux clients, signaux propriétaires.",
        },
        {
          num: "02",
          rule: "Intègre-le dans TON workflow.",
          detail:
            "Logique métier et intégrations que le modèle seul ne reproduit pas.",
        },
        {
          num: "03",
          rule: "Ne joue pas sur le terrain des fournisseurs de modèles.",
          detail:
            "Si OpenAI ou Google peuvent l’embarquer nativement, ils le feront.",
        },
      ],
    },
    rule10: {
      kicker: "La bonne approche",
      headline: "L’IA n’est qu’une couche au-dessus des autres.",
      arrowLabel: "≈ 10%",
      diskCenter: "10%",
      diskSub: "IA",
      subline:
        "Environ 10% d’IA. 90% de code classique, règles, validation.",
      legendAi: "IA",
      legendCode: "Code classique",
    },
    backwards: {
      title: "Ce que font la plupart des équipes.",
      diskCenter: "90%",
      diskSub: "IA",
      tags: ["Hallucinations", "Coût élevé", "Imprévisible"],
    },
    doUse: {
      title: "Utilise l’IA quand la tâche est floue.",
      items: [
        "Résumer, traduire, reformuler du texte",
        "Décrire ce qu’il y a sur une image",
        "Classer un sentiment ou une intention à partir de texte libre",
        "Rédiger un premier jet (email, doc, code)",
        "Relier des concepts ambigus",
      ],
    },
    dontUse: {
      title: "N’utilise pas l’IA quand la réponse est exacte.",
      items: [
        "Comparer deux versions d’un document ou d’une spec",
        "Extraire des valeurs précises d’un fichier structuré",
        "Interroger une base de données, filtrer, trier",
        "Vérifier des tolérances ou des règles de conformité",
        "Tout ce qui doit être reproductible et auditable",
      ],
    },
    decision: [
      {
        question: "La tâche a-t-elle une réponse exacte et vérifiable ?",
        ifYes: "Écris du code",
      },
      {
        question: "Touche-t-elle des données sensibles ou confidentielles ?",
        ifYes: "Pas de modèle externe",
      },
      {
        question:
          "Une erreur ici aurait-elle des conséquences graves sans relecture humaine ?",
        ifYes: "Garde un humain dans la boucle",
      },
    ],
    mindset: {
      caption:
        "Utilise d’abord les couches du dessous. Ajoute l’IA uniquement si c’est nécessaire.",
    },
    closer: {
      lineOne: "10% d’IA.",
      lineTwo: "90% du reste.",
      kicker: "Quand utiliser l’IA",
    },
  },
  sceneTitles: {
    hookQuestion: "Pourquoi l’IA casse ?",
    hookStat: "95% échouent",
    titleCard: "Titre",
    stackBuild: "La pile",
    aiLayer: "L’IA arrive",
    hwStory: "Matériel · 1947",
    codeStory: "Code machine · 1962",
    earlyLanguage: "Python · 1991 → 2026",
    lesson1Card: "Leçon 1",
    hookToggle: "L’échec de l’essayage virtuel",
    lesson1Takeaway: "Règles de défensibilité",
    lesson2Card: "Leçon 2",
    backwards: "Ce que font la plupart",
    rule10: "La règle des 10%",
    lesson3Card: "Leçon 3",
    doUse: "Quand utiliser l’IA",
    dontUse: "Quand ne pas l’utiliser",
    lesson4Card: "Leçon 4",
    decision: "Trois questions",
    mindset: "D’abord les couches du dessous",
    closer: "10% IA · 90% reste",
  },
};
