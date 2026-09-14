import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import ProductGallery from "@/components/ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.model,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const specEntries = Object.entries(product.specs) as [string, string][];
  const specLabels: Record<string, string> = {
    display: "Display",
    chip: "Chip",
    camera: "Camera",
    battery: "Battery",
    connectivity: "Connectivity",
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav className="text-sm text-zinc-500">
        <Link href="/store" className="hover:text-brand-700">
          Store
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-700">{product.model}</span>
      </nav>

      <ProductGallery
        product={product}
        header={
          <>
            <p className="text-sm font-medium text-brand-700">
              {product.manufacturer}
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900">
              {product.model}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              {product.description}
            </p>
          </>
        }
        footer={
          <div className="mt-10 rounded-xl border border-zinc-200 p-4 text-sm text-zinc-600">
            <p className="font-medium text-zinc-900">
              Every Swappei device includes:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Full diagnostic inspection and condition grading</li>
              <li>90-day limited warranty</li>
              <li>Free standard shipping within the US</li>
              <li>30-day return window</li>
            </ul>
          </div>
        }
      />

      <div className="mt-16 border-t border-zinc-200 pt-10">
        <h2 className="text-xl font-semibold text-zinc-900">
          Specifications
        </h2>
        <dl className="mt-6 divide-y divide-zinc-100 border-t border-zinc-100">
          {specEntries.map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col gap-1 py-3 text-sm sm:flex-row sm:items-baseline sm:gap-6"
            >
              <dt className="w-40 flex-none text-zinc-500">
                {specLabels[key] ?? key}
              </dt>
              <dd className="font-medium text-zinc-900">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
