import Link from "next/link";
import Image from "next/image";
import { getManufacturers, products } from "@/lib/products";

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

const brands = getManufacturers().map((name) => ({
  name,
  count: products.filter((p) => p.manufacturer === name).length,
}));

const trustFeatures = [
  {
    title: "Certified & tested",
    body: "Every device passes a full diagnostic inspection covering battery, screen, cameras, and connectivity before it's listed.",
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5C8 19.2 5 15.5 5 11V6l7-3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "90-day warranty",
    body: "Every purchase is backed by a 90-day limited warranty covering functional issues, at no extra cost.",
    icon: (
      <>
        <circle cx="12" cy="10" r="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15l-2 6 5-2 5 2-2-6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Free US shipping",
    body: "Standard shipping is free on every order, with tracking provided as soon as your device ships.",
    icon: (
      <>
        <rect x="2" y="7" width="13" height="10" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 10h3.5l3 3v4h-6.5v-7z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </>
    ),
  },
  {
    title: "30-day returns",
    body: "Not the right fit? Return it within 30 days of delivery for a full refund.",
    icon: (
      <path
        d="M4 4v5h5M4 9a8 8 0 1 1 2 5.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-brand-700">
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
              <a
                href="https://store.hayaland.com/jp"
                className="rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
              >
                Shop the Store
              </a>
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
                  width={p.imageWidth}
                  height={p.imageHeight}
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
            className="text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Shop by brand
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/store?manufacturer=${encodeURIComponent(brand.name)}`}
              className="group flex items-center justify-between rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
            >
              <div>
                <p className="text-lg font-semibold text-zinc-900">
                  {brand.name}
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  {brand.count} model{brand.count === 1 ? "" : "s"}
                </p>
              </div>
              <span className="text-brand-700 transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
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
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">
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
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Why buy from Swappei
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((feature) => (
            <div key={feature.title}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="text-brand-700"
                aria-hidden="true"
              >
                {feature.icon}
              </svg>
              <h3 className="mt-4 font-medium text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl bg-brand-500 px-8 py-12 text-center sm:px-16">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready to find your next phone?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-brand-50">
            Browse our full catalog of tested, graded, and guaranteed
            pre-owned smartphones.
          </p>
          <a
            href="https://store.hayaland.com/jp"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-800 hover:bg-white/90"
          >
            Shop the Store
          </a>
        </div>
      </section>
    </div>
  );
}
