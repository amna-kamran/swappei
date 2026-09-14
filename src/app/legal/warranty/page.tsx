import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Warranty Policy",
  description: "Warranty coverage for devices purchased from Swappei.",
};

export default function WarrantyPage() {
  return (
    <LegalLayout title="Warranty Policy" updated="September 14, 2026">
      <h2>1. Coverage</h2>
      <p>
        Every device sold by Swappei includes a 90-day limited warranty
        starting from the delivery date. This warranty covers functional
        defects not caused by accident, misuse, or unauthorized
        modification, including issues with battery performance, display,
        cameras, buttons, and connectivity.
      </p>

      <h2>2. What&apos;s Not Covered</h2>
      <ul>
        <li>Accidental damage, including drops, cracks, and liquid damage</li>
        <li>Damage caused by unauthorized repairs or modifications</li>
        <li>Normal cosmetic wear consistent with the listed condition grade</li>
        <li>Loss or theft of the device</li>
      </ul>

      <h2>3. How to Make a Warranty Claim</h2>
      <p>
        Contact us through the{" "}
        <a href="/contact" className="text-teal-700 hover:text-teal-800">
          Contact page
        </a>{" "}
        with your order number and a description of the issue. We may ask
        for photos or additional diagnostic information to process your
        claim.
      </p>

      <h2>4. Resolution</h2>
      <p>
        Depending on the issue, we&apos;ll offer a repair, replacement, or
        refund at our discretion. Approved replacements are shipped free of
        charge.
      </p>

      <h2>5. Contact</h2>
      <p>
        Warranty questions can be sent to{" "}
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
