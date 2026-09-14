import type { Metadata } from "next";
import StoreGrid from "@/components/StoreGrid";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Browse certified pre-owned Apple, Samsung, and Google smartphones, filterable by manufacturer and condition.",
};

export default function StorePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Store
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Every model below represents a range of tested, graded units in
          stock. Storage, color, and condition can be selected on each
          product page.
        </p>
      </div>

      <div className="mt-10">
        <StoreGrid />
      </div>
    </div>
  );
}
