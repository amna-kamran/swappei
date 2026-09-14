import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { legalNav } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Legal",
  description: "Swappei Inc's store policies and legal documents.",
};

export default function LegalIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Legal"
        description="Our store policies, in one place."
      />
      <ul className="mt-10 divide-y divide-zinc-200 border-t border-zinc-200">
        {legalNav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center justify-between py-4 text-sm font-medium text-zinc-900 hover:text-brand-700"
            >
              {item.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
