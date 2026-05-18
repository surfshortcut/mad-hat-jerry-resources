export type ToolResource = {
  label: string;
  href: string;
  note?: string;
};

export type Locale = "en" | "zh";

type LocalizedText = Record<Locale, string>;

export type ContentBlock =
  | { type: "list"; items: string[] }
  | { type: "install"; command: string; label?: string };

export type BodyItem = string | ContentBlock;

export type Tool = {
  slug: string;
  title: LocalizedText;
  kicker: LocalizedText;
  description: LocalizedText;
  coverTitle?: LocalizedText;
  keyword: string;
  publishedAt: string;
  hashtags: string[];
  cover?: string;
  accent: string;
  shareTitle: LocalizedText;
  shareIntro: LocalizedText;
  shareLinks?: ToolResource[];
  sections: {
    heading: LocalizedText;
    body: Record<Locale, BodyItem[]>;
    links?: ToolResource[];
  }[];
  resources: ToolResource[];
};

export const tools: Tool[] = [
  {
    slug: "html-in-canvas",
    title: {
      en: "HTML in Canvas",
      zh: "HTML in Canvas",
    },
    kicker: {
      en: "Chrome / Brave experiment",
      zh: "Chrome / Brave 實驗功能",
    },
    description: {
      en: "Draw real DOM elements into Canvas for interactive websites, visual effects, game UI, and creative demos.",
      zh: "把真實 DOM 元素畫進 Canvas，適合做互動式網頁、視覺特效、遊戲 UI 和創意 demo。",
    },
    keyword: "CANVAS",
    publishedAt: "2026-05-14",
    hashtags: ["#HTMLCanvas", "#CreativeCoding", "#WebDesign"],
    cover: "/tools/html-in-canvas-cover.png",
    accent: "teal",
    shareTitle: {
      en: "How to experience HTML in Canvas",
      zh: "如何體驗 HTML in Canvas",
    },
    shareIntro: {
      en: "This feature works in regular Chrome and Brave. No experimental browser build is needed; enable one flag, relaunch, then try the demos.",
      zh: "這個功能現在可在一般 Chrome 和 Brave 裡體驗，不需要安裝實驗版瀏覽器。開啟一個 flag、重啟瀏覽器，就能試下面的 demo。",
    },
    sections: [
      {
        heading: {
          en: "Step 1: Enable the API",
          zh: "步驟 1：啟用 API",
        },
        body: {
          en: [
            "This takes about 30 seconds.",
            "Copy chrome://flags/#canvas-draw-element into the Chrome or Brave address bar. Chrome blocks direct links to internal settings, so you must copy and paste it manually.",
            "Find Enable the new drawElement API for Canvas and set it to Enabled.",
            "Click Relaunch to restart the browser.",
          ],
          zh: [
            "大約 30 秒就能完成。",
            "把 chrome://flags/#canvas-draw-element 複製到 Chrome 或 Brave 的網址列。Chrome 會阻擋直接點擊內部設定頁，所以要手動複製貼上。",
            "找到 Enable the new drawElement API for Canvas，改成 Enabled。",
            "按 Relaunch 重新啟動瀏覽器。",
          ],
        },
      },
      {
        heading: {
          en: "Step 2: Try playable demos",
          zh: "步驟 2：試玩互動 demo",
        },
        body: {
          en: [
            "Start with the official demo to confirm the flag is working.",
            "The Omma and Whitespace demos are better for seeing what creators can build with interactive pages, 3D effects, and richer UI experiments.",
          ],
          zh: [
            "官方 demo 最適合拿來確認功能是否有成功開啟。",
            "Omma 和 Whitespace 的 demo 比較適合看創作可能性，像互動網頁、3D 效果和更複雜的 UI 實驗。",
          ],
        },
        links: [
          {
            label: "Official HTML in Canvas Demo",
            href: "https://html-in-canvas.dev/",
          },
          {
            label: "Omma Community Demo",
            href: "https://omma.build/community/hkqylcr6jhpu",
          },
          {
            label: "Whitespace Experiments",
            href: "https://experiments.thisiswhitespace.com/",
          },
        ],
      },
      {
        heading: {
          en: "Community creations",
          zh: "社群創作參考",
        },
        body: {
          en: [
            "These X/Twitter posts are useful if you want to see what other developers are already building with the API.",
          ],
          zh: [
            "如果你想看其他開發者已經用這個 API 做出什麼，下面這些 X/Twitter 範例可以先看。",
          ],
        },
        links: [
          {
            label: "Demo by @solarise_webdev",
            href: "https://x.com/solarise_webdev/status/2042357703826108563",
          },
          {
            label: "Demo by @tkm_hmng8",
            href: "https://x.com/tkm_hmng8/status/2042186512545272290",
          },
          {
            label: "Demo by @kaolti",
            href: "https://x.com/kaolti/status/2050715622879760502",
          },
          {
            label: "Demo by @mattrothenberg",
            href: "https://x.com/mattrothenberg/status/2043439232119677047",
          },
          {
            label: "Demo by @gaborpribek",
            href: "https://x.com/gaborpribek/status/2047010011210273124",
          },
          {
            label: "Another demo by @kaolti",
            href: "https://x.com/kaolti/status/2047835384441123002",
          },
          {
            label: "Another demo by @mattrothenberg",
            href: "https://x.com/mattrothenberg/status/2039875548906733965",
          },
        ],
      },
    ],
    resources: [
      {
        label: "Official HTML in Canvas Demo",
        href: "https://html-in-canvas.dev/",
      },
      {
        label: "Omma Community Demo",
        href: "https://omma.build/community/hkqylcr6jhpu",
      },
      {
        label: "Whitespace Experiments",
        href: "https://experiments.thisiswhitespace.com/",
      },
    ],
  },
  {
    slug: "maigret",
    title: {
      en: "Maigret Username Scan",
      zh: "Maigret Username Scan",
    },
    kicker: {
      en: "OSINT self-check tool",
      zh: "OSINT 自我檢查工具",
    },
    description: {
      en: "Enter a username and check its public footprint across many sites. Best used to review your own account exposure.",
      zh: "輸入一個 username，檢查它在多個網站上的公開足跡。適合拿來檢查自己的帳號暴露程度。",
    },
    keyword: "SCAN",
    publishedAt: "2026-05-12",
    hashtags: ["#OSINT", "#Privacy", "#UsernameSearch"],
    cover: "/tools/maigret-cover.png",
    accent: "rose",
    shareTitle: {
      en: "Open the Maigret project first",
      zh: "先打開 Maigret 專案",
    },
    shareIntro: {
      en: "Maigret is the GitHub tool from the video. Start from the project page, then use it to review your own public username footprint.",
      zh: "Maigret 是影片裡提到的 GitHub 工具。先從專案頁開始，再用它檢查自己的 username 公開足跡。",
    },
    shareLinks: [
      {
        label: "Maigret GitHub",
        href: "https://github.com/soxoj/maigret",
      },
    ],
    sections: [
      {
        heading: {
          en: "What it does",
          zh: "它能做什麼",
        },
        body: {
          en: [
            "Maigret checks a username against many websites and finds public accounts that may use the same name.",
            "The result is not proof of identity and can include false positives, so treat it as a privacy self-check.",
          ],
          zh: [
            "Maigret 會用 username 去比對大量網站，找出可能使用同一個名稱的公開帳號。",
            "結果不等於真實身分，也可能有同名誤判，所以它比較適合做自我隱私檢查。",
          ],
        },
      },
      {
        heading: {
          en: "Suggested use",
          zh: "建議用法",
        },
        body: {
          en: [
            "Search your own common usernames and see which old accounts are still public.",
            "Rename, delete, or lock down accounts you do not want connected.",
            "If you are learning OSINT, only use accounts you own or have permission to check.",
          ],
          zh: [
            "先查你常用的 username，看看哪些舊帳號還公開存在。",
            "把不想被連起來的帳號改名、刪除或調整隱私設定。",
            "如果要研究 OSINT，請只使用你自己或已取得同意的帳號。",
          ],
        },
      },
    ],
    resources: [
      {
        label: "Maigret GitHub",
        href: "https://github.com/soxoj/maigret",
      },
      {
        label: "OSINT Framework",
        href: "https://osintframework.com/",
        note: "延伸學習公開資料調查的分類與工具。",
      },
    ],
  },
  {
    slug: "sam-3d",
    title: {
      en: "Meta SAM 3D: Image to 3D",
      zh: "Meta SAM 3D 圖片轉 3D",
    },
    kicker: {
      en: "One image to 3D asset",
      zh: "單張圖片生成 3D 資產",
    },
    description: {
      en: "The fastest way to try SAM 3D is the online playground. Local deployment is possible, but it needs a stronger machine.",
      zh: "最快的測試方式是直接用 online playground。本地部署可以做，但硬體需求比較高。",
    },
    coverTitle: {
      en: "Image to\n3D Asset",
      zh: "圖片轉\n3D 資產",
    },
    keyword: "3D",
    publishedAt: "2026-05-16",
    hashtags: ["#SAM3D", "#AI3D", "#Blender"],
    cover: "/tools/sam-3d-cover.png",
    accent: "amber",
    shareTitle: {
      en: "Try SAM 3D in the online playground first",
      zh: "先用 online playground 測試 SAM 3D",
    },
    shareIntro: {
      en: "You can run SAM 3D locally from the GitHub repo, but for most people the online playground is the quickest way to test image-to-3D generation.",
      zh: "SAM 3D 可以從 GitHub repo 本地部署，但對大多數人來說，直接用 online playground 測試圖片轉 3D 最快。",
    },
    shareLinks: [
      {
        label: "Meta AI Demo Playground",
        href: "https://aidemos.meta.com/segment-anything",
      },
    ],
    sections: [
      {
        heading: {
          en: "Local deployment",
          zh: "本地部署",
        },
        body: {
          en: [
            "The official facebookresearch/sam-3d-objects repo includes code, checkpoints, demo.py, and notebooks for single-object or multi-object generation.",
            "Local setup is better if you want repeatable experiments, batch processing, or deeper control, but expect higher hardware and environment requirements.",
          ],
          zh: [
            "官方 facebookresearch/sam-3d-objects repo 有 code、checkpoints、demo.py，以及單物件/多物件生成 notebook。",
            "如果你要重複實驗、批次處理或更細的控制，本地部署比較適合；但硬體與環境需求會明顯比較高。",
          ],
        },
        links: [
          {
            label: "SAM 3D Objects GitHub",
            href: "https://github.com/facebookresearch/sam-3d-objects",
          },
        ],
      },
      {
        heading: {
          en: "What to watch for",
          zh: "要注意什麼",
        },
        body: {
          en: [
            "SAM 3D reconstructs geometry, texture, and layout from a single image, so hidden parts are still an educated guess.",
            "Treat the output as a prototype or draft asset first. Rotate it, inspect the back side, and test the export before using it in a real workflow.",
          ],
          zh: [
            "SAM 3D 是從單張圖片重建 geometry、texture 和 layout，所以看不到的背面仍然是模型推測。",
            "先把輸出當作原型或草稿素材。旋轉檢查背面，並測試匯出結果，再決定能不能放進正式工作流。",
          ],
        },
      },
    ],
    resources: [
      {
        label: "Meta AI Demo Playground",
        href: "https://aidemos.meta.com/segment-anything",
      },
      {
        label: "SAM 3D Objects GitHub",
        href: "https://github.com/facebookresearch/sam-3d-objects",
      },
      {
        label: "Meta SAM 3D Research Page",
        href: "https://ai.meta.com/research/sam3d/",
      },
      {
        label: "SAM 3D Paper",
        href: "https://arxiv.org/abs/2511.16624",
      },
    ],
  },
  {
    slug: "top-3-ai-skills",
    title: {
      en: "3 AI Skills That Turn Agents Into a Workflow",
      zh: "把 AI Agent 變成工作流的 3 個 Skills",
    },
    kicker: {
      en: "Agent workflow upgrade",
      zh: "AI Agent 工作流升級",
    },
    description: {
      en: "Three skills that fix the most common agent failures: forgetting context, rushing into code, and repeating prompts.",
      zh: "三個解決 AI agent 最常見問題的 skills：忘記上下文、急著寫 code、重複下同樣的 prompt。",
    },
    coverTitle: {
      en: "Top 3\nAI Skills",
      zh: "Top 3\nAI Skills",
    },
    keyword: "SKILLS",
    publishedAt: "2026-05-19",
    hashtags: ["#AISkills", "#AgentWorkflow", "#ClaudeCode"],
    cover: "/tools/top-3-ai-skills-cover.png",
    accent: "teal",
    shareTitle: {
      en: "Install these three skills first",
      zh: "先裝這三個 skills",
    },
    shareIntro: {
      en: "Most AI skills are just fancy prompts. These three are different because they give agents memory, process, and a way to reuse your workflow. Install all three from skills.sh below.",
      zh: "大多數 AI skills 只是包裝過的 prompt。這三個不一樣 — 它們讓 agent 有記憶、有流程、可以把你的工作流封裝成可重複使用的模組。下面的 skills.sh 連結可以直接安裝。",
    },
    shareLinks: [
      {
        label: "planning-with-files on skills.sh",
        href: "https://skills.sh/othmanadi/planning-with-files/planning-with-files",
      },
      {
        label: "Superpowers on skills.sh",
        href: "https://skills.sh/obra/superpowers",
      },
      {
        label: "skill-creator on skills.sh",
        href: "https://skills.sh/anthropics/skills/skill-creator",
      },
    ],
    sections: [
      {
        heading: {
          en: "1. planning-with-files: give the agent real file memory",
          zh: "1. planning-with-files：讓 agent 有真正的檔案記憶",
        },
        body: {
          en: [
            "**Use this when** the job is too big for one chat — multi-step research, long refactors, or anything that needs to survive a `/clear` or a context reset.",
            "It writes three persistent markdown files the agent re-reads before each major step:",
            {
              type: "list",
              items: [
                "**`task_plan.md`** — the plan",
                "**`findings.md`** — what it learned",
                "**`progress.md`** — what's done",
              ],
            },
            "**Install:**",
            { type: "install", command: "npx skills add othmanadi/planning-with-files" },
            "**Example prompt:**",
            {
              type: "list",
              items: [
                "Use planning-with-files to migrate our Next.js pages router to the App Router.",
              ],
            },
          ],
          zh: [
            "**什麼時候用：**任務太大、一個 chat 裝不下時 — 多步驟研究、長 refactor、或任何需要撐過 `/clear` 或 context reset 的工作。",
            "它會建三個 markdown 檔，agent 每次大動作前都會重新讀一次：",
            {
              type: "list",
              items: [
                "**`task_plan.md`** — 計畫",
                "**`findings.md`** — 過程中學到的東西",
                "**`progress.md`** — 已經做完什麼",
              ],
            },
            "**安裝：**",
            { type: "install", command: "npx skills add othmanadi/planning-with-files" },
            "**Prompt 範例：**",
            {
              type: "list",
              items: [
                "Use planning-with-files to migrate our Next.js pages router to the App Router.",
              ],
            },
          ],
        },
        links: [
          {
            label: "planning-with-files on skills.sh",
            href: "https://skills.sh/othmanadi/planning-with-files/planning-with-files",
          },
          {
            label: "OthmanAdi/planning-with-files on GitHub",
            href: "https://github.com/OthmanAdi/planning-with-files",
          },
        ],
      },
      {
        heading: {
          en: "2. Superpowers: engineering gates before the agent ships",
          zh: "2. Superpowers：寫 code 前先走完工程流程",
        },
        body: {
          en: [
            "**Use this when** the agent likes to jump straight into editing files. Superpowers is a **skill pack**, not a single skill — it forces the agent through gates before it can call something \"done\":",
            {
              type: "list",
              items: [
                "**brainstorm** → pick the approach",
                "**plan** → write the diff out first",
                "**TDD** → failing test before implementation",
                "**debug** → root-cause, not guess-and-patch",
                "**review** → check the change against the plan",
                "**verify** → prove it actually works",
              ],
            },
            "**Install:**",
            { type: "install", command: "npx skills add obra/superpowers" },
            "**Example prompt — feature work:**",
            {
              type: "list",
              items: [
                "Use Superpowers to add a rate limiter to my API.",
              ],
            },
            "**Another prompt — bug fix:**",
            {
              type: "list",
              items: [
                "Use Superpowers to fix the bug where users get logged out after refresh.",
              ],
            },
          ],
          zh: [
            "**什麼時候用：**agent 喜歡跳過思考、直接動 code 時。Superpowers 不是單一 skill，是**一整套 skill pack** — 強迫 agent 走完每道 gate 才能說「做完了」：",
            {
              type: "list",
              items: [
                "**brainstorm** → 先決定方向",
                "**plan** → 把 diff 先寫出來",
                "**TDD** → 先寫會失敗的測試",
                "**debug** → 找 root cause，不是猜了就改",
                "**review** → 對照 plan 檢查改動",
                "**verify** → 證明它真的會動",
              ],
            },
            "**安裝：**",
            { type: "install", command: "npx skills add obra/superpowers" },
            "**Prompt 範例 — 開發新功能：**",
            {
              type: "list",
              items: [
                "Use Superpowers to add a rate limiter to my API.",
              ],
            },
            "**另一個範例 — 修 bug：**",
            {
              type: "list",
              items: [
                "Use Superpowers to fix the bug where users get logged out after refresh.",
              ],
            },
          ],
        },
        links: [
          {
            label: "Superpowers on skills.sh",
            href: "https://skills.sh/obra/superpowers",
          },
          {
            label: "obra/superpowers on GitHub",
            href: "https://github.com/obra/superpowers",
          },
        ],
      },
      {
        heading: {
          en: "3. skill-creator: turn your repeated prompts into a skill",
          zh: "3. skill-creator：把重複下的 prompt 封裝成 skill",
        },
        body: {
          en: [
            "**Use this when** you notice you've typed the same kind of instructions three times. Instead of re-explaining your process, **package it as a skill** the agent can install and follow consistently.",
            "It scaffolds the standard folder:",
            {
              type: "list",
              items: [
                "**`SKILL.md`** — when and how to use",
                "**`scripts/`** — helper code",
                "**`references/`** — longer docs",
                "**`assets/`** — templates",
              ],
            },
            "**Install:**",
            { type: "install", command: "npx skills add anthropics/skills --skill skill-creator" },
            "**Example prompt — package a writing format:**",
            {
              type: "list",
              items: [
                "Use skill-creator to package my weekly update format: bullet points grouped by project, link to the PR, one-line outcome, no emojis.",
              ],
            },
            "**Another prompt — package a review checklist:**",
            {
              type: "list",
              items: [
                "Use skill-creator to turn my code-review checklist in review-notes.md into a reusable skill.",
              ],
            },
          ],
          zh: [
            "**什麼時候用：**當你發現自己第三次在貼類似的指示。不要再每次重講一次流程，**把它包成 skill**，agent 安裝後可以一直照做。",
            "它會幫你建好標準資料夾：",
            {
              type: "list",
              items: [
                "**`SKILL.md`** — 什麼時候用、怎麼用",
                "**`scripts/`** — 輔助 script",
                "**`references/`** — 更長的文件",
                "**`assets/`** — 範本",
              ],
            },
            "**安裝：**",
            { type: "install", command: "npx skills add anthropics/skills --skill skill-creator" },
            "**Prompt 範例 — 封裝寫作格式：**",
            {
              type: "list",
              items: [
                "Use skill-creator to package my weekly update format: bullet points grouped by project, link to the PR, one-line outcome, no emojis.",
              ],
            },
            "**另一個範例 — 封裝 review checklist：**",
            {
              type: "list",
              items: [
                "Use skill-creator to turn my code-review checklist in review-notes.md into a reusable skill.",
              ],
            },
          ],
        },
        links: [
          {
            label: "skill-creator on skills.sh",
            href: "https://skills.sh/anthropics/skills/skill-creator",
          },
        ],
      },
      {
        heading: {
          en: "How to chain them together",
          zh: "三個怎麼串在一起",
        },
        body: {
          en: [
            "The order is **memory → process → reuse**:",
            {
              type: "list",
              items: [
                "Start with **planning-with-files** so the agent has memory across resets.",
                "Run the actual work under **Superpowers** so each phase has gates.",
                "When you notice a workflow you've now done twice, end with **skill-creator** to make it reusable.",
              ],
            },
            "After installing these three, you spend **less time reminding the agent** and **more time reviewing the actual output**.",
          ],
          zh: [
            "順序就是 **memory → process → reuse**：",
            {
              type: "list",
              items: [
                "先用 **planning-with-files** 開頭，讓 agent 在 reset 之後還記得在做什麼。",
                "中間實際做事時走 **Superpowers**，每個階段都有 gate 把關。",
                "當你發現一個流程已經做過兩次，用 **skill-creator** 把它封裝起來，下次直接重用。",
              ],
            },
            "裝完這三個之後，**提醒 agent 的時間變少**，**檢查實際產出的時間變多**。",
          ],
        },
      },
    ],
    resources: [
      {
        label: "planning-with-files on skills.sh",
        href: "https://skills.sh/othmanadi/planning-with-files/planning-with-files",
      },
      {
        label: "Superpowers on skills.sh",
        href: "https://skills.sh/obra/superpowers",
      },
      {
        label: "skill-creator on skills.sh",
        href: "https://skills.sh/anthropics/skills/skill-creator",
      },
      {
        label: "Skills Documentation",
        href: "https://skills.sh/docs",
      },
      {
        label: "OthmanAdi/planning-with-files on GitHub",
        href: "https://github.com/OthmanAdi/planning-with-files",
      },
      {
        label: "obra/superpowers on GitHub",
        href: "https://github.com/obra/superpowers",
      },
    ],
  },
];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsNewestFirst() {
  return [...tools].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getLocale(value: string | string[] | undefined): Locale {
  return value === "zh" ? "zh" : "en";
}
