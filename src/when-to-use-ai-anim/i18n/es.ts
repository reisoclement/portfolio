import type { Dict } from "./types";

export const es: Dict = {
  text: {
    hookQuestion: { line: "Por qué falla la IA" },
    hookStat: {
      percentLabel: "de los proyectos de IA en empresas fracasan.",
      source: "Fuente · MIT NANDA, 2025",
    },
    titleCard: {
      kicker: "Una guía corta para entender",
      title: "Cuándo usar IA.",
      subtitle: "Y, sobre todo, cuándo no.",
    },
    layers: {
      ai: "IA",
      programmingLanguages: "Lenguajes de programación",
      machineCode: "Código máquina",
      hardware: "Hardware / Transistores",
      electrons: "Electrones",
    },
    stackBuild: {
      headline: "La IA no salió de la nada.",
      subline: "Se apoya en 200 años de tecnología.",
      caption: "Capa a capa.",
    },
    aiLayer: {
      caption: "La IA es la capa más nueva. No un reemplazo.",
      sideAi: "IA  ·  Hoy",
      sideElectrons: "1804",
      present: "Hoy",
    },
    hwStory: {
      sub: "La máquina física",
      year: "1947",
      headline: "Una polilla atascada en un relé.",
      detail:
        "Harvard Mark II. El primer bug real. Así inventamos la depuración.",
    },
    codeStory: {
      sub: "Los 1 y los 0",
      year: "1962",
      headline: "Un símbolo perdido voló un cohete.",
      detail:
        "NASA Mariner 1. Una barra olvidada en código escrito a mano desvió el cohete. 18,5 M$ perdidos. Así inventamos la revisión de código.",
    },
    earlyLanguage: {
      sub: "El código que escribimos",
      headline: "Mira Python. Nadie confiaba en él al principio.",
      leftYear: "1991",
      leftTag: "Python · v0.9",
      leftQuote: "Demasiado lento para producción.\nUsa Perl mejor.",
      yearsBetween: "35 años",
      rightYear: "2026",
      rightTag: "Python · en todas partes",
      rightQuote: "Bancos, NASA,\nML, web, ciencia.",
      footer: "La misma herramienta. La confianza la construimos nosotros.",
    },
    lessons: {
      kicker: "Lección",
      one: "Construye algo que la IA sola no pueda reemplazar.",
      two: "No dependas solo de la IA.",
      three: "Elige la herramienta correcta para la tarea.",
      four: "Hazte tres preguntas antes de añadir IA.",
    },
    hookToggle: {
      kicker: "Ejemplo real",
      headline: "Una app de probador virtual.",
      tagline:
        "Sube tu foto y mira la ropa puesta antes de comprar. Construido sobre un pipeline propio de modelos de imagen y APIs.",
      cost1: "6 meses",
      cost2: "200 K$",
      cost3: "Pipeline propio",
      googleLabel: "Probador nativo",
      googleYear: "2025",
      toggleLabel: "Probador",
      toggleOn: "ON",
      toggleOff: "OFF",
      box1: "Subir\nfoto",
      box2: "Detectar\npostura",
      box3: "Quitar\nfondo",
      box4: "API modelo\nde ropa",
      box5: "Generar\nconjunto",
      box6: "Componer\n+ retocar",
      box7: "Imagen final",
      punch: "Eliminado por un solo interruptor.",
    },
    lesson1Takeaway: {
      kicker: "La lección",
      headline: "Construye algo que la IA sola no pueda reemplazar.",
      rules: [
        {
          num: "01",
          rule: "Apóyate en datos que solo TÚ tienes.",
          detail: "Datos internos, señales de clientes, señales propias.",
        },
        {
          num: "02",
          rule: "Envuélvelo en TU flujo de trabajo.",
          detail:
            "Lógica de dominio e integraciones que el modelo solo no replica.",
        },
        {
          num: "03",
          rule: "No compitas con los proveedores de modelos en su terreno.",
          detail:
            "Si OpenAI o Google pueden ofrecerlo de forma nativa, lo harán.",
        },
      ],
    },
    rule10: {
      kicker: "El camino correcto",
      headline: "La IA es una capa sobre las demás.",
      arrowLabel: "≈ 10%",
      diskCenter: "10%",
      diskSub: "IA",
      subline:
        "Cerca del 10% de IA. 90% de código clásico, reglas, validación.",
      legendAi: "IA",
      legendCode: "Código clásico",
    },
    backwards: {
      title: "Lo que hacen la mayoría de los equipos.",
      diskCenter: "90%",
      diskSub: "IA",
      tags: ["Alucinaciones", "Coste alto", "Impredecible"],
    },
    doUse: {
      title: "Usa IA cuando la tarea es difusa.",
      items: [
        "Resumir, traducir, reformular texto",
        "Describir lo que hay en una imagen",
        "Clasificar sentimiento o intención de texto libre",
        "Redactar un primer borrador (email, doc, código)",
        "Conectar conceptos ambiguos",
      ],
    },
    dontUse: {
      title: "No uses IA cuando la respuesta es exacta.",
      items: [
        "Comparar dos versiones de un documento o spec",
        "Extraer valores exactos de un archivo estructurado",
        "Consultar una base de datos, filtrar, ordenar",
        "Verificar tolerancias o reglas de conformidad",
        "Cualquier cosa reproducible y auditable",
      ],
    },
    decision: [
      {
        question: "¿La tarea tiene una respuesta exacta y verificable?",
        ifYes: "Escribe código",
      },
      {
        question: "¿Toca datos sensibles o confidenciales?",
        ifYes: "Sin modelo externo",
      },
      {
        question:
          "¿Un error aquí sería grave sin que un humano lo revise?",
        ifYes: "Mantén a un humano en el bucle",
      },
    ],
    mindset: {
      caption:
        "Usa primero las capas de abajo. Añade IA solo cuando haga falta.",
    },
    closer: {
      lineOne: "10% IA.",
      lineTwo: "90% todo lo demás.",
      kicker: "Cuándo usar IA",
    },
  },
  sceneTitles: {
    hookQuestion: "¿Por qué falla la IA?",
    hookStat: "95% fracasan",
    titleCard: "Título",
    stackBuild: "La pila",
    aiLayer: "Llega la IA",
    hwStory: "Hardware · 1947",
    codeStory: "Código máquina · 1962",
    earlyLanguage: "Python · 1991 → 2026",
    lesson1Card: "Lección 1",
    hookToggle: "Fracaso del probador virtual",
    lesson1Takeaway: "Reglas de defensibilidad",
    lesson2Card: "Lección 2",
    backwards: "Lo que hacen la mayoría",
    rule10: "La regla del 10%",
    lesson3Card: "Lección 3",
    doUse: "Cuándo usar IA",
    dontUse: "Cuándo no",
    lesson4Card: "Lección 4",
    decision: "Tres preguntas",
    mindset: "Primero las capas de abajo",
    closer: "10% IA · 90% resto",
  },
};
