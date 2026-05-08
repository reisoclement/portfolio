// Shape of a per-locale dictionary for the animated resume.
// English is source-of-truth; sibling locales must mirror this shape.

export type Dict = {
  // Scene titles for the interactive viewer (shown in the meta chip)
  sceneTitles: {
    intro: string;
    career: string;
    journey: string;
    builds: string;
    sideProject: string;
    stack: string;
    education: string;
    hobbies: string;
    outro: string;
  };

  intro: {
    name: string;
    role: string;
    tagline: string;
  };

  career: {
    heading: string;
    roles: {
      reservist: { title: string; org: string; city: string };
      apprentice: { title: string; org: string; city: string };
      dataAi: { title: string; org: string; city: string };
      leadAi: { title: string; org: string; city: string };
    };
    selfLearning: {
      title: string;
      subtitle: string;
    };
  };

  journey: {
    eyebrow: string;
    company: string;
    closing: string;
    pins: {
      france: { country: string; role: string };
      romania: { country: string; role: string };
      poland: { country: string; role: string };
    };
  };

  builds: {
    heading: string;
    subEyebrow: string;
    subText: string;
    chatbot: { big: string; sub: string; caption: string };
    glossary: { big: string; sub: string; caption: string };
  };

  sideProject: {
    heading: string;
    bigLabel: string;
    description: string;
    supporting: {
      team: { value: string; label: string };
      realtime: { value: string; label: string };
      cto: { value: string; label: string };
    };
  };

  stack: {
    heading: string;
    skills: string[];
    languages: { name: string; level: string; bar: number }[];
  };

  education: {
    heading: string;
    school: string;
    degree: string;
    years: string;
    secondary1: string;
    secondary2: string;
  };

  hobbies: {
    heading: string;
    items: { key: HobbyKey; label: string }[];
  };

  outro: {
    nameSmall: string;
    email: string;
    location: string;
    cta: string;
  };
};

export type HobbyKey =
  | "chess"
  | "bee"
  | "snowboard"
  | "volley"
  | "bike"
  | "motor"
  | "fitness"
  | "glider"
  | "code";
