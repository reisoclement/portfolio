import type { Dict } from "./types";

export const en: Dict = {
  sceneTitles: {
    intro: "Hello",
    career: "Career timeline",
    journey: "France · Romania · Poland",
    builds: "First year of VIE",
    sideProject: "Personal project",
    stack: "How I work",
    education: "Education",
    hobbies: "Outside of work",
    outro: "Let's talk",
  },

  intro: {
    name: "Clément Reiso",
    role: "Artificial Intelligence\nLead Engineer",
    tagline: "Cross-cultural engineer deploying AI that drives efficiency.",
  },

  career: {
    heading: "Career",
    roles: {
      reservist: {
        title: "Gendarmerie Reservist",
        org: "French National Gendarmerie",
        city: "France",
      },
      apprentice: {
        title: "Apprentice Process Engineer",
        org: "FORVIA Faurecia",
        city: "Caligny, France",
      },
      dataAi: {
        title: "Data AI Engineer (VIE)",
        org: "FORVIA Faurecia",
        city: "Talmaciu, Romania",
      },
      leadAi: {
        title: "Lead AI Engineer (VIE)",
        org: "FORVIA Faurecia",
        city: "Grójec, Poland",
      },
    },
    selfLearning: {
      title: "Self-learning · AI & Coding",
      subtitle: "In parallel · never stops",
    },
  },

  journey: {
    eyebrow: "All within",
    company: "FORVIA Faurecia",
    closing: "From mechanical engineering to leading AI.",
    pins: {
      france: { country: "France", role: "Apprentice → Engineer" },
      romania: { country: "Romania", role: "Data AI Engineer" },
      poland: { country: "Poland", role: "Lead AI Engineer" },
    },
  },

  builds: {
    heading: "First year of VIE",
    subEyebrow: "Talmaciu, Romania · 2024–2025",
    subText: "",
    chatbot: {
      big: "AI Chatbot",
      sub: "deployed to production",
      caption: "Used by hundreds of colleagues at FORVIA Faurecia.",
    },
    glossary: {
      big: "Technical Glossary",
      sub: "built from scratch",
      caption:
        "600 English terms translated into 10 languages, with experts across 18 domains. Integrated into FUSION.",
    },
  },

  sideProject: {
    heading: "Personal project",
    bigLabel: "hours · on my own time",
    description:
      "CTO of an AI-powered platform built outside of work — where I prototype, learn the bleeding edge, and ship ideas the day office can't always afford to chase.",
    supporting: {
      team: { value: "Up to 8", label: "coding engineers" },
      realtime: { value: "Real-time", label: "text · voice · image · video" },
      cto: { value: "CTO", label: "architecture · specs · changelogs" },
    },
  },

  stack: {
    heading: "How I work",
    skills: [
      "AI · theory & practice",
      "Leadership",
      "Knowledge sharing",
      "Problem solving",
      "Teamwork",
    ],
    languages: [
      { name: "French", level: "Native", bar: 1 },
      { name: "English", level: "C1 · TOEIC 960/990", bar: 0.92 },
      { name: "Spanish", level: "B2", bar: 0.7 },
      { name: "Romanian", level: "Beginner", bar: 0.25 },
      { name: "Polish", level: "Beginner", bar: 0.2 },
    ],
  },

  education: {
    heading: "Education",
    school: "INSA Rennes",
    degree: "Master's · Mechanical & Automatic Engineering",
    years: "2019 — 2024",
    secondary1: "Aeronautics initiation · Glider piloting · 2017",
    secondary2: "Gendarmerie preparatory program · 2018",
  },

  hobbies: {
    heading: "Outside of work",
    items: [
      { key: "chess", label: "Chess" },
      { key: "bee", label: "Beekeeping" },
      { key: "snowboard", label: "Snowboarding" },
      { key: "volley", label: "Volleyball" },
      { key: "bike", label: "Cycling" },
      { key: "motor", label: "Motorbike" },
      { key: "fitness", label: "Fitness" },
      { key: "glider", label: "Glider piloting" },
      { key: "code", label: "Coding & AI" },
    ],
  },

  outro: {
    nameSmall: "Clément Reiso",
    email: "reisoclement@gmail.com",
    location: "Grójec, Poland",
    cta: "Let's talk.",
  },
};
