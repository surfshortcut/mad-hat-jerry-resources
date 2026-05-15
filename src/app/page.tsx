import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Languages, Play } from "lucide-react";

import { ToolCover } from "@/components/ToolCover";
import { getLocale, getToolsNewestFirst } from "@/lib/tools";

type PageProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

const homeCopy = {
  en: {
    navTools: "Resources",
    label: "Short video resources",
    title: "Guides for the tools I mention.",
    intro:
      "Each page is a practical follow-up to one short video: what the tool does, how to try it, and what to watch out for before you use it.",
    toolsLabel: "Resources",
    comment: "Comment",
    published: "Published",
  },
  zh: {
    navTools: "資源",
    label: "短影音資源",
    title: "短影片提到的工具攻略。",
    intro:
      "每一頁都是一支短影片的延伸整理：這個工具能做什麼、怎麼開始試、以及使用前要注意什麼。",
    toolsLabel: "資源",
    comment: "留言",
    published: "發布",
  },
};

export default async function Home({ searchParams }: PageProps) {
  const locale = getLocale((await searchParams).lang);
  const copy = homeCopy[locale];
  const langSuffix = locale === "zh" ? "?lang=zh" : "";
  const sortedTools = getToolsNewestFirst();

  return (
    <main className="min-h-screen bg-[#f8f5ee] text-[#171411]">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 text-sm font-medium sm:px-8">
        <Link href={`/${langSuffix}`} className="flex items-center gap-2">
          <Image
            src="/mad-hat-jerry-avatar.png"
            alt="Mad Hat Jerry"
            width={34}
            height={34}
            className="h-8 w-8 rounded-full object-cover ring-1 ring-[#d8d0c3]"
            priority
          />
          <span className="text-base font-semibold uppercase tracking-[0.16em]">
            Mad Hat Jerry
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={locale === "zh" ? "/" : "/?lang=zh"}
            className="inline-flex h-10 items-center gap-2 border border-[#27231f] px-3 transition hover:bg-[#27231f] hover:text-white"
            aria-label={locale === "zh" ? "Switch to English" : "切換中文"}
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            {locale === "zh" ? "EN" : "中文"}
          </Link>
          <a
            href="#tools"
            className="inline-flex h-10 items-center gap-2 border border-[#27231f] px-3 transition hover:bg-[#27231f] hover:text-white"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            {copy.navTools}
          </a>
        </div>
      </nav>

      <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="relative min-h-[560px] overflow-hidden border border-[#d8d0c3] bg-[#171411] text-white">
          <Image
            src="/hero-resource-lab.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#171411]/92 via-[#171411]/64 to-[#171411]/8" />
          <div className="relative flex min-h-[560px] max-w-2xl items-center p-6 sm:p-10 lg:p-12">
            <div className="space-y-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d28b]">
                {copy.label}
              </p>
              <div className="space-y-5">
                <h1 className="max-w-xl text-5xl font-semibold leading-[1.02] sm:text-7xl">
                  {copy.title}
                </h1>
                <p className="max-w-xl text-lg leading-8 text-white/78">
                  {copy.intro}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tools"
        className="mx-auto w-full max-w-6xl space-y-5 px-5 py-10 sm:px-8 lg:py-14"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b332e]">
              {copy.toolsLabel}
            </p>
          </div>
        </div>

        <div className="grid gap-5">
            {sortedTools.map((tool, index) => (
              <Link
                key={tool.slug}
              href={`/tools/${tool.slug}${langSuffix}`}
              className="group grid border-b border-[#d8d0c3] py-5 transition hover:border-[#27231f] sm:grid-cols-[180px_1fr] sm:gap-6 lg:grid-cols-[240px_1fr] lg:gap-8"
              >
              <div className="relative aspect-[9/16] overflow-hidden border border-[#d8d0c3] bg-[#171411]">
                <ToolCover tool={tool} locale={locale} priority={index === 0} />
                </div>
              <div className="flex min-h-full flex-col justify-between gap-5 py-5 sm:py-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-[#8b332e]">
                        {copy.published} {tool.publishedAt.replaceAll("-", "/")}
                      </p>
                    <h3 className="mt-1 text-3xl font-semibold">
                      {tool.title[locale]}
                      </h3>
                    </div>
                    <ArrowRight
                      className="mt-1 h-5 w-5 shrink-0 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                <div className="space-y-4">
                  <p className="max-w-2xl text-lg leading-8 text-[#5f574e]">
                    {tool.description[locale]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tool.hashtags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#d8d0c3] px-2.5 py-1 font-mono text-xs text-[#8b332e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
    </main>
  );
}
