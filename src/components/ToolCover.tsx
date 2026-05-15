import Image from "next/image";
import { Box, ScanSearch, Sparkles } from "lucide-react";

import type { Locale, Tool } from "@/lib/tools";

const accents = {
  teal: "from-[#d7fff3] via-[#eafcf7] to-[#b7e8e2] text-[#063c3f]",
  rose: "from-[#ffe0e9] via-[#fff0f3] to-[#ffd0bc] text-[#4b1524]",
  amber: "from-[#fff1b8] via-[#fff7dd] to-[#b8e3ff] text-[#3b2a05]",
};

export function ToolCover({
  tool,
  locale = "en",
  priority = false,
}: {
  tool: Tool;
  locale?: Locale;
  priority?: boolean;
}) {
  const coverTitle = tool.coverTitle?.[locale] ?? "Screenshot to 3D asset";

  if (tool.cover) {
    return (
      <Image
        src={tool.cover}
        alt={`${tool.title[locale]} cover`}
        fill
        priority={priority}
        className="object-contain"
        sizes="(min-width: 1024px) 240px, 45vw"
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col justify-between bg-linear-to-br p-6 ${
        accents[tool.accent as keyof typeof accents]
      }`}
    >
      <div className="flex items-center gap-2 text-sm font-medium">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        <span>{tool.kicker[locale]}</span>
      </div>
      <div>
        <Box className="mb-5 h-12 w-12" aria-hidden="true" />
        <p className="max-w-[13rem] whitespace-pre-line text-3xl font-semibold leading-tight">
          {coverTitle}
        </p>
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold">
        <ScanSearch className="h-4 w-4" aria-hidden="true" />
        <span>Comment {tool.keyword}</span>
      </div>
    </div>
  );
}
