import { legalNav } from "@/lib/nav";
import Link from "next/link";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr]">
        <aside className="hidden md:block">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            Legal
          </p>
          <nav className="mt-4 space-y-1">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-2 py-1.5 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-teal-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {title}
          </h1>
          <p className="mt-2 text-sm text-zinc-500">Last updated: {updated}</p>

          <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-zinc-600 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-zinc-900 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
