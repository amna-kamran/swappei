import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "User Guide",
  description:
    "How to purchase, shipping details, and our returns and cancellations process.",
};

const sections = [
  {
    title: "How to Purchase",
    steps: [
      "Browse the Store and open a model to see available storage, color, and condition options.",
      "Select the options that fit your needs and add the device to your cart.",
      "Proceed to checkout and enter your shipping and payment details.",
      "You'll receive an order confirmation email once your purchase is complete.",
    ],
  },
  {
    title: "Shipping",
    steps: [
      "Orders are processed within 1–2 business days.",
      "Standard shipping within the US typically takes 3–5 business days.",
      "You'll receive a tracking number by email as soon as your order ships.",
      "See our Shipping Policy for full details.",
    ],
  },
  {
    title: "Returns & Cancellations",
    steps: [
      "Orders can be cancelled free of charge before they ship.",
      "Returns are accepted within 30 days of delivery for a full refund, provided the device is in the condition it was received.",
      "To start a return, contact us through the Contact page with your order number.",
      "See our Return & Refund Policy for full details.",
    ],
  },
];

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <PageHeader
        title="User Guide"
        description="A quick overview of how to shop with Swappei, from checkout to returns."
      />

      <div className="mt-10 space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold text-zinc-900">
              {section.title}
            </h2>
            <ol className="mt-4 space-y-3">
              {section.steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-zinc-600">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-800">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
