import type { Dict } from "./types";

export const es: Dict = {
  text: {
    openingTitle: {
      titlePrefix: "Construye agentes con",
      titleAccent: "lenguaje natural",
      titleSuffix: ".",
      subtitle: "Sin framework. Sin magia.",
    },
    markdown: {
      titlePrefix: "¿Qué es",
      titleAccent: "markdown",
      titleSuffix: "?",
      subtitle: "Fácil de leer para un humano y para un LLM.",
      raw: [
        "# Pastel de chocolate",
        "",
        "Un postre **sencillo**.",
        "",
        "- 200g de harina",
        "- 100g de azúcar",
        "- 3 huevos",
      ],
      rendered: {
        title: "Pastel de chocolate",
        bodyBefore: "Un postre ",
        bodyBold: "sencillo",
        bodyAfter: ".",
        bullets: ["200g de harina", "100g de azúcar", "3 huevos"],
      },
    },
    folders: {
      knowledge: "knowledge/",
      task: "task/",
    },
    knowledgeFiles: [
      {
        name: "context.md",
        preview: ["# ¿Qué es esta cocina?", "", "Somos una pequeña pastelería.", "Hacemos pasteles."],
      },
      {
        name: "references.md",
        preview: ["# Dónde encontrar cosas", "", "- Las recetas están en el libro.", "- Pregunta al chef."],
      },
      {
        name: "rules/conventions.md",
        preview: ["# Cómo cocinamos", "", "- Siempre probar antes de servir.", "- Limpiar mientras se cocina."],
      },
      {
        name: "rules/things-to-avoid.md",
        preview: ["# Nunca hagas esto", "", "- Nunca abras el horno demasiado pronto.", "- Nunca te saltes el temporizador."],
      },
    ],
    agentReads: {
      typingHint: "Escribes una petición...",
      readingLabel: "Antes de actuar, el agente lee:",
      prompt: "Hacer un pastel de chocolate.",
      reading: "Leyendo...",
      read: "✓ Leído",
      ready: "✓ Listo para trabajar",
    },
    taskArc: {
      empty: "Vacío.",
      waiting: "Esperando una petición...",
      prompt: "Hacer un pastel de chocolate.",
    },
    taskStages: [
      {
        name: "1-recipe.md",
        label: "Lo que necesitamos.",
        preview: ["# Ingredientes", "", "- 200g de harina", "- 100g de azúcar", "- 100g de cacao", "- 3 huevos"],
      },
      {
        name: "2-plan.md",
        label: "El orden de los pasos.",
        preview: ["# Plan", "", "- Precalentar horno a 180°C.", "- Mezclar seco, luego líquido.", "- Hornear 30 minutos.", "- Dejar enfriar."],
      },
      {
        name: "3-cook/",
        label: "Cocinando de verdad.",
        preview: ["# Pasos", "", "- Pesar ingredientes.", "- Preparar la masa.", "- Hornear.", "- Decorar la parte superior."],
      },
      {
        name: "4-cake.plate",
        label: "El pastel terminado.",
        preview: ["# Servido", "", "🎂 Pastel de chocolate.", "1 pastel, 8 porciones.", "Listo para comer."],
      },
    ],
    headline: {
      title: "Primero, hazlo a mano.",
      subtitle: "Anota cada paso. Sobre todo los errores.",
    },
    sticky: {
      notebook: [
        "Precalentar el horno a 180.",
        "Pesar 200g de harina.",
        "Cascar 3 huevos.",
        "Incorporar suavemente. No batir.",
        "Hornear 30 minutos.",
      ],
      green: ["¡Funcionó!", "Conservar", "Sí", "OK", "Hecho"],
      red: "No abrir el horno antes de 25 min.",
    },
    rule: {
      filename: "# rules/things-to-avoid.md",
      bullet: "- Nunca abrir el horno antes de 25 minutos.",
      detail: "  El pastel se hundirá. Espera el temporizador.",
      stickyText: "No abrir el horno antes de 25 min.",
    },
    terminal: {
      command: "ejecutar agente: hacer un pastel de chocolate.",
      executing: "⏎ Ejecutando pipeline...",
    },
    closingTitle: {
      titlePrefix: "Construye agentes con",
      titleAccent: "lenguaje natural",
      titleSuffix: ".",
    },
  },
  sceneTitles: {
    openingTitle: "Título",
    markdown: "Qué es markdown",
    folders: "Las dos carpetas",
    knowledge: "Recorrido knowledge",
    agentReads: "El agente lee",
    transitionToTask: "Pasar a task",
    taskArc: "La tarea se desarrolla",
    headline: "Primero, a mano",
    sticky: "Notas y errores",
    rule: "El error se vuelve regla",
    terminal: "Ejecutar el agente",
    closing: "Construir agentes en markdown",
  },
};
