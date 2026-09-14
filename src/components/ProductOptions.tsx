"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

export default function ProductOptions({ product }: { product: Product }) {
  const [storage, setStorage] = useState<string>(product.storageOptions[0]);
  const [color, setColor] = useState<string>(product.colorOptions[0]);
  const [condition, setCondition] = useState<string>(product.conditions[0]);

  return (
    <div className="mt-6 space-y-5">
      <p className="text-2xl font-semibold text-zinc-900">
        From ${product.priceFrom}
      </p>

      <OptionGroup
        label="Storage"
        options={product.storageOptions}
        value={storage}
        onChange={setStorage}
      />
      <OptionGroup
        label="Color"
        options={product.colorOptions}
        value={color}
        onChange={setColor}
      />
      <OptionGroup
        label="Condition"
        options={product.conditions}
        value={condition}
        onChange={setCondition}
      />

      <a
        href="https://store.hayaland.com/jp"
        className="mt-2 inline-block w-full rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-brand-600 sm:w-auto"
      >
        Buy on the Store
      </a>
    </div>
  );
}

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-zinc-700">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              value === opt
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-zinc-300 text-zinc-700 hover:border-brand-400"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
