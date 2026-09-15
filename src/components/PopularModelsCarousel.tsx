"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function PopularModelsCarousel({
  products,
}: {
  products: Product[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }

  useEffect(() => {
    updateScrollState();
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const distance = (card?.offsetWidth ?? 260) + 24;
    el.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={updateScrollState}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/store/${p.slug}`}
            data-card
            className="group w-64 flex-none snap-start rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-accent-400 hover:bg-accent-50/40"
          >
            <Image
              src={p.image}
              alt={p.model}
              width={p.imageWidth}
              height={p.imageHeight}
              className="mx-auto h-32 w-auto"
            />
            <span className="mt-4 inline-block rounded-full bg-accent-100 px-2.5 py-1 text-xs font-medium text-accent-800">
              {p.conditions[0]}
            </span>
            <p className="mt-3 text-sm text-zinc-500">{p.manufacturer}</p>
            <p className="font-medium text-zinc-900">{p.model}</p>
            <p className="mt-1 text-xs text-zinc-500">
              {p.storageOptions[0]} &middot; {p.colorOptions[0]}
            </p>
            <p className="mt-2 text-sm font-semibold text-zinc-900">
              From ${p.priceFrom}
            </p>
            <span className="mt-4 block rounded-full border border-zinc-300 px-4 py-2 text-center text-sm font-medium text-zinc-700 transition-colors group-hover:border-zinc-400">
              View details
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollLeft}
          aria-label="Scroll to previous models"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors enabled:hover:border-zinc-300 enabled:hover:text-zinc-900 disabled:opacity-30"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollRight}
          aria-label="Scroll to more models"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors enabled:hover:bg-zinc-800 disabled:opacity-30"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
