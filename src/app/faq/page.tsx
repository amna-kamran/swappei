import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about shopping with Swappei.",
};

const faqs = [
  {
    q: "Are these phones really used?",
    a: "Yes. Every device we sell is pre-owned, professionally inspected, and graded by condition. We list the condition clearly on each product page so you know exactly what you're buying.",
  },
  {
    q: "How are devices graded?",
    a: "We grade devices as Like New, Excellent, Good, or Fair based on cosmetic condition and functional testing. All grades meet our minimum functionality standard — battery, screen, cameras, and connectivity are tested on every unit regardless of grade.",
  },
  {
    q: "Are the phones unlocked?",
    a: "Yes, unless otherwise noted on the product page. Unlocked devices work with most major US and international carriers.",
  },
  {
    q: "Do phones come with accessories?",
    a: "Each device ships with a compatible charging cable. Original boxes and headphones are not included unless specified.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit and debit cards. Additional payment options will be added as the store expands.",
  },
  {
    q: "Is my information secure?",
    a: "Yes. All checkout information is processed securely. See our Privacy Policy for details on how we handle your data.",
  },
  {
    q: "Do you ship internationally?",
    a: "At this time we ship within the United States only. See our Shipping Policy for details.",
  },
  {
    q: "What if my device arrives with an issue?",
    a: "Contact our support team within 30 days of delivery and we'll help with a repair, replacement, or refund under our Return & Refund Policy and Warranty Policy.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Frequently Asked Questions"
        description="Answers to the questions we hear most often. Can't find what you're looking for? Reach out through our Contact page."
      />

      <dl className="mt-10 divide-y divide-zinc-200 border-t border-zinc-200">
        {faqs.map((item) => (
          <div key={item.q} className="py-6">
            <dt className="font-medium text-zinc-900">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
