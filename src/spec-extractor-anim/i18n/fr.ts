import type { Dict } from "./types";

export const fr: Dict = {
  text: {
    hook: {
      kicker: "Revue de specs à grande échelle",
      stat: "Des milliers de pages.",
      line: "50+ exigences enfouies dedans.",
    },
    title: {
      kicker: "Sous le capot",
      title: "Spec Data Extractor",
      version: "Version 2.0",
      subtitle: "Comment ça marche vraiment.",
    },
    problem: {
      heading: "Lire une spec à la main, c'est brutal.",
      bullets: [
        "Des ingénieurs survolent des centaines de pages pour trouver chaque exigence.",
        "Copier-coller dans un tableur — et le contexte de page disparaît.",
        "Un « shall » oublié, c'est un écart de conformité.",
      ],
    },
    pipeline: {
      kicker: "Aperçu du pipeline",
      heading: "Neuf étapes déterministes.",
      steps: [
        "Détecter la langue",
        "Compiler les règles",
        "Parser le PDF (mots + bboxes)",
        "Repérer mots-clés + valeurs",
        "Filtrer TOC, titres, références",
        "Détecter le chapitre par occurrence",
        "Générer les surlignages",
        "Construire le HTML interactif",
        "Exporter PDF / CSV / JSON",
      ],
    },
    language: {
      kicker: "Étape 1",
      heading: "Détecter la langue.",
      explainer:
        "Compte ~20 mots-outils à fort signal sur les 3 000 premiers mots. Renvoie la langue gagnante avec un score de confiance.",
      bullet: "Pas de modèle ML. Hors ligne. Moins de 100 ms.",
      detected: "Détectée",
    },
    rules: {
      kicker: "Étape 2",
      heading: "Huit catégories. Une seule passe regex.",
      explainer:
        "Chaque langue a son jeu de mots-clés. Les expressions sont triées du plus long au plus court — « must not » bat « must ».",
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
        obligation: "Obligation",
        application: "Application",
        compliance: "Conformité",
        requirement: "Exigence",
        expectation: "Attente",
        assessment: "Évaluation",
        guarantee: "Garantie",
        numerical: "Numérique",
      },
      numericNote:
        "Les nombres ne comptent que suivis d'une unité — pas de bruit sur les numéros de page.",
    },
    extract: {
      kicker: "Étapes 3–4",
      heading: "Parcourir chaque mot.",
      libNote: "mots + boîtes englobantes par page.",
      bullet:
        "Chaque occurrence enregistre page, position, catégorie et contexte.",
      matchesFound: "occurrences trouvées",
    },
    hybrid: {
      kicker: "Étape 5",
      heading: "Une ligne, à la bonne maille.",
      explainer:
        "La granularité est choisie ligne par ligne, automatiquement, selon la nature réelle de la source.",
      caseProse: "Paragraphe → une ligne par phrase trouvée.",
      caseTable: "Cellule de tableau → une ligne par cellule, gardée entière.",
      payoff: "Vous voyez la coupe la plus propre pour chaque match.",
    },
    outputs: {
      kicker: "Sorties",
      heading: "Trois livrables, un seul run.",
      a: {
        title: "HTML interactif",
        sub: "Côte-à-côte : aperçu PDF + lignes éditables. Filtres, modes couleurs, revue dans la page.",
      },
      b: {
        title: "PDF de synthèse",
        sub: "Page · Chapitre · Spécification — imprimable pour validation.",
      },
      c: {
        title: "PDF surligné",
        sub: "Annotations natives. Le texte reste sélectionnable dans n'importe quel lecteur.",
      },
    },
    tutorialDivider: {
      kicker: "Partie 2",
      heading: "Maintenant — comment l'utiliser.",
      sub: "Le rapport HTML est un espace de travail, pas un rapport figé.",
    },
    tutorialLayout: {
      kicker: "La mise en page",
      heading: "PDF à gauche. Tableau éditable à droite.",
      explainer:
        "Chaque page de la spec est une ligne du rapport. La page rendue est à côté des lignes extraites — le contexte est à un coup d'œil.",
      leftLabel: "Page PDF surlignée",
      rightLabel: "Lignes éditables",
      bullet: "Naviguez page par page avec ◀ ▶ ou ↑ ↓. Éditez à la volée.",
    },
    tutorialRowActions: {
      kicker: "Actions par ligne",
      heading: "Chaque ligne est un atelier.",
      sub: "Cliquez sur une cellule pour l'éditer. Les mots déclencheurs restent verrouillés — pas de perte par frappe accidentelle.",
      actions: {
        edit:      { name: "Éditer",     desc: "Cliquez sur le texte — il s'édite sur place." },
        split:     { name: "Scinder ✂",  desc: "Casser une ligne en une ligne par phrase." },
        merge:     { name: "Fusionner ⤵", desc: "Combiner avec la ligne du dessous." },
        duplicate: { name: "Dupliquer ⎘", desc: "Cloner la ligne pour une réutilisation type copier-coller." },
        deleteAct: { name: "Supprimer ✕", desc: "Retirer une ligne qui n'a rien à faire ici." },
        add:       { name: "Ajouter +",  desc: "Insérer une ligne vierge, écrivez la vôtre." },
      },
      meta: {
        assessment: "Menu Évaluation par ligne — OK · NOK · N/A · non-évalué",
        critical: "Bascule Critique — pointer les lignes que le fournisseur doit traiter en premier.",
        triggerLocked: "Les mots déclencheurs sont en lecture seule. Le reste vous appartient.",
      },
    },
    tutorialControls: {
      kicker: "Barre d'outils",
      heading: "Des outils pour cibler votre revue.",
      items: {
        colorMode: {
          name: "Mode couleur",
          desc: "Basculez entre 2 tons simples et la palette complète à 8 catégories.",
        },
        categoryFilter: {
          name: "Filtre catégories",
          desc: "Cachez les catégories hors-sujet pour cette revue.",
        },
        tableView: {
          name: "Vue tableau",
          desc: "Aplatir le rapport en un grand tableau pour une passe d'audit.",
        },
        pageNav: {
          name: "Navigation pages",
          desc: "J / K ou ↑ ↓ saute entre pages avec matches. Les vides sont ignorées.",
        },
        export: {
          name: "Export",
          desc: "Téléchargez le tableau vivant en CSV ou JSON — vos éditions incluses.",
        },
      },
      toolbar: {
        colorMode: "Simple · Complet",
        categories: "Catégories : 8/8",
        tableView: "Vue tableau",
        hideEmpty: "Masquer pages vides",
        assessment: "Évaluation : toutes",
        downloadCsv: "Télécharger CSV",
        downloadJson: "Télécharger JSON",
      },
      payoff: "Tout reste dans un HTML autonome — pas d'install, pas d'upload.",
    },
    ftlIntro: {
      kicker: "À venir",
      heading: "Puis la v2 de la spec arrive…",
      bad1: "Relancer l'extracteur → toutes les éditions curées sont perdues.",
      bad2: "Comparer les deux PDF à l'œil → des jours de travail, des erreurs garanties.",
      thirdOption: "La troisième voie",
      ftl: "FTL New Gen",
      payoff: "Forward, Track, Learn — l'espace qui garde votre travail vivant.",
    },
    ftlDiff: {
      kicker: "FTL · le diff",
      heading: "v2 à gauche. Pages v1 appariées à droite.",
      explainer:
        "Réutilise le moteur de PDF Comparer pour apparier les pages — même quand elles ont bougé dans le document.",
      legend: { added: "Ajouté en v2", removed: "Retiré en v1", moved: "Déjà montré" },
    },
    ftlDrawer: {
      kicker: "FTL · le tiroir",
      heading: "Un atelier flottant, ancré à la page affichée.",
      explainer:
        "Le tiroir remonte les lignes d'extraction v1 qui correspondent à la page que vous parcourez.",
      bullet1: "Éditez le texte, changez la catégorie, supprimez les lignes obsolètes.",
      bullet2: "Ajoutez de nouvelles lignes à la main depuis ce que vous voyez en vert.",
      bullet3: "Sauvegardez en HTML frais — entrée pour le tour suivant.",
      philosophy: "Assistant, pas remplaçant.",
    },
    recap: {
      heading: "C'est tout le cycle.",
      bullets: [
        "Extraction par règles — rapide, hors ligne, déterministe.",
        "Un atelier côte-à-côte — revue et édition sur un seul écran.",
        "Trois livrables en sortie — HTML, synthèse, PDF annoté.",
        "FTL garde votre curation vivante d'une révision à l'autre.",
      ],
      closer: "Pensé pour que les ingénieurs cessent de chasser les exigences.",
    },
  },
  sceneTitles: {
    hook: "La douleur",
    title: "Spec Data Extractor",
    problem: "Pourquoi ça compte",
    pipeline: "Le pipeline",
    language: "Détecter la langue",
    rules: "Huit catégories",
    extract: "Parcourir chaque mot",
    hybrid: "Une ligne, futée",
    outputs: "Trois livrables",
    tutorialDivider: "Partie 2 — Comment l'utiliser",
    tutorialLayout: "Mise en page côte-à-côte",
    tutorialRowActions: "Actions par ligne",
    tutorialControls: "Tour de la barre d'outils",
    ftlIntro: "À venir — FTL",
    ftlDiff: "FTL · le diff",
    ftlDrawer: "FTL · le tiroir",
    recap: "Récap",
  },
};
