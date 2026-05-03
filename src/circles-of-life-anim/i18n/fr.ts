import type { Dict } from "./types";

// French narration. No em-dashes (per project rule — ElevenLabs handles them
// inconsistently). Anchor words must literally appear in `text` so the
// alignment extractor can find them.

export const fr: Dict = {
  text: {
    intro: { thisIsYou: "C'est toi" },
    self: { title: "Ce que tu dois construire" },
    partner: { title: "Ton partenaire" },
    children: { title: "Tes enfants" },
    fastRings: {
      family: "Famille",
      friends: "Amis",
      community: "Communauté",
    },
    worldZoom: { country: "Pays", world: "Le monde" },
    reversal: {
      mostPeople: "La plupart des gens commencent ici",
      tryingToFix: "à essayer de réparer le monde",
      climateWars: ". Climat, guerres,",
      politicsCountries: "politique de pays",
      neverHeardOf: "dont ils n'avaient jamais entendu parler",
      socialMediaTV: "avant les réseaux sociaux ou la télé.",
      toldThem: "On leur a dit.",
      whileCenter: "…pendant ce temps, le centre",
      stillUnfilled: "reste vide, pas encore équilibré.",
    },
    closing: { master: "Maîtrise le centre.", thenExpand: "Puis élargis." },
    attributes: {
      "physical-health": "Santé physique",
      "mental-health": "Santé mentale",
      "intellectual-growth": "Croissance intellectuelle",
      "emotional-regulation": "Régulation émotionnelle",
      "financial-stability": "Stabilité financière",
      "discipline-habits": "Discipline & habitudes",
      "purpose-meaning": "Sens & raison d'être",
      "integrity-values": "Intégrité & valeurs",
      "skills-mastery": "Compétences & maîtrise",
      spirituality: "Spiritualité",
      communication: "Communication",
      "trust-honesty": "Confiance & honnêteté",
      "shared-values": "Valeurs communes",
      "emotional-support": "Soutien émotionnel",
      intimacy: "Intimité",
      "conflict-resolution": "Résolution des conflits",
      "shared-goals": "Objectifs communs",
      patience: "Patience",
      "presence-time": "Présence & temps",
      education: "Éducation",
      boundaries: "Limites",
      "unconditional-love": "Amour inconditionnel",
      "modeling-values": "Modèle de valeurs",
    },
  },
  sceneTitles: {
    intro: "C'est toi",
    self: "Ce que tu dois construire",
    partner: "Ton partenaire",
    children: "Tes enfants",
    fastRings: "Famille · Amis · Communauté",
    worldZoom: "Pays et monde",
    reversal: "La plupart des gens commencent ici",
    closing: "Maîtrise le centre. Puis élargis.",
  },
  narration: [
    {
      id: "scene-1-intro",
      text:
        "Bienvenue dans mon idée de comment construire sa vie. Et juste ici, au milieu, c'est toi.",
      anchors: [
        { name: "circles", word: "construire" },
        { name: "this-is-you", word: "toi" },
      ],
    },
    {
      id: "scene-2-self",
      text:
        "Au centre, avant tout le reste, il y a juste toi. Et il y a des choses que tu dois construire pour toi-même. Ta santé physique. Ta santé mentale. Ta capacité à grandir, intellectuellement. La régulation émotionnelle. La stabilité financière. Ta discipline et tes habitudes. Ton but dans la vie. Ton intégrité. Tes compétences. Et même ta spiritualité. C'est le travail que personne ne peut faire à ta place.",
      anchors: [
        { name: "title", word: "construire" },
        { name: "attr-01", word: "physique" },
        { name: "attr-02", word: "mentale" },
        { name: "attr-03", word: "intellectuellement" },
        { name: "attr-04", word: "émotionnelle" },
        { name: "attr-05", word: "financière" },
        { name: "attr-06", word: "discipline" },
        { name: "attr-07", word: "but" },
        { name: "attr-08", word: "intégrité" },
        { name: "attr-09", word: "compétences" },
        { name: "attr-10", word: "spiritualité" },
      ],
    },
    {
      id: "scene-3-partner",
      text:
        "Ensuite vient ton partenaire. La personne la plus proche de ton centre. Et ce qui tient vraiment, c'est la communication. Une vraie confiance. Des valeurs communes. Le soutien émotionnel. L'intimité. Savoir gérer les conflits. Des objectifs partagés. Et honnêtement, beaucoup de patience.",
      anchors: [
        { name: "title", word: "partenaire" },
        { name: "attr-01", word: "communication" },
        { name: "attr-02", word: "confiance" },
        { name: "attr-03", word: "valeurs", occurrence: 1 },
        { name: "attr-04", word: "soutien" },
        { name: "attr-05", word: "intimité" },
        { name: "attr-06", word: "conflits" },
        { name: "attr-07", word: "objectifs" },
        { name: "attr-08", word: "patience" },
      ],
    },
    {
      id: "scene-4-children",
      text:
        "Une fois la relation avec le partenaire solide, les enfants peuvent venir. Et ce dont ils ont vraiment besoin, c'est de ta présence. De l'éducation. Des limites. De l'amour inconditionnel. Les valeurs que tu modèles chaque jour. Et encore, beaucoup de patience.",
      anchors: [
        { name: "title", word: "enfants" },
        { name: "attr-01", word: "présence" },
        { name: "attr-02", word: "éducation" },
        { name: "attr-03", word: "limites" },
        { name: "attr-04", word: "inconditionnel" },
        { name: "attr-05", word: "valeurs" },
        { name: "attr-06", word: "patience" },
      ],
    },
    {
      id: "scene-5-fast-rings",
      text: "Et ça continue. La famille. Les amis. La communauté.",
      anchors: [
        { name: "family", word: "famille" },
        { name: "friends", word: "amis" },
        { name: "community", word: "communauté" },
      ],
    },
    {
      id: "scene-6-world-zoom",
      text: "Jusqu'à ce que tu prennes du recul vers ton pays. Et ensuite, le monde entier.",
      anchors: [
        { name: "country", word: "pays" },
        { name: "world", word: "monde" },
      ],
    },
    {
      id: "scene-7-reversal",
      text:
        "Et voilà le piège. La plupart des gens commencent ici. À l'extérieur. À essayer de réparer le monde. Le climat. Les guerres. La politique, de pays dont ils n'avaient même jamais entendu parler, avant que les réseaux sociaux ou la télé ne leur en parlent. Pendant ce temps, le centre, eux-mêmes, est encore complètement vide, pas encore équilibré. Alors le reste ne tient pas autour.",
      anchors: [
        { name: "most-people", word: "plupart" },
        { name: "fix-world", word: "réparer" },
        { name: "climate-wars", word: "climat" },
        { name: "politics", word: "politique" },
        { name: "never-heard", word: "entendu" },
        { name: "social-media", word: "réseaux" },
        { name: "told-them", word: "parlent" },
        { name: "while-center", word: "centre" },
        { name: "not-balanced", word: "vide" },
      ],
    },
    {
      id: "scene-8-closing",
      text: "Alors, maîtrise le centre d'abord. Puis élargis.",
      anchors: [
        { name: "master", word: "maîtrise" },
        { name: "expand", word: "élargis" },
      ],
    },
  ],
};
