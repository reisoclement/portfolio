import type { Dict } from "./types";

// Spanish narration. No em-dashes. Anchor words must literally appear in
// `text` (case-insensitive match) so alignment extraction can find them.

export const es: Dict = {
  text: {
    intro: { thisIsYou: "Este eres tú" },
    self: { title: "Lo que debes construir" },
    partner: { title: "Tu pareja" },
    children: { title: "Tus hijos" },
    fastRings: {
      family: "Familia",
      friends: "Amigos",
      community: "Comunidad",
    },
    worldZoom: { country: "País", world: "El mundo" },
    reversal: {
      mostPeople: "La mayoría empieza aquí",
      tryingToFix: "intentando arreglar el mundo",
      climateWars: ". Clima, guerras,",
      politicsCountries: "política de países",
      neverHeardOf: "de los que nunca habían oído hablar",
      socialMediaTV: "antes de las redes sociales o la tele.",
      toldThem: "Se lo dijeron.",
      whileCenter: "…mientras el centro",
      stillUnfilled: "sigue vacío, sin equilibrar.",
    },
    closing: { master: "Domina el centro.", thenExpand: "Luego expande." },
    attributes: {
      "physical-health": "Salud física",
      "mental-health": "Salud mental",
      "intellectual-growth": "Crecimiento intelectual",
      "emotional-regulation": "Regulación emocional",
      "financial-stability": "Estabilidad financiera",
      "discipline-habits": "Disciplina y hábitos",
      "purpose-meaning": "Propósito y sentido",
      "integrity-values": "Integridad y valores",
      "skills-mastery": "Habilidades y maestría",
      spirituality: "Espiritualidad",
      communication: "Comunicación",
      "trust-honesty": "Confianza y honestidad",
      "shared-values": "Valores compartidos",
      "emotional-support": "Apoyo emocional",
      intimacy: "Intimidad",
      "conflict-resolution": "Resolución de conflictos",
      "shared-goals": "Metas compartidas",
      patience: "Paciencia",
      "presence-time": "Presencia y tiempo",
      education: "Educación",
      boundaries: "Límites",
      "unconditional-love": "Amor incondicional",
      "modeling-values": "Modelar valores",
    },
  },
  sceneTitles: {
    intro: "Este eres tú",
    self: "Lo que debes construir",
    partner: "Tu pareja",
    children: "Tus hijos",
    fastRings: "Familia · Amigos · Comunidad",
    worldZoom: "País y mundo",
    reversal: "La mayoría empieza aquí",
    closing: "Domina el centro. Luego expande.",
  },
  narration: [
    {
      id: "scene-1-intro",
      text:
        "Bienvenido a mi idea sobre cómo construir su vida. Y justo aquí, en el medio, este eres tú.",
      anchors: [
        { name: "circles", word: "construir" },
        { name: "this-is-you", word: "tú" },
      ],
    },
    {
      id: "scene-2-self",
      text:
        "Justo en el centro, antes de que exista cualquier otra cosa, solo estás tú. Y hay cosas que tienes que construir para ti mismo. Tu salud física. Tu salud mental. Tu capacidad de seguir creciendo, intelectualmente. La regulación emocional. La estabilidad financiera. Tu disciplina y tus hábitos. Tu propósito en la vida. Tu integridad. Tus habilidades. E incluso tu espiritualidad. Este es el trabajo que nadie puede hacer por ti.",
      anchors: [
        { name: "title", word: "construir" },
        { name: "attr-01", word: "física" },
        { name: "attr-02", word: "mental" },
        { name: "attr-03", word: "intelectualmente" },
        { name: "attr-04", word: "emocional" },
        { name: "attr-05", word: "financiera" },
        { name: "attr-06", word: "disciplina" },
        { name: "attr-07", word: "propósito" },
        { name: "attr-08", word: "integridad" },
        { name: "attr-09", word: "habilidades" },
        { name: "attr-10", word: "espiritualidad" },
      ],
    },
    {
      id: "scene-3-partner",
      text:
        "Luego viene tu pareja. La persona más cercana a tu centro. Y lo que realmente lo sostiene es la comunicación. Confianza real. Valores compartidos. Apoyo emocional. Intimidad. Saber manejar el conflicto. Metas compartidas. Y, sinceramente, mucha paciencia.",
      anchors: [
        { name: "title", word: "pareja" },
        { name: "attr-01", word: "comunicación" },
        { name: "attr-02", word: "confianza" },
        { name: "attr-03", word: "valores", occurrence: 1 },
        { name: "attr-04", word: "apoyo" },
        { name: "attr-05", word: "intimidad" },
        { name: "attr-06", word: "conflicto" },
        { name: "attr-07", word: "metas" },
        { name: "attr-08", word: "paciencia" },
      ],
    },
    {
      id: "scene-4-children",
      text:
        "Una vez que la relación de pareja es fuerte, los hijos pueden venir. Y lo que realmente necesitan de ti, es tu presencia. Educación. Límites. Amor incondicional. Los valores que modelas cada día. Y otra vez, mucha paciencia.",
      anchors: [
        { name: "title", word: "hijos" },
        { name: "attr-01", word: "presencia" },
        { name: "attr-02", word: "educación" },
        { name: "attr-03", word: "límites" },
        { name: "attr-04", word: "incondicional" },
        { name: "attr-05", word: "valores" },
        { name: "attr-06", word: "paciencia" },
      ],
    },
    {
      id: "scene-5-fast-rings",
      text: "Y sigue. Familia. Amigos. Comunidad.",
      anchors: [
        { name: "family", word: "familia" },
        { name: "friends", word: "amigos" },
        { name: "community", word: "comunidad" },
      ],
    },
    {
      id: "scene-6-world-zoom",
      text: "Hasta que te alejas hasta tu país. Y luego, el mundo entero.",
      anchors: [
        { name: "country", word: "país" },
        { name: "world", word: "mundo" },
      ],
    },
    {
      id: "scene-7-reversal",
      text:
        "Y aquí está la trampa. La mayoría empieza aquí. Por fuera. Intentando arreglar el mundo. El clima. Las guerras. La política, de países de los que ni siquiera habían oído hablar, antes de que las redes sociales o la tele se lo dijeran. Mientras tanto, el centro, ellos mismos, sigue completamente vacío, sin equilibrar. Así que el resto no se sostiene alrededor.",
      anchors: [
        { name: "most-people", word: "mayoría" },
        { name: "fix-world", word: "arreglar" },
        { name: "climate-wars", word: "clima" },
        { name: "politics", word: "política" },
        { name: "never-heard", word: "oído" },
        { name: "social-media", word: "redes" },
        { name: "told-them", word: "dijeran" },
        { name: "while-center", word: "centro" },
        { name: "not-balanced", word: "vacío" },
      ],
    },
    {
      id: "scene-8-closing",
      text: "Así que, domina el centro primero. Luego expande.",
      anchors: [
        { name: "master", word: "domina" },
        { name: "expand", word: "expande" },
      ],
    },
  ],
};
