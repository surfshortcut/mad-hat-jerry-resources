import type { ReactNode } from "react";
import Image from "next/image";

import type { BodyItem } from "@/lib/tools";

import { CopyableCommand } from "./CopyableCommand";
import { CopyableTerminalBlock } from "./CopyableTerminalBlock";

function renderInline(input: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(input.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("[")) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        nodes.push(
          <a
            key={`a-${key++}`}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#8b332e] underline decoration-[#d8a7a0] underline-offset-4 transition hover:text-[#171411]"
          >
            {linkMatch[1]}
          </a>,
        );
      }
    } else if (token.startsWith("**")) {
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
        if (item.type === "terminal") {
          return (
            <CopyableTerminalBlock
              key={index}
              title={item.title}
              lines={item.lines}
              wrap={item.wrap}
            />
          );
        }
        if (item.type === "video") {
          return (
            <figure key={index} className="space-y-2">
              <div className="flex justify-center overflow-hidden border border-[#d8d0c3] bg-[#171411]">
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-auto w-full"
                />
              </div>
              {item.caption ? (
                <figcaption className="text-sm leading-6 text-[#6d6459]">
                  {renderInline(item.caption)}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        if (item.type === "gallery") {
          return (
            <div key={index} className="grid gap-4 sm:grid-cols-2">
              {item.items.map((galleryItem) => (
                <figure key={galleryItem.src} className="space-y-2">
                  <a
                    href={galleryItem.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden border border-[#d8d0c3] bg-[#f8f5ee]"
                  >
                    <Image
                      src={galleryItem.src}
                      alt={galleryItem.alt}
                      width={1024}
                      height={1024}
                      unoptimized
                      className="aspect-square h-auto w-full object-cover"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </a>
                  <figcaption className="text-sm leading-6 text-[#6d6459]">
                    {renderInline(galleryItem.caption)}
                  </figcaption>
                </figure>
              ))}
            </div>
          );
        }
        if (item.type === "image") {
          return (
            <figure key={index} className="space-y-2">
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center overflow-hidden border border-[#d8d0c3] bg-[#f8f5ee]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  unoptimized
                  className="h-auto max-w-full"
                  sizes={`${item.width}px`}
                />
              </a>
              {item.caption ? (
                <figcaption className="text-sm leading-6 text-[#6d6459]">
                  {renderInline(item.caption)}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        return null;
      })}
    </div>
  );
}
