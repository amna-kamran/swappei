"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { products, getManufacturers, type Condition } from "@/lib/products";

const conditions: Condition[] = ["Like New", "Excellent", "Good", "Fair"];

export default function StoreGrid() {
  const manufacturers = getManufacturers();
  const searchParams = useSearchParams();
  const initialManufacturer = searchParams.get("manufacturer");
  const [manufacturer, setManufacturer] = useState<string>(
    initialManufacturer && manufacturers.includes(initialManufacturer)
      ? initialManufacturer
      : "All"
  );
  const [condition, setCondition] = useState<string>("All");
  const [sort, setSort] = useState<"price-asc" | "price-desc" | "newest">(
    "newest"
  );

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesManufacturer =
        manufacturer === "All" || p.manufacturer === manufacturer;
      const matchesCondition =
        condition === "All" || p.conditions.includes(condition as Condition);
      return matchesManufacturer && matchesCondition;
    });

    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.priceFrom - b.priceFrom;
      if (sort === "price-desc") return b.priceFrom - a.priceFrom;
      return b.releaseYear - a.releaseYear;
    });

    return list;
  }, [manufacturer, condition, sort]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 border-b border-zinc-200 pb-6 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
        <FilterSelect
          label="Manufacturer"
          value={manufacturer}
          onChange={setManufacturer}
          options={["All", ...manufacturers]}
        />
        <FilterSelect
          label="Condition"
          value={condition}
          onChange={setCondition}
          options={["All", ...conditions]}
        />
        <FilterSelect
          label="Sort by"
          value={sort}
          onChange={(v) => setSort(v as typeof sort)}
          options={["newest", "price-asc", "price-desc"]}
          display={{
            newest: "Newest",
            "price-asc": "Price: Low to High",
            "price-desc": "Price: High to Low",
          }}
          className="col-span-2"
        />

        <p className="col-span-2 text-sm text-zinc-500 sm:col-span-1 sm:ml-auto">
          {filtered.length} model{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/store/${p.slug}`}
            className="group rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-accent-400 hover:bg-accent-50/40"
          >
            <Image
              src={p.image}
              alt={p.model}
              width={p.imageWidth}
              height={p.imageHeight}
              className="mx-auto h-36 w-auto"
            />
            <p className="mt-4 text-sm text-zinc-500">{p.manufacturer}</p>
            <p className="font-medium text-zinc-900">{p.model}</p>
            <p className="mt-1 text-sm text-zinc-600">From ${p.priceFrom}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.conditions.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
                >
                  {c}
                </span>
              ))}
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-16 text-center text-sm text-zinc-500">
            No models match those filters yet.
          </p>
        )}
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  display,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  display?: Record<string, string>;
  className?: string;
}) {
  return (
    <label
      className={`flex flex-col gap-1 text-sm text-zinc-600 sm:flex-row sm:items-center sm:gap-2 ${className}`}
    >
      <span className="font-medium text-zinc-700">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-full appearance-none rounded-lg border border-zinc-300 bg-white pl-3 pr-8 text-sm text-zinc-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600 sm:h-9 sm:w-auto sm:min-w-[9.5rem]"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {display?.[opt] ?? opt}
            </option>
          ))}
        </select>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </label>
  );
}
