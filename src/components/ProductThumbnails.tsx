"use client";

import Image from "next/image";

export default function ProductThumbnails({
  images,
  selected,
  onSelect,
}: {
  images: { color: string; src: string }[];
  selected: string;
  onSelect: (color: string) => void;
}) {
  return (
    <div className="flex flex-none flex-row gap-2 md:flex-col">
      {images.map((entry) => (
        <button
          key={entry.color}
          type="button"
          onClick={() => onSelect(entry.color)}
          aria-label={entry.color}
          aria-pressed={entry.color === selected}
          className={`relative h-16 w-16 flex-none overflow-hidden rounded-lg border-2 bg-zinc-50 transition-colors ${
            entry.color === selected
              ? "border-brand-500"
              : "border-zinc-200 hover:border-zinc-300"
          }`}
        >
          <Image
            src={entry.src}
            alt={entry.color}
            fill
            sizes="64px"
            className="object-contain p-1"
          />
        </button>
      ))}
    </div>
  );
}
