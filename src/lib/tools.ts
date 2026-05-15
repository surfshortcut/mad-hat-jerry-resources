export type ToolResource = {
  label: string;
  href: string;
  note?: string;
};

export type Locale = "en" | "zh";

type LocalizedText = Record<Locale, string>;

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
    body: Record<Locale, string[]>;
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
