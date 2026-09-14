import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

const featured = products.filter((p) =>
  ["iphone-15-pro", "galaxy-s23", "pixel-8", "iphone-14"].includes(p.slug)
);

const steps = [
  {
    title: "Browse & choose",
    body: "Pick a manufacturer and model, then choose the storage, color, and condition grade that fits your budget.",
  },
  {
    title: "We inspect every unit",
    body: "Each device is tested for battery health, screen condition, cameras, and connectivity before it's listed.",
  },
  {
    title: "Fast, tracked shipping",
    body: "Orders are carefully packaged and shipped with tracking so you know exactly when your device will arrive.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
              Certified pre-owned smartphones
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Great phones, thoroughly tested, at a fraction of the price.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600">
              Swappei is a US retailer of pre-owned Apple, Samsung, and Google
              smartphones. Every device is inspected, graded, and backed by a
              warranty, so you can buy with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/store"
                className="rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-800"
              >
                Shop the Store
              </Link>
              <Link
                href="/guide"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featured.slice(0, 4).map((p) => (
              <div
                key={p.slug}
                className="rounded-2xl border border-zinc-200 bg-white p-4"
              >
                <Image
                  src={p.image}
                  alt={p.model}
                  width={480}
                  height={480}
                  className="mx-auto h-28 w-auto"
                />
                <p className="mt-3 text-center text-xs font-medium text-zinc-700">
                  {p.model}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Popular models
          </h2>
          <Link
            href="/store"
            className="text-sm font-medium text-teal-700 hover:text-teal-800"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/store/${p.slug}`}
              className="group rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-teal-300 hover:bg-teal-50/40"
            >
              <Image
                src={p.image}
                alt={p.model}
                width={480}
                height={480}
                className="mx-auto h-32 w-auto"
              />
              <p className="mt-4 text-sm text-zinc-500">{p.manufacturer}</p>
              <p className="font-medium text-zinc-900">{p.model}</p>
              <p className="mt-1 text-sm text-zinc-600">
                From ${p.priceFrom}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            How buying from Swappei works
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title}>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-sm font-semibold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-medium text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-teal-700 px-8 py-12 text-center sm:px-16">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready to find your next phone?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-teal-50">
            Browse our full catalog of tested, graded, and guaranteed
            pre-owned smartphones.
          </p>
          <Link
            href="/store"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-teal-800 hover:bg-teal-50"
          >
            Shop the Store
          </Link>
        </div>
      </section>
    </div>
  );
}
