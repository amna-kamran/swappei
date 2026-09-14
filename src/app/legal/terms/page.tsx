import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of the Swappei website and store.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="September 14, 2026">
      <p>
        These Terms & Conditions (&quot;Terms&quot;) govern your access to
        and use of the website located at swappei.com (the
        &quot;Site&quot;) and any purchase made through it. The Site is
        operated by Swappei Inc (&quot;Swappei,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;), a company incorporated in the
        United States. By accessing or using the Site, you agree to be
        bound by these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old, or the age of legal majority in
        your jurisdiction, to make a purchase on the Site. By placing an
        order, you represent that you meet this requirement.
      </p>

      <h2>2. Products</h2>
      <p>
        Swappei sells pre-owned smartphones that have been inspected and
        graded according to our condition standards. Product descriptions,
        images, and pricing are provided for informational purposes and may
        be updated at any time without notice. We make reasonable efforts
        to ensure accuracy but do not warrant that product descriptions or
        other content on the Site are error-free.
      </p>

      <h2>3. Orders & Payment</h2>
      <p>
        All orders are subject to acceptance and availability. We reserve
        the right to refuse or cancel any order at our discretion,
        including in cases of suspected fraud or pricing errors. Payment
        must be received in full before an order is shipped.
      </p>

      <h2>4. Returns, Refunds & Warranty</h2>
      <p>
        Returns and refunds are handled in accordance with our{" "}
        <a href="/legal/returns" className="text-teal-700 hover:text-teal-800">
          Return & Refund Policy
        </a>
        . Devices are covered by our{" "}
        <a href="/legal/warranty" className="text-teal-700 hover:text-teal-800">
          Warranty Policy
        </a>
        .
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on the Site, including text, graphics, logos, and
        images, is the property of Swappei Inc or its licensors and is
        protected by applicable intellectual property laws. You may not
        reproduce, distribute, or create derivative works from this content
        without our prior written consent.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Swappei Inc shall not be
        liable for any indirect, incidental, special, or consequential
        damages arising from your use of the Site or products purchased
        through it. Our total liability for any claim shall not exceed the
        amount you paid for the product giving rise to the claim.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the United States and the
        state in which Swappei Inc is incorporated, without regard to
        conflict-of-law principles.
      </p>

      <h2>8. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the
        Site after changes are posted constitutes acceptance of the revised
        Terms.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
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
