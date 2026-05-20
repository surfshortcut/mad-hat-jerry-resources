import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Languages,
  Send,
} from "lucide-react";

import { BodyContent } from "@/components/BodyContent";
import { ToolCover } from "@/components/ToolCover";
import { getLocale, getTool, tools } from "@/lib/tools";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    lang?: string;
  }>;
};

const detailCopy = {
  en: {
    back: "Back to resources",
    links: "Links",
  },
  zh: {
    back: "回資源列表",
    links: "連結",
  },
};

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = getLocale((await searchParams).lang);
  const tool = getTool(slug);

  if (!tool) {
    return {
      title: "Tool not found | mad hat jerry",
    };
  }

  return {
    title: `${tool.title[locale]} | mad hat jerry`,
    description: tool.description[locale],
  };
}

export default async function ToolPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const locale = getLocale((await searchParams).lang);
  const copy = detailCopy[locale];
  const langSuffix = locale === "zh" ? "?lang=zh" : "";
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f5ee] text-[#171411]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:py-14">
        <aside className="space-y-5">
          <Link
            href={`/${langSuffix}`}
            className="inline-flex h-10 items-center gap-2 border border-[#27231f] px-3 text-sm font-medium transition hover:bg-[#27231f] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {copy.back}
          </Link>
          <Link
            href={
              locale === "zh" ? `/tools/${tool.slug}` : `/tools/${tool.slug}?lang=zh`
            }
            className="ml-2 inline-flex h-10 items-center gap-2 border border-[#27231f] px-3 text-sm font-medium transition hover:bg-[#27231f] hover:text-white"
            aria-label={locale === "zh" ? "Switch to English" : "切換中文"}
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            {locale === "zh" ? "EN" : "中文"}
          </Link>

          <div>
            <div className="relative aspect-[9/16] w-full max-w-[360px] overflow-hidden border border-[#d8d0c3] bg-[#171411]">
              <ToolCover tool={tool} locale={locale} priority />
            </div>
            <div className="max-w-[360px] space-y-4 pt-5">
              <div>
                <h1 className="text-4xl font-semibold leading-tight">
                  {tool.title[locale]}
                </h1>
              </div>
              <p className="leading-7 text-[#5f574e]">
                {tool.description[locale]}
              </p>
            </div>
          </div>
        </aside>

        <section className="bg-white px-5 py-6 sm:border sm:border-[#d8d0c3] sm:px-8 sm:py-8">
          <article className="divide-y divide-[#ded6ca]">
          <div className="pb-7">
            <h2 className="text-3xl font-semibold leading-tight">
              {tool.shareTitle[locale]}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5f574e]">
              {tool.shareIntro[locale]}
            </p>
            {tool.shareLinks ? (
              <div className="mt-5 grid gap-3">
                {tool.shareLinks.map((resource) => (
                  <a
                    key={resource.href}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border border-[#d8d0c3] bg-[#f8f5ee] p-4 transition hover:border-[#27231f]"
                  >
                    <span>
                      <span className="block font-medium">
                        {resource.label}
                      </span>
                      {resource.note ? (
                        <span className="mt-1 block text-sm text-[#6d6459]">
                          {resource.note}
                        </span>
                      ) : null}
                    </span>
                    <ExternalLink
                      className="h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {tool.sections.map((section) => (
            <section
              key={section.heading.en}
              className="py-7"
            >
              <h2 className="text-2xl font-semibold">
                {section.heading[locale]}
              </h2>
              <BodyContent items={section.body[locale]} />
              {section.links ? (
                <div className="mt-5 grid gap-3">
                  {section.links.map((resource) => (
                    <a
                      key={resource.href}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 border border-[#d8d0c3] bg-[#f8f5ee] p-4 transition hover:border-[#27231f]"
                    >
                      <span>
                        <span className="block font-medium">
                          {resource.label}
                        </span>
                        {resource.note ? (
                          <span className="mt-1 block text-sm text-[#6d6459]">
                            {resource.note}
                          </span>
                        ) : null}
                      </span>
                      <ExternalLink
                        className="h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
          </article>

          <section className="mt-7 bg-[#27231f] p-5 text-white sm:p-7">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d28b]">
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>{copy.links}</span>
            </div>
            <div className="grid gap-3">
              {tool.resources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border border-white/20 bg-white/5 p-4 transition hover:border-white/70 hover:bg-white/10"
                >
                  <span>
                    <span className="block font-medium">{resource.label}</span>
                    {resource.note ? (
                      <span className="mt-1 block text-sm text-white/65">
                        {resource.note}
                      </span>
                    ) : null}
                  </span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
