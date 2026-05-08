import type { Dict } from "./types";

export const pl: Dict = {
  text: {
    hookQuestion: { line: "Dlaczego AI się psuje" },
    hookStat: {
      percentLabel: "korporacyjnych projektów AI kończy się porażką.",
      source: "Źródło · MIT NANDA, 2025",
    },
    titleCard: {
      kicker: "Krótki przewodnik, by zrozumieć",
      title: "Kiedy używać AI.",
      subtitle: "I, co ważniejsze, kiedy nie używać.",
    },
    layers: {
      ai: "AI",
      programmingLanguages: "Języki programowania",
      machineCode: "Kod maszynowy",
      hardware: "Sprzęt / Tranzystory",
      electrons: "Elektrony",
    },
    stackBuild: {
      headline: "AI nie wzięło się znikąd.",
      subline: "Opiera się na 200 latach technologii.",
      caption: "Warstwa po warstwie.",
    },
    aiLayer: {
      caption: "AI to najnowsza warstwa. Nie zastępstwo.",
      sideAi: "AI  ·  Dziś",
      sideElectrons: "1804",
      present: "Dziś",
    },
    hwStory: {
      sub: "Maszyna fizyczna",
      year: "1947",
      headline: "Ćma utknęła w przekaźniku.",
      detail:
        "Harvard Mark II. Pierwszy prawdziwy bug. Tak zbudowaliśmy debugowanie.",
    },
    codeStory: {
      sub: "Zera i jedynki",
      year: "1962",
      headline: "Jeden brakujący znak wysadził rakietę.",
      detail:
        "NASA Mariner 1. Brakująca kreska w ręcznie pisanym kodzie zboczyła rakietę z kursu. Strata 18,5 mln $. Tak powstał code review.",
    },
    earlyLanguage: {
      sub: "Kod, który piszemy",
      headline: "Spójrz na Python. Na początku nikt mu nie ufał.",
      leftYear: "1991",
      leftTag: "Python · v0.9",
      leftQuote: "Za wolny do produkcji.\nUżyj raczej Perla.",
      yearsBetween: "35 lat",
      rightYear: "2026",
      rightTag: "Python · wszędzie",
      rightQuote: "Banki, NASA,\nML, web, nauka.",
      footer: "To samo narzędzie. Zaufanie zbudowaliśmy sami.",
    },
    lessons: {
      kicker: "Lekcja",
      one: "Buduj coś, czego sama AI nie zastąpi.",
      two: "Nie polegaj wyłącznie na AI.",
      three: "Wybierz właściwe narzędzie do zadania.",
      four: "Zadaj trzy pytania, zanim dodasz AI.",
    },
    hookToggle: {
      kicker: "Prawdziwy przykład",
      headline: "Aplikacja do wirtualnego przymierzania.",
      tagline:
        "Wgraj zdjęcie, zobacz na sobie ubrania przed zakupem. Zbudowane na własnym pipeline modeli obrazu i API.",
      cost1: "6 miesięcy",
      cost2: "200 tys. $",
      cost3: "Własny pipeline",
      googleLabel: "Natywne przymierzanie",
      googleYear: "2025",
      toggleLabel: "Przymierzanie",
      toggleOn: "ON",
      toggleOff: "OFF",
      box1: "Wgraj\nzdjęcie",
      box2: "Wykryj\npozę",
      box3: "Usuń\ntło",
      box4: "API modelu\nubrań",
      box5: "Generuj\nstrój",
      box6: "Złóż\n+ popraw",
      box7: "Końcowy obraz",
      punch: "Zabite jednym przełącznikiem.",
    },
    lesson1Takeaway: {
      kicker: "Lekcja",
      headline: "Buduj coś, czego sama AI nie zastąpi.",
      rules: [
        {
          num: "01",
          rule: "Buduj na danych, które masz tylko TY.",
          detail: "Dane wewnętrzne, sygnały klientów, dane własne.",
        },
        {
          num: "02",
          rule: "Wpleć to w SWÓJ workflow.",
          detail:
            "Logika dziedzinowa i integracje, których sam model nie odtworzy.",
        },
        {
          num: "03",
          rule: "Nie konkuruj z dostawcami modeli na ich polu.",
          detail:
            "Jeśli OpenAI lub Google mogą to dodać natywnie — zrobią to.",
        },
      ],
    },
    rule10: {
      kicker: "Właściwa droga",
      headline: "AI to jedna warstwa nad pozostałymi.",
      arrowLabel: "≈ 10%",
      diskCenter: "10%",
      diskSub: "AI",
      subline:
        "Około 10% AI. 90% klasycznego kodu, reguł i walidacji.",
      legendAi: "AI",
      legendCode: "Klasyczny kod",
    },
    backwards: {
      title: "Co robi większość zespołów.",
      diskCenter: "90%",
      diskSub: "AI",
      tags: ["Halucynacje", "Wysoki koszt", "Nieprzewidywalne"],
    },
    doUse: {
      title: "Używaj AI, gdy zadanie jest rozmyte.",
      items: [
        "Streszczanie, tłumaczenie, przeformułowanie tekstu",
        "Opis tego, co widać na obrazku",
        "Klasyfikacja nastroju lub intencji z tekstu swobodnego",
        "Pierwsza wersja (email, dokument, kod)",
        "Łączenie pojęć niejednoznacznych",
      ],
    },
    dontUse: {
      title: "Nie używaj AI, gdy odpowiedź jest jednoznaczna.",
      items: [
        "Porównanie dwóch wersji dokumentu lub specyfikacji",
        "Wyciąganie konkretnych wartości z plików ustrukturyzowanych",
        "Zapytania do bazy, filtrowanie, sortowanie",
        "Sprawdzanie tolerancji lub reguł zgodności",
        "Wszystko, co musi być powtarzalne i audytowalne",
      ],
    },
    decision: [
      {
        question: "Czy zadanie ma jednoznaczną, weryfikowalną odpowiedź?",
        ifYes: "Napisz kod",
      },
      {
        question: "Czy dotyczy danych wrażliwych lub poufnych?",
        ifYes: "Bez zewnętrznego modelu",
      },
      {
        question:
          "Czy błąd byłby groźny, jeśli nikt go nie sprawdzi?",
        ifYes: "Zostaw człowieka w pętli",
      },
    ],
    mindset: {
      caption:
        "Najpierw warstwy poniżej. Dodaj AI tylko wtedy, gdy naprawdę trzeba.",
    },
    closer: {
      lineOne: "10% AI.",
      lineTwo: "90% reszty.",
      kicker: "Kiedy używać AI",
    },
  },
  sceneTitles: {
    hookQuestion: "Dlaczego AI się psuje?",
    hookStat: "95% nie działa",
    titleCard: "Tytuł",
    stackBuild: "Stos",
    aiLayer: "AI ląduje",
    hwStory: "Sprzęt · 1947",
    codeStory: "Kod maszynowy · 1962",
    earlyLanguage: "Python · 1991 → 2026",
    lesson1Card: "Lekcja 1",
    hookToggle: "Porażka aplikacji do przymierzania",
    lesson1Takeaway: "Reguły obronności",
    lesson2Card: "Lekcja 2",
    backwards: "Co robi większość",
    rule10: "Reguła 10%",
    lesson3Card: "Lekcja 3",
    doUse: "Kiedy używać AI",
    dontUse: "Kiedy nie",
    lesson4Card: "Lekcja 4",
    decision: "Trzy pytania",
    mindset: "Najpierw warstwy poniżej",
    closer: "10% AI · 90% reszty",
  },
};
