import type { Dict } from "./types";

export const pl: Dict = {
  sceneTitles: {
    intro: "Cześć",
    career: "Ścieżka kariery",
    journey: "Francja · Rumunia · Polska",
    builds: "Pierwszy rok VIE",
    sideProject: "Projekt osobisty",
    stack: "Jak pracuję",
    education: "Edukacja",
    hobbies: "Poza pracą",
    outro: "Porozmawiajmy",
  },

  intro: {
    name: "Clément Reiso",
    role: "Lead Engineer\nSztucznej Inteligencji",
    tagline: "Wielokulturowy inżynier wdrażający AI dla większej efektywności.",
  },

  career: {
    heading: "Kariera",
    roles: {
      reservist: {
        title: "Żandarm Rezerwista",
        org: "Francuska Żandarmeria Narodowa",
        city: "Francja",
      },
      apprentice: {
        title: "Praktykant Inżynier Procesu",
        org: "FORVIA Faurecia",
        city: "Caligny, Francja",
      },
      dataAi: {
        title: "Inżynier Data AI (VIE)",
        org: "FORVIA Faurecia",
        city: "Tălmaciu, Rumunia",
      },
      leadAi: {
        title: "Lead Inżynier AI (VIE)",
        org: "FORVIA Faurecia",
        city: "Grójec, Polska",
      },
    },
    selfLearning: {
      title: "Samodzielna nauka · AI & Kod",
      subtitle: "Równolegle · bez przerwy",
    },
  },

  journey: {
    eyebrow: "Wszystko w",
    company: "FORVIA Faurecia",
    closing: "Od mechaniki do prowadzenia AI.",
    pins: {
      france: { country: "Francja", role: "Praktykant → Inżynier" },
      romania: { country: "Rumunia", role: "Inżynier Data AI" },
      poland: { country: "Polska", role: "Lead Inżynier AI" },
    },
  },

  builds: {
    heading: "Pierwszy rok VIE",
    subEyebrow: "Tălmaciu, Rumunia · 2024–2025",
    subText: "",
    chatbot: {
      big: "Chatbot AI",
      sub: "wdrożony do produkcji",
      caption: "Używany przez setki pracowników FORVIA Faurecia.",
    },
    glossary: {
      big: "Słownik Techniczny",
      sub: "zbudowany od zera",
      caption:
        "600 angielskich terminów przetłumaczonych na 10 języków, z ekspertami z 18 dziedzin. Zintegrowany z FUSION.",
    },
  },

  sideProject: {
    heading: "Projekt osobisty",
    bigLabel: "godzin · w wolnym czasie",
    description:
      "CTO platformy opartej na AI tworzonej poza pracą — gdzie prototypuję, uczę się najnowszych rzeczy i wdrażam pomysły, na które codzienna praca nie zawsze ma czas.",
    supporting: {
      team: { value: "Do 8", label: "inżynierów programistów" },
      realtime: { value: "Czas rzeczywisty", label: "tekst · głos · obraz · wideo" },
      cto: { value: "CTO", label: "architektura · specy · changelogi" },
    },
  },

  stack: {
    heading: "Jak pracuję",
    skills: [
      "AI · teoria i praktyka",
      "Przywództwo",
      "Dzielenie się wiedzą",
      "Rozwiązywanie problemów",
      "Praca zespołowa",
    ],
    languages: [
      { name: "Francuski", level: "Język ojczysty", bar: 1 },
      { name: "Angielski", level: "C1 · TOEIC 960/990", bar: 0.92 },
      { name: "Hiszpański", level: "B2", bar: 0.7 },
      { name: "Rumuński", level: "Początkujący", bar: 0.25 },
      { name: "Polski", level: "Początkujący", bar: 0.2 },
    ],
  },

  education: {
    heading: "Edukacja",
    school: "INSA Rennes",
    degree: "Magister · Inżynieria Mechaniczna i Automatyczna",
    years: "2019 — 2024",
    secondary1: "Wprowadzenie do lotnictwa · Pilotaż szybowca · 2017",
    secondary2: "Przygotowanie do Żandarmerii · 2018",
  },

  hobbies: {
    heading: "Poza pracą",
    items: [
      { key: "chess", label: "Szachy" },
      { key: "bee", label: "Pszczelarstwo" },
      { key: "snowboard", label: "Snowboard" },
      { key: "volley", label: "Siatkówka" },
      { key: "bike", label: "Kolarstwo" },
      { key: "motor", label: "Motocykl" },
      { key: "fitness", label: "Fitness" },
      { key: "glider", label: "Pilotaż szybowca" },
      { key: "code", label: "Kod & AI" },
    ],
  },

  outro: {
    nameSmall: "Clément Reiso",
    email: "reisoclement@gmail.com",
    location: "Grójec, Polska",
    cta: "Porozmawiajmy.",
  },
};
