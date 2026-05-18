import type { ReactNode } from "react";

import type { BodyItem } from "@/lib/tools";

import { CopyableCommand } from "./CopyableCommand";

function renderInline(input: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(input.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`b-${key++}`} className="font-semibold text-[#171411]">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      nodes.push(
        <code
          key={`c-${key++}`}
          className="rounded-sm bg-[#f3edd9] px-1.5 py-0.5 font-mono text-[0.92em] text-[#5a4a16]"
        >
          {token.slice(1, -1)}
        </code>,
      );
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < input.length) {
    nodes.push(input.slice(lastIndex));
  }
  return nodes;
}

export function BodyContent({ items }: { items: BodyItem[] }) {
  return (
    <div className="mt-4 space-y-4">
      {items.map((item, index) => {
        if (typeof item === "string") {
          return (
            <p key={index} className="leading-7 text-[#5f574e]">
              {renderInline(item)}
            </p>
          );
        }
        if (item.type === "list") {
          return (
            <ul
              key={index}
              className="ml-1 space-y-2 border-l-2 border-[#e7ddc9] pl-4"
            >
              {item.items.map((entry, entryIndex) => (
                <li
                  key={entryIndex}
                  className="leading-7 text-[#5f574e]"
                >
                  {renderInline(entry)}
                </li>
              ))}
            </ul>
          );
        }
        if (item.type === "install") {
          return <CopyableCommand key={index} command={item.command} />;
        }
        return null;
      })}
    </div>
  );
}
