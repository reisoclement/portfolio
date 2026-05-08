import type { Dict } from "./types";

// Simplified Chinese (Mandarin) — Resume only.
export const zh: Dict = {
  sceneTitles: {
    intro: "你好",
    career: "职业历程",
    journey: "法国 · 罗马尼亚 · 波兰",
    builds: "VIE 第一年",
    sideProject: "个人项目",
    stack: "我的工作方式",
    education: "教育背景",
    hobbies: "工作之外",
    outro: "联系我",
  },

  intro: {
    name: "Clément Reiso",
    role: "人工智能\n首席工程师",
    tagline: "跨文化工程师，用人工智能驱动效率提升。",
  },

  career: {
    heading: "职业历程",
    roles: {
      reservist: {
        title: "宪兵预备役",
        org: "法国国家宪兵队",
        city: "法国",
      },
      apprentice: {
        title: "工艺工程师学徒",
        org: "FORVIA Faurecia",
        city: "法国 卡利尼",
      },
      dataAi: {
        title: "数据 AI 工程师 (VIE)",
        org: "FORVIA Faurecia",
        city: "罗马尼亚 特尔玛丘",
      },
      leadAi: {
        title: "首席 AI 工程师 (VIE)",
        org: "FORVIA Faurecia",
        city: "波兰 古鲁耶茨",
      },
    },
    selfLearning: {
      title: "自学 · AI 与编程",
      subtitle: "并行进行 · 从未停止",
    },
  },

  journey: {
    eyebrow: "全部在",
    company: "FORVIA Faurecia",
    closing: "从机械工程到引领人工智能。",
    pins: {
      france: { country: "法国", role: "学徒 → 工程师" },
      romania: { country: "罗马尼亚", role: "数据 AI 工程师" },
      poland: { country: "波兰", role: "首席 AI 工程师" },
    },
  },

  builds: {
    heading: "VIE 第一年",
    subEyebrow: "罗马尼亚 特尔玛丘 · 2024–2025",
    subText: "",
    chatbot: {
      big: "AI 聊天机器人",
      sub: "已部署到生产环境",
      caption: "在 FORVIA Faurecia 被数百名同事使用。",
    },
    glossary: {
      big: "技术术语库",
      sub: "从零开始构建",
      caption:
        "600 个英文术语翻译成 10 种语言，由 18 个领域的专家协作完成，已集成到 FUSION 中。",
    },
  },

  sideProject: {
    heading: "个人项目",
    bigLabel: "小时 · 利用业余时间",
    description:
      "工作之外，我担任一个 AI 平台的 CTO — 在那里我做原型，学习最前沿的技术，发布日常工作无法承担的想法。",
    supporting: {
      team: { value: "最多 8 人", label: "编程工程师" },
      realtime: { value: "实时", label: "文本 · 语音 · 图像 · 视频" },
      cto: { value: "CTO", label: "架构 · 规范 · 更新日志" },
    },
  },

  stack: {
    heading: "我的工作方式",
    skills: [
      "AI · 理论与实践",
      "领导力",
      "知识共享",
      "解决问题",
      "团队合作",
    ],
    languages: [
      { name: "法语", level: "母语", bar: 1 },
      { name: "英语", level: "C1 · TOEIC 960/990", bar: 0.92 },
      { name: "西班牙语", level: "B2", bar: 0.7 },
      { name: "罗马尼亚语", level: "初级", bar: 0.25 },
      { name: "波兰语", level: "初级", bar: 0.2 },
    ],
  },

  education: {
    heading: "教育背景",
    school: "雷恩国立应用科学学院 (INSA Rennes)",
    degree: "硕士 · 机械与自动化工程",
    years: "2019 — 2024",
    secondary1: "航空启蒙 · 滑翔机驾驶 · 2017",
    secondary2: "宪兵预备役预备课程 · 2018",
  },

  hobbies: {
    heading: "工作之外",
    items: [
      { key: "chess", label: "国际象棋" },
      { key: "bee", label: "养蜂" },
      { key: "snowboard", label: "单板滑雪" },
      { key: "volley", label: "排球" },
      { key: "bike", label: "骑行" },
      { key: "motor", label: "摩托车" },
      { key: "fitness", label: "健身" },
      { key: "glider", label: "滑翔机驾驶" },
      { key: "code", label: "编程与 AI" },
    ],
  },

  outro: {
    nameSmall: "Clément Reiso",
    email: "reisoclement@gmail.com",
    location: "波兰 古鲁耶茨",
    cta: "保持联系。",
  },
};
