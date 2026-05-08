// Per-locale dictionary for the build-agents-in-markdown animation.
// English is the source of truth — sibling locale files mirror this shape and
// TS will flag missing keys.

type FilePreview = {
  name: string;
  preview: string[];
};

type TaskStage = {
  name: string;
  label: string;
  preview: string[];
};

export type Dict = {
  text: {
    openingTitle: {
      titlePrefix: string;
      titleAccent: string;
      titleSuffix: string;
      subtitle: string;
    };
    markdown: {
      titlePrefix: string;
      titleAccent: string;
      titleSuffix: string;
      subtitle: string;
      raw: string[];
      rendered: {
        title: string;
        bodyBefore: string;
        bodyBold: string;
        bodyAfter: string;
        bullets: string[];
      };
    };
    folders: {
      knowledge: string;
      task: string;
    };
    knowledgeFiles: FilePreview[];
    agentReads: {
      typingHint: string;
      readingLabel: string;
      prompt: string;
      reading: string;
      read: string;
      ready: string;
    };
    taskArc: {
      empty: string;
      waiting: string;
      prompt: string;
    };
    taskStages: [TaskStage, TaskStage, TaskStage, TaskStage];
    headline: {
      title: string;
      subtitle: string;
    };
    sticky: {
      notebook: string[];
      green: string[];
      red: string;
    };
    rule: {
      filename: string;
      bullet: string;
      detail: string;
      stickyText: string;
    };
    terminal: {
      command: string;
      executing: string;
    };
    closingTitle: {
      titlePrefix: string;
      titleAccent: string;
      titleSuffix: string;
    };
  };
  sceneTitles: {
    openingTitle: string;
    markdown: string;
    folders: string;
    knowledge: string;
    agentReads: string;
    transitionToTask: string;
    taskArc: string;
    headline: string;
    sticky: string;
    rule: string;
    terminal: string;
    closing: string;
  };
};
