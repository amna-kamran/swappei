"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, getManufacturers, type Condition } from "@/lib/products";

const conditions: Condition[] = ["Like New", "Excellent", "Good", "Fair"];

export default function StoreGrid() {
  const manufacturers = getManufacturers();
  const [manufacturer, setManufacturer] = useState<string>("All");
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
      <div className="flex flex-wrap items-center gap-4 border-b border-zinc-200 pb-6">
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
        />

        <p className="ml-auto text-sm text-zinc-500">
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
              width={480}
              height={480}
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  display?: Record<string, string>;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-zinc-600">
      <span className="font-medium text-zinc-700">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 focus:border-brand-600 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {display?.[opt] ?? opt}
          </option>
        ))}
      </select>
    </label>
  );
}
