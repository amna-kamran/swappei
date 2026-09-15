"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Product } from "@/lib/products";

const specLabels: Record<string, string> = {
  display: "Display",
  chip: "Chip",
  camera: "Camera",
  battery: "Battery",
  connectivity: "Connectivity",
};

export default function ProductImageModal({
  product,
  color,
  imageSrc,
  thumbnails,
  onSelectColor,
  onClose,
}: {
  product: Product;
  color: string;
  imageSrc: string;
  thumbnails: { color: string; src: string }[];
  onSelectColor: (color: string) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const specEntries = Object.entries(product.specs) as [string, string][];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.model} full image`}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-500 shadow hover:bg-zinc-100 hover:text-zinc-900"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex flex-1 items-center justify-center p-8 md:p-12">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              src={imageSrc}
              alt={`${product.model} in ${color}`}
              fill
              sizes="(min-width: 768px) 500px, 90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full flex-none border-t border-zinc-200 p-6 md:w-80 md:border-l md:border-t-0">
          <p className="text-sm font-medium text-brand-700">{product.manufacturer}</p>
          <h2 className="mt-1 text-xl font-semibold text-zinc-900">{product.model}</h2>
          <p className="mt-1 text-sm text-zinc-500">Color: {color}</p>
          <p className="mt-4 text-lg font-semibold text-zinc-900">
            From ${product.priceFrom}
          </p>

          {thumbnails.length > 1 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {thumbnails.map((t) => (
                <button
                  key={t.color}
                  type="button"
                  onClick={() => onSelectColor(t.color)}
                  aria-label={t.color}
                  aria-pressed={t.color === color}
                  className={`relative h-14 w-14 flex-none overflow-hidden rounded-lg border-2 bg-zinc-50 transition-colors ${
                    t.color === color
                      ? "border-brand-500"
                      : "border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <Image
                    src={t.src}
                    alt={t.color}
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          )}

          <dl className="mt-6 space-y-3 border-t border-zinc-100 pt-4 text-sm">
            {specEntries.map(([key, value]) => (
              <div key={key} className="flex flex-col gap-0.5">
                <dt className="text-zinc-500">{specLabels[key] ?? key}</dt>
                <dd className="font-medium text-zinc-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
