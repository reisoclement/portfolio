import type { Dict } from "./types";

export const fr: Dict = {
  sceneTitles: {
    intro: "Bonjour",
    career: "Parcours",
    journey: "France · Roumanie · Pologne",
    builds: "Première année de VIE",
    sideProject: "Projet personnel",
    stack: "Comment je travaille",
    education: "Études",
    hobbies: "En dehors du travail",
    outro: "Discutons",
  },

  intro: {
    name: "Clément Reiso",
    role: "Lead Engineer\nIntelligence Artificielle",
    tagline: "Ingénieur multiculturel qui déploie l'IA pour gagner en efficacité.",
  },

  career: {
    heading: "Parcours",
    roles: {
      reservist: {
        title: "Gendarme Réserviste",
        org: "Gendarmerie Nationale",
        city: "France",
      },
      apprentice: {
        title: "Apprenti Ingénieur Process",
        org: "FORVIA Faurecia",
        city: "Caligny, France",
      },
      dataAi: {
        title: "Ingénieur Data IA (VIE)",
        org: "FORVIA Faurecia",
        city: "Tălmaciu, Roumanie",
      },
      leadAi: {
        title: "Lead Ingénieur IA (VIE)",
        org: "FORVIA Faurecia",
        city: "Grójec, Pologne",
      },
    },
    selfLearning: {
      title: "Auto-formation · IA & Code",
      subtitle: "En parallèle · sans s'arrêter",
    },
  },

  journey: {
    eyebrow: "Tout chez",
    company: "FORVIA Faurecia",
    closing: "De la mécanique à diriger l'IA.",
    pins: {
      france: { country: "France", role: "Apprenti → Ingénieur" },
      romania: { country: "Roumanie", role: "Ingénieur Data IA" },
      poland: { country: "Pologne", role: "Lead Ingénieur IA" },
    },
  },

  builds: {
    heading: "Première année de VIE",
    subEyebrow: "Tălmaciu, Roumanie · 2024–2025",
    subText: "",
    chatbot: {
      big: "Chatbot IA",
      sub: "déployé en production",
      caption: "Utilisé par des centaines de collègues chez FORVIA Faurecia.",
    },
    glossary: {
      big: "Glossaire Technique",
      sub: "construit de zéro",
      caption:
        "600 termes anglais traduits en 10 langues, avec des experts de 18 domaines. Intégré à FUSION.",
    },
  },

  sideProject: {
    heading: "Projet personnel",
    bigLabel: "heures · sur mon temps libre",
    description:
      "CTO d'une plateforme IA construite en dehors du travail — où je prototype, j'apprends à la pointe et je livre des idées que l'entreprise ne peut pas toujours se permettre.",
    supporting: {
      team: { value: "Jusqu'à 8", label: "ingénieurs développeurs" },
      realtime: { value: "Temps réel", label: "texte · voix · image · vidéo" },
      cto: { value: "CTO", label: "architecture · specs · changelogs" },
    },
  },

  stack: {
    heading: "Comment je travaille",
    skills: [
      "IA · théorie & pratique",
      "Leadership",
      "Partage de connaissances",
      "Résolution de problèmes",
      "Travail d'équipe",
    ],
    languages: [
      { name: "Français", level: "Langue maternelle", bar: 1 },
      { name: "Anglais", level: "C1 · TOEIC 960/990", bar: 0.92 },
      { name: "Espagnol", level: "B2", bar: 0.7 },
      { name: "Roumain", level: "Débutant", bar: 0.25 },
      { name: "Polonais", level: "Débutant", bar: 0.2 },
    ],
  },

  education: {
    heading: "Études",
    school: "INSA Rennes",
    degree: "Master · Génie Mécanique & Automatique",
    years: "2019 — 2024",
    secondary1: "Initiation aéronautique · Pilotage de planeur · 2017",
    secondary2: "Préparation Gendarmerie · 2018",
  },

  hobbies: {
    heading: "En dehors du travail",
    items: [
      { key: "chess", label: "Échecs" },
      { key: "bee", label: "Apiculture" },
      { key: "snowboard", label: "Snowboard" },
      { key: "volley", label: "Volleyball" },
      { key: "bike", label: "Vélo" },
      { key: "motor", label: "Moto" },
      { key: "fitness", label: "Fitness" },
      { key: "glider", label: "Pilotage de planeur" },
      { key: "code", label: "Code & IA" },
    ],
  },

  outro: {
    nameSmall: "Clément Reiso",
    email: "reisoclement@gmail.com",
    location: "Grójec, Pologne",
    cta: "Discutons.",
  },
};
