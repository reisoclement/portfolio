import type { Dict } from "./types";

// Polish narration. No em-dashes. Anchor words must literally appear in
// `text` so the alignment extractor can find them. Polish review by a
// native speaker recommended before publishing.

export const pl: Dict = {
  text: {
    intro: { thisIsYou: "To ty" },
    self: { title: "Co musisz zbudować" },
    partner: { title: "Twój partner" },
    children: { title: "Twoje dzieci" },
    fastRings: {
      family: "Rodzina",
      friends: "Przyjaciele",
      community: "Społeczność",
    },
    worldZoom: { country: "Kraj", world: "Świat" },
    reversal: {
      mostPeople: "Większość zaczyna tutaj",
      tryingToFix: "próbując naprawić świat",
      climateWars: ". Klimat, wojny,",
      politicsCountries: "polityka krajów",
      neverHeardOf: "o których nigdy wcześniej nie słyszeli",
      socialMediaTV: "zanim media społecznościowe lub telewizja",
      toldThem: "im o nich powiedziały.",
      whileCenter: "…a tymczasem środek",
      stillUnfilled: "wciąż jest pusty, jeszcze nie wyważony.",
    },
    closing: { master: "Opanuj środek.", thenExpand: "Potem się rozwijaj." },
    attributes: {
      "physical-health": "Zdrowie fizyczne",
      "mental-health": "Zdrowie psychiczne",
      "intellectual-growth": "Rozwój intelektualny",
      "emotional-regulation": "Regulacja emocji",
      "financial-stability": "Stabilność finansowa",
      "discipline-habits": "Dyscyplina i nawyki",
      "purpose-meaning": "Cel i sens",
      "integrity-values": "Uczciwość i wartości",
      "skills-mastery": "Umiejętności i mistrzostwo",
      spirituality: "Duchowość",
      communication: "Komunikacja",
      "trust-honesty": "Zaufanie i szczerość",
      "shared-values": "Wspólne wartości",
      "emotional-support": "Wsparcie emocjonalne",
      intimacy: "Bliskość",
      "conflict-resolution": "Rozwiązywanie konfliktów",
      "shared-goals": "Wspólne cele",
      patience: "Cierpliwość",
      "presence-time": "Obecność i czas",
      education: "Edukacja",
      boundaries: "Granice",
      "unconditional-love": "Bezwarunkowa miłość",
      "modeling-values": "Wzór wartości",
    },
  },
  sceneTitles: {
    intro: "To ty",
    self: "Co musisz zbudować",
    partner: "Twój partner",
    children: "Twoje dzieci",
    fastRings: "Rodzina · Przyjaciele · Społeczność",
    worldZoom: "Kraj i świat",
    reversal: "Większość zaczyna tutaj",
    closing: "Opanuj środek. Potem się rozwijaj.",
  },
  narration: [
    {
      id: "scene-1-intro",
      text:
        "Witaj w mojej koncepcji tego, jak zbudować swoje życie. A tutaj, na środku, to ty.",
      anchors: [
        { name: "circles", word: "zbudować" },
        { name: "this-is-you", word: "ty" },
      ],
    },
    {
      id: "scene-2-self",
      text:
        "W samym środku, zanim cokolwiek innego istnieje, jesteś tylko ty. I są rzeczy, które musisz zbudować dla siebie. Twoje zdrowie fizyczne. Twoje zdrowie psychiczne. Twoja zdolność do dalszego rozwoju, intelektualnie. Regulacja emocji. Stabilność finansowa. Twoja dyscyplina i nawyki. Twój cel w życiu. Twoja uczciwość. Twoje umiejętności. A nawet twoja duchowość. To praca, której nikt nie zrobi za ciebie.",
      anchors: [
        { name: "title", word: "zbudować" },
        { name: "attr-01", word: "fizyczne" },
        { name: "attr-02", word: "psychiczne" },
        { name: "attr-03", word: "intelektualnie" },
        { name: "attr-04", word: "emocji" },
        { name: "attr-05", word: "finansowa" },
        { name: "attr-06", word: "dyscyplina" },
        { name: "attr-07", word: "cel" },
        { name: "attr-08", word: "uczciwość" },
        { name: "attr-09", word: "umiejętności" },
        { name: "attr-10", word: "duchowość" },
      ],
    },
    {
      id: "scene-3-partner",
      text:
        "Potem przychodzi twój partner. Osoba najbliższa twojemu środkowi. A to, co naprawdę wszystko trzyma, to komunikacja. Prawdziwe zaufanie. Wspólne wartości. Wsparcie emocjonalne. Bliskość. Umiejętność radzenia sobie z konfliktem. Wspólne cele. I szczerze, dużo cierpliwości.",
      anchors: [
        { name: "title", word: "partner" },
        { name: "attr-01", word: "komunikacja" },
        { name: "attr-02", word: "zaufanie" },
        { name: "attr-03", word: "wartości", occurrence: 1 },
        { name: "attr-04", word: "wsparcie" },
        { name: "attr-05", word: "bliskość" },
        { name: "attr-06", word: "konfliktem" },
        { name: "attr-07", word: "cele" },
        { name: "attr-08", word: "cierpliwości" },
      ],
    },
    {
      id: "scene-4-children",
      text:
        "Gdy relacja z partnerem jest silna, mogą przyjść dzieci. A to, czego naprawdę potrzebują od ciebie, to twoja obecność. Edukacja. Granice. Bezwarunkowa miłość. Wartości, które pokazujesz każdego dnia. I znowu, dużo cierpliwości.",
      anchors: [
        { name: "title", word: "dzieci" },
        { name: "attr-01", word: "obecność" },
        { name: "attr-02", word: "edukacja" },
        { name: "attr-03", word: "granice" },
        { name: "attr-04", word: "bezwarunkowa" },
        { name: "attr-05", word: "wartości" },
        { name: "attr-06", word: "cierpliwości" },
      ],
    },
    {
      id: "scene-5-fast-rings",
      text: "I dalej. Rodzina. Przyjaciele. Społeczność.",
      anchors: [
        { name: "family", word: "rodzina" },
        { name: "friends", word: "przyjaciele" },
        { name: "community", word: "społeczność" },
      ],
    },
    {
      id: "scene-6-world-zoom",
      text: "Aż oddalisz się do swojego kraju. A potem, do całego świata.",
      anchors: [
        { name: "country", word: "kraju" },
        { name: "world", word: "świata" },
      ],
    },
    {
      id: "scene-7-reversal",
      text:
        "I tu jest pułapka. Większość zaczyna tutaj. Na zewnątrz. Próbując naprawić świat. Klimat. Wojny. Polityka, krajów, o których nawet nigdy nie słyszeli, zanim media społecznościowe lub telewizja im o nich powiedziały. Tymczasem środek, oni sami, jest wciąż całkiem pusty, jeszcze nie wyważony. Więc reszta nie utrzyma się wokół.",
      anchors: [
        { name: "most-people", word: "większość" },
        { name: "fix-world", word: "naprawić" },
        { name: "climate-wars", word: "klimat" },
        { name: "politics", word: "polityka" },
        { name: "never-heard", word: "słyszeli" },
        { name: "social-media", word: "społecznościowe" },
        { name: "told-them", word: "powiedziały" },
        { name: "while-center", word: "środek" },
        { name: "not-balanced", word: "pusty" },
      ],
    },
    {
      id: "scene-8-closing",
      text: "Więc, opanuj najpierw środek. Potem się rozwijaj.",
      anchors: [
        { name: "master", word: "opanuj" },
        { name: "expand", word: "rozwijaj" },
      ],
    },
  ],
};
