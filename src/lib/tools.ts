export type ToolResource = {
  label: string;
  href: string;
  note?: string;
};

export type Locale = "en" | "zh";

type LocalizedText = Record<Locale, string>;

export type ContentBlock =
  | { type: "list"; items: string[] }
  | { type: "install"; command: string; label?: string }
  | { type: "terminal"; title?: string; lines: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

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
  toc?: {
    label: LocalizedText;
    href: string;
  }[];
  sections: {
    id?: string;
    heading: LocalizedText;
    body: Record<Locale, BodyItem[]>;
    links?: ToolResource[];
  }[];
  resources: ToolResource[];
};

export const tools: Tool[] = [
  {
    slug: "gsap-skills",
    title: {
      en: "GSAP AI Skills: Setup Guide",
      zh: "GSAP AI Skills 安裝攻略",
    },
    kicker: {
      en: "Official animation skills for AI agents",
      zh: "給 AI agent 的官方動畫 skills",
    },
    description: {
      en: "Install the official GSAP skills so Cursor, Claude Code, Codex, Windsurf, and other AI editors can write cleaner timelines, ScrollTrigger animations, React hooks, and plugin code.",
      zh: "安裝官方 GSAP skills，讓 Cursor、Claude Code、Codex、Windsurf 等 AI 編輯器更會寫 timeline、ScrollTrigger、React hook 和 plugin 動畫程式。",
    },
    coverTitle: {
      en: "GSAP\nAI Skills",
      zh: "GSAP\nAI Skills",
    },
    keyword: "GSAP",
    publishedAt: "2026-06-01",
    hashtags: ["#GSAP", "#WebAnimation", "#AICoding"],
    cover: "/tools/gsap-skills-cover.png",
    accent: "teal",
    shareTitle: {
      en: "Start here",
      zh: "從這裡開始",
    },
    shareIntro: {
      en: "This guide is for the GSAP AI skills repo from the video, not just the normal GSAP animation library. Install it first, then use the prompt examples below to make your AI editor follow GSAP patterns.",
      zh: "這篇是影片裡的 GSAP AI skills repo 攻略，不只是一般 GSAP 動畫函式庫介紹。先安裝，再用下面的 prompt 範例讓 AI 編輯器照 GSAP 正確模式寫動畫。",
    },
    shareLinks: [
      {
        label: "GSAP AI Skills GitHub",
        href: "https://github.com/greensock/gsap-skills",
      },
      {
        label: "GSAP Installation Docs",
        href: "https://gsap.com/docs/v3/Installation",
      },
      {
        label: "ScrollTrigger Docs",
        href: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
      },
    ],
    sections: [
      {
        heading: {
          en: "What it is",
          zh: "它是什麼",
        },
        body: {
          en: [
            "GSAP AI Skills is an official GreenSock repo that teaches AI coding agents how to write GSAP correctly.",
            "It covers core tweens, timelines, ScrollTrigger, plugins, React/Vue/Svelte usage, and performance patterns.",
            "The important part: GSAP says the library and plugins are now free through the public `gsap` npm package, so you do not need a Club membership or private registry for the old paid plugins.",
            {
              type: "image",
              src: "/tools/gsap-skills/repo-readme.png",
              alt: "GSAP AI Skills GitHub README screenshot",
              width: 922,
              height: 797,
              caption: "The repo is the official AI skills pack for GSAP animation patterns.",
            },
          ],
          zh: [
            "GSAP AI Skills 是 GreenSock 官方 repo，用來教 AI coding agent 正確寫 GSAP。",
            "它涵蓋 core tweens、timelines、ScrollTrigger、plugins、React/Vue/Svelte 用法，以及效能模式。",
            "重點是：GSAP 目前表示函式庫和 plugins 都可以透過公開的 `gsap` npm package 使用，不需要 Club membership 或 private registry。",
            {
              type: "image",
              src: "/tools/gsap-skills/repo-readme.png",
              alt: "GSAP AI Skills GitHub README screenshot",
              width: 922,
              height: 797,
              caption: "這個 repo 是官方 GSAP animation patterns 的 AI skills pack。",
            },
          ],
        },
        links: [
          {
            label: "GSAP AI Skills GitHub",
            href: "https://github.com/greensock/gsap-skills",
          },
        ],
      },
      {
        heading: {
          en: "Install the skills",
          zh: "安裝 skills",
        },
        body: {
          en: [
            "For most AI editors, use the skills CLI installer.",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ npx skills add https://github.com/greensock/gsap-skills",
              ],
            },
            "For Claude Code, the repo also lists the plugin marketplace command.",
            {
              type: "terminal",
              title: "Claude Code",
              lines: [
                "$ /plugin marketplace add greensock/gsap-skills",
              ],
            },
            "For Cursor, add it as a Remote Rule with `greensock/gsap-skills`, or use the `npx skills add` command above if your setup supports it.",
          ],
          zh: [
            "大多數 AI 編輯器可以用 skills CLI 安裝。",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ npx skills add https://github.com/greensock/gsap-skills",
              ],
            },
            "Claude Code 也可以用 repo 裡列出的 plugin marketplace 指令。",
            {
              type: "terminal",
              title: "Claude Code",
              lines: [
                "$ /plugin marketplace add greensock/gsap-skills",
              ],
            },
            "Cursor 可以把 `greensock/gsap-skills` 加成 Remote Rule；如果你的環境支援，也可以直接用上面的 `npx skills add`。",
          ],
        },
        links: [
          {
            label: "GSAP AI Skills GitHub",
            href: "https://github.com/greensock/gsap-skills",
          },
        ],
      },
      {
        heading: {
          en: "Use this prompt format",
          zh: "用這個 prompt 格式",
        },
        body: {
          en: [
            "After installing the skills, do not just ask for a random animation. Tell the agent the stack, the elements, the motion order, and the constraints.",
            {
              type: "list",
              items: [
                "Stack: vanilla JS, React, Next.js, Vue, Svelte, Webflow, etc.",
                "Target elements: hero title, cards, SVG path, product image, sections.",
                "Motion style: entrance, scroll-linked, pinned section, hover/tap interaction, timeline sequence.",
                "Constraints: mobile support, reduced motion, cleanup on unmount, no layout shift.",
              ],
            },
            "Good starter prompt:",
            {
              type: "list",
              items: [
                "Use the GSAP skills. Build a scroll-triggered landing page animation in React. Use `useGSAP`, scoped refs, cleanup on unmount, `ScrollTrigger`, and transforms instead of layout properties. Keep it mobile-safe and include a reduced-motion fallback.",
              ],
            },
          ],
          zh: [
            "安裝 skills 之後，不要只跟 AI 說「幫我做動畫」。你要告訴它技術棧、要動的元素、動畫順序和限制。",
            {
              type: "list",
              items: [
                "Stack：vanilla JS、React、Next.js、Vue、Svelte、Webflow 等。",
                "Target elements：hero title、cards、SVG path、product image、sections。",
                "Motion style：進場動畫、scroll-linked、pinned section、hover/tap interaction、timeline sequence。",
                "Constraints：mobile support、reduced motion、unmount cleanup、不要 layout shift。",
              ],
            },
            "可以直接用這個 prompt 開始：",
            {
              type: "list",
              items: [
                "Use the GSAP skills. Build a scroll-triggered landing page animation in React. Use `useGSAP`, scoped refs, cleanup on unmount, `ScrollTrigger`, and transforms instead of layout properties. Keep it mobile-safe and include a reduced-motion fallback.",
              ],
            },
          ],
        },
      },
      {
        heading: {
          en: "Install GSAP in a project",
          zh: "在專案裡安裝 GSAP",
        },
        body: {
          en: [
            "The skills teach the AI how to write better GSAP code, but your actual web project still needs GSAP installed.",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ npm install gsap @gsap/react",
              ],
            },
            "For ScrollTrigger, import and register the plugin once.",
            {
              type: "list",
              items: [
                "`import { gsap } from \"gsap\";`",
                "`import { ScrollTrigger } from \"gsap/ScrollTrigger\";`",
                "`gsap.registerPlugin(ScrollTrigger);`",
              ],
            },
          ],
          zh: [
            "skills 是教 AI 寫出更好的 GSAP 程式，但你的網頁專案本身還是要安裝 GSAP。",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ npm install gsap @gsap/react",
              ],
            },
            "如果要用 ScrollTrigger，記得 import 並註冊 plugin。",
            {
              type: "list",
              items: [
                "`import { gsap } from \"gsap\";`",
                "`import { ScrollTrigger } from \"gsap/ScrollTrigger\";`",
                "`gsap.registerPlugin(ScrollTrigger);`",
              ],
            },
          ],
        },
        links: [
          {
            label: "GSAP Installation Docs",
            href: "https://gsap.com/docs/v3/Installation",
          },
          {
            label: "@gsap/react Docs",
            href: "https://gsap.com/resources/React/",
          },
        ],
      },
      {
        heading: {
          en: "Three prompts to try",
          zh: "三個可以直接試的 prompt",
        },
        body: {
          en: [
            "Hero entrance:",
            {
              type: "list",
              items: [
                "Use GSAP skills to animate this hero. Create a timeline where the headline fades up, the subtext follows with a small delay, and the CTA scales in. Use `autoAlpha`, `y`, `scale`, and `power2.out`. Avoid animating `top`, `left`, or layout properties.",
              ],
            },
            "Scroll section:",
            {
              type: "list",
              items: [
                "Use GSAP ScrollTrigger to pin this section while three cards animate in sequence. Use a timeline with `scrub: true`, responsive start/end values, and call `ScrollTrigger.refresh()` after images load.",
              ],
            },
            "React component:",
            {
              type: "list",
              items: [
                "Refactor this React animation to use `@gsap/react` and `useGSAP`. Scope selectors to the container ref, register plugins once, and make sure animations clean up when the component unmounts.",
              ],
            },
          ],
          zh: [
            "Hero 進場動畫：",
            {
              type: "list",
              items: [
                "Use GSAP skills to animate this hero. Create a timeline where the headline fades up, the subtext follows with a small delay, and the CTA scales in. Use `autoAlpha`, `y`, `scale`, and `power2.out`. Avoid animating `top`, `left`, or layout properties.",
              ],
            },
            "Scroll section：",
            {
              type: "list",
              items: [
                "Use GSAP ScrollTrigger to pin this section while three cards animate in sequence. Use a timeline with `scrub: true`, responsive start/end values, and call `ScrollTrigger.refresh()` after images load.",
              ],
            },
            "React component：",
            {
              type: "list",
              items: [
                "Refactor this React animation to use `@gsap/react` and `useGSAP`. Scope selectors to the container ref, register plugins once, and make sure animations clean up when the component unmounts.",
              ],
            },
          ],
        },
      },
      {
        heading: {
          en: "What to watch for",
          zh: "需要注意什麼",
        },
        body: {
          en: [
            "If the AI writes animation code that technically works but feels cheap, ask it to rebuild with a timeline instead of scattered `delay` values.",
            "For React and Next.js, ask for `useGSAP`, scoped refs, and cleanup. Most broken GSAP-in-React code comes from global selectors or missing cleanup.",
            "For performance, ask the AI to animate transforms and opacity, not layout properties like `top`, `left`, `width`, or `height` unless there is a specific reason.",
          ],
          zh: [
            "如果 AI 寫出的動畫能動但很廉價，請它改用 timeline 重建，不要到處塞 `delay`。",
            "React / Next.js 專案裡，要要求 `useGSAP`、scoped refs 和 cleanup。很多 GSAP-in-React 問題都來自 global selectors 或沒有清理。",
            "效能方面，要求 AI 優先動畫 transforms 和 opacity，不要隨便動畫 `top`、`left`、`width`、`height` 這類 layout properties。",
          ],
        },
      },
    ],
    resources: [
      {
        label: "GSAP AI Skills GitHub",
        href: "https://github.com/greensock/gsap-skills",
      },
      {
        label: "GSAP Installation Docs",
        href: "https://gsap.com/docs/v3/Installation",
      },
      {
        label: "ScrollTrigger Docs",
        href: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
      },
      {
        label: "GSAP React Guide",
        href: "https://gsap.com/resources/React/",
      },
    ],
  },
  {
    slug: "free-claude-code",
    title: {
      en: "Free Claude Code: Setup Guide",
      zh: "Free Claude Code 安裝設定攻略",
    },
    kicker: {
      en: "Claude Code workflow, different model",
      zh: "Claude Code 工作流，換成其他模型",
    },
    description: {
      en: "Use the Claude Code workflow through a local proxy, then route it to Ollama, NVIDIA NIM, OpenRouter, or another provider.",
      zh: "透過本地 proxy 保留 Claude Code 工作流，再把背後模型路由到 Ollama、NVIDIA NIM、OpenRouter 或其他 provider。",
    },
    coverTitle: {
      en: "Free\nClaude Code",
      zh: "Free\nClaude Code",
    },
    keyword: "FREE",
    publishedAt: "2026-05-26",
    hashtags: ["#ClaudeCode", "#Ollama", "#OpenRouter"],
    cover: "/tools/free-claude-code-cover.png",
    accent: "teal",
    shareTitle: {
      en: "Quick navigation",
      zh: "快速導覽",
    },
    shareIntro: {
      en: "Start with the install steps, pick one provider, then read the explanation after the setup is working.",
      zh: "先照安裝設定步驟做，選一個 provider，等設定能跑之後再看後面的原理解釋。",
    },
    toc: [
      {
        label: { en: "Install Free Claude Code", zh: "安裝 Free Claude Code" },
        href: "#install",
      },
      {
        label: { en: "Start the proxy", zh: "啟動 proxy" },
        href: "#proxy",
      },
      {
        label: { en: "Pick one provider", zh: "選一個 provider" },
        href: "#provider",
      },
      {
        label: { en: "Ollama route", zh: "Ollama 路線" },
        href: "#ollama",
      },
      {
        label: { en: "NVIDIA NIM route", zh: "NVIDIA NIM 路線" },
        href: "#nvidia",
      },
      {
        label: { en: "OpenRouter route", zh: "OpenRouter 路線" },
        href: "#openrouter",
      },
      {
        label: { en: "Model Config", zh: "Model Config" },
        href: "#model-config",
      },
      {
        label: { en: "Final checklist", zh: "最後檢查清單" },
        href: "#checklist",
      },
      {
        label: { en: "How it works", zh: "它怎麼運作" },
        href: "#how-it-works",
      },
    ],
    sections: [
      {
        id: "install",
        heading: {
          en: "Step 1: Install Free Claude Code",
          zh: "步驟 1：安裝 Free Claude Code",
        },
        body: {
          en: [
            "Install Claude Code first if you do not already have it. Then run the Free Claude Code installer from the [GitHub project](https://github.com/Alishahryar1/free-claude-code).",
            {
              type: "terminal",
              title: "macOS / Linux",
              lines: [
                "$ curl -fsSL \"https://github.com/Alishahryar1/free-claude-code/blob/main/scripts/install.sh?raw=1\" | sh",
              ],
            },
            "On Windows, use the PowerShell installer instead.",
            {
              type: "terminal",
              title: "Windows PowerShell",
              lines: [
                "PS> irm \"https://github.com/Alishahryar1/free-claude-code/blob/main/scripts/install.ps1?raw=1\" | iex",
              ],
            },
          ],
          zh: [
            "如果你還沒有 Claude Code，先安裝 Claude Code。接著執行 [GitHub 專案](https://github.com/Alishahryar1/free-claude-code) 提供的 Free Claude Code 安裝指令。",
            {
              type: "terminal",
              title: "macOS / Linux",
              lines: [
                "$ curl -fsSL \"https://github.com/Alishahryar1/free-claude-code/blob/main/scripts/install.sh?raw=1\" | sh",
              ],
            },
            "Windows 使用 PowerShell 版本。",
            {
              type: "terminal",
              title: "Windows PowerShell",
              lines: [
                "PS> irm \"https://github.com/Alishahryar1/free-claude-code/blob/main/scripts/install.ps1?raw=1\" | iex",
              ],
            },
          ],
        },
        links: [
          {
            label: "Free Claude Code GitHub",
            href: "https://github.com/Alishahryar1/free-claude-code",
          },
        ],
      },
      {
        id: "proxy",
        heading: {
          en: "Step 2: Start the local proxy",
          zh: "步驟 2：啟動本地 proxy",
        },
        body: {
          en: [
            "Start the server and keep this terminal running while you use Claude Code.",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ fcc-server",
              ],
            },
            "Open the [Admin UI](http://127.0.0.1:8082/admin) after the server starts. The port is usually `8082`, but use whatever your terminal shows if yours is different.",
          ],
          zh: [
            "啟動 server，使用 Claude Code 時請保持這個 terminal 不要關掉。",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ fcc-server",
              ],
            },
            "server 啟動後打開 [Admin UI](http://127.0.0.1:8082/admin)。通常是 `8082`，但如果你的 terminal 顯示不同 port，就以你的為準。",
          ],
        },
      },
      {
        id: "provider",
        heading: {
          en: "Step 3: Pick one provider",
          zh: "步驟 3：選一個 provider",
        },
        body: {
          en: [
            "Choose one route first. Do not configure all of them at the same time when you are just testing.",
            {
              type: "image",
              src: "/tools/free-claude-code/admin-provider-config.png",
              alt: "Free Claude Code Providers page showing API key and local base URL fields",
              width: 1901,
              height: 916,
              caption: "Use this Providers page to paste API keys for hosted routes, or set the local base URL for local routes like Ollama.",
            },
            {
              type: "list",
              items: [
                "Ollama: local route, no API bill, limited by your computer and model quality.",
                "NVIDIA NIM: hosted route, API key required, good for testing free endpoint models.",
                "OpenRouter: flexible cloud route, useful for trying free or cheap models.",
              ],
            },
          ],
          zh: [
            "先選一條路線就好。第一次測試時不要同時設定全部 provider。",
            {
              type: "image",
              src: "/tools/free-claude-code/admin-provider-config.png",
              alt: "Free Claude Code Providers page showing API key and local base URL fields",
              width: 1901,
              height: 916,
              caption: "在 Providers 頁貼上雲端 provider 的 API key，或填本地路線需要的 base URL，例如 Ollama。",
            },
            {
              type: "list",
              items: [
                "Ollama：本地路線，沒有 API bill，但受限於你的電腦和模型品質。",
                "NVIDIA NIM：雲端路線，需要 API key，適合測試 free endpoint models。",
                "OpenRouter：彈性的雲端路線，適合找免費或便宜模型。",
              ],
            },
          ],
        },
      },
      {
        id: "ollama",
        heading: {
          en: "Route A: Ollama",
          zh: "路線 A：Ollama",
        },
        body: {
          en: [
            "This is the best route if your goal is no API bill. Open the [Ollama download page](https://ollama.com/download), choose the version for your operating system, then run a local model on your machine.",
            {
              type: "image",
              src: "/tools/free-claude-code/ollama-download.png",
              alt: "Ollama download page for macOS",
              width: 597,
              height: 495,
              caption: "The screenshot shows the macOS option, but choose the tab that matches your own system.",
            },
            "Pull a model, then start Ollama.",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ ollama pull gemma4",
                "$ ollama serve",
              ],
            },
            "In the Admin UI, keep `OLLAMA_BASE_URL` as the Ollama server root. Do not add `/v1` at the end.",
            "Then set `Default Model` to the Ollama model slug. Example: `ollama/gemma4`.",
          ],
          zh: [
            "如果你的目標是沒有 API bill，這條路線最符合。打開 [Ollama 下載頁](https://ollama.com/download)，依照自己的作業系統選版本，然後在你的電腦上跑本地模型。",
            {
              type: "image",
              src: "/tools/free-claude-code/ollama-download.png",
              alt: "Ollama download page for macOS",
              width: 597,
              height: 495,
              caption: "截圖是 macOS 選項，但實際請依照自己的系統選擇。",
            },
            "下載模型，然後啟動 Ollama。",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ ollama pull gemma4",
                "$ ollama serve",
              ],
            },
            "在 Admin UI 裡，`OLLAMA_BASE_URL` 保持 Ollama server root，不要在後面加 `/v1`。",
            "接著把 `Default Model` 設成 Ollama model slug，例如 `ollama/gemma4`。",
          ],
        },
        links: [
          {
            label: "Ollama Download",
            href: "https://ollama.com/download",
          },
        ],
      },
      {
        id: "nvidia",
        heading: {
          en: "Route B: NVIDIA NIM",
          zh: "路線 B：NVIDIA NIM",
        },
        body: {
          en: [
            "Use this route if you want a hosted model and an API-key setup. Start by creating an [NVIDIA NIM API key](https://build.nvidia.com/settings/api-keys).",
            {
              type: "image",
              src: "/tools/free-claude-code/nvidia-api-keys.png",
              alt: "NVIDIA NIM API keys page",
              width: 1608,
              height: 532,
              caption: "Create an API key, then paste it into the Admin UI provider setting.",
            },
            {
              type: "image",
              src: "/tools/free-claude-code/nvidia-models.png",
              alt: "NVIDIA NIM free endpoint models page",
              width: 1901,
              height: 833,
              caption: "Pick a free endpoint model, then use the matching `nvidia_nim/...` model slug.",
            },
            "Pick a model from the [NVIDIA free / preview endpoint list](https://build.nvidia.com/models?filters=nimType%3Anim_type_preview). Example model slug: `nvidia_nim/minimaxai/minimax-m2.7`.",
          ],
          zh: [
            "如果你想用雲端模型和 API key 設定，可以走這條路線。先建立 [NVIDIA NIM API key](https://build.nvidia.com/settings/api-keys)。",
            {
              type: "image",
              src: "/tools/free-claude-code/nvidia-api-keys.png",
              alt: "NVIDIA NIM API keys page",
              width: 1608,
              height: 532,
              caption: "先建立 API key，再貼到 Admin UI 的 provider 設定。",
            },
            {
              type: "image",
              src: "/tools/free-claude-code/nvidia-models.png",
              alt: "NVIDIA NIM free endpoint models page",
              width: 1901,
              height: 833,
              caption: "從 free endpoint 模型列表挑一個模型，再使用對應的 `nvidia_nim/...` model slug。",
            },
            "從 [NVIDIA free / preview endpoint 模型列表](https://build.nvidia.com/models?filters=nimType%3Anim_type_preview)挑一個模型。範例 model slug：`nvidia_nim/minimaxai/minimax-m2.7`。",
          ],
        },
        links: [
          {
            label: "NVIDIA NIM API Keys",
            href: "https://build.nvidia.com/settings/api-keys",
          },
          {
            label: "NVIDIA NIM Free / Preview Models",
            href: "https://build.nvidia.com/models?filters=nimType%3Anim_type_preview",
          },
        ],
      },
      {
        id: "openrouter",
        heading: {
          en: "Route C: OpenRouter",
          zh: "路線 C：OpenRouter",
        },
        body: {
          en: [
            "OpenRouter is the flexible cloud route. Create an [OpenRouter API key](https://openrouter.ai/workspaces/default/keys) if you want to test free or cheap models without running them locally.",
            {
              type: "image",
              src: "/tools/free-claude-code/openrouter-keys.png",
              alt: "OpenRouter API keys page",
              width: 1302,
              height: 434,
              caption: "Create an API key, then paste it into `OPENROUTER_API_KEY`.",
            },
            {
              type: "image",
              src: "/tools/free-claude-code/openrouter-free-models.png",
              alt: "OpenRouter free models collection",
              width: 729,
              height: 780,
              caption: "Browse the free model list, then set `Default Model` to an `open_router/...` slug.",
            },
            "Browse [OpenRouter free models](https://openrouter.ai/collections/free-models). Example model slug: `open_router/z-ai/glm-4.5-air:free`.",
          ],
          zh: [
            "OpenRouter 是比較彈性的雲端路線。如果你想測試免費或便宜模型、不想在本機跑模型，先建立 [OpenRouter API key](https://openrouter.ai/workspaces/default/keys)。",
            {
              type: "image",
              src: "/tools/free-claude-code/openrouter-keys.png",
              alt: "OpenRouter API keys page",
              width: 1302,
              height: 434,
              caption: "建立 API key，然後貼到 `OPENROUTER_API_KEY`。",
            },
            {
              type: "image",
              src: "/tools/free-claude-code/openrouter-free-models.png",
              alt: "OpenRouter free models collection",
              width: 729,
              height: 780,
              caption: "從 free models 裡挑模型，再把 `Default Model` 設成 `open_router/...` slug。",
            },
            "可以從 [OpenRouter free models](https://openrouter.ai/collections/free-models) 挑模型。範例 model slug：`open_router/z-ai/glm-4.5-air:free`。",
          ],
        },
        links: [
          {
            label: "OpenRouter API Keys",
            href: "https://openrouter.ai/workspaces/default/keys",
          },
          {
            label: "OpenRouter Free Models",
            href: "https://openrouter.ai/collections/free-models",
          },
        ],
      },
      {
        id: "model-config",
        heading: {
          en: "Step 4: Fill Model Config",
          zh: "步驟 4：填寫 Model Config",
        },
        body: {
          en: [
            "For a normal setup, fill only `Default Model`. The Opus, Sonnet, and Haiku override fields are optional.",
            {
              type: "image",
              src: "/tools/free-claude-code/model-config-annotated.png",
              alt: "Free Claude Code Model Config with Default Model highlighted",
              width: 1901,
              height: 829,
              caption: "Required: Default Model. Optional: tier overrides only if you want different models for different Claude model tiers.",
            },
            "After filling the model, click `Validate`, then click `Apply` if validation passes.",
          ],
          zh: [
            "一般設定只要填 `Default Model`。Opus、Sonnet、Haiku override 都是進階選項，不是必填。",
            {
              type: "image",
              src: "/tools/free-claude-code/model-config-annotated.png",
              alt: "Free Claude Code Model Config with Default Model highlighted",
              width: 1901,
              height: 829,
              caption: "必填：Default Model。選填：如果不同 Claude tier 要走不同模型，才需要填 override。",
            },
            "填完模型後先按 `Validate`，驗證通過再按 `Apply`。",
          ],
        },
      },
      {
        id: "launch",
        heading: {
          en: "Step 5: Launch Claude Code through the proxy",
          zh: "步驟 5：透過 proxy 啟動 Claude Code",
        },
        body: {
          en: [
            "Once the server is running and the model config is applied, launch Claude Code with the Free Claude Code wrapper.",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ fcc-claude",
                "> Claude Code opens with the configured proxy",
              ],
            },
          ],
          zh: [
            "當 server 正在跑，而且 model config 已經套用後，用 Free Claude Code wrapper 啟動 Claude Code。",
            {
              type: "terminal",
              title: "Terminal",
              lines: [
                "$ fcc-claude",
                "> Claude Code 會透過你設定好的 proxy 開啟",
              ],
            },
          ],
        },
      },
      {
        id: "checklist",
        heading: {
          en: "Final checklist",
          zh: "最後檢查清單",
        },
        body: {
          en: [
            {
              type: "list",
              items: [
                "`fcc-server` is still running.",
                "The Admin UI has your provider key or local base URL.",
                "`Default Model` has the correct provider prefix.",
                "`Validate` passes before you click `Apply`.",
                "`fcc-claude` launches Claude Code through the proxy.",
              ],
            },
            "If something fails, check the model slug first. Most setup mistakes are wrong provider prefix, wrong local URL, or a model that does not support the workflow you are trying to run.",
          ],
          zh: [
            {
              type: "list",
              items: [
                "`fcc-server` 還在跑。",
                "Admin UI 已填 provider API key 或 local base URL。",
                "`Default Model` 有正確的 provider prefix。",
                "先按 `Validate` 通過，再按 `Apply`。",
                "`fcc-claude` 能透過 proxy 啟動 Claude Code。",
              ],
            },
            "如果失敗，先檢查 model slug。最常見問題是 provider prefix 錯、本地 URL 錯，或模型不支援你要跑的 Claude Code workflow。",
          ],
        },
      },
      {
        id: "how-it-works",
        heading: {
          en: "What this is doing",
          zh: "它背後在做什麼",
        },
        body: {
          en: [
            "Free Claude Code runs a local Anthropic-compatible proxy. Claude Code sends requests to that proxy, and the proxy routes those requests to the provider you configured.",
            "That means you keep the Claude Code workflow, but the model behind it can be Ollama, NVIDIA NIM, OpenRouter, or another supported provider.",
            "This does not give you Anthropic's Claude models for free. You are using the Claude Code interface with a different model behind it.",
          ],
          zh: [
            "Free Claude Code 會跑一個本地 Anthropic-compatible proxy。Claude Code 把請求送到這個 proxy，再由 proxy 轉發到你設定的 provider。",
            "所以你保留 Claude Code 的工作流，但背後模型可以是 Ollama、NVIDIA NIM、OpenRouter 或其他支援的 provider。",
            "這不是免費取得 Anthropic 的 Claude 模型，而是用 Claude Code 介面搭配另一個模型。",
          ],
        },
      },
    ],
    resources: [
      {
        label: "Free Claude Code GitHub",
        href: "https://github.com/Alishahryar1/free-claude-code",
      },
      {
        label: "Ollama Download",
        href: "https://ollama.com/download",
      },
      {
        label: "NVIDIA NIM API Keys",
        href: "https://build.nvidia.com/settings/api-keys",
      },
      {
        label: "NVIDIA NIM Free / Preview Models",
        href: "https://build.nvidia.com/models?filters=nimType%3Anim_type_preview",
      },
      {
        label: "OpenRouter API Keys",
        href: "https://openrouter.ai/workspaces/default/keys",
      },
      {
        label: "OpenRouter Free Models",
        href: "https://openrouter.ai/collections/free-models",
      },
    ],
  },
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
      en: "Start with these three if you want agents to behave more like a working system. One keeps context in files, one adds engineering discipline, and one turns your repeated prompts into reusable skills.",
      zh: "如果你想讓 AI agent 更像一套工作系統，可以先從這三個開始。一個把上下文留在檔案裡，一個補上工程流程，一個把你常用的 prompt 變成可重複使用的 skill。",
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
            "Use this when the job is too big for one chat: multi-step research, long refactors, or anything that needs to survive a `/clear` or context reset.",
            "The skill creates three markdown files that the agent can keep reading as the work moves forward.",
            {
              type: "list",
              items: [
                "`task_plan.md` keeps the plan visible.",
                "`findings.md` stores what the agent learned.",
                "`progress.md` tracks what has already been done.",
              ],
            },
            "Install command:",
            { type: "install", command: "npx skills add othmanadi/planning-with-files" },
            "Prompt to try:",
            {
              type: "list",
              items: [
                "Use planning-with-files to migrate our Next.js pages router to the App Router.",
              ],
            },
          ],
          zh: [
            "任務太大、一個 chat 裝不下時可以用它：多步驟研究、長 refactor，或任何需要撐過 `/clear` 和 context reset 的工作。",
            "它會建三個 markdown 檔，agent 每次大動作前都會重新讀一次：",
            {
              type: "list",
              items: [
                "`task_plan.md` 放計畫。",
                "`findings.md` 放過程中學到的東西。",
                "`progress.md` 放已經做完什麼。",
              ],
            },
            "安裝指令：",
            { type: "install", command: "npx skills add othmanadi/planning-with-files" },
            "Prompt 範例：",
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
            "Use Superpowers when the agent keeps jumping straight into code. It is a skill pack, not a single skill, and it adds checkpoints before the agent can call something done.",
            {
              type: "list",
              items: [
                "`brainstorm` picks the approach.",
                "`plan` writes the intended change first.",
                "`TDD` starts with a failing test when the risk is high enough.",
                "`debug` looks for the root cause instead of guessing.",
                "`review` checks the change against the plan.",
                "`verify` proves the result works.",
              ],
            },
            "Install command:",
            { type: "install", command: "npx skills add obra/superpowers" },
            "Feature prompt:",
            {
              type: "list",
              items: [
                "Use Superpowers to add a rate limiter to my API.",
              ],
            },
            "Bug-fix prompt:",
            {
              type: "list",
              items: [
                "Use Superpowers to fix the bug where users get logged out after refresh.",
              ],
            },
          ],
          zh: [
            "當 agent 很容易跳過思考、直接動 code 時，可以用 Superpowers。它不是單一 skill，而是一整套 skill pack，會要求 agent 走完幾個 checkpoint 才能說做完。",
            {
              type: "list",
              items: [
                "`brainstorm` 先決定方向。",
                "`plan` 先寫出預計怎麼改。",
                "`TDD` 在風險夠高時先寫會失敗的測試。",
                "`debug` 找 root cause，不是猜了就改。",
                "`review` 對照 plan 檢查改動。",
                "`verify` 證明結果真的能動。",
              ],
            },
            "安裝指令：",
            { type: "install", command: "npx skills add obra/superpowers" },
            "開發新功能 prompt：",
            {
              type: "list",
              items: [
                "Use Superpowers to add a rate limiter to my API.",
              ],
            },
            "修 bug prompt：",
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
            "Use skill-creator when you have typed the same instruction three times. Turn that process into a skill, then the agent can follow it without you re-explaining the whole routine.",
            "It builds the standard skill folder for you.",
            {
              type: "list",
              items: [
                "`SKILL.md` explains when and how to use the skill.",
                "`scripts/` holds helper code.",
                "`references/` holds longer docs.",
                "`assets/` holds templates.",
              ],
            },
            "Install command:",
            { type: "install", command: "npx skills add anthropics/skills --skill skill-creator" },
            "Writing-format prompt:",
            {
              type: "list",
              items: [
                "Use skill-creator to package my weekly update format: bullet points grouped by project, link to the PR, one-line outcome, no emojis.",
              ],
            },
            "Review-checklist prompt:",
            {
              type: "list",
              items: [
                "Use skill-creator to turn my code-review checklist in review-notes.md into a reusable skill.",
              ],
            },
          ],
          zh: [
            "當你發現自己第三次在貼類似的指示，就可以用 skill-creator。不要每次重講整套流程，把它包成 skill，agent 之後就能照著做。",
            "它會幫你建好標準資料夾：",
            {
              type: "list",
              items: [
                "`SKILL.md` 說明什麼時候用、怎麼用。",
                "`scripts/` 放輔助 script。",
                "`references/` 放更長的文件。",
                "`assets/` 放範本。",
              ],
            },
            "安裝指令：",
            { type: "install", command: "npx skills add anthropics/skills --skill skill-creator" },
            "封裝寫作格式 prompt：",
            {
              type: "list",
              items: [
                "Use skill-creator to package my weekly update format: bullet points grouped by project, link to the PR, one-line outcome, no emojis.",
              ],
            },
            "封裝 review checklist prompt：",
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
            "A practical order is memory, then process, then reuse.",
            {
              type: "list",
              items: [
                "Start with `planning-with-files` so the agent keeps context across resets.",
                "Run the work under `Superpowers` when quality gates matter.",
                "After you repeat a workflow twice, use `skill-creator` to make it reusable.",
              ],
            },
            "After installing these three, you spend less time reminding the agent what happened and more time reviewing the result.",
          ],
          zh: [
            "實際使用時，可以照 memory、process、reuse 的順序來：",
            {
              type: "list",
              items: [
                "先用 `planning-with-files`，讓 agent 在 reset 之後還記得在做什麼。",
                "品質要求比較高的工作，用 `Superpowers` 加上 checkpoint。",
                "當一個流程已經重複做過兩次，用 `skill-creator` 把它封裝起來。",
              ],
            },
            "裝完這三個之後，提醒 agent 的時間會變少，檢查實際產出的時間會變多。",
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
  {
    slug: "ai-pointer",
    title: {
      en: "AI Pointer: Try the Official Demos",
      zh: "AI Pointer：官方 Demo 體驗",
    },
    kicker: {
      en: "Point, ask, and act",
      zh: "指向、提問、直接行動",
    },
    description: {
      en: "Google's AI Pointer turns your cursor into a way to give AI context directly from the screen, without copying, pasting, or writing a long chatbot prompt.",
      zh: "Google 的 AI Pointer 讓滑鼠游標變成提供畫面脈絡的方式，不用一直複製、貼上、開新分頁，也不用寫很長的 chatbot prompt。",
    },
    coverTitle: {
      en: "AI\nPointer",
      zh: "AI\nPointer",
    },
    keyword: "POINTER",
    publishedAt: "2026-05-21",
    hashtags: ["#AIPointer", "#Gemini", "#Googlebook"],
    cover: "/tools/ai-pointer-cover.png",
    accent: "indigo",
    shareTitle: {
      en: "Try AI Pointer here",
      zh: "從這裡體驗 AI Pointer",
    },
    shareIntro: {
      en: "Start with the two official demos. Create is for changing something on screen; Find is for pointing at visual information and asking AI to identify or locate it.",
      zh: "先從兩個官方 demo 開始。Create 適合用來改變畫面中的內容；Find 適合指向畫面資訊，讓 AI 幫你辨識或尋找。",
    },
    shareLinks: [
      {
        label: "AI Pointer Create Demo",
        href: "https://aistudio.google.com/apps/bundled/ai-pointer-create?showPreview=true&showAssistant=true&fullscreenApplet=true",
      },
      {
        label: "AI Pointer Find Demo",
        href: "https://aistudio.google.com/apps/bundled/ai-pointer-find?showPreview=true&showAssistant=true&fullscreenApplet=true",
      },
    ],
    sections: [
      {
        heading: {
          en: "What it is",
          zh: "它是什麼",
        },
        body: {
          en: [
            "AI Pointer is a Google DeepMind experiment where the mouse pointer becomes part of the AI interface.",
            "Instead of describing everything in a chat box, you point at the thing you mean, then ask for the action you want.",
          ],
          zh: [
            "AI Pointer 是 Google DeepMind 的一個實驗，探索當滑鼠游標變成 AI 介面的一部分時，使用方式會怎麼改變。",
            "你不需要把所有背景都打進聊天框，而是先指向你要處理的東西，再說你想讓 AI 做什麼。",
          ],
        },
      },
      {
        heading: {
          en: "Why it matters",
          zh: "為什麼它重要",
        },
        body: {
          en: [
            "A lot of AI work today still feels like translating your screen into text. You copy something, open another tab, paste it into a chatbot, explain the context, write the prompt, then bring the answer back into the original workflow.",
            "That works, but it adds friction exactly when you are already thinking. The tool is powerful, yet the interface keeps asking you to leave the place where the work is happening.",
            "AI Pointer treats pointing as context. The cursor can say \"this thing, right here\" before you type the rest of the request. That moves AI closer to the work on screen instead of forcing every task through a separate chat window.",
          ],
          zh: [
            "現在很多 AI 工作，其實都像是在把螢幕上的東西翻譯成文字。你要複製內容、開新分頁、貼到 chatbot、補一大段背景，最後再把結果搬回原本的工作流程。",
            "這樣可以用，但它會在你正在思考時製造很多摩擦。AI 本身很強，可是介面一直要求你離開真正工作的地方。",
            "AI Pointer 把「指向」本身當成脈絡。游標可以先替你說出「就是這個、這裡」，你再補上想做的事。這會讓 AI 更靠近螢幕上的工作，而不是把每個任務都丟進另一個聊天視窗。",
          ],
        },
      },
      {
        heading: {
          en: "Try the Create demo",
          zh: "體驗 Create demo",
        },
        body: {
          en: [
            "Use Create when you want AI to modify or generate something based on the area you point at.",
            "The demo already includes the on-screen instructions, so the easiest path is to open it, follow the built-in guide, and notice how little setup text you need compared with a normal chatbot workflow.",
          ],
          zh: [
            "當你想讓 AI 根據你指向的區域修改或生成內容時，可以先試 Create。",
            "這個 demo 裡已經有畫面指引，所以最簡單的方式就是直接打開、照著內建步驟操作，感受它比一般 chatbot 少掉多少前置說明。",
          ],
        },
        links: [
          {
            label: "Open AI Pointer Create",
            href: "https://aistudio.google.com/apps/bundled/ai-pointer-create?showPreview=true&showAssistant=true&fullscreenApplet=true",
          },
        ],
      },
      {
        heading: {
          en: "Try the Find demo",
          zh: "體驗 Find demo",
        },
        body: {
          en: [
            "Use Find when you want AI to understand or locate something visual on the screen.",
            "This is the side of AI Pointer that feels closest to search, but with the screen itself becoming the query instead of a typed description.",
          ],
          zh: [
            "當你想讓 AI 理解或找出畫面中的某個視覺資訊時，可以先試 Find。",
            "這一部分比較像搜尋，但差別是查詢條件不再只是你打出來的文字，而是螢幕本身也成為 query 的一部分。",
          ],
        },
        links: [
          {
            label: "Open AI Pointer Find",
            href: "https://aistudio.google.com/apps/bundled/ai-pointer-find?showPreview=true&showAssistant=true&fullscreenApplet=true",
          },
        ],
      },
      {
        heading: {
          en: "Googlebook note",
          zh: "Googlebook 小補充",
        },
        body: {
          en: [
            "Google also mentioned a related Magic Pointer idea for Googlebook, where Gemini can offer contextual suggestions around what you point at.",
            "That connects AI Pointer to a bigger product direction: if the pointer can carry context, AI does not always need a separate chat window.",
          ],
          zh: [
            "Google 也在 Googlebook 介紹中提到相關的 Magic Pointer 概念，Gemini 可以根據你指向的內容提供情境建議。",
            "這代表 AI Pointer 不只是單一 demo，而是跟 Google 更大的產品方向有關：如果游標能帶著脈絡，AI 不一定每次都需要獨立的聊天視窗。",
          ],
        },
        links: [
          {
            label: "Meet Googlebook",
            href: "https://blog.google/products-and-platforms/platforms/android/meet-googlebook/",
          },
        ],
      },
      {
        heading: {
          en: "What to watch for",
          zh: "需要注意什麼",
        },
        body: {
          en: [
            "These are still experimental demos, not a finished everyday product.",
            "You may need a Google account, and the demos can change as Google updates AI Studio.",
            "If this kind of interface becomes common, the important questions will be privacy, screen permissions, app support, and how clearly the AI shows what part of the screen it is using as context.",
          ],
          zh: [
            "目前這些仍然是實驗 demo，不是已經完成的日常產品。",
            "你可能需要 Google 帳號，而且 demo 內容可能會隨著 AI Studio 更新而改變。",
            "如果這種介面之後變得普遍，真正需要注意的是隱私、螢幕權限、支援哪些 app，以及 AI 是否清楚顯示它正在把畫面哪一部分當成脈絡。",
          ],
        },
      },
    ],
    resources: [
      {
        label: "AI Pointer Create Demo",
        href: "https://aistudio.google.com/apps/bundled/ai-pointer-create?showPreview=true&showAssistant=true&fullscreenApplet=true",
      },
      {
        label: "AI Pointer Find Demo",
        href: "https://aistudio.google.com/apps/bundled/ai-pointer-find?showPreview=true&showAssistant=true&fullscreenApplet=true",
      },
      {
        label: "Google DeepMind: AI Pointer",
        href: "https://deepmind.google/blog/ai-pointer/",
      },
      {
        label: "Google: Meet Googlebook",
        href: "https://blog.google/products-and-platforms/platforms/android/meet-googlebook/",
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
