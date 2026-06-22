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
  | { type: "terminal"; title?: string; lines: string[]; wrap?: boolean }
  | {
      type: "video";
      src: string;
      caption?: string;
      poster?: string;
    }
  | {
      type: "embed";
      src: string;
      title: string;
      aspectRatio?: string;
      caption?: string;
    }
  | {
      type: "gallery";
      items: {
        src: string;
        alt: string;
        caption: string;
      }[];
    }
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
  featuredMedia?: Record<Locale, BodyItem[]>;
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
    slug: "logo-motion-pipeline",
    title: {
      en: "AI Logo Motion Pipeline",
      zh: "AI Logo Motion 製作攻略",
    },
    kicker: {
      en: "Generate logo concepts, animate SVG parts, then export transparent files",
      zh: "生成 logo 概念、拆 SVG 動畫、輸出透明素材",
    },
    description: {
      en: "A practical workflow for using logo-generator and pixel2motion to create motion-ready SVG logos, QA the animation, and export transparent MOV/WebM/APNG assets.",
      zh: "使用 logo-generator 和 pixel2motion 製作可動畫化 SVG logo，完成 motion QA，最後輸出透明 MOV/WebM/APNG 素材。",
    },
    coverTitle: {
      en: "Logo\nMotion",
      zh: "Logo\nMotion",
    },
    keyword: "LOGO",
    publishedAt: "2026-06-23",
    hashtags: ["#LogoDesign", "#MotionDesign", "#AIWorkflow"],
    cover: "/tools/logo-motion-pipeline-cover-main.png",
    accent: "teal",
    shareTitle: {
      en: "Watch the HTML logo animation",
      zh: "先看 HTML logo 動畫",
    },
    shareIntro: {
      en: "This guide uses AURALIME as one complete example: generate a clean SVG logo, prepare semantic motion parts, animate it in HTML, QA the final frame, then export transparent files for editing.",
      zh: "這篇用 AURALIME 當作單一完整示範：生成乾淨 SVG logo、整理語意化動畫部件、做成 HTML 動畫、檢查最後一幀，最後輸出可剪輯使用的透明素材。",
    },
    featuredMedia: {
      en: [
        {
          type: "embed",
          src: "/tools/logo-motion-pipeline/auralime-logo-motion.html",
          title: "AURALIME logo motion HTML demo",
          aspectRatio: "16 / 9",
          caption: "Live HTML animation demo for the AURALIME example.",
        },
      ],
      zh: [
        {
          type: "embed",
          src: "/tools/logo-motion-pipeline/auralime-logo-motion.html",
          title: "AURALIME logo motion HTML demo",
          aspectRatio: "16 / 9",
          caption: "AURALIME 範例的 HTML logo 動畫示範。",
        },
      ],
    },
    shareLinks: [
      {
        label: "logo-generator skill",
        href: "https://github.com/op7418/logo-generator-skill",
      },
      {
        label: "pixel2motion skill",
        href: "https://github.com/nolangz/pixel2motion",
      },
    ],
    toc: [
      {
        label: {
          en: "1. Pipeline overview",
          zh: "1. 流程總覽",
        },
        href: "#overview",
      },
      {
        label: {
          en: "2. Install the skills",
          zh: "2. 安裝 skills",
        },
        href: "#install",
      },
      {
        label: {
          en: "3. Generate logo concepts",
          zh: "3. 生成 logo 概念",
        },
        href: "#logo-generator",
      },
      {
        label: {
          en: "4. Prepare motion-ready SVG",
          zh: "4. 整理可動畫化 SVG",
        },
        href: "#svg-structure",
      },
      {
        label: {
          en: "5. Animate with pixel2motion",
          zh: "5. 使用 pixel2motion 動畫化",
        },
        href: "#pixel2motion",
      },
      {
        label: {
          en: "6. QA the motion",
          zh: "6. 檢查動畫品質",
        },
        href: "#qa",
      },
      {
        label: {
          en: "7. Export transparent files",
          zh: "7. 輸出透明素材",
        },
        href: "#export",
      },
      {
        label: {
          en: "8. Final checklist",
          zh: "8. 最終檢查表",
        },
        href: "#checklist",
      },
    ],
    sections: [
      {
        id: "overview",
        heading: {
          en: "Pipeline overview",
          zh: "流程總覽",
        },
        body: {
          en: [
            "The workflow has two main stages: first generate a clean SVG logo, then animate that SVG with separated semantic parts.",
            {
              type: "terminal",
              title: "Pipeline",
              wrap: true,
              lines: [
                "Brand prompt",
                "  -> logo-generator skill",
                "  -> 6 logo concept SVGs",
                "  -> selected final logo.svg",
                "  -> pixel2motion skill",
                "  -> motion-ready SVG structure",
                "  -> motion.css",
                "  -> logo_motion.html",
                "  -> QA frames / motion strip",
                "  -> transparent exports",
              ],
            },
            "This guide uses one example only: AURALIME, a fresh citrus beverage logo designed to be clean, bright, and easy to animate.",
            {
              type: "image",
              src: "/tools/logo-motion-pipeline/images/auralime-final-render.png",
              alt: "AURALIME final logo render",
              width: 1680,
              height: 640,
              caption: "AURALIME final render.",
            },
          ],
          zh: [
            "整體流程分成兩大段：先生成乾淨的 SVG logo，再把 SVG 拆成有語意的部件進行動畫。",
            {
              type: "terminal",
              title: "Pipeline",
              wrap: true,
              lines: [
                "Brand prompt",
                "  -> logo-generator skill",
                "  -> 6 logo concept SVGs",
                "  -> selected final logo.svg",
                "  -> pixel2motion skill",
                "  -> motion-ready SVG structure",
                "  -> motion.css",
                "  -> logo_motion.html",
                "  -> QA frames / motion strip",
                "  -> transparent exports",
              ],
            },
            "這篇只用一個例子示範：AURALIME，一個清爽 citrus beverage logo，幾何乾淨、顏色明亮，也很適合拆開動畫。",
            {
              type: "image",
              src: "/tools/logo-motion-pipeline/images/auralime-final-render.png",
              alt: "AURALIME final logo render",
              width: 1680,
              height: 640,
              caption: "AURALIME final render。",
            },
          ],
        },
      },
      {
        id: "install",
        heading: {
          en: "Step 1: Install the skills",
          zh: "Step 1：安裝 skills",
        },
        body: {
          en: [
            "This workflow uses two Codex skills: `logo-generator` for SVG logo concepts, and `pixel2motion` for turning SVG parts into motion.",
            {
              type: "terminal",
              title: "Install logo-generator",
              lines: [
                "$ python3 /Users/jfon/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \\",
                "  --repo op7418/logo-generator-skill \\",
                "  --path . \\",
                "  --name logo-generator",
              ],
            },
            {
              type: "terminal",
              title: "Install pixel2motion",
              lines: [
                "$ python3 /Users/jfon/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \\",
                "  --repo nolangz/pixel2motion \\",
                "  --path . \\",
                "  --name pixel2motion",
              ],
            },
            "After installing new skills, restart Codex so they appear as normal available skills.",
          ],
          zh: [
            "這套流程使用兩個 Codex skills：`logo-generator` 負責生成 SVG logo 概念，`pixel2motion` 負責把 SVG 部件變成 motion。",
            {
              type: "terminal",
              title: "Install logo-generator",
              lines: [
                "$ python3 /Users/jfon/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \\",
                "  --repo op7418/logo-generator-skill \\",
                "  --path . \\",
                "  --name logo-generator",
              ],
            },
            {
              type: "terminal",
              title: "Install pixel2motion",
              lines: [
                "$ python3 /Users/jfon/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \\",
                "  --repo nolangz/pixel2motion \\",
                "  --path . \\",
                "  --name pixel2motion",
              ],
            },
            "安裝新 skill 之後，記得重啟 Codex，skill 才會正常出現在可用列表裡。",
          ],
        },
      },
      {
        id: "logo-generator",
        heading: {
          en: "Step 2: Generate logo concepts",
          zh: "Step 2：生成 logo 概念",
        },
        body: {
          en: [
            "Ask `logo-generator` for six distinct SVG concepts first. Do not jump straight into animation. The selected logo needs simple geometry and parts that can become animation actors.",
            {
              type: "terminal",
              title: "Base Logo Prompt",
              wrap: true,
              lines: [
                "Generate 6 distinct SVG logo concepts.",
                "Use a 0 0 100 100 viewBox for icon concepts.",
                "Keep the geometry simple, scalable, and motion-ready.",
                "Avoid decorative clutter.",
                "Use clear semantic parts that can later become animation actors.",
                "Create one selected direction and explain why it was selected.",
                "Export final SVG and PNG source assets.",
              ],
            },
            "Example brand prompt:",
            {
              type: "terminal",
              title: "AURALIME Prompt",
              wrap: true,
              lines: [
                "Create a fresh citrus beverage logo named \"AURALIME\".",
                "The visual language should feel fresh, buoyant, crisp, sunny, and clean.",
                "Use lime green, citrus yellow, orange, and deep green.",
                "Explore lime slices, leaves, droplets, liquid waves, bubbles, and packaging-friendly badge forms.",
                "Generate 6 distinct SVG logo concepts.",
                "The selected concept should be easy to animate as separated parts: rind, core, citrus segment lines, leaf, droplet, splash wave, wordmark, and underline wave.",
                "Avoid overly cute fruit mascots.",
                "Keep the logo clean enough for a beverage brand and bright enough for a short-form video hook.",
              ],
            },
            "Selection rule: choose the concept with the clearest semantic parts, not just the prettiest static image.",
          ],
          zh: [
            "先請 `logo-generator` 生成六個不同 SVG 概念，不要一開始就做動畫。被選中的 logo 必須幾何簡單，且有明確部件可以成為 animation actors。",
            {
              type: "terminal",
              title: "Base Logo Prompt",
              wrap: true,
              lines: [
                "Generate 6 distinct SVG logo concepts.",
                "Use a 0 0 100 100 viewBox for icon concepts.",
                "Keep the geometry simple, scalable, and motion-ready.",
                "Avoid decorative clutter.",
                "Use clear semantic parts that can later become animation actors.",
                "Create one selected direction and explain why it was selected.",
                "Export final SVG and PNG source assets.",
              ],
            },
            "品牌 prompt 範例：",
            {
              type: "terminal",
              title: "AURALIME Prompt",
              wrap: true,
              lines: [
                "Create a fresh citrus beverage logo named \"AURALIME\".",
                "The visual language should feel fresh, buoyant, crisp, sunny, and clean.",
                "Use lime green, citrus yellow, orange, and deep green.",
                "Explore lime slices, leaves, droplets, liquid waves, bubbles, and packaging-friendly badge forms.",
                "Generate 6 distinct SVG logo concepts.",
                "The selected concept should be easy to animate as separated parts: rind, core, citrus segment lines, leaf, droplet, splash wave, wordmark, and underline wave.",
                "Avoid overly cute fruit mascots.",
                "Keep the logo clean enough for a beverage brand and bright enough for a short-form video hook.",
              ],
            },
            "選擇規則：不要只選靜態圖最好看的，而是選語意部件最清楚、最適合拆開動畫的方向。",
          ],
        },
      },
      {
        id: "svg-structure",
        heading: {
          en: "Step 3: Prepare motion-ready SVG",
          zh: "Step 3：整理可動畫化 SVG",
        },
        body: {
          en: [
            "The final `logo.svg` should be built for motion, not just static display.",
            {
              type: "list",
              items: [
                "Use stable IDs for animated parts.",
                "Keep one semantic part per element or group.",
                "Use `pathLength=\"1\"` on draw-on paths.",
                "Avoid noisy trace geometry.",
                "Keep text and mark separated.",
                "Use transforms on semantic groups, not anonymous `nth-child` selectors.",
              ],
            },
            "Good SVG actor IDs look like this:",
            {
              type: "terminal",
              title: "Semantic IDs",
              wrap: true,
              lines: [
                "AURALIME: #lime-rind, #lime-core, #segments, #leaf, #droplet, #splash-wave, #wordmark, #word-wave",
              ],
            },
          ],
          zh: [
            "最後的 `logo.svg` 要為 motion 準備，而不是只求靜態顯示。",
            {
              type: "list",
              items: [
                "每個會動的部件要有穩定 ID。",
                "一個元素或 group 只代表一個語意部件。",
                "會 draw-on 的路徑加上 `pathLength=\"1\"`。",
                "避免雜亂的 trace geometry。",
                "文字和圖形標誌要分開。",
                "動畫用 semantic groups 做 transform，不要依賴匿名 `nth-child` selectors。",
              ],
            },
            "好的 SVG actor ID 像這樣：",
            {
              type: "terminal",
              title: "Semantic IDs",
              wrap: true,
              lines: [
                "AURALIME: #lime-rind, #lime-core, #segments, #leaf, #droplet, #splash-wave, #wordmark, #word-wave",
              ],
            },
          ],
        },
      },
      {
        id: "pixel2motion",
        heading: {
          en: "Step 4: Animate with pixel2motion",
          zh: "Step 4：使用 pixel2motion 動畫化",
        },
        body: {
          en: [
            "Convert the final SVG into PNG source assets first. Use transparent PNG for export work, and a white-background PNG for static QA.",
            {
              type: "terminal",
              title: "SVG to PNG",
              lines: [
                "$ python /tmp/logo-generator-skill/scripts/svg_to_png.py \\",
                "  logo.svg \\",
                "  --output source_transparent.png \\",
                "  --width 1680 \\",
                "  --height 640",
              ],
            },
            {
              type: "terminal",
              title: "White-background QA source",
              wrap: true,
              lines: [
                "from PIL import Image",
                "",
                "img = Image.open(\"source_transparent.png\").convert(\"RGBA\")",
                "base = Image.new(\"RGBA\", img.size, \"white\")",
                "base.alpha_composite(img)",
                "base.convert(\"RGB\").save(\"source.png\")",
              ],
            },
            "Then ask pixel2motion to write `motion.css` and package the result into `logo_motion.html`.",
            {
              type: "terminal",
              title: "Build animated HTML",
              lines: [
                "$ python /tmp/pixel2motion/scripts/animate_svg_showcase.py \\",
                "  logo.svg \\",
                "  --css motion.css \\",
                "  --out logo_motion.html \\",
                "  --title \"AURALIME Logo Motion\" \\",
                "  --duration-hint 1280 \\",
                "  --background \"#f4fff2\"",
              ],
            },
            "Motion prompt example:",
            {
              type: "terminal",
              title: "AURALIME Motion Prompt",
              wrap: true,
              lines: [
                "Animate AURALIME as a fresh citrus beverage hook.",
                "The reveal should feel fresh, buoyant, and crisp.",
                "Start with the lime forming from a small blurred seed.",
                "Expand the rind and core like a ripple.",
                "Rotate the leaf into place on a soft arc.",
                "Draw the citrus segment lines in staggered order.",
                "Drop the orange citrus droplet with a gentle squash and rebound.",
                "Reveal the wordmark and complete the liquid wave underline.",
                "Final duration: 1280ms.",
              ],
            },
          ],
          zh: [
            "先把 final SVG 轉成 PNG source assets。透明 PNG 用於輸出，白底 PNG 用於 static QA。",
            {
              type: "terminal",
              title: "SVG to PNG",
              lines: [
                "$ python /tmp/logo-generator-skill/scripts/svg_to_png.py \\",
                "  logo.svg \\",
                "  --output source_transparent.png \\",
                "  --width 1680 \\",
                "  --height 640",
              ],
            },
            {
              type: "terminal",
              title: "White-background QA source",
              wrap: true,
              lines: [
                "from PIL import Image",
                "",
                "img = Image.open(\"source_transparent.png\").convert(\"RGBA\")",
                "base = Image.new(\"RGBA\", img.size, \"white\")",
                "base.alpha_composite(img)",
                "base.convert(\"RGB\").save(\"source.png\")",
              ],
            },
            "接著讓 pixel2motion 撰寫 `motion.css`，並打包成 `logo_motion.html`。",
            {
              type: "terminal",
              title: "Build animated HTML",
              lines: [
                "$ python /tmp/pixel2motion/scripts/animate_svg_showcase.py \\",
                "  logo.svg \\",
                "  --css motion.css \\",
                "  --out logo_motion.html \\",
                "  --title \"AURALIME Logo Motion\" \\",
                "  --duration-hint 1280 \\",
                "  --background \"#f4fff2\"",
              ],
            },
            "Motion prompt 範例：",
            {
              type: "terminal",
              title: "AURALIME Motion Prompt",
              wrap: true,
              lines: [
                "Animate AURALIME as a fresh citrus beverage hook.",
                "The reveal should feel fresh, buoyant, and crisp.",
                "Start with the lime forming from a small blurred seed.",
                "Expand the rind and core like a ripple.",
                "Rotate the leaf into place on a soft arc.",
                "Draw the citrus segment lines in staggered order.",
                "Drop the orange citrus droplet with a gentle squash and rebound.",
                "Reveal the wordmark and complete the liquid wave underline.",
                "Final duration: 1280ms.",
              ],
            },
          ],
        },
      },
      {
        id: "qa",
        heading: {
          en: "Step 5: QA the motion",
          zh: "Step 5：檢查動畫品質",
        },
        body: {
          en: [
            "Do not trust the animation just because it looks cool. Check static fit, motion frames, and final-frame alignment.",
            {
              type: "terminal",
              title: "Static geometry QA",
              lines: [
                "$ python /tmp/pixel2motion/scripts/render_overlay.py \\",
                "  logo.svg \\",
                "  source.png \\",
                "  --out outputs/fit_iterations/01_static_overlay.png \\",
                "  --render-out outputs/final_render.png \\",
                "  --report outputs/fit_metrics.json",
                "",
                "$ python /tmp/pixel2motion/scripts/overlay_progress_strip.py \\",
                "  --source source.png \\",
                "  --dir outputs/fit_iterations \\",
                "  --pattern \"*overlay*.png\" \\",
                "  --final-image outputs/final_render.png \\",
                "  --out outputs/overlay_progress_strip.png",
              ],
            },
            {
              type: "image",
              src: "/tools/logo-motion-pipeline/images/auralime-overlay-progress.png",
              alt: "AURALIME overlay QA progress strip",
              width: 3852,
              height: 544,
              caption: "Overlay progress strip checks whether SVG geometry matches the intended static source.",
            },
            "Then capture deterministic frames with `?t=` timestamps.",
            {
              type: "terminal",
              title: "Motion frame capture",
              lines: [
                "$ python /tmp/pixel2motion/scripts/capture_motion_frames.py \\",
                "  logo_motion.html \\",
                "  --times 0,210,420,560,740,920,1160,1280 \\",
                "  --out outputs/motion_frames \\",
                "  --strip outputs/motion_strip.png \\",
                "  --report outputs/motion_capture_report.json",
              ],
            },
            {
              type: "image",
              src: "/tools/logo-motion-pipeline/images/auralime-motion-strip.png",
              alt: "AURALIME logo motion strip",
              width: 4116,
              height: 252,
              caption: "Motion strip: quick evidence that the logo has anticipation, action, overlap, and final settle.",
            },
            "Final-frame check compares `?static=1` with `?t=<final-duration>`. In this AURALIME example, the check reached `max_abs_diff: 0`, meaning the animation lands exactly on the final static logo.",
          ],
          zh: [
            "不要因為動畫看起來炫就直接收工。至少要檢查 static fit、motion frames、final-frame alignment。",
            {
              type: "terminal",
              title: "Static geometry QA",
              lines: [
                "$ python /tmp/pixel2motion/scripts/render_overlay.py \\",
                "  logo.svg \\",
                "  source.png \\",
                "  --out outputs/fit_iterations/01_static_overlay.png \\",
                "  --render-out outputs/final_render.png \\",
                "  --report outputs/fit_metrics.json",
                "",
                "$ python /tmp/pixel2motion/scripts/overlay_progress_strip.py \\",
                "  --source source.png \\",
                "  --dir outputs/fit_iterations \\",
                "  --pattern \"*overlay*.png\" \\",
                "  --final-image outputs/final_render.png \\",
                "  --out outputs/overlay_progress_strip.png",
              ],
            },
            {
              type: "image",
              src: "/tools/logo-motion-pipeline/images/auralime-overlay-progress.png",
              alt: "AURALIME overlay QA progress strip",
              width: 3852,
              height: 544,
              caption: "Overlay progress strip 用來檢查 SVG geometry 是否對齊原始靜態 source。",
            },
            "接著用 `?t=` timestamp 捕捉 deterministic frames。",
            {
              type: "terminal",
              title: "Motion frame capture",
              lines: [
                "$ python /tmp/pixel2motion/scripts/capture_motion_frames.py \\",
                "  logo_motion.html \\",
                "  --times 0,210,420,560,740,920,1160,1280 \\",
                "  --out outputs/motion_frames \\",
                "  --strip outputs/motion_strip.png \\",
                "  --report outputs/motion_capture_report.json",
              ],
            },
            {
              type: "image",
              src: "/tools/logo-motion-pipeline/images/auralime-motion-strip.png",
              alt: "AURALIME logo motion strip",
              width: 4116,
              height: 252,
              caption: "Motion strip 可以快速檢查動畫是否有 anticipation、action、overlap 和 final settle。",
            },
            "Final-frame check 會比較 `?static=1` 和 `?t=<final-duration>`。AURALIME 這個例子達到 `max_abs_diff: 0`，代表動畫最後一幀精準落在靜態 logo。",
          ],
        },
      },
      {
        id: "export",
        heading: {
          en: "Step 6: Export transparent files",
          zh: "Step 6：輸出透明素材",
        },
        body: {
          en: [
            "Use preview exports for quick review, but use transparent exports for editing.",
            {
              type: "terminal",
              title: "Transparent Export",
              lines: ["$ python export_logo_motions_transparent.py"],
            },
            {
              type: "list",
              items: [
                "MOV ProRes 4444: `1920x1080`, `30fps`, alpha channel.",
                "WebM VP9 alpha: `1920x1080`, `30fps`, alpha channel.",
                "APNG: `1920x1080`, alpha channel.",
                "PNG sequence: `exports/transparent_frames/`.",
              ],
            },
            "Recommended editing files:",
            {
              type: "terminal",
              title: "Final Files",
              wrap: true,
              lines: ["auralime-logo-motion/exports/auralime-logo-motion-transparent.mov"],
            },
            "Avoid using GIF as the final file. GIF is limited to 256 colors and often looks blurry around edges and gradients.",
          ],
          zh: [
            "Preview export 可以用來快速檢查，但真正剪輯要用透明輸出檔。",
            {
              type: "terminal",
              title: "Transparent Export",
              lines: ["$ python export_logo_motions_transparent.py"],
            },
            {
              type: "list",
              items: [
                "MOV ProRes 4444：`1920x1080`、`30fps`、alpha channel。",
                "WebM VP9 alpha：`1920x1080`、`30fps`、alpha channel。",
                "APNG：`1920x1080`、alpha channel。",
                "PNG sequence：`exports/transparent_frames/`。",
              ],
            },
            "推薦放進剪輯軟體的檔案：",
            {
              type: "terminal",
              title: "Final Files",
              wrap: true,
              lines: ["auralime-logo-motion/exports/auralime-logo-motion-transparent.mov"],
            },
            "不要把 GIF 當最後交付檔。GIF 只有 256 色，邊緣和漸層通常會糊。",
          ],
        },
      },
      {
        id: "checklist",
        heading: {
          en: "Final checklist",
          zh: "最終檢查表",
        },
        body: {
          en: [
            {
              type: "list",
              items: [
                "Logo concept has clean geometry and clear semantic actors.",
                "`logo.svg` has stable IDs for all animated parts.",
                "Draw-on paths use `pathLength=\"1\"`.",
                "`source_transparent.png` and `source.png` both exist.",
                "Overlay QA does not reveal major geometry mismatch.",
                "Motion strip shows the intended timing and personality.",
                "Final animated frame matches the static logo.",
                "Transparent export has real alpha, not a fake solid background.",
              ],
            },
          ],
          zh: [
            {
              type: "list",
              items: [
                "Logo concept 幾何乾淨，且有明確 semantic actors。",
                "`logo.svg` 裡所有動畫部件都有穩定 ID。",
                "Draw-on paths 使用 `pathLength=\"1\"`。",
                "`source_transparent.png` 和 `source.png` 都已存在。",
                "Overlay QA 沒有明顯 geometry mismatch。",
                "Motion strip 能看出預期 timing 和 motion personality。",
                "動畫最後一幀與靜態 logo 對齊。",
                "透明輸出是真 alpha，不是假背景色。",
              ],
            },
          ],
        },
      },
    ],
    resources: [
      {
        label: "logo-generator skill",
        href: "https://github.com/op7418/logo-generator-skill",
      },
      {
        label: "pixel2motion skill",
        href: "https://github.com/nolangz/pixel2motion",
      },
      {
        label: "AURALIME motion strip",
        href: "/tools/logo-motion-pipeline/images/auralime-motion-strip.png",
      },
      {
        label: "AURALIME overlay QA",
        href: "/tools/logo-motion-pipeline/images/auralime-overlay-progress.png",
      },
    ],
  },
  {
    slug: "fpv-google-flow",
    title: {
      en: "Google Flow FPV Route Guide",
      zh: "Google Flow FPV 路徑飛行攻略",
    },
    kicker: {
      en: "Draw a camera path, then let Flow Agent fly it",
      zh: "畫出鏡頭路徑，再讓 Flow Agent 幫你飛",
    },
    description: {
      en: "Use a clean reference photo, draw a red flight path on top, then ask Google Flow Agent Mode to generate a first-person FPV city flight.",
      zh: "準備一張參考照片，在上面畫出紅色飛行路徑，再用 Google Flow Agent Mode 生成第一人稱 FPV 城市飛行影片。",
    },
    coverTitle: {
      en: "AI FPV\nRoute",
      zh: "AI FPV\n路徑",
    },
    keyword: "FPV",
    publishedAt: "2026-06-13",
    hashtags: ["#GoogleFlow", "#FPV", "#AIVideo"],
    cover: "/tools/fpv-google-flow-cover.png",
    accent: "teal",
    shareTitle: {
      en: "Start with the result",
      zh: "先看最後效果",
    },
    shareIntro: {
      en: "This workflow turns a marked-up city photo into an FPV drone-style shot. The red route is only a camera guide; the final video should be clean, cinematic, and free of path marks.",
      zh: "這個流程會把一張畫好路徑的城市照片變成 FPV drone 風格影片。紅色路徑只是給鏡頭看的參考，最後影片不應該出現路線、箭頭或標記。",
    },
    featuredMedia: {
      en: [
        {
          type: "video",
          src: "/tools/fpv-google-flow/videos/drone-flight.mp4",
          poster: "/tools/fpv-google-flow/images/drone-flight-poster.jpg",
          caption: "Final output: `Drone_flight.mp4`, generated from the marked Tokyo route image.",
        },
      ],
      zh: [
        {
          type: "video",
          src: "/tools/fpv-google-flow/videos/drone-flight.mp4",
          poster: "/tools/fpv-google-flow/images/drone-flight-poster.jpg",
          caption: "最後輸出：`Drone_flight.mp4`，由畫好路徑的 Tokyo 參考圖生成。",
        },
      ],
    },
    shareLinks: [
      {
        label: "Open Google Flow",
        href: "https://labs.google/fx/tools/flow",
      },
      {
        label: "Google Flow Help",
        href: "https://support.google.com/flow/",
      },
    ],
    toc: [
      {
        label: {
          en: "1. Workflow overview",
          zh: "1. 流程總覽",
        },
        href: "#overview",
      },
      {
        label: {
          en: "2. Prepare the reference photo",
          zh: "2. 準備參考照片",
        },
        href: "#reference-photo",
      },
      {
        label: {
          en: "3. Draw the flight path",
          zh: "3. 畫上飛行路徑",
        },
        href: "#draw-path",
      },
      {
        label: {
          en: "4. Use Flow Agent Mode",
          zh: "4. 使用 Flow Agent Mode",
        },
        href: "#agent-mode",
      },
      {
        label: {
          en: "5. Paste the prompt",
          zh: "5. 貼上 prompt",
        },
        href: "#prompt",
      },
      {
        label: {
          en: "6. Check the output",
          zh: "6. 檢查輸出結果",
        },
        href: "#output",
      },
      {
        label: {
          en: "7. Fix common problems",
          zh: "7. 常見問題修正",
        },
        href: "#fixes",
      },
    ],
    sections: [
      {
        id: "overview",
        heading: {
          en: "Workflow overview",
          zh: "流程總覽",
        },
        body: {
          en: [
            "The idea is simple: you use an image as a map, draw the exact camera route on it, then tell Google Flow that the marks are movement references only.",
            {
              type: "list",
              items: [
                "Start with a clean reference photo.",
                "Draw a visible red route with arrows and node order.",
                "Upload the marked image into Google Flow.",
                "Use Flow Agent / Agent Mode so the model treats the image like a plan.",
                "Paste a prompt that separates guide marks from final visuals.",
                "Generate the FPV shot and check whether it follows Node 1, Node 2, and Node 3.",
              ],
            },
          ],
          zh: [
            "概念很簡單：你把圖片當成鏡頭地圖，在上面畫出攝影機要飛的路徑，再告訴 Google Flow 這些紅線只是移動參考，不可以出現在最後影片裡。",
            {
              type: "list",
              items: [
                "先準備一張乾淨的 reference photo。",
                "在上面畫出清楚的紅色路徑、箭頭和節點順序。",
                "把畫好路徑的圖丟進 Google Flow。",
                "使用 Flow Agent / Agent Mode，讓模型把圖片當成執行計畫。",
                "貼上 prompt，明確區分「參考標記」和「最終畫面」。",
                "生成 FPV 影片後，檢查它有沒有照 Node 1、Node 2、Node 3 的順序飛。",
              ],
            },
          ],
        },
      },
      {
        id: "reference-photo",
        heading: {
          en: "Step 1: Prepare the reference photo",
          zh: "Step 1：準備參考照片",
        },
        body: {
          en: [
            "Start from a clean image with no route marks. In this example, the base image is `tokyo_raw.png`.",
            "Choose a photo with strong architecture, clear depth, and visible lanes or gaps the camera can pass through. A dense night city works well because the light trails make the speed feel stronger.",
            {
              type: "image",
              src: "/tools/fpv-google-flow/images/tokyo-raw.png",
              alt: "Clean Tokyo night reference photo without route marks",
              width: 2728,
              height: 1536,
              caption: "`tokyo_raw.png`: the clean reference image before drawing the camera path.",
            },
          ],
          zh: [
            "先從沒有路徑標記的乾淨圖片開始。這個例子使用的是 `tokyo_raw.png`。",
            "建議選有明顯建築、空間深度清楚、看得出鏡頭可以穿越哪裡的照片。夜景城市很適合，因為燈光會讓速度感更強。",
            {
              type: "image",
              src: "/tools/fpv-google-flow/images/tokyo-raw.png",
              alt: "Clean Tokyo night reference photo without route marks",
              width: 2728,
              height: 1536,
              caption: "`tokyo_raw.png`：還沒畫路徑前的乾淨 reference image。",
            },
          ],
        },
      },
      {
        id: "draw-path",
        heading: {
          en: "Step 2: Draw the flight path",
          zh: "Step 2：畫上飛行路徑",
        },
        body: {
          en: [
            "Draw the route directly on top of the reference photo. Use a high-contrast color like red, add arrows, and label the path order with nodes.",
            "The route image for this guide is `tokyo.png`: it shows the intended direction from Node 1 to Node 2 to Node 3.",
            {
              type: "image",
              src: "/tools/fpv-google-flow/images/tokyo-path.png",
              alt: "Tokyo reference photo with red FPV camera route and nodes",
              width: 1209,
              height: 683,
              caption: "`tokyo.png`: the red path is a camera movement guide only. It should not appear in the final video.",
            },
            {
              type: "list",
              items: [
                "Use a color that is easy for the model to recognize.",
                "Make the path continuous instead of broken into unclear segments.",
                "Use arrows to show direction.",
                "Use node labels when the route has multiple turns.",
                "Keep the route simple enough for one continuous shot.",
              ],
            },
          ],
          zh: [
            "直接在 reference photo 上畫出鏡頭路徑。用紅色這種高對比顏色，加上箭頭，並用節點標出飛行順序。",
            "這篇使用的路徑圖是 `tokyo.png`：它標示了鏡頭從 Node 1 到 Node 2，再到 Node 3 的方向。",
            {
              type: "image",
              src: "/tools/fpv-google-flow/images/tokyo-path.png",
              alt: "Tokyo reference photo with red FPV camera route and nodes",
              width: 1209,
              height: 683,
              caption: "`tokyo.png`：紅色路線只是鏡頭移動參考，不應該出現在最後影片裡。",
            },
            {
              type: "list",
              items: [
                "使用模型容易辨識的高對比顏色。",
                "路徑盡量連續，不要斷成太多不清楚的小段。",
                "用箭頭標出方向。",
                "路徑有多個轉折時，用 node label 標出順序。",
                "路線不要太複雜，讓它像一鏡到底可以完成的動作。",
              ],
            },
          ],
        },
      },
      {
        id: "agent-mode",
        heading: {
          en: "Step 3: Use Flow Agent Mode",
          zh: "Step 3：使用 Flow Agent Mode",
        },
        body: {
          en: [
            "Open Google Flow, upload the route image, then use Flow Agent / Agent Mode. The goal is to make Flow treat the marked photo as a camera plan instead of just a visual reference.",
            "The operation flow below shows the setup process inside Google Flow.",
            {
              type: "video",
              src: "/tools/fpv-google-flow/videos/flow-agent-mode.mp4",
              poster: "/tools/fpv-google-flow/images/flow-agent-mode-poster.jpg",
              caption: "Google Flow operation flow. The original screen capture was provided as `flow.gif`; this page uses a lighter MP4 version for faster loading.",
            },
            {
              type: "list",
              items: [
                "Upload the marked `tokyo.png` image as the reference.",
                "Use Agent Mode so the model follows instructions from the image and prompt together.",
                "Keep the prompt focused on camera movement, trajectory, and negative constraints.",
                "Do not rely on the image alone. The prompt must explicitly say the red marks are not part of the final video.",
              ],
            },
          ],
          zh: [
            "打開 Google Flow，先上傳畫好路徑的圖片，然後使用 Flow Agent / Agent Mode。重點是讓 Flow 把這張圖理解成鏡頭計畫，而不是單純的視覺參考圖。",
            "下面這段操作流程示範的是在 Google Flow 裡的設定過程。",
            {
              type: "video",
              src: "/tools/fpv-google-flow/videos/flow-agent-mode.mp4",
              poster: "/tools/fpv-google-flow/images/flow-agent-mode-poster.jpg",
              caption: "Google Flow 操作流程。原始素材是 `flow.gif`，這裡使用較輕的 MP4 版本，載入速度比較合理。",
            },
            {
              type: "list",
              items: [
                "把標好路徑的 `tokyo.png` 當作 reference 上傳。",
                "使用 Agent Mode，讓模型同時讀取圖片和 prompt 的指令。",
                "prompt 要集中在 camera movement、trajectory 和 negative constraints。",
                "不要只靠圖片。prompt 一定要明確說紅線不是最終畫面的一部分。",
              ],
            },
          ],
        },
        links: [
          {
            label: "Open Google Flow",
            href: "https://labs.google/fx/tools/flow",
          },
          {
            label: "Google Flow Help Center",
            href: "https://support.google.com/flow/",
          },
        ],
      },
      {
        id: "prompt",
        heading: {
          en: "Step 4: Paste the prompt",
          zh: "Step 4：貼上 prompt",
        },
        body: {
          en: [
            "Paste this prompt after uploading the marked route image. Keep the section labels because they make the instruction easier for the agent to parse.",
            {
              type: "terminal",
              title: "Google Flow FPV Prompt",
              wrap: true,
              lines: [
                "[Constraints]",
                "Remove the red lines from the image. The red lines and arrows are only for camera movement reference; no red lines, arrows, or markers should appear in the final video.",
                "",
                "[Camera Movement]",
                "First-person FPV perspective, ultra-high-speed camera movement, cinematic, one-take / continuous shot. The camera must strictly follow the red path shown in the image without deviating, skipping, or simplifying the route. The architectural structures passed through must be clear, with realistic silhouettes and strong texture details.",
                "",
                "[Trajectory]",
                "The camera starts flying continuously through Node 1, Node 2, and Node 3 in sequential order, strictly following the direction of the arrows.",
                "",
                "[Texture & Quality]",
                "The visuals must be realistic, with smooth and stable motion, a strong sense of speed, and clear spatial continuity. No repeating buildings, no distortion, no text, and no watermarks.",
              ],
            },
            "The most important line is the first constraint. Without it, the model may treat the red path as something visible in the scene instead of a hidden camera guide.",
          ],
          zh: [
            "上傳路徑圖後，直接貼上這段 prompt。建議保留 section labels，因為這樣 Agent 比較容易理解每一段指令的用途。",
            {
              type: "terminal",
              title: "Google Flow FPV Prompt",
              wrap: true,
              lines: [
                "[Constraints]",
                "Remove the red lines from the image. The red lines and arrows are only for camera movement reference; no red lines, arrows, or markers should appear in the final video.",
                "",
                "[Camera Movement]",
                "First-person FPV perspective, ultra-high-speed camera movement, cinematic, one-take / continuous shot. The camera must strictly follow the red path shown in the image without deviating, skipping, or simplifying the route. The architectural structures passed through must be clear, with realistic silhouettes and strong texture details.",
                "",
                "[Trajectory]",
                "The camera starts flying continuously through Node 1, Node 2, and Node 3 in sequential order, strictly following the direction of the arrows.",
                "",
                "[Texture & Quality]",
                "The visuals must be realistic, with smooth and stable motion, a strong sense of speed, and clear spatial continuity. No repeating buildings, no distortion, no text, and no watermarks.",
              ],
            },
            "最重要的是第一段 constraint。如果沒有明確寫，模型可能會把紅色路徑當成畫面中真的存在的物件，而不是隱藏的鏡頭參考。",
          ],
        },
      },
      {
        id: "output",
        heading: {
          en: "Step 5: Check the output",
          zh: "Step 5：檢查輸出結果",
        },
        body: {
          en: [
            "After generation, you should get a complete FPV flight video like `Drone_flight.mp4`.",
            "Check the output with three questions:",
            {
              type: "list",
              items: [
                "Did the final video remove every red line, arrow, marker, and node label?",
                "Does the camera clearly fly through Node 1, Node 2, and Node 3 in order?",
                "Does the movement feel like one continuous FPV shot instead of several unrelated clips?",
              ],
            },
            "If all three are true, the route control worked.",
          ],
          zh: [
            "生成後，你應該會得到像 `Drone_flight.mp4` 這樣的完整 FPV 飛行影片。",
            "檢查輸出時看三件事：",
            {
              type: "list",
              items: [
                "最後影片有沒有完全移除紅線、箭頭、標記和 node label？",
                "鏡頭有沒有清楚照 Node 1、Node 2、Node 3 的順序飛？",
                "整段運鏡像不像一鏡到底的 FPV，而不是幾段不相關畫面硬接？",
              ],
            },
            "三個都成立，代表這次 route control 成功。",
          ],
        },
      },
      {
        id: "fixes",
        heading: {
          en: "Fix common problems",
          zh: "常見問題修正",
        },
        body: {
          en: [
            {
              type: "list",
              items: [
                "Red marks appear in the final video: strengthen the first constraint and say `no red lines, no arrows, no labels, no markers`.",
                "The camera ignores the route: simplify the path, make the arrows larger, and use clearer node labels.",
                "The video jumps between shots: emphasize `one-take / continuous shot` and `clear spatial continuity`.",
                "Buildings repeat or distort: keep `no repeating buildings` and `no distortion` in the quality section.",
                "The movement is too slow: use `ultra-high-speed camera movement` and `strong sense of speed`.",
              ],
            },
          ],
          zh: [
            {
              type: "list",
              items: [
                "最後影片出現紅線：加強第一段 constraint，明確寫 `no red lines, no arrows, no labels, no markers`。",
                "鏡頭沒有照路徑飛：簡化路線、放大箭頭、讓 node label 更清楚。",
                "影片像多段畫面跳接：強調 `one-take / continuous shot` 和 `clear spatial continuity`。",
                "建築重複或變形：保留 `no repeating buildings` 和 `no distortion`。",
                "速度感不夠：使用 `ultra-high-speed camera movement` 和 `strong sense of speed`。",
              ],
            },
          ],
        },
      },
    ],
    resources: [
      {
        label: "Google Flow",
        href: "https://labs.google/fx/tools/flow",
      },
      {
        label: "Google Flow Help Center",
        href: "https://support.google.com/flow/",
      },
      {
        label: "Clean Reference Image",
        href: "/tools/fpv-google-flow/images/tokyo-raw.png",
      },
      {
        label: "Marked Route Image",
        href: "/tools/fpv-google-flow/images/tokyo-path.png",
      },
    ],
  },
  {
    slug: "css-joystick-button",
    title: {
      en: "Pure CSS Joystick Button",
      zh: "純 CSS 搖桿按鈕攻略",
    },
    kicker: {
      en: "Fake 3D with gradients, shadows, and flat layers",
      zh: "用漸層、陰影和平面層做出假 3D",
    },
    description: {
      en: "Build a draggable analog joystick UI with HTML, CSS, SVG arrows, and a small amount of JavaScript. No Canvas or WebGL required.",
      zh: "用 HTML、CSS、SVG 箭頭和少量 JavaScript 做出可拖曳的類比搖桿 UI，不需要 Canvas 或 WebGL。",
    },
    coverTitle: {
      en: "CSS\nJoystick",
      zh: "CSS\n搖桿",
    },
    keyword: "JOYSTICK",
    publishedAt: "2026-06-08",
    hashtags: ["#CSS", "#UIDesign", "#Frontend"],
    cover: "/tools/css-joystick-button-cover.png",
    accent: "teal",
    shareTitle: {
      en: "Try the joystick here",
      zh: "直接在這裡試搖桿",
    },
    shareIntro: {
      en: "This joystick looks like a tiny 3D object, but it is built from flat HTML layers. The depth comes from gradients, inset shadows, outer shadows, SVG arrows, and pointer-driven CSS variables.",
      zh: "這個搖桿看起來像小型 3D 元件，但實際上是平面的 HTML layer 疊出來的。立體感來自漸層、內陰影、外陰影、SVG 箭頭，以及由滑鼠/觸控控制的 CSS 變數。",
    },
    featuredMedia: {
      en: [
        {
          type: "embed",
          src: "/tools/css-joystick-button/joystick-embed.html",
          title: "Pure CSS joystick interactive demo",
          caption: "Drag the center knob or press the arrows. This is the actual component, not a video preview.",
        },
      ],
      zh: [
        {
          type: "embed",
          src: "/tools/css-joystick-button/joystick-embed.html",
          title: "Pure CSS joystick interactive demo",
          caption: "拖曳中間的蘑菇頭，或直接按四個方向鍵。這是實際元件，不是影片預覽。",
        },
      ],
    },
    shareLinks: [
      {
        label: "Open Demo + Code",
        href: "/tools/css-joystick-button/joystick-demo.html",
      },
    ],
    toc: [
      {
        label: {
          en: "1. What you are building",
          zh: "1. 你要做出什麼",
        },
        href: "#what-you-build",
      },
      {
        label: {
          en: "2. Copy the structure",
          zh: "2. 複製 HTML 結構",
        },
        href: "#structure",
      },
      {
        label: {
          en: "3. Build the fake depth",
          zh: "3. 做出假 3D 深度",
        },
        href: "#depth",
      },
      {
        label: {
          en: "4. Add arrows and details",
          zh: "4. 加上箭頭與細節",
        },
        href: "#details",
      },
      {
        label: {
          en: "5. Make it draggable",
          zh: "5. 做成可拖曳",
        },
        href: "#drag",
      },
      {
        label: {
          en: "6. What to tweak",
          zh: "6. 可以調整的地方",
        },
        href: "#tweak",
      },
      {
        label: {
          en: "7. Credits",
          zh: "7. 感謝來源",
        },
        href: "#credits",
      },
    ],
    sections: [
      {
        id: "what-you-build",
        heading: {
          en: "What you are building",
          zh: "你要做出什麼",
        },
        body: {
          en: [
            "You are building a draggable analog joystick UI. It looks raised, recessed, and touchable, but the whole visual is made from flat circles.",
            "There is no Canvas, no WebGL, and no image texture. The component is made from five visual layers: outer ring, dark socket, inner base, mushroom head, and top details.",
            "Open the [demo + code page](/tools/css-joystick-button/joystick-demo.html) if you want a larger preview with the complete standalone HTML underneath.",
          ],
          zh: [
            "你要做的是一個可以拖曳的 analog joystick UI。它看起來有凸起、有凹槽、像可以被按壓，但整個視覺其實都是平面圓形疊出來的。",
            "這裡沒有 Canvas、沒有 WebGL、也沒有用圖片貼圖。核心是五個視覺 layer：外圈、暗色凹槽、內層底座、蘑菇頭、頂部細節。",
            "如果你想看更大的版本和完整 HTML，可以打開 [demo + code page](/tools/css-joystick-button/joystick-demo.html)。",
          ],
        },
      },
      {
        id: "structure",
        heading: {
          en: "Copy the structure",
          zh: "複製 HTML 結構",
        },
        body: {
          en: [
            "The structure is intentionally simple. Four real buttons sit around the joystick, and the center is a nested stack of circles.",
            {
              type: "terminal",
              title: "HTML",
              wrap: true,
              lines: [
                "<button class=\"control top\" aria-label=\"Move up\">...</button>",
                "<button class=\"control right\" aria-label=\"Move right\">...</button>",
                "<button class=\"control bottom\" aria-label=\"Move down\">...</button>",
                "<button class=\"control left\" aria-label=\"Move left\">...</button>",
                "",
                "<div class=\"around\">",
                "  <div class=\"handle\">",
                "    <div class=\"button-wrapper\">",
                "      <span class=\"inside\">",
                "        <span class=\"dot\"></span>",
                "        <span class=\"dot\"></span>",
                "        <span class=\"dot\"></span>",
                "        <span class=\"dot\"></span>",
                "      </span>",
                "    </div>",
                "  </div>",
                "</div>",
              ],
            },
            "The four `button.control` elements should stay as actual buttons. That makes the directional controls easier to wire up and better for accessibility.",
            "`around::before` adds one extra visual circle without adding another HTML element. That pseudo-element becomes the dark recessed socket.",
          ],
          zh: [
            "HTML 結構刻意保持簡單。四個方向是實際的 button，中間則是幾個圓形 layer 疊在一起。",
            {
              type: "terminal",
              title: "HTML",
              wrap: true,
              lines: [
                "<button class=\"control top\" aria-label=\"Move up\">...</button>",
                "<button class=\"control right\" aria-label=\"Move right\">...</button>",
                "<button class=\"control bottom\" aria-label=\"Move down\">...</button>",
                "<button class=\"control left\" aria-label=\"Move left\">...</button>",
                "",
                "<div class=\"around\">",
                "  <div class=\"handle\">",
                "    <div class=\"button-wrapper\">",
                "      <span class=\"inside\">",
                "        <span class=\"dot\"></span>",
                "        <span class=\"dot\"></span>",
                "        <span class=\"dot\"></span>",
                "        <span class=\"dot\"></span>",
                "      </span>",
                "    </div>",
                "  </div>",
                "</div>",
              ],
            },
            "四個 `button.control` 建議保留成真的 button。這樣後面要接方向控制更直覺，也比較符合 accessibility。",
            "`around::before` 會額外補出一個視覺圓形，不需要再多寫一層 HTML。這個 pseudo-element 會變成中間的暗色凹槽。",
          ],
        },
        links: [
          {
            label: "Open Demo + Code",
            href: "/tools/css-joystick-button/joystick-demo.html",
          },
        ],
      },
      {
        id: "depth",
        heading: {
          en: "Build the fake depth",
          zh: "做出假 3D 深度",
        },
        body: {
          en: [
            "The depth is not one trick. It is a small system of highlights and shadows.",
            {
              type: "list",
              items: [
                "`.around` uses a top-to-bottom gradient to create the outer bevel.",
                "`.around::before` darkens the center so it reads as a socket.",
                "`.handle` gives the inner base a bright top and a darker lower edge.",
                "`.button-wrapper` carries the mushroom head and the strongest floating shadow.",
                "`.inside` adds the top face, inset highlight, and small dot details.",
              ],
            },
            {
              type: "terminal",
              title: "Core CSS Depth",
              wrap: true,
              lines: [
                ".around {",
                "  background-image: linear-gradient(0deg, #f5f8fa, #9da4a8);",
                "}",
                "",
                ".button-wrapper {",
                "  background-image: linear-gradient(180deg, #adb9bf, #d4dbdd);",
                "  box-shadow:",
                "    0 -12px 10px rgba(255, 255, 255, 0.5),",
                "    0 9px 14px rgba(0, 0, 0, 0.5),",
                "    inset 0 10px 13px rgba(255, 255, 255, 0.72),",
                "    inset 0 -14px 18px rgba(86, 101, 108, 0.44);",
                "}",
              ],
            },
            "The important idea: highlights should sit on the top side, and heavier shadows should sit below the object. Once that direction is consistent, the flat circles start to feel physical.",
            "The mushroom head needs a tight lower shadow; without it, the joystick looks pasted on instead of raised. The top face needs inset highlights and a soft lower inset shadow to sell the thickness.",
          ],
          zh: [
            "這個立體感不是靠單一技巧，而是一整套高光與陰影的組合。",
            {
              type: "list",
              items: [
                "`.around` 用上下漸層做出外圈斜面。",
                "`.around::before` 把中心壓暗，讓它看起來像凹槽。",
                "`.handle` 讓內層底座有上亮下暗的厚度。",
                "`.button-wrapper` 是蘑菇頭，也是最強浮起陰影的地方。",
                "`.inside` 負責頂面、內部高光和小圓點細節。",
              ],
            },
            {
              type: "terminal",
              title: "Core CSS Depth",
              wrap: true,
              lines: [
                ".around {",
                "  background-image: linear-gradient(0deg, #f5f8fa, #9da4a8);",
                "}",
                "",
                ".button-wrapper {",
                "  background-image: linear-gradient(180deg, #adb9bf, #d4dbdd);",
                "  box-shadow:",
                "    0 -12px 10px rgba(255, 255, 255, 0.5),",
                "    0 9px 14px rgba(0, 0, 0, 0.5),",
                "    inset 0 10px 13px rgba(255, 255, 255, 0.72),",
                "    inset 0 -14px 18px rgba(86, 101, 108, 0.44);",
                "}",
              ],
            },
            "關鍵概念是：高光要在上方，重一點的陰影要在物件下方。只要光源方向一致，平面的圓形就會開始有物理感。",
            "蘑菇頭下方一定要有貼近的陰影；沒有這層，它會像貼上去的圖，而不是浮起來的按鈕。頂面則用內部高光和底部內陰影來暗示厚度。",
          ],
        },
      },
      {
        id: "details",
        heading: {
          en: "Add arrows and details",
          zh: "加上箭頭與細節",
        },
        body: {
          en: [
            "Once the depth works, add the directional arrows and four small dots. These are small details, but they make the control feel intentional instead of decorative.",
            "Use SVG for the arrows so they stay sharp at any size. Keep each arrow inside a button and update its active color based on direction.",
            {
              type: "list",
              items: [
                "Idle arrows: neutral gray.",
                "Pressed direction: warm active color.",
                "Diagonal drag: two arrows can be active at different intensities.",
                "Dots: subtle, low-contrast, and slightly inset.",
              ],
            },
            "Direction states should respond to the actual joystick vector, not just hard-coded button clicks.",
          ],
          zh: [
            "立體感成立之後，再加方向箭頭和四個小圓點。這些細節很小，但會讓它從裝飾圖案變成真正像控制器的 UI。",
            "箭頭建議用 SVG，這樣任何尺寸都清楚。每個箭頭外層保留 button，再根據方向更新 active 顏色。",
            {
              type: "list",
              items: [
                "閒置箭頭：中性灰色。",
                "按下方向：變成暖色 active 狀態。",
                "斜向拖曳：兩個方向可以同時亮起，並依照力道有深淺。",
                "小圓點：低對比、微微內凹，不要搶主視覺。",
              ],
            },
            "方向狀態最好根據 joystick vector 更新，不要只做固定的 button active 切換。",
          ],
        },
      },
      {
        id: "drag",
        heading: {
          en: "Make it draggable",
          zh: "做成可拖曳",
        },
        body: {
          en: [
            "JavaScript does not need to draw the joystick. It only needs to read pointer position, convert it into an `x` and `y` vector, clamp that vector inside a circle, then write CSS variables.",
            {
              type: "terminal",
              title: "Movement CSS",
              wrap: true,
              lines: [
                ".button-wrapper {",
                "  transform: translate(var(--joy-x), var(--joy-y)) scale(var(--joy-scale));",
                "}",
                "",
                ".handle {",
                "  background:",
                "    radial-gradient(circle at calc(50% + var(--well-light-x)) calc(42% + var(--well-light-y)), ...),",
                "    radial-gradient(circle at calc(50% + var(--well-dark-x)) calc(58% + var(--well-dark-y)), ...),",
                "    linear-gradient(...);",
                "}",
              ],
            },
            {
              type: "terminal",
              title: "Direction Vector",
              wrap: true,
              lines: [
                "setJoystick(x, y);",
                "",
                "// x and y should stay between -1 and 1.",
                "// Clamp the drag distance to a circular range before writing CSS variables.",
              ],
            },
            "Use the vector to decide how strong each arrow should look:",
            {
              type: "list",
              items: [
                "Up: `Math.max(0, -y)`",
                "Right: `Math.max(0, x)`",
                "Down: `Math.max(0, y)`",
                "Left: `Math.max(0, -x)`",
              ],
            },
            "When the knob moves, update the socket lighting and the knob shadow together. That is what makes the drag feel believable.",
          ],
          zh: [
            "JavaScript 不需要負責畫出搖桿。它只要讀取 pointer 位置，把它轉成 `x` 和 `y` 向量，限制在圓形範圍內，再寫入 CSS 變數即可。",
            {
              type: "terminal",
              title: "Movement CSS",
              wrap: true,
              lines: [
                ".button-wrapper {",
                "  transform: translate(var(--joy-x), var(--joy-y)) scale(var(--joy-scale));",
                "}",
                "",
                ".handle {",
                "  background:",
                "    radial-gradient(circle at calc(50% + var(--well-light-x)) calc(42% + var(--well-light-y)), ...),",
                "    radial-gradient(circle at calc(50% + var(--well-dark-x)) calc(58% + var(--well-dark-y)), ...),",
                "    linear-gradient(...);",
                "}",
              ],
            },
            {
              type: "terminal",
              title: "Direction Vector",
              wrap: true,
              lines: [
                "setJoystick(x, y);",
                "",
                "// x and y should stay between -1 and 1.",
                "// Clamp the drag distance to a circular range before writing CSS variables.",
              ],
            },
            "接著用向量決定每個箭頭要亮多深：",
            {
              type: "list",
              items: [
                "上：`Math.max(0, -y)`",
                "右：`Math.max(0, x)`",
                "下：`Math.max(0, y)`",
                "左：`Math.max(0, -x)`",
              ],
            },
            "蘑菇頭移動時，底座凹槽的光影和蘑菇頭陰影要同步變化，拖曳感才會可信。",
          ],
        },
      },
      {
        id: "tweak",
        heading: {
          en: "What to tweak",
          zh: "可以調整的地方",
        },
        body: {
          en: [
            "After the demo works, tweak these parts first:",
            {
              type: "list",
              items: [
                "Size: change the wrapper dimensions and keep all inner circles proportional.",
                "Depth: adjust shadow offset and blur before changing colors.",
                "Movement: reduce the drag radius if the knob feels too loose.",
                "Active color: change the arrow color to match your UI theme.",
                "Touch feel: use `transform`, not `left` or `top`, so the motion stays smooth.",
                "Accessibility: keep the directional controls as real buttons with labels.",
              ],
            },
            "Common mistakes: making every shadow too soft, mixing light directions, using a screenshot as a texture, or turning the arrows into decoration instead of controls.",
          ],
          zh: [
            "demo 跑起來後，可以先調這些地方：",
            {
              type: "list",
              items: [
                "尺寸：調整外層尺寸，並讓內部圓形等比例縮放。",
                "深度：先調 shadow offset 和 blur，再改顏色。",
                "移動感：如果蘑菇頭太鬆，就縮小 drag radius。",
                "Active color：把箭頭亮起顏色換成你的 UI 主色。",
                "觸控手感：用 `transform`，不要用 `left` 或 `top`，動畫會更順。",
                "Accessibility：方向控制保留成有 label 的真 button。",
              ],
            },
            "常見錯誤：所有陰影都太糊、光源方向不一致、用截圖當貼圖，或是把箭頭做成純裝飾而不是控制元件。",
          ],
        },
      },
      {
        id: "credits",
        heading: {
          en: "Credits",
          zh: "感謝來源",
        },
        body: {
          en: [
            "Thanks to the original visual references behind this recreation.",
            {
              type: "list",
              items: [
                "Button visual design reference: [Pinterest source](https://za.pinterest.com/pin/637611259733805125/)",
                "Joystick breakdown reference: [original Douyin video](https://www.douyin.com/video/7639656582095097122)",
              ],
            },
          ],
          zh: [
            "感謝這次復刻背後的原始視覺與拆解參考。",
            {
              type: "list",
              items: [
                "按鈕視覺設計來源：[Pinterest source](https://za.pinterest.com/pin/637611259733805125/)",
                "Joystick 拆解參考：[original Douyin video](https://www.douyin.com/video/7639656582095097122)",
              ],
            },
          ],
        },
        links: [
          {
            label: "Button Design Source",
            href: "https://za.pinterest.com/pin/637611259733805125/",
          },
          {
            label: "Original Joystick Breakdown",
            href: "https://www.douyin.com/video/7639656582095097122",
          },
        ],
      },
    ],
    resources: [
      {
        label: "Open Demo + Code",
        href: "/tools/css-joystick-button/joystick-demo.html",
      },
      {
        label: "Button Design Source",
        href: "https://za.pinterest.com/pin/637611259733805125/",
      },
      {
        label: "Original Joystick Breakdown",
        href: "https://www.douyin.com/video/7639656582095097122",
      },
    ],
  },
  {
    slug: "moneyprinterturbo",
    title: {
      en: "MoneyPrinterTurbo Setup Guide",
      zh: "MoneyPrinterTurbo 安裝與使用攻略",
    },
    kicker: {
      en: "Open-source AI short-video generator",
      zh: "開源 AI 短影片生成器",
    },
    description: {
      en: "Set up MoneyPrinterTurbo, connect an LLM and stock-video API, then generate your first short video from a single topic.",
      zh: "安裝 MoneyPrinterTurbo，接上 LLM 和素材 API，然後用一個主題生成第一支短影片。",
    },
    coverTitle: {
      en: "MoneyPrinter\nTurbo",
      zh: "MoneyPrinter\nTurbo",
    },
    keyword: "MONEY",
    publishedAt: "2026-06-06",
    hashtags: ["#AIVideo", "#OpenSource", "#MoneyPrinterTurbo"],
    cover: "/tools/moneyprinterturbo-cover.png",
    accent: "teal",
    shareTitle: {
      en: "Start with the repo",
      zh: "先從專案連結開始",
    },
    shareIntro: {
      en: "MoneyPrinterTurbo is an open-source AI video generator. Give it a topic, and it can generate a script, collect video material, create voiceover and subtitles, then export a short video.",
      zh: "MoneyPrinterTurbo 是一個開源 AI 影片生成器。你給它一個主題，它可以產生文案、抓影片素材、生成配音與字幕，最後輸出短影片。",
    },
    featuredMedia: {
      en: [
        {
          type: "video",
          src: "/tools/moneyprinterturbo/videos/demo.mp4",
          poster: "/tools/moneyprinterturbo/images/demo-poster.jpg",
          caption: "Actual video generated by MoneyPrinterTurbo. Treat it as a draft, not the final edit.",
        },
      ],
      zh: [
        {
          type: "video",
          src: "/tools/moneyprinterturbo/videos/demo.mp4",
          poster: "/tools/moneyprinterturbo/images/demo-poster.jpg",
          caption: "這支是 MoneyPrinterTurbo 實際產出的影片。把它當成初稿，不要當成最終剪輯。",
        },
      ],
    },
    shareLinks: [
      {
        label: "MoneyPrinterTurbo GitHub",
        href: "https://github.com/harry0703/MoneyPrinterTurbo",
      },
      {
        label: "Official Docs",
        href: "https://www.moneyprinterturbo.cc/",
      },
      {
        label: "Run in Google Colab",
        href: "https://colab.research.google.com/github/harry0703/MoneyPrinterTurbo/blob/main/docs/MoneyPrinterTurbo.ipynb",
      },
      {
        label: "Pexels API Key",
        href: "https://www.pexels.com/api/",
      },
    ],
    toc: [
      {
        label: {
          en: "1. What it is",
          zh: "1. 它是什麼",
        },
        href: "#what-it-is",
      },
      {
        label: {
          en: "2. Ask an AI agent to install it",
          zh: "2. 請 AI agent 幫你安裝",
        },
        href: "#ai-agent",
      },
      {
        label: {
          en: "3. Manual setup",
          zh: "3. 手動安裝",
        },
        href: "#manual-setup",
      },
      {
        label: {
          en: "4. Configure the WebUI",
          zh: "4. 設定 WebUI",
        },
        href: "#webui",
      },
      {
        label: {
          en: "5. Generate a first draft",
          zh: "5. 生成第一版初稿",
        },
        href: "#first-draft",
      },
      {
        label: {
          en: "6. Best way to use it",
          zh: "6. 最推薦的用法",
        },
        href: "#workflow",
      },
      {
        label: {
          en: "7. Common problems",
          zh: "7. 常見問題",
        },
        href: "#troubleshooting",
      },
    ],
    sections: [
      {
        id: "what-it-is",
        heading: {
          en: "What it is",
          zh: "它是什麼",
        },
        body: {
          en: [
            "MoneyPrinterTurbo is a local/open-source tool for generating short videos from one topic or keyword.",
            "The promise is simple: topic in, video out. It can generate the script, pull stock footage, create voiceover, add subtitles, add background music, and export the result.",
            "My honest take: do not expect a perfect viral video on the first click. The real value is that it gets you past the blank timeline and gives you something to edit.",
            {
              type: "image",
              src: "/tools/moneyprinterturbo/images/github-screenshot.png",
              alt: "MoneyPrinterTurbo GitHub repository screenshot",
              width: 1271,
              height: 719,
              caption: "The repo has the source code, installation instructions, and update history.",
            },
          ],
          zh: [
            "MoneyPrinterTurbo 是一個可以本地運行的開源短影片生成工具，用一個主題或 keyword 產生影片。",
            "它的核心很簡單：輸入主題，輸出影片。它可以幫你產生文案、抓素材、生成配音、加字幕、加背景音樂，最後輸出成品。",
            "我的誠實看法：不要期待它一鍵生成完美爆款。它真正有用的地方是幫你跳過空白 timeline，先拿到一個可以修改的初稿。",
            {
              type: "image",
              src: "/tools/moneyprinterturbo/images/github-screenshot.png",
              alt: "MoneyPrinterTurbo GitHub repository screenshot",
              width: 1271,
              height: 719,
              caption: "GitHub repo 裡有 source code、安裝方式和更新紀錄。",
            },
          ],
        },
        links: [
          {
            label: "MoneyPrinterTurbo GitHub",
            href: "https://github.com/harry0703/MoneyPrinterTurbo",
          },
        ],
      },
      {
        id: "ai-agent",
        heading: {
          en: "Ask an AI agent to install it",
          zh: "請 AI agent 幫你安裝",
        },
        body: {
          en: [
            "If you use Claude Code, Codex, Cursor, or another coding agent, the easiest path is to let the agent do the setup for you. Paste this into the agent inside an empty project folder:",
            {
              type: "terminal",
              title: "Agent Prompt",
              wrap: true,
              lines: [
                "Help me install MoneyPrinterTurbo locally.",
                "",
                "Use the official repo:",
                "https://github.com/harry0703/MoneyPrinterTurbo",
                "",
                "First inspect the README and choose the safest setup path for my machine.",
                "",
                "Prefer Docker Compose if Docker is installed. Otherwise use Python 3.11 with a virtual environment.",
                "",
                "Clone the repo, install dependencies, copy config.example.toml to config.toml, and tell me exactly where I need to paste API keys.",
                "",
                "Do not hardcode or print my API keys.",
                "",
                "Launch the WebUI and verify it opens in the browser.",
                "",
                "At the end, summarize the exact commands used and the local URL I should open.",
              ],
            },
            "This is the same idea as asking an agent to set up any developer tool: let it inspect your machine, run commands, and stop when it needs secrets from you.",
          ],
          zh: [
            "如果你有 Claude Code、Codex、Cursor 或其他 coding agent，最簡單的方法其實是直接叫 agent 幫你裝。把下面這段貼到一個空資料夾裡的 agent：",
            {
              type: "terminal",
              title: "Agent Prompt",
              wrap: true,
              lines: [
                "Help me install MoneyPrinterTurbo locally.",
                "",
                "Use the official repo:",
                "https://github.com/harry0703/MoneyPrinterTurbo",
                "",
                "First inspect the README and choose the safest setup path for my machine.",
                "",
                "Prefer Docker Compose if Docker is installed. Otherwise use Python 3.11 with a virtual environment.",
                "",
                "Clone the repo, install dependencies, copy config.example.toml to config.toml, and tell me exactly where I need to paste API keys.",
                "",
                "Do not hardcode or print my API keys.",
                "",
                "Launch the WebUI and verify it opens in the browser.",
                "",
                "At the end, summarize the exact commands used and the local URL I should open.",
              ],
            },
            "概念跟叫 agent 幫你裝任何開發工具一樣：讓它檢查你的電腦、跑指令，遇到 API key 這種秘密資訊再停下來請你自己填。",
          ],
        },
      },
      {
        id: "manual-setup",
        heading: {
          en: "Manual setup",
          zh: "手動安裝",
        },
        body: {
          en: [
            "If you want to do it yourself, start from the official repo.",
            {
              type: "terminal",
              title: "Clone",
              lines: [
                "$ git clone https://github.com/harry0703/MoneyPrinterTurbo.git",
                "$ cd MoneyPrinterTurbo",
              ],
            },
            "The Docker path is usually the cleanest if Docker Desktop is already installed.",
            {
              type: "terminal",
              title: "Docker",
              lines: ["$ docker compose up"],
            },
            "Then open the WebUI in your browser. If `0.0.0.0` does not work in your browser, try `127.0.0.1`.",
            {
              type: "list",
              items: [
                "`http://0.0.0.0:8501`",
                "`http://127.0.0.1:8501`",
              ],
            },
            "Manual Python setup is also available, but it has more moving parts.",
            {
              type: "terminal",
              title: "Python",
              lines: [
                "$ conda create -n MoneyPrinterTurbo python=3.11",
                "$ conda activate MoneyPrinterTurbo",
                "$ pip install -r requirements.txt",
                "$ sh webui.sh",
              ],
            },
            "Before generating videos, copy `config.example.toml` to `config.toml`, then fill in your LLM provider and stock-video API keys.",
          ],
          zh: [
            "如果你想自己手動裝，先從官方 repo 開始。",
            {
              type: "terminal",
              title: "Clone",
              lines: [
                "$ git clone https://github.com/harry0703/MoneyPrinterTurbo.git",
                "$ cd MoneyPrinterTurbo",
              ],
            },
            "如果你已經有 Docker Desktop，Docker 通常是最乾淨的安裝方式。",
            {
              type: "terminal",
              title: "Docker",
              lines: ["$ docker compose up"],
            },
            "接著用瀏覽器打開 WebUI。如果 `0.0.0.0` 打不開，就試 `127.0.0.1`。",
            {
              type: "list",
              items: [
                "`http://0.0.0.0:8501`",
                "`http://127.0.0.1:8501`",
              ],
            },
            "也可以用 Python 手動安裝，但要處理的環境細節比較多。",
            {
              type: "terminal",
              title: "Python",
              lines: [
                "$ conda create -n MoneyPrinterTurbo python=3.11",
                "$ conda activate MoneyPrinterTurbo",
                "$ pip install -r requirements.txt",
                "$ sh webui.sh",
              ],
            },
            "生成影片前，記得把 `config.example.toml` 複製成 `config.toml`，再填 LLM provider 和素材 API key。",
          ],
        },
        links: [
          {
            label: "Docker Desktop",
            href: "https://www.docker.com/products/docker-desktop/",
          },
          {
            label: "Official Installation Docs",
            href: "https://www.moneyprinterturbo.cc/",
          },
        ],
      },
      {
        id: "webui",
        heading: {
          en: "Configure the WebUI",
          zh: "設定 WebUI",
        },
        body: {
          en: [
            "The WebUI looks like a lot at first, but you only need a few parts for the first run.",
            {
              type: "video",
              src: "/tools/moneyprinterturbo/videos/webui.mp4",
              poster: "/tools/moneyprinterturbo/images/webui-poster.jpg",
              caption: "The WebUI is where you connect the model, choose footage source, set subtitles, and generate the video.",
            },
            "Basic settings:",
            {
              type: "image",
              src: "/tools/moneyprinterturbo/images/llm-settings.png",
              alt: "MoneyPrinterTurbo LLM and video source settings",
              width: 1793,
              height: 760,
              caption: "LLM Settings is where you choose the provider, API key, base URL, model name, and stock-video API keys.",
            },
            {
              type: "list",
              items: [
                "LLM Provider: choose your model provider. If you use Ollama, set the base URL to `http://localhost:11434/v1` and use your local model name.",
                "API Key: required for cloud providers. For local Ollama, this can usually be a placeholder depending on your setup.",
                "Pexels API Key: add this if you want the tool to pull stock video clips from Pexels.",
                "Pixabay API Key: optional backup source if you use Pixabay.",
              ],
            },
            "Video script settings:",
            {
              type: "list",
              items: [
                "Video Subject: type the topic or keyword. This is the most important field.",
                "Language: leave Auto Detect if your subject is clear.",
                "AI generate script: use this if you want the tool to write the script for you.",
                "Video Script: paste your own script here if you want more control.",
              ],
            },
            "Video and subtitle settings:",
            {
              type: "list",
              items: [
                "Video Source: Pexels is a good default.",
                "Video Aspect Ratio: use Portrait 9:16 for Shorts/Reels/TikTok.",
                "Maximum Duration of Video Clips: 3 seconds is a good starting point for fast short-form pacing.",
                "Enable Subtitles: keep it on for social videos.",
                "Subtitle Position: bottom is usually safest.",
              ],
            },
          ],
          zh: [
            "WebUI 第一眼看起來很多欄位，但第一次跑其實只需要設定幾個地方。",
            {
              type: "video",
              src: "/tools/moneyprinterturbo/videos/webui.mp4",
              poster: "/tools/moneyprinterturbo/images/webui-poster.jpg",
              caption: "WebUI 裡可以連接模型、選素材來源、設定字幕，最後生成影片。",
            },
            "Basic settings：",
            {
              type: "image",
              src: "/tools/moneyprinterturbo/images/llm-settings.png",
              alt: "MoneyPrinterTurbo LLM and video source settings",
              width: 1793,
              height: 760,
              caption: "LLM Settings 這裡要設定 provider、API key、base URL、model name，以及素材來源 API key。",
            },
            {
              type: "list",
              items: [
                "LLM Provider：選你的模型來源。如果用 Ollama，Base URL 通常是 `http://localhost:11434/v1`，Model Name 填本地模型名稱。",
                "API Key：雲端模型通常需要。Ollama 本地模型視設定而定，常常可以填 placeholder。",
                "Pexels API Key：如果要讓工具從 Pexels 抓 stock video，就要填這個。",
                "Pixabay API Key：可選，當作另一個素材來源。",
              ],
            },
            "Video script settings：",
            {
              type: "list",
              items: [
                "Video Subject：填你的主題或 keyword，這是最重要的欄位。",
                "Language：主題很明確的話可以先用 Auto Detect。",
                "AI generate script：想讓工具自動寫文案就按這個。",
                "Video Script：如果你想自己控制文案，就把腳本貼在這裡。",
              ],
            },
            "Video and subtitle settings：",
            {
              type: "list",
              items: [
                "Video Source：Pexels 是不錯的預設選項。",
                "Video Aspect Ratio：Shorts / Reels / TikTok 用 Portrait 9:16。",
                "Maximum Duration of Video Clips：短影音節奏可以先用 3 秒。",
                "Enable Subtitles：社群短影片建議開著。",
                "Subtitle Position：Bottom 通常最安全。",
              ],
            },
          ],
        },
        links: [
          {
            label: "Pexels API",
            href: "https://www.pexels.com/api/",
          },
          {
            label: "Pixabay API",
            href: "https://pixabay.com/api/docs/",
          },
        ],
      },
      {
        id: "first-draft",
        heading: {
          en: "Generate a first draft",
          zh: "生成第一版初稿",
        },
        body: {
          en: [
            "For your first test, keep the topic simple and concrete.",
            {
              type: "terminal",
              title: "Example Topic",
              wrap: true,
              lines: [
                "5 AI tools that help creators save 10 hours per week",
              ],
            },
            "Recommended first-run settings:",
            {
              type: "list",
              items: [
                "Aspect ratio: Portrait 9:16",
                "Video source: Pexels",
                "Clip duration: 3 seconds",
                "Number of videos generated simultaneously: 1",
                "Subtitles: enabled",
                "Transition mode: none for the first test",
              ],
            },
            "Generate one draft first. Do not batch-generate five versions until you know your model, footage source, and subtitle settings are working.",
          ],
          zh: [
            "第一次測試，主題要簡單、具體。",
            {
              type: "terminal",
              title: "Example Topic",
              wrap: true,
              lines: [
                "5 AI tools that help creators save 10 hours per week",
              ],
            },
            "第一次建議設定：",
            {
              type: "list",
              items: [
                "Aspect ratio：Portrait 9:16",
                "Video source：Pexels",
                "Clip duration：3 秒",
                "Number of videos generated simultaneously：1",
                "Subtitles：開啟",
                "Transition mode：第一次測試先用 none",
              ],
            },
            "先生成一支初稿就好。等你確定模型、素材來源、字幕都正常，再開始批量生成多個版本。",
          ],
        },
      },
      {
        id: "workflow",
        heading: {
          en: "Best way to use it",
          zh: "最推薦的用法",
        },
        body: {
          en: [
            "The best workflow is not one-click publish. Use MoneyPrinterTurbo as a draft machine.",
            {
              type: "list",
              items: [
                "Generate a draft from a topic.",
                "Copy the script out and rewrite the hook.",
                "Replace footage that does not match the message.",
                "Clean up subtitle timing and styling.",
                "Add your own intro, reaction, or final callout.",
                "Export the final version from your normal editor.",
              ],
            },
            "This gives you the speed of automation without surrendering the taste and judgment that make a short video actually work.",
          ],
          zh: [
            "最推薦的用法不是一鍵生成後直接發布，而是把 MoneyPrinterTurbo 當成初稿機器。",
            {
              type: "list",
              items: [
                "先用主題生成一版初稿。",
                "把 script 拿出來，重寫 hook。",
                "替換不符合內容的素材。",
                "整理字幕時間和樣式。",
                "加上自己的 intro、反應或最後 callout。",
                "最後用你平常的剪輯工具輸出成品。",
              ],
            },
            "這樣可以拿到自動化的速度，又保留你自己的判斷和品味。",
          ],
        },
      },
      {
        id: "troubleshooting",
        heading: {
          en: "Common problems",
          zh: "常見問題",
        },
        body: {
          en: [
            {
              type: "list",
              items: [
                "WebUI opens blank: try Chrome or Edge, then reload the local URL.",
                "No footage appears: check your Pexels or Pixabay API key.",
                "LLM errors: confirm your provider, base URL, model name, and API key.",
                "Ollama does not respond: make sure Ollama is running and the model has been pulled.",
                "Subtitles are unstable: start with the `edge` subtitle provider before trying Whisper.",
                "Whisper model download is huge: expect several GB and a slower setup.",
                "The video feels generic: use it as a draft, then rewrite the hook and replace weak clips.",
              ],
            },
          ],
          zh: [
            {
              type: "list",
              items: [
                "WebUI 打開是空白：換 Chrome 或 Edge，再重新整理本機網址。",
                "沒有素材：檢查 Pexels 或 Pixabay API key。",
                "LLM 報錯：確認 provider、base URL、model name 和 API key。",
                "Ollama 沒反應：確認 Ollama 有啟動，而且模型已經 pull 下來。",
                "字幕不穩：先用 `edge` subtitle provider，再嘗試 Whisper。",
                "Whisper model 下載很大：要預期幾 GB，安裝時間會比較久。",
                "影片很普通：把它當初稿，重寫 hook 並替換弱素材。",
              ],
            },
          ],
        },
      },
    ],
    resources: [
      {
        label: "MoneyPrinterTurbo GitHub",
        href: "https://github.com/harry0703/MoneyPrinterTurbo",
      },
      {
        label: "Official Docs",
        href: "https://www.moneyprinterturbo.cc/",
      },
      {
        label: "Run in Google Colab",
        href: "https://colab.research.google.com/github/harry0703/MoneyPrinterTurbo/blob/main/docs/MoneyPrinterTurbo.ipynb",
      },
      {
        label: "Pexels API",
        href: "https://www.pexels.com/api/",
      },
      {
        label: "Docker Desktop",
        href: "https://www.docker.com/products/docker-desktop/",
      },
      {
        label: "ImageMagick",
        href: "https://imagemagick.org/script/download.php",
      },
    ],
  },
  {
    slug: "mini-model",
    title: {
      en: "AI Miniature Model Workflow",
      zh: "AI 微縮模型動畫攻略",
    },
    kicker: {
      en: "Image prompt, reverse collapse, and live scene animation",
      zh: "圖片 prompt、倒放拆解、場景動態化",
    },
    description: {
      en: "A practical workflow for creating isometric miniature architecture, turning it into a collapse animation, reversing the video, and adding subtle life to the scene.",
      zh: "用 AI 生成等角微縮建築，再做倒塌動畫、倒放影片，最後幫微縮場景加入小車和人物動態。",
    },
    coverTitle: {
      en: "Miniature\nModel AI",
      zh: "微縮模型\nAI",
    },
    keyword: "MINI",
    publishedAt: "2026-06-04",
    hashtags: ["#AIVideo", "#MiniatureModel", "#GoogleFlow"],
    cover: "/tools/mini-model-cover.png",
    accent: "yellow",
    shareTitle: {
      en: "Start with the final result",
      zh: "先看最後效果",
    },
    shareIntro: {
      en: "This guide uses one theme to create a miniature model image, generate a collapse animation, reverse that clip into a build-up animation, and then make the surrounding scene feel alive.",
      zh: "這篇會用一個主題先生成微縮模型圖，再做倒塌動畫，把影片倒放成建築生成效果，最後讓周圍的小車和人物動起來。",
    },
    featuredMedia: {
      en: [
        {
          type: "video",
          src: "/tools/mini-model/videos/mcdonalds-final.mp4",
          poster: "/tools/mini-model/mcdonalds-final-poster.jpg",
          caption: "Final McDonald's miniature model result.",
        },
      ],
      zh: [
        {
          type: "video",
          src: "/tools/mini-model/videos/mcdonalds-final.mp4",
          poster: "/tools/mini-model/mcdonalds-final-poster.jpg",
          caption: "最後完成的 McDonald's 微縮模型效果。",
        },
      ],
    },
    toc: [
      {
        label: {
          en: "1. Generate the model",
          zh: "1. 生成微縮模型",
        },
        href: "#step-1",
      },
      {
        label: {
          en: "2. Create the collapse clip",
          zh: "2. 生成倒塌片段",
        },
        href: "#step-2",
      },
      {
        label: {
          en: "3. Bring the scene to life",
          zh: "3. 讓場景活起來",
        },
        href: "#step-3",
      },
      {
        label: {
          en: "4. Summary workflow",
          zh: "4. 總結流程",
        },
        href: "#summary",
      },
    ],
    sections: [
      {
        id: "step-1",
        heading: {
          en: "Step 1: Generate the miniature model",
          zh: "Step 1：生成微縮模型",
        },
        body: {
          en: [
            {
              type: "terminal",
              title: "Prompt",
              wrap: true,
              lines: [
                "User Input Theme: McDonald's",
                "",
                "Based on the user's input [Theme/Brand/Model Name], generate a highly finished 45° top-down isometric miniature 3D architectural model poster.",
                "",
                "Visual Requirements",
                "Perspective: -45° top-down isometric / axonometric",
                "",
                "Style: Miniature model feel, toy-like, clean, and centered composition",
                "",
                "Base: Small elevated pedestal holding the main building and minimal surrounding environment",
                "",
                "Details: Optional minimal elements like figures, greenery, tables, chairs, street signs, streets, and steps",
                "",
                "Characters: Cute and simplified figures with no facial details",
                "",
                "Aesthetic: Premium, restrained, and tidy, resembling a luxury brand display or design proposal",
                "",
                "Framing Requirements",
                "Dimensions: Square composition, 1080x1080",
                "",
                "Layout: Perfectly centered layout",
                "",
                "Exclusions: No complex backgrounds, cluttered decorations, over-realism, or messy streetscapes",
                "",
                "Output Goal",
                "Create a premium visual combining:",
                "- a white background",
                "- authentic brand color system",
                "- high-end architectural model texture",
                "- miniature isometric architecture",
                "",
                "Ideal for brand showcases, conceptual proposals, social media covers, or series creation.",
              ],
            },
            "Replace `McDonald's` with your own theme or brand name. Keep it specific enough for the model to understand the building type, but avoid adding too many side details.",
            {
              type: "gallery",
              items: [
                {
                  src: "/tools/mini-model/building/mcdonalds.jpeg",
                  alt: "McDonald's miniature model",
                  caption: "Input theme: McDonald's",
                },
                {
                  src: "/tools/mini-model/building/police-station.jpeg",
                  alt: "Police station miniature model",
                  caption: "Input theme: Police Station",
                },
                {
                  src: "/tools/mini-model/building/cafe.jpeg",
                  alt: "Cafe miniature model",
                  caption: "Input theme: Cafe",
                },
                {
                  src: "/tools/mini-model/building/tech-head.jpeg",
                  alt: "Tech head miniature model",
                  caption: "Input theme: Tech Head",
                },
              ],
            },
            "The result from this step becomes your start frame for the next two video prompts.",
          ],
          zh: [
            {
              type: "terminal",
              title: "Prompt",
              wrap: true,
              lines: [
                "User Input Theme: McDonald's",
                "",
                "Based on the user's input [Theme/Brand/Model Name], generate a highly finished 45° top-down isometric miniature 3D architectural model poster.",
                "",
                "Visual Requirements",
                "Perspective: -45° top-down isometric / axonometric",
                "",
                "Style: Miniature model feel, toy-like, clean, and centered composition",
                "",
                "Base: Small elevated pedestal holding the main building and minimal surrounding environment",
                "",
                "Details: Optional minimal elements like figures, greenery, tables, chairs, street signs, streets, and steps",
                "",
                "Characters: Cute and simplified figures with no facial details",
                "",
                "Aesthetic: Premium, restrained, and tidy, resembling a luxury brand display or design proposal",
                "",
                "Framing Requirements",
                "Dimensions: Square composition, 1080x1080",
                "",
                "Layout: Perfectly centered layout",
                "",
                "Exclusions: No complex backgrounds, cluttered decorations, over-realism, or messy streetscapes",
                "",
                "Output Goal",
                "Create a premium visual combining:",
                "- a white background",
                "- authentic brand color system",
                "- high-end architectural model texture",
                "- miniature isometric architecture",
                "",
                "Ideal for brand showcases, conceptual proposals, social media covers, or series creation.",
              ],
            },
            "把 `McDonald's` 換成你自己的主題或品牌名稱。主題要夠明確，讓模型知道建築類型；但不要一次塞太多周邊元素。",
            {
              type: "gallery",
              items: [
                {
                  src: "/tools/mini-model/building/mcdonalds.jpeg",
                  alt: "McDonald's miniature model",
                  caption: "Input theme: McDonald's",
                },
                {
                  src: "/tools/mini-model/building/police-station.jpeg",
                  alt: "Police station miniature model",
                  caption: "Input theme: Police Station",
                },
                {
                  src: "/tools/mini-model/building/cafe.jpeg",
                  alt: "Cafe miniature model",
                  caption: "Input theme: Cafe",
                },
                {
                  src: "/tools/mini-model/building/tech-head.jpeg",
                  alt: "Tech head miniature model",
                  caption: "Input theme: Tech Head",
                },
              ],
            },
            "這一步產出的圖片，就是後面兩種影片 prompt 的 start frame。",
          ],
        },
      },
      {
        id: "step-2",
        heading: {
          en: "Step 2: Create the collapse clip, then reverse it",
          zh: "Step 2：先生成倒塌，再倒放影片",
        },
        body: {
          en: [
            {
              type: "terminal",
              title: "Prompt",
              wrap: true,
              lines: [
                "0-1s:",
                "The animation begins with the complete miniature model exactly as shown in the start frame.",
                "The camera smoothly and slightly pulls back as the deconstruction process initiates.",
                "",
                "1-2s:",
                "All lighting elements, interior glows, and material reflections visible on the structure gradually dim and power off completely.",
                "Fine textures lose their brightness.",
                "",
                "2-3s:",
                "All secondary standalone objects, peripheral props, and environmental elements strictly present in the start frame rapidly shrink, pop down, and disappear into the ground.",
                "Absolutely no new assets are generated.",
                "",
                "3-4s:",
                "Rooftop structures, facade attachments, and external decorative components fold away and retract into the main core.",
                "The overall layered composition becomes flatter.",
                "",
                "4-5s:",
                "The main architectural body, including its walls, structural pillars, and primary frames, smoothly disassembles from top to bottom.",
                "It collapses and flattens completely into the base foundation.",
                "",
                "5-6s:",
                "All ground markings, surface textures, and layout lines automatically fold backward and vanish into the foundation.",
                "The video seamlessly ends with only the empty, clean, light gray isometric platform matching the end frame.",
              ],
            },
            "Google Flow is not always good at this kind of first-frame / last-frame transformation. If you put the finished building as the last frame, it may generate a totally unrelated building first, then suddenly jump to your miniature model.",
            "The workaround is to do the motion backwards: generate the complete miniature model collapsing into a clean base, then reverse the video. The reversed version becomes the smooth build-up animation you actually want.",
            {
              type: "video",
              src: "/tools/mini-model/videos/mcdonalds-forward.mp4",
              poster: "/tools/mini-model/mcdonalds-forward-poster.jpg",
              caption: "mcdonalds_forward: the generated collapse clip before reversing.",
            },
            {
              type: "video",
              src: "/tools/mini-model/videos/mcdonalds-backward.mp4",
              poster: "/tools/mini-model/mcdonalds-backward-poster.jpg",
              caption: "mcdonalds_backward: the reversed clip. This is the version we use as the final build-up animation.",
            },
          ],
          zh: [
            {
              type: "terminal",
              title: "Prompt",
              wrap: true,
              lines: [
                "0-1s:",
                "The animation begins with the complete miniature model exactly as shown in the start frame.",
                "The camera smoothly and slightly pulls back as the deconstruction process initiates.",
                "",
                "1-2s:",
                "All lighting elements, interior glows, and material reflections visible on the structure gradually dim and power off completely.",
                "Fine textures lose their brightness.",
                "",
                "2-3s:",
                "All secondary standalone objects, peripheral props, and environmental elements strictly present in the start frame rapidly shrink, pop down, and disappear into the ground.",
                "Absolutely no new assets are generated.",
                "",
                "3-4s:",
                "Rooftop structures, facade attachments, and external decorative components fold away and retract into the main core.",
                "The overall layered composition becomes flatter.",
                "",
                "4-5s:",
                "The main architectural body, including its walls, structural pillars, and primary frames, smoothly disassembles from top to bottom.",
                "It collapses and flattens completely into the base foundation.",
                "",
                "5-6s:",
                "All ground markings, surface textures, and layout lines automatically fold backward and vanish into the foundation.",
                "The video seamlessly ends with only the empty, clean, light gray isometric platform matching the end frame.",
              ],
            },
            "Google Flow 對這種首幀 / 尾幀轉換不一定穩。如果你把完整建築放在尾幀，它可能先生成一個完全不相關的建築，最後才突然跳到你的微縮模型。",
            "所以這裡反過來做：先讓完整微縮模型倒塌成乾淨平台，再把影片倒放。倒放後才會變成我們真正想要的「建築生成」效果。",
            {
              type: "video",
              src: "/tools/mini-model/videos/mcdonalds-forward.mp4",
              poster: "/tools/mini-model/mcdonalds-forward-poster.jpg",
              caption: "mcdonalds_forward：倒放前的倒塌片段。",
            },
            {
              type: "video",
              src: "/tools/mini-model/videos/mcdonalds-backward.mp4",
              poster: "/tools/mini-model/mcdonalds-backward-poster.jpg",
              caption: "mcdonalds_backward：倒放後的版本，這才是最後要使用的建築生成動畫。",
            },
          ],
        },
      },
      {
        id: "step-3",
        heading: {
          en: "Step 3: Bring the miniature scene to life",
          zh: "Step 3：讓微縮場景活起來",
        },
        body: {
          en: [
            {
              type: "terminal",
              title: "Prompt",
              wrap: true,
              lines: [
                "Camera:",
                "Completely static camera.",
                "Maintains the exact fixed isometric 3/4 perspective from the start frame with zero camera movement.",
                "",
                "Environment:",
                "The building, signs, trees, and roads remain perfectly still and stationary.",
                "",
                "Animation:",
                "Tiny miniature cars drive smoothly along the dark gray roads and move through the drive-thru lane.",
                "The minimal figures (people) walk subtly around the outdoor seating tables and across the crosswalks.",
                "Smooth, seamless, toy-like animation loop.",
              ],
            },
            "This version keeps the camera and building locked. Only the small elements move, so the scene feels like a premium toy model instead of a messy AI video.",
            {
              type: "video",
              src: "/tools/mini-model/videos/mcdonalds-live.mp4",
              poster: "/tools/mini-model/mcdonalds-live-poster.jpg",
              caption: "mcdonalds_live: small cars and figures animate while the miniature building stays still.",
            },
          ],
          zh: [
            {
              type: "terminal",
              title: "Prompt",
              wrap: true,
              lines: [
                "Camera:",
                "Completely static camera.",
                "Maintains the exact fixed isometric 3/4 perspective from the start frame with zero camera movement.",
                "",
                "Environment:",
                "The building, signs, trees, and roads remain perfectly still and stationary.",
                "",
                "Animation:",
                "Tiny miniature cars drive smoothly along the dark gray roads and move through the drive-thru lane.",
                "The minimal figures (people) walk subtly around the outdoor seating tables and across the crosswalks.",
                "Smooth, seamless, toy-like animation loop.",
              ],
            },
            "這個版本要鎖住鏡頭和建築，只讓小元素動。這樣畫面會像高級玩具模型活起來，而不是變成混亂的 AI 影片。",
            {
              type: "video",
              src: "/tools/mini-model/videos/mcdonalds-live.mp4",
              poster: "/tools/mini-model/mcdonalds-live-poster.jpg",
              caption: "mcdonalds_live：小車和人物在動，但微縮建築保持不動。",
            },
          ],
        },
      },
      {
        id: "summary",
        heading: {
          en: "Summary workflow",
          zh: "總結流程",
        },
        body: {
          en: [
            {
              type: "list",
              items: [
                "Generate the miniature model image from one clear theme.",
                "Use first-frame / last-frame generation to create the collapse version.",
                "Reverse the collapse video to turn it into a build-up animation.",
                "Use the live-scene prompt to add subtle cars and people movement to the miniature model.",
              ],
            },
          ],
          zh: [
            {
              type: "list",
              items: [
                "用一個明確主題生成微縮模型圖片。",
                "用首幀 / 尾幀生成倒塌版本。",
                "把倒塌影片倒放，變成建築生成動畫。",
                "再用 live-scene prompt 替微縮模型加入小車和人物動態。",
              ],
            },
          ],
        },
      },
    ],
    resources: [
      {
        label: "Google Flow",
        href: "https://labs.google/fx/tools/flow",
      },
    ],
  },
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
