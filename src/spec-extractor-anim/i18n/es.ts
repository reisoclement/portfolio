import type { Dict } from "./types";

export const es: Dict = {
  text: {
    hook: {
      kicker: "Revisión de specs a escala",
      stat: "Miles de páginas.",
      line: "50+ requisitos enterrados dentro.",
    },
    title: {
      kicker: "Bajo el capó",
      title: "Spec Data Extractor",
      version: "Versión 2.0",
      subtitle: "Cómo funciona realmente.",
    },
    problem: {
      heading: "Leer specs a mano es brutal.",
      bullets: [
        "Los ingenieros revisan cientos de páginas para encontrar cada restricción.",
        "Copiar-pegar a una hoja de cálculo — y se pierde el contexto de página.",
        "Un «shall» pasado por alto es una brecha de cumplimiento.",
      ],
    },
    pipeline: {
      kicker: "Vista del pipeline",
      heading: "Nueve etapas deterministas.",
      steps: [
        "Detectar idioma",
        "Compilar reglas",
        "Parsear PDF (palabras + bboxes)",
        "Buscar palabras clave + valores",
        "Filtrar TOC, títulos, referencias",
        "Detectar capítulo por hallazgo",
        "Renderizar resaltados",
        "Construir HTML interactivo",
        "Exportar PDF / CSV / JSON",
      ],
    },
    language: {
      kicker: "Paso 1",
      heading: "Detectar el idioma.",
      explainer:
        "Cuenta ~20 stopwords de alta señal en las primeras 3.000 palabras. Devuelve el idioma ganador con un puntaje de confianza.",
      bullet: "Sin modelo ML. Offline. Menos de 100 ms.",
      detected: "Detectado",
    },
    rules: {
      kicker: "Paso 2",
      heading: "Ocho categorías. Una sola pasada regex.",
      explainer:
        "Cada idioma trae su propio juego de palabras clave. Las frases multi-palabra se ordenan de la más larga a la más corta — «must not» gana a «must».",
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
        obligation: "Obligación",
        application: "Aplicación",
        compliance: "Conformidad",
        requirement: "Requisito",
        expectation: "Expectativa",
        assessment: "Evaluación",
        guarantee: "Garantía",
        numerical: "Numérico",
      },
      numericNote:
        "Los números solo cuentan cuando los sigue una unidad — los números de página y los dígitos sueltos quedan en silencio.",
    },
    extract: {
      kicker: "Pasos 3–4",
      heading: "Recorrer cada palabra.",
      libNote: "palabras + bounding boxes por página.",
      bullet:
        "Cada hallazgo registra página, posición, categoría y contexto.",
      matchesFound: "coincidencias encontradas",
    },
    hybrid: {
      kicker: "Paso 5",
      heading: "Una fila, con la granularidad correcta.",
      explainer:
        "La granularidad se elige fila por fila, automáticamente, según la forma real de la fuente.",
      caseProse: "Párrafo en prosa → una fila por oración encontrada.",
      caseTable: "Celda de tabla → una fila por celda, entera.",
      payoff: "Verás el corte más limpio para cada coincidencia.",
    },
    outputs: {
      kicker: "Salidas",
      heading: "Tres entregables, una sola corrida.",
      a: {
        title: "HTML interactivo",
        sub: "Lado a lado: vista del PDF + filas editables. Filtros, modos de color, revisión en la página.",
      },
      b: {
        title: "PDF resumen",
        sub: "Página · Capítulo · Especificación — imprimible para firma.",
      },
      c: {
        title: "PDF resaltado",
        sub: "Anotaciones nativas. El texto sigue siendo seleccionable en cualquier lector.",
      },
    },
    tutorialDivider: {
      kicker: "Parte 2",
      heading: "Ahora — cómo usarlo.",
      sub: "El reporte HTML es un espacio de trabajo, no un reporte estático.",
    },
    tutorialLayout: {
      kicker: "El layout",
      heading: "PDF a la izquierda. Tabla viva editable a la derecha.",
      explainer:
        "Cada página de la spec es una fila del reporte. La página renderizada está junto a las filas extraídas — el contexto está a un vistazo.",
      leftLabel: "Página PDF resaltada",
      rightLabel: "Filas editables",
      bullet: "Navegá página a página con ◀ ▶ o ↑ ↓. Editá sobre la marcha.",
    },
    tutorialRowActions: {
      kicker: "Acciones por fila",
      heading: "Cada fila es un taller.",
      sub: "Tocá cualquier celda para editarla. Las palabras detonadoras quedan bloqueadas — una tecla suelta no las pierde.",
      actions: {
        edit:      { name: "Editar",     desc: "Tocá el texto — se edita en el lugar." },
        split:     { name: "Dividir ✂",  desc: "Romper una fila en una fila por oración." },
        merge:     { name: "Unir ⤵",     desc: "Combinar la fila con la de abajo." },
        duplicate: { name: "Duplicar ⎘", desc: "Clonar la fila para reutilizar tipo copiar-pegar." },
        deleteAct: { name: "Borrar ✕",   desc: "Quitar una fila que no corresponde." },
        add:       { name: "Agregar +",  desc: "Insertar una fila en blanco, escribí la tuya." },
      },
      meta: {
        assessment: "Evaluación por fila — OK · NOK · N/A · sin evaluar",
        critical: "Switch Crítico — marcá las filas que el proveedor debe atender primero.",
        triggerLocked: "Las palabras detonadoras son de solo lectura. El resto es tuyo.",
      },
    },
    tutorialControls: {
      kicker: "Barra de herramientas",
      heading: "Herramientas para enfocar tu revisión.",
      items: {
        colorMode: {
          name: "Modo color",
          desc: "Alterná entre 2 tonos simples y la paleta completa de 8 categorías.",
        },
        categoryFilter: {
          name: "Filtro de categorías",
          desc: "Ocultá las categorías que no te importan en esta revisión.",
        },
        tableView: {
          name: "Vista tabla",
          desc: "Aplaná el reporte en una sola tabla grande para una pasada de auditoría.",
        },
        pageNav: {
          name: "Navegación de páginas",
          desc: "J / K o ↑ ↓ salta entre páginas con matches. Saltea las vacías.",
        },
        export: {
          name: "Exportar",
          desc: "Bajá la tabla viva en CSV o JSON — con tus ediciones incluidas.",
        },
      },
      toolbar: {
        colorMode: "Simple · Completo",
        categories: "Categorías: 8/8",
        tableView: "Vista tabla",
        hideEmpty: "Ocultar páginas vacías",
        assessment: "Evaluación: todas",
        downloadCsv: "Descargar CSV",
        downloadJson: "Descargar JSON",
      },
      payoff: "Todo queda en un HTML autocontenido — sin instalación, sin subida.",
    },
    ftlIntro: {
      kicker: "Próximamente",
      heading: "Y cuando llega la v2 de la spec…",
      bad1: "Volver a correr el extractor → se pierde cada edición curada.",
      bad2: "Comparar los dos PDF a ojo → días de trabajo, errores garantizados.",
      thirdOption: "La tercera vía",
      ftl: "FTL New Gen",
      payoff: "Forward, Track, Learn — el espacio que mantiene vivo tu trabajo.",
    },
    ftlDiff: {
      kicker: "FTL · el diff",
      heading: "v2 a la izquierda. Páginas v1 emparejadas a la derecha.",
      explainer:
        "Reutiliza el motor del PDF Comparer para emparejar páginas — incluso cuando se movieron dentro del documento.",
      legend: { added: "Agregado en v2", removed: "Quitado en v1", moved: "Ya mostrado" },
    },
    ftlDrawer: {
      kicker: "FTL · el cajón",
      heading: "Un taller flotante, anclado a la página visible.",
      explainer:
        "El cajón muestra las filas de extracción v1 que corresponden a la página por la que estás pasando.",
      bullet1: "Editá texto, cambiá categoría, borrá filas obsoletas.",
      bullet2: "Agregá filas a mano desde lo que ves en verde.",
      bullet3: "Guardá como un HTML fresco — entrada para la próxima ronda.",
      philosophy: "Asistente humano, no reemplazo.",
    },
    recap: {
      heading: "Ese es todo el ciclo.",
      bullets: [
        "Extracción por reglas — rápida, offline, determinista.",
        "Un taller lado a lado — revisión y edición en una sola pantalla.",
        "Tres entregables de salida — HTML, resumen, PDF anotado.",
        "FTL mantiene viva tu curación entre revisiones de la spec.",
      ],
      closer: "Hecho para que los ingenieros pasen menos tiempo cazando requisitos.",
    },
  },
  sceneTitles: {
    hook: "El dolor",
    title: "Spec Data Extractor",
    problem: "Por qué importa",
    pipeline: "El pipeline",
    language: "Detectar idioma",
    rules: "Ocho categorías",
    extract: "Recorrer cada palabra",
    hybrid: "Una fila, lista",
    outputs: "Tres entregables",
    tutorialDivider: "Parte 2 — Cómo usarlo",
    tutorialLayout: "Layout lado a lado",
    tutorialRowActions: "Acciones por fila",
    tutorialControls: "Tour de la barra",
    ftlIntro: "Próximamente — FTL",
    ftlDiff: "FTL · el diff",
    ftlDrawer: "FTL · el cajón",
    recap: "Recap",
  },
};
