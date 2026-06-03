"use client";

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyableTerminalBlock({
  title = "Terminal",
  lines,
  wrap = false,
}: {
  title?: string;
  lines: string[];
  wrap?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const copyText = useMemo(() => {
    const commandText = lines
        .map((line) => line.match(/^(?:\$|PS>)\s+(.+)$/)?.[1])
        .filter(Boolean)
        .join("\n");
    return commandText || lines.join("\n");
  }, [lines]);

  const handleCopy = async () => {
    if (!copyText) return;
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable; ignore
    }
  };

  return (
    <div className="overflow-hidden border border-[#d8d0c3] bg-[#171411] text-[#e8edf2]">
      <div className="flex items-center justify-between border-b border-white/10 pl-4 font-mono text-xs text-[#f3d28b]">
        <span>{title}</span>
        {copyText ? (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy terminal command"}
            className="flex h-10 shrink-0 items-center gap-1.5 border-l border-white/10 bg-white/5 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/85 transition hover:bg-white/10"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                Copy
              </>
            )}
          </button>
        ) : (
          <span className="pr-4">local</span>
        )}
      </div>
      <pre
        className={`px-4 py-4 font-mono text-sm leading-7 ${
          wrap ? "whitespace-pre-wrap break-words" : "overflow-x-auto"
        }`}
      >
        {lines.join("\n")}
      </pre>
    </div>
  );
}
