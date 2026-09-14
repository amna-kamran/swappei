import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Swappei team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <PageHeader
        title="Contact Us"
        description="Have a question about an order, a device, or anything else? Send us a message and we'll get back to you as soon as we can."
      />

      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
        <ContactForm />

        <div className="space-y-6 text-sm text-zinc-600">
          <div>
            <p className="font-medium text-zinc-900">Email</p>
            <a
              href="mailto:support@swappei.com"
              className="text-teal-700 hover:text-teal-800"
            >
              support@swappei.com
            </a>
          </div>
          <div>
            <p className="font-medium text-zinc-900">Company</p>
            <p>Swappei Inc</p>
            <p>United States</p>
          </div>
          <div>
            <p className="font-medium text-zinc-900">Response time</p>
            <p>We typically respond within 1–2 business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
