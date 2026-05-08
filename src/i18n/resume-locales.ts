// Resume-only locale extension.
// The animated resume supports a 5th language (Chinese / zh) that the rest of
// the site does NOT support. This module isolates that asymmetry so we don't
// have to add zh placeholders to every page in the site.

export const RESUME_LOCALES = ["en", "fr", "es", "pl", "zh"] as const;
export type ResumeLocale = (typeof RESUME_LOCALES)[number];

export const RESUME_LOCALE_LABELS: Record<ResumeLocale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  pl: "Polski",
  zh: "中文",
};

// Per-resume-locale strings used by the page chrome (eyebrow, headline, lede,
// tab labels, captions, viewer copy). For en/fr/es/pl this duplicates what's in
// the main site Dict; for zh it provides the only translation we have.
type ResumeStrings = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lede: string;
  resumeLanguageLabel: string;
  tabs: { ariaLabel: string; video: string; interactive: string };
  videoCaption: string;
  videoFallback: string;
  interactiveCaption: string;
  interactive: {
    stageButtonAriaSkip: string;
    stageButtonAriaRestart: string;
    stageButtonAriaAdvance: string;
    back: string;
    restart: string;
    next: string;
    skip: string;
    hintHtml: string;
  };
};

const en: ResumeStrings = {
  title: "Resume — Clément Reiso",
  description:
    "An animated CV by Clément Reiso — career, AI work, side projects, languages and a few hobbies.",
  eyebrow: "Animated CV",
  heading: "My resume — animated",
  lede:
    "A short animated walkthrough of who I am, where I've worked, what I've built, and what I do off the keyboard. Press play, or step through it scene by scene.",
  resumeLanguageLabel: "Resume language",
  tabs: { ariaLabel: "Playback mode", video: "Video", interactive: "Step by step" },
  videoCaption: "Press play. Around 95 seconds, no audio.",
  videoFallback: "Your browser does not support the video tag.",
  interactiveCaption:
    "One scene per press. Use this version when you want to take it slowly, or talk over each beat.",
  interactive: {
    stageButtonAriaSkip: "Skip to end of current scene",
    stageButtonAriaRestart: "Restart",
    stageButtonAriaAdvance: "Advance to next scene",
    back: "← Back",
    restart: "Restart",
    next: "Next →",
    skip: "Skip →",
    hintHtml:
      "Press <kbd>Space</kbd> or click the canvas to advance · <kbd>R</kbd> to restart",
  },
};

const fr: ResumeStrings = {
  title: "CV — Clément Reiso",
  description:
    "Le CV animé de Clément Reiso — parcours, IA, projets personnels, langues et quelques loisirs.",
  eyebrow: "CV animé",
  heading: "Mon CV — animé",
  lede:
    "Une courte visite animée de qui je suis, où j'ai travaillé, ce que j'ai construit, et ce que je fais en dehors du clavier. Lancez la lecture, ou avancez scène par scène.",
  resumeLanguageLabel: "Langue du CV",
  tabs: { ariaLabel: "Mode de lecture", video: "Vidéo", interactive: "Pas à pas" },
  videoCaption: "Lancez la lecture. Environ 95 secondes, sans audio.",
  videoFallback: "Votre navigateur ne prend pas en charge la balise vidéo.",
  interactiveCaption:
    "Une scène par appui. Utilisez cette version pour aller plus lentement, ou commenter chaque temps.",
  interactive: {
    stageButtonAriaSkip: "Passer à la fin de la scène en cours",
    stageButtonAriaRestart: "Recommencer",
    stageButtonAriaAdvance: "Passer à la scène suivante",
    back: "← Retour",
    restart: "Recommencer",
    next: "Suivant →",
    skip: "Passer →",
    hintHtml:
      "Appuyez sur <kbd>Espace</kbd> ou cliquez sur le canevas pour avancer · <kbd>R</kbd> pour recommencer",
  },
};

const es: ResumeStrings = {
  title: "CV — Clément Reiso",
  description:
    "El CV animado de Clément Reiso — trayectoria, IA, proyectos personales, idiomas y algunas aficiones.",
  eyebrow: "CV animado",
  heading: "Mi CV — animado",
  lede:
    "Un breve recorrido animado por quién soy, dónde he trabajado, qué he construido y qué hago fuera del teclado. Pulsa play, o avanza escena a escena.",
  resumeLanguageLabel: "Idioma del CV",
  tabs: { ariaLabel: "Modo de reproducción", video: "Vídeo", interactive: "Paso a paso" },
  videoCaption: "Pulsa play. Unos 95 segundos, sin audio.",
  videoFallback: "Tu navegador no admite la etiqueta de vídeo.",
  interactiveCaption:
    "Una escena por pulsación. Usa esta versión para ir más despacio o comentar cada momento.",
  interactive: {
    stageButtonAriaSkip: "Saltar al final de la escena actual",
    stageButtonAriaRestart: "Reiniciar",
    stageButtonAriaAdvance: "Pasar a la siguiente escena",
    back: "← Atrás",
    restart: "Reiniciar",
    next: "Siguiente →",
    skip: "Saltar →",
    hintHtml:
      "Pulsa <kbd>Espacio</kbd> o haz clic en el lienzo para avanzar · <kbd>R</kbd> para reiniciar",
  },
};

const pl: ResumeStrings = {
  title: "CV — Clément Reiso",
  description:
    "Animowane CV Clémenta Reiso — kariera, AI, projekty osobiste, języki i kilka pasji.",
  eyebrow: "Animowane CV",
  heading: "Moje CV — animowane",
  lede:
    "Krótka animowana opowieść o tym, kim jestem, gdzie pracowałem, co zbudowałem i co robię poza klawiaturą. Naciśnij play albo przechodź scena po scenie.",
  resumeLanguageLabel: "Język CV",
  tabs: { ariaLabel: "Tryb odtwarzania", video: "Wideo", interactive: "Krok po kroku" },
  videoCaption: "Naciśnij play. Około 95 sekund, bez dźwięku.",
  videoFallback: "Twoja przeglądarka nie obsługuje znacznika wideo.",
  interactiveCaption:
    "Jedna scena na kliknięcie. Użyj tej wersji, by iść wolniej lub omówić każdy moment.",
  interactive: {
    stageButtonAriaSkip: "Przewiń do końca obecnej sceny",
    stageButtonAriaRestart: "Zacznij od nowa",
    stageButtonAriaAdvance: "Przejdź do następnej sceny",
    back: "← Wstecz",
    restart: "Od nowa",
    next: "Dalej →",
    skip: "Pomiń →",
    hintHtml:
      "Naciśnij <kbd>Spacja</kbd> lub kliknij obszar, aby przejść dalej · <kbd>R</kbd>, aby zacząć od nowa",
  },
};

const zh: ResumeStrings = {
  title: "简历 — Clément Reiso",
  description: "Clément Reiso 的动画简历 — 职业经历、AI 工作、个人项目、语言能力以及一些兴趣爱好。",
  eyebrow: "动画简历",
  heading: "我的简历 — 动画版",
  lede:
    "一段简短的动画讲述：我是谁、在哪里工作过、做过什么，以及工作之外的爱好。点击播放，或一幕一幕地慢慢看。",
  resumeLanguageLabel: "简历语言",
  tabs: { ariaLabel: "播放模式", video: "视频", interactive: "逐幕播放" },
  videoCaption: "点击播放。约 95 秒，无声。",
  videoFallback: "您的浏览器不支持视频标签。",
  interactiveCaption: "每点击一次播放一幕。适合慢慢看或边看边讲解。",
  interactive: {
    stageButtonAriaSkip: "跳到当前场景结尾",
    stageButtonAriaRestart: "重新开始",
    stageButtonAriaAdvance: "进入下一场景",
    back: "← 上一幕",
    restart: "重新开始",
    next: "下一幕 →",
    skip: "跳过 →",
    hintHtml:
      "按 <kbd>空格</kbd> 或点击画面继续 · 按 <kbd>R</kbd> 重新开始",
  },
};

const RESUME_DICTS: Record<ResumeLocale, ResumeStrings> = { en, fr, es, pl, zh };

export function isResumeLocale(value: string | undefined | null): value is ResumeLocale {
  return !!value && (RESUME_LOCALES as readonly string[]).includes(value);
}

export function getResumeStrings(locale: ResumeLocale): ResumeStrings {
  return RESUME_DICTS[locale];
}

// HTML lang attribute per resume locale.
export const RESUME_HTML_LANG: Record<ResumeLocale, string> = {
  en: "en",
  fr: "fr",
  es: "es",
  pl: "pl",
  zh: "zh-CN",
};
