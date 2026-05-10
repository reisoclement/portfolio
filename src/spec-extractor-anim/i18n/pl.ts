import type { Dict } from "./types";

export const pl: Dict = {
  text: {
    hook: {
      kicker: "Przegląd specyfikacji na skalę",
      stat: "Tysiące stron.",
      line: "50+ wymagań ukrytych w środku.",
    },
    title: {
      kicker: "Pod maską",
      title: "Spec Data Extractor",
      version: "Wersja 2.0",
      subtitle: "Jak to naprawdę działa.",
    },
    problem: {
      heading: "Czytanie specyfikacji ręcznie to katorga.",
      bullets: [
        "Inżynierowie przeglądają setki stron, by znaleźć każde ograniczenie.",
        "Kopiuj-wklej do arkusza — i traci się kontekst strony.",
        "Jedno przeoczone „shall” to luka w zgodności.",
      ],
    },
    pipeline: {
      kicker: "Przegląd pipeline'u",
      heading: "Dziewięć deterministycznych etapów.",
      steps: [
        "Wykryj język",
        "Skompiluj reguły",
        "Sparsuj PDF (słowa + bboxy)",
        "Dopasuj słowa kluczowe + liczby",
        "Odfiltruj spis, nagłówki, odnośniki",
        "Wskaż rozdział dla trafienia",
        "Wyrenderuj podświetlenia",
        "Zbuduj interaktywny HTML",
        "Eksportuj PDF / CSV / JSON",
      ],
    },
    language: {
      kicker: "Krok 1",
      heading: "Wykryj język.",
      explainer:
        "Liczy ~20 mocnych słów-funkcyjnych w pierwszych 3000 słowach. Zwraca zwycięski język z poziomem pewności.",
      bullet: "Bez modelu ML. Offline. Poniżej 100 ms.",
      detected: "Wykryto",
    },
    rules: {
      kicker: "Krok 2",
      heading: "Osiem kategorii. Jeden przebieg regex.",
      explainer:
        "Każdy język ma własny zestaw słów kluczowych. Frazy wielowyrazowe są sortowane od najdłuższej — „must not” bije „must”.",
      categories: {
        obligation: "must · shall · prohibited",
        application: "applies · applicable",
        compliance: "comply · conform",
        requirement: "required · requested",
        expectation: "expected · target",
        assessment: "assessed · evaluated",
        guarantee: "ensure · guarantee",
        numerical: "5 mm · 80 dB · −40 °C",
      },
      labels: {
        obligation: "Obowiązek",
        application: "Zastosowanie",
        compliance: "Zgodność",
        requirement: "Wymaganie",
        expectation: "Oczekiwanie",
        assessment: "Ocena",
        guarantee: "Gwarancja",
        numerical: "Liczbowe",
      },
      numericNote:
        "Liczby liczą się tylko po jednostce — numery stron i same cyfry zostają w ciszy.",
    },
    extract: {
      kicker: "Kroki 3–4",
      heading: "Przejdź każde słowo.",
      libNote: "słowa + ramki na każdej stronie.",
      bullet:
        "Każde trafienie zapisuje stronę, pozycję, kategorię i kontekst.",
      matchesFound: "trafień",
    },
    hybrid: {
      kicker: "Krok 5",
      heading: "Jeden wiersz, w mądrej granulacji.",
      explainer:
        "Granularność dobierana jest wiersz po wierszu, automatycznie, według tego, jak wygląda źródło.",
      caseProse: "Akapit prozą → jeden wiersz na dopasowane zdanie.",
      caseTable: "Komórka tabeli → jeden wiersz na komórkę, w całości.",
      payoff: "Widzisz najczystsze cięcie dla każdego dopasowania.",
    },
    outputs: {
      kicker: "Wyjścia",
      heading: "Trzy artefakty, jeden przebieg.",
      a: {
        title: "Interaktywny HTML",
        sub: "Obok siebie: podgląd PDF + edytowalne wiersze. Filtry, tryby kolorów, przegląd w stronie.",
      },
      b: {
        title: "PDF podsumowanie",
        sub: "Strona · Rozdział · Specyfikacja — do wydruku i podpisu.",
      },
      c: {
        title: "PDF z podświetleniami",
        sub: "Natywne adnotacje. Tekst pozostaje zaznaczalny w każdym czytniku.",
      },
    },
    tutorialDivider: {
      kicker: "Część 2",
      heading: "Teraz — jak tego używać.",
      sub: "Raport HTML to przestrzeń pracy, nie statyczny dokument.",
    },
    tutorialLayout: {
      kicker: "Układ",
      heading: "PDF po lewej. Edytowalna tabela po prawej.",
      explainer:
        "Każda strona specyfikacji to wiersz raportu. Wyrenderowana strona stoi obok wyciągniętych z niej wierszy — kontekst jest na wyciągnięcie wzroku.",
      leftLabel: "Podświetlona strona PDF",
      rightLabel: "Edytowalne wiersze",
      bullet: "Przewijaj strona po stronie ◀ ▶ albo ↑ ↓. Edytuj na bieżąco.",
    },
    tutorialRowActions: {
      kicker: "Akcje wiersza",
      heading: "Każdy wiersz to mały warsztat.",
      sub: "Kliknij komórkę, żeby ją edytować. Słowa-wyzwalacze są zablokowane — przypadkowy klawisz ich nie zgubi.",
      actions: {
        edit:      { name: "Edytuj",     desc: "Kliknij tekst — edytuje się w miejscu." },
        split:     { name: "Podziel ✂",  desc: "Rozbij wiersz na po jednym na zdanie." },
        merge:     { name: "Scal ⤵",     desc: "Połącz wiersz z tym poniżej." },
        duplicate: { name: "Duplikuj ⎘", desc: "Sklonuj wiersz, jak kopiuj-wklej." },
        deleteAct: { name: "Usuń ✕",     desc: "Usuń wiersz, który tu nie pasuje." },
        add:       { name: "Dodaj +",    desc: "Wstaw pusty wiersz, wpisz swój." },
      },
      meta: {
        assessment: "Ocena na wiersz — OK · NOK · N/A · nieoceniony",
        critical: "Przełącznik Krytyczne — zaznacz wiersze, którymi dostawca ma się zająć w pierwszej kolejności.",
        triggerLocked: "Słowa-wyzwalacze są tylko do odczytu. Reszta jest twoja.",
      },
    },
    tutorialControls: {
      kicker: "Pasek narzędzi",
      heading: "Narzędzia, by zogniskować przegląd.",
      items: {
        colorMode: {
          name: "Tryb koloru",
          desc: "Przełącz między prostą paletą 2-tonową a pełną 8-kategorii.",
        },
        categoryFilter: {
          name: "Filtr kategorii",
          desc: "Ukryj kategorie, które w tym przeglądzie nie są ważne.",
        },
        tableView: {
          name: "Widok tabeli",
          desc: "Spłaszcz cały raport w jedną tabelę — wygodne do audytu.",
        },
        pageNav: {
          name: "Nawigacja stron",
          desc: "J / K lub ↑ ↓ przeskakuje między stronami z trafieniami. Pomija puste.",
        },
        export: {
          name: "Eksport",
          desc: "Pobierz żywą tabelę jako CSV lub JSON — z twoimi edycjami.",
        },
      },
      toolbar: {
        colorMode: "Prosty · Pełny",
        categories: "Kategorie: 8/8",
        tableView: "Widok tabeli",
        hideEmpty: "Ukryj puste strony",
        assessment: "Ocena: wszystkie",
        downloadCsv: "Pobierz CSV",
        downloadJson: "Pobierz JSON",
      },
      payoff: "Wszystko mieści się w samowystarczalnym HTML — bez instalacji, bez wgrywania.",
    },
    ftlIntro: {
      kicker: "Wkrótce",
      heading: "A potem przychodzi wersja 2 specyfikacji…",
      bad1: "Uruchom ekstraktor ponownie → tracisz każdą wykurowaną edycję.",
      bad2: "Porównuj oba PDF-y na oko → dni roboty, błędy gwarantowane.",
      thirdOption: "Trzecia droga",
      ftl: "FTL New Gen",
      payoff: "Forward, Track, Learn — przestrzeń, która utrzymuje twoją pracę przy życiu.",
    },
    ftlDiff: {
      kicker: "FTL · diff",
      heading: "v2 po lewej. Dopasowane strony v1 po prawej.",
      explainer:
        "Wykorzystuje silnik PDF Comparera do parowania stron — nawet gdy zmieniły miejsce w dokumencie.",
      legend: { added: "Dodane w v2", removed: "Usunięte z v1", moved: "Już pokazane" },
    },
    ftlDrawer: {
      kicker: "FTL · szuflada",
      heading: "Pływający warsztat, zakotwiczony w widocznej stronie.",
      explainer:
        "Szuflada wyciąga wiersze ekstrakcji v1, które należą do strony, którą właśnie przewijasz.",
      bullet1: "Edytuj tekst, zmień kategorię, usuń przestarzałe wiersze.",
      bullet2: "Dodaj nowe wiersze ręcznie z tego, co widać na zielono.",
      bullet3: "Zapisz jako świeży HTML — wejście do następnej rundy.",
      philosophy: "Pomocnik człowieka, nie zastępca.",
    },
    recap: {
      heading: "To cały cykl.",
      bullets: [
        "Ekstrakcja regułowa — szybko, offline, deterministycznie.",
        "Warsztat obok siebie — przegląd i edycja na jednym ekranie.",
        "Trzy artefakty na wyjściu — HTML, podsumowanie, opisany PDF.",
        "FTL utrzymuje twoją kurację żywą między rewizjami.",
      ],
      closer: "Zbudowane, by inżynierowie spędzali mniej czasu na polowaniu na wymagania.",
    },
  },
  sceneTitles: {
    hook: "Ból",
    title: "Spec Data Extractor",
    problem: "Dlaczego to ważne",
    pipeline: "Pipeline",
    language: "Wykryj język",
    rules: "Osiem kategorii",
    extract: "Każde słowo",
    hybrid: "Mądry wiersz",
    outputs: "Trzy artefakty",
    tutorialDivider: "Część 2 — Jak używać",
    tutorialLayout: "Układ obok siebie",
    tutorialRowActions: "Akcje wiersza",
    tutorialControls: "Tour po pasku",
    ftlIntro: "Wkrótce — FTL",
    ftlDiff: "FTL · diff",
    ftlDrawer: "FTL · szuflada",
    recap: "Podsumowanie",
  },
};
