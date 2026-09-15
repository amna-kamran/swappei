import Link from "next/link";
import Image from "next/image";
import { getManufacturers, products } from "@/lib/products";
import PopularModelsCarousel from "@/components/PopularModelsCarousel";

const featuredSlugs = [
  "iphone-15-pro",
  "galaxy-s23",
  "pixel-8",
  "iphone-14",
  "iphone-16-pro",
  "pixel-7a",
  "iphone-13-pro",
  "galaxy-s22-ultra",
];
const featured = featuredSlugs
  .map((slug) => products.find((p) => p.slug === slug))
  .filter((p): p is (typeof products)[number] => Boolean(p));

const dealProduct = products.find((p) => p.slug === "iphone-15")!;
const warrantyProduct = products.find((p) => p.slug === "galaxy-s24")!;

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

const brandLogos: Record<
  string,
  { src: string; width: number; height: number; className: string }
> = {
  Apple: { src: "/brands/apple.svg", width: 40, height: 40, className: "h-10 w-auto" },
  Samsung: { src: "/brands/samsung.svg", width: 2079, height: 305, className: "h-6 w-auto" },
  Google: { src: "/brands/google.svg", width: 512, height: 512, className: "h-10 w-auto" },
};

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
        <circle
          cx="12"
          cy="10"
          r="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 15l-2 6 5-2 5 2-2-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: "Free US shipping",
    body: "Standard shipping is free on every order, with tracking provided as soon as your device ships.",
    icon: (
      <>
        <rect
          x="2"
          y="7"
          width="13"
          height="10"
          rx="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 10h3.5l3 3v4h-6.5v-7z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
      <section className="overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.4fr] md:py-24">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-brand-700">
              Certified pre-owned smartphones
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Great phones. Fully tested. Half the price.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600">
              Certified pre-owned Apple, Samsung, and Google phones. Every
              device inspected, graded, and warranty-backed.
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

          <div className="animated-gradient flex h-64 w-full items-center justify-center self-stretch overflow-hidden rounded-3xl pt-10 sm:h-80 md:h-auto">
            <Image
              src="/hero/iphone-hero.png"
              alt="Lineup of iPhone models in different colors"
              width={905}
              height={568}
              className="h-full w-auto"
              priority
            />
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

        <div className="mt-8">
          <PopularModelsCarousel products={featured} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-3xl bg-zinc-100 p-8 sm:p-10">
            <Image
              src={dealProduct.image}
              alt={dealProduct.model}
              width={dealProduct.imageWidth}
              height={dealProduct.imageHeight}
              className="mx-auto h-52 w-auto"
            />
            <div className="mt-8">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Kids drop phones. You don&apos;t have to drop cash.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {dealProduct.model}, fully tested and graded, from $
                {dealProduct.priceFrom}.
              </p>
              <Link
                href={`/store/${dealProduct.slug}`}
                className="mt-6 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Shop now
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-zinc-100 p-8 sm:p-10">
            <Image
              src={warrantyProduct.image}
              alt={warrantyProduct.model}
              width={warrantyProduct.imageWidth}
              height={warrantyProduct.imageHeight}
              className="mx-auto h-52 w-auto"
            />
            <div className="mt-8">
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Every phone, backed for 90 days.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Free US shipping and a 90-day limited warranty come standard on
                every order, no matter which phone you choose.
              </p>
              <Link
                href="/legal/warranty"
                className="mt-6 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Top brands, refurbished
        </h2>
        <div className="mt-8 rounded-3xl bg-zinc-50 p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={`/store?manufacturer=${encodeURIComponent(brand.name)}`}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src={brandLogos[brand.name].src}
                  alt={`${brand.name} logo`}
                  width={brandLogos[brand.name].width}
                  height={brandLogos[brand.name].height}
                  className={`${brandLogos[brand.name].className} object-contain`}
                />
                <p className="text-xs text-zinc-500">
                  {brand.count} model{brand.count === 1 ? "" : "s"}
                </p>
              </Link>
            ))}
          </div>
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
                <h3 className="mt-4 font-medium text-zinc-900">{step.title}</h3>
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
            Browse our full catalog of tested, graded, and guaranteed pre-owned
            smartphones.
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
