import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: "Swappei Inc's return, refund, and cancellation policy.",
};

export default function ReturnsPage() {
  return (
    <LegalLayout title="Return & Refund Policy" updated="September 14, 2026">
      <h2>1. Order Cancellations</h2>
      <p>
        Orders can be cancelled free of charge at any time before they
        ship. To cancel an order, contact us as soon as possible with your
        order number.
      </p>

      <h2>2. Return Window</h2>
      <p>
        We accept returns within 30 days of the delivery date. To be
        eligible, the device must be in the same condition it was received,
        including all original accessories that were shipped with it.
      </p>

      <h2>3. How to Start a Return</h2>
      <p>
        Contact us through the{" "}
        <a href="/contact" className="text-teal-700 hover:text-teal-800">
          Contact page
        </a>{" "}
        with your order number and reason for return. We&apos;ll provide
        instructions and a return shipping label where applicable.
      </p>

      <h2>4. Refunds</h2>
      <p>
        Once your return is received and inspected, we&apos;ll notify you
        of the approval status. Approved refunds are issued to your
        original payment method within 5–10 business days.
      </p>

      <h2>5. Non-Returnable Situations</h2>
      <p>
        Devices returned with damage not present at delivery, or missing
        included accessories, may be subject to a reduced refund reflecting
        the difference in condition.
      </p>

      <h2>6. Defective or Incorrect Items</h2>
      <p>
        If your device arrives with a defect or doesn&apos;t match its
        listing, contact us within 30 days of delivery and we&apos;ll
        arrange a replacement, repair, or full refund at no cost to you.
        See our{" "}
        <a href="/legal/warranty" className="text-teal-700 hover:text-teal-800">
          Warranty Policy
        </a>{" "}
        for additional coverage details.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about returns can be sent to{" "}
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
