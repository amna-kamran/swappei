import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping methods, timelines, and coverage for Swappei orders.",
};

export default function ShippingPage() {
  return (
    <LegalLayout title="Shipping Policy" updated="September 15, 2026">
      <p>
        Orders are placed and shipped through our Store at
        store.hayaland.com. This page describes the shipping standards
        that apply to Swappei devices sold through the Store.
      </p>

      <h2>1. Shipping Area</h2>
      <p>
        We currently ship to addresses within the 48 contiguous United
        States. Orders to Alaska, Hawaii, and US territories may be
        available but typically take longer to arrive (see Shipping Time
        below). We do not currently ship internationally. We are unable to
        deliver signature-required packages to PO boxes.
      </p>

      <h2>2. Processing Time</h2>
      <p>
        Orders are processed and go through a final quality check within
        1–2 business days before they&apos;re handed to the carrier.
        Business days are Monday through Friday, excluding federal
        holidays.
      </p>

      <h2>3. Shipping Time</h2>
      <p>
        Standard shipping typically takes 3–5 business days from the date
        of dispatch for the contiguous US, and 5–10 business days for
        Alaska, Hawaii, and US territories. Combined with processing time,
        most orders arrive within 4–7 business days of purchase. Delivery
        estimates are provided by our shipping carriers and are not
        guaranteed; they may be affected by weather, high shipping volume,
        or carrier delays outside our control.
      </p>

      <h2>4. Signature Confirmation</h2>
      <p>
        For security, orders above a certain value require an adult
        signature on delivery. If no one is available to sign, the carrier
        will typically leave a notice and attempt redelivery or hold the
        package for pickup.
      </p>

      <h2>5. Shipping Costs</h2>
      <p>
        Standard shipping is provided free of charge on all orders unless
        otherwise noted at checkout.
      </p>

      <h2>6. Order Tracking</h2>
      <p>
        Once your order ships, you&apos;ll receive an email with a tracking
        number so you can follow your package&apos;s progress.
      </p>

      <h2>7. Undeliverable or Returned Packages</h2>
      <p>
        If a package is undeliverable due to an incorrect or incomplete
        address and is returned to us, we&apos;ll contact you to arrange
        redelivery, which may involve an additional shipping charge.
        Please double-check your shipping address at checkout, as we&apos;re
        not able to change an address once an order has shipped.
      </p>

      <h2>8. Lost or Damaged Packages</h2>
      <p>
        If your package is lost in transit or arrives visibly damaged,
        contact us within 7 days of the expected delivery date so we can
        investigate with the carrier and arrange a replacement or refund
        in accordance with our{" "}
        <a href="/legal/returns" className="text-brand-700 hover:text-brand-800">
          Return & Refund Policy
        </a>
        .
      </p>

      <h2>9. Contact</h2>
      <p>
        Shipping questions can be sent to{" "}
        <a
          href="mailto:support@swappei.com"
          className="text-brand-700 hover:text-brand-800"
        >
          support@swappei.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}
