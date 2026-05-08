import type { Dict } from "./types";

export const es: Dict = {
  sceneTitles: {
    intro: "Hola",
    career: "Trayectoria",
    journey: "Francia · Rumania · Polonia",
    builds: "Primer año del VIE",
    sideProject: "Proyecto personal",
    stack: "Cómo trabajo",
    education: "Formación",
    hobbies: "Fuera del trabajo",
    outro: "Hablemos",
  },

  intro: {
    name: "Clément Reiso",
    role: "Lead Engineer\nde Inteligencia Artificial",
    tagline: "Ingeniero multicultural que despliega IA para ganar eficiencia.",
  },

  career: {
    heading: "Trayectoria",
    roles: {
      reservist: {
        title: "Gendarme Reservista",
        org: "Gendarmería Nacional Francesa",
        city: "Francia",
      },
      apprentice: {
        title: "Aprendiz Ingeniero de Procesos",
        org: "FORVIA Faurecia",
        city: "Caligny, Francia",
      },
      dataAi: {
        title: "Ingeniero Data IA (VIE)",
        org: "FORVIA Faurecia",
        city: "Tălmaciu, Rumania",
      },
      leadAi: {
        title: "Lead Ingeniero IA (VIE)",
        org: "FORVIA Faurecia",
        city: "Grójec, Polonia",
      },
    },
    selfLearning: {
      title: "Auto-aprendizaje · IA & Código",
      subtitle: "En paralelo · sin parar",
    },
  },

  journey: {
    eyebrow: "Todo en",
    company: "FORVIA Faurecia",
    closing: "De la mecánica a liderar la IA.",
    pins: {
      france: { country: "Francia", role: "Aprendiz → Ingeniero" },
      romania: { country: "Rumania", role: "Ingeniero Data IA" },
      poland: { country: "Polonia", role: "Lead Ingeniero IA" },
    },
  },

  builds: {
    heading: "Primer año del VIE",
    subEyebrow: "Tălmaciu, Rumania · 2024–2025",
    subText: "",
    chatbot: {
      big: "Chatbot de IA",
      sub: "desplegado en producción",
      caption: "Usado por cientos de colegas en FORVIA Faurecia.",
    },
    glossary: {
      big: "Glosario Técnico",
      sub: "construido desde cero",
      caption:
        "600 términos en inglés traducidos a 10 idiomas, con expertos de 18 áreas. Integrado en FUSION.",
    },
  },

  sideProject: {
    heading: "Proyecto personal",
    bigLabel: "horas · en mi tiempo libre",
    description:
      "CTO de una plataforma de IA construida fuera del trabajo — donde prototipo, aprendo lo más nuevo y lanzo ideas que la oficina del día a día no siempre puede perseguir.",
    supporting: {
      team: { value: "Hasta 8", label: "ingenieros desarrolladores" },
      realtime: { value: "Tiempo real", label: "texto · voz · imagen · vídeo" },
      cto: { value: "CTO", label: "arquitectura · specs · changelogs" },
    },
  },

  stack: {
    heading: "Cómo trabajo",
    skills: [
      "IA · teoría y práctica",
      "Liderazgo",
      "Compartir conocimiento",
      "Resolución de problemas",
      "Trabajo en equipo",
    ],
    languages: [
      { name: "Francés", level: "Lengua materna", bar: 1 },
      { name: "Inglés", level: "C1 · TOEIC 960/990", bar: 0.92 },
      { name: "Español", level: "B2", bar: 0.7 },
      { name: "Rumano", level: "Principiante", bar: 0.25 },
      { name: "Polaco", level: "Principiante", bar: 0.2 },
    ],
  },

  education: {
    heading: "Formación",
    school: "INSA Rennes",
    degree: "Máster · Ingeniería Mecánica y Automática",
    years: "2019 — 2024",
    secondary1: "Iniciación aeronáutica · Pilotaje de planeador · 2017",
    secondary2: "Preparación Gendarmería · 2018",
  },

  hobbies: {
    heading: "Fuera del trabajo",
    items: [
      { key: "chess", label: "Ajedrez" },
      { key: "bee", label: "Apicultura" },
      { key: "snowboard", label: "Snowboard" },
      { key: "volley", label: "Voleibol" },
      { key: "bike", label: "Ciclismo" },
      { key: "motor", label: "Moto" },
      { key: "fitness", label: "Fitness" },
      { key: "glider", label: "Pilotaje de planeador" },
      { key: "code", label: "Código & IA" },
    ],
  },

  outro: {
    nameSmall: "Clément Reiso",
    email: "reisoclement@gmail.com",
    location: "Grójec, Polonia",
    cta: "Hablemos.",
  },
};
