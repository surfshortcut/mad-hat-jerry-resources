"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyableCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable; ignore
    }
  };

  return (
    <div className="group flex items-stretch gap-0 overflow-hidden border border-[#27231f] bg-[#171411] font-mono text-sm text-[#f3d28b]">
      <code className="flex-1 overflow-x-auto whitespace-nowrap px-3 py-3 leading-6">
        {command}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy command"}
        className="flex shrink-0 items-center gap-1.5 border-l border-[#3a342d] bg-[#1f1b16] px-3 text-xs font-semibold uppercase tracking-wider text-white/85 transition hover:bg-[#2a2520]"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" aria-hidden="true" />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" aria-hidden="true" />
            Copy
          </>
        )}
      </button>
    </div>
  );
}
