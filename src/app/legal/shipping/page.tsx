import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping methods, timelines, and coverage for Swappei orders.",
};

export default function ShippingPage() {
  return (
    <LegalLayout title="Shipping Policy" updated="September 14, 2026">
      <h2>1. Shipping Area</h2>
      <p>
        At this time, Swappei ships to addresses within the United States
        only.
      </p>

      <h2>2. Processing Time</h2>
      <p>
        Orders are typically processed and inspected for final quality
        control within 1–2 business days before shipment.
      </p>

      <h2>3. Shipping Time</h2>
      <p>
        Standard shipping typically takes 3–5 business days from the date
        of dispatch. Delivery estimates are not guaranteed and may vary
        based on your location and carrier conditions.
      </p>

      <h2>4. Shipping Costs</h2>
      <p>
        Standard shipping is provided free of charge on all orders unless
        otherwise noted at checkout.
      </p>

      <h2>5. Order Tracking</h2>
      <p>
        Once your order ships, you&apos;ll receive an email with a tracking
        number so you can follow your package&apos;s progress.
      </p>

      <h2>6. Lost or Damaged Packages</h2>
      <p>
        If your package is lost in transit or arrives visibly damaged,
        contact us within 7 days of the expected delivery date so we can
        investigate with the carrier and arrange a resolution.
      </p>

      <h2>7. Contact</h2>
      <p>
        Shipping questions can be sent to{" "}
        <a
          href="mailto:support@swappei.com"
          className="text-teal-700 hover:text-teal-800"
        >
          support@swappei.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}
