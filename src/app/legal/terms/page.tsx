import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of the Swappei website and store.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="September 15, 2026">
      <p>
        These Terms & Conditions (&quot;Terms&quot;) govern your access to
        and use of the website located at swappei.com (the
        &quot;Site&quot;). The Site is operated by Swappei Inc
        (&quot;Swappei,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;), a company incorporated in the United States. By
        accessing or using the Site, you agree to be bound by these Terms.
        If you do not agree, please do not use the Site.
      </p>

      <h2>1. Definitions</h2>
      <p>
        &quot;Products&quot; means the pre-owned smartphones and related
        items described on the Site. &quot;Store&quot; means our online
        store, currently located at store.hayaland.com, where purchases are
        completed. &quot;You&quot; means the person accessing or using the
        Site.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old, or the age of legal majority in
        your jurisdiction, to use the Site or make a purchase through the
        Store. By using the Site, you represent that you meet this
        requirement.
      </p>

      <h2>3. About the Site and the Store</h2>
      <p>
        The Site is a catalog: it lets you browse Products, compare
        storage, color, and condition options, and see estimated pricing.
        The Site itself does not process orders or payments. When you
        select &quot;Buy on the Store&quot; or &quot;Shop the Store,&quot;
        you will be taken to the Store to complete your purchase. Order
        placement, payment processing, and checkout are handled entirely
        on the Store, which may have its own terms of service and privacy
        practices. We encourage you to review those before completing a
        purchase.
      </p>

      <h2>4. Product Listings, Condition Grading & Pricing</h2>
      <p>
        Every device we list is inspected and assigned a condition grade
        (Like New, Excellent, Good, or Fair) based on our grading
        standards. Product descriptions, images, specifications, and
        prices on the Site are provided for informational purposes, are
        shown as starting (&quot;From&quot;) prices for the lowest storage
        tier and condition, and may change based on the options you
        select or before checkout on the Store. We make reasonable efforts
        to keep this information accurate and up to date but do not
        warrant that it is complete or error-free at all times.
      </p>

      <h2>5. Shipping, Returns & Warranty</h2>
      <p>
        Shipping timelines are described in our{" "}
        <a href="/legal/shipping" className="text-brand-700 hover:text-brand-800">
          Shipping Policy
        </a>
        . Returns and refunds are handled in accordance with our{" "}
        <a href="/legal/returns" className="text-brand-700 hover:text-brand-800">
          Return & Refund Policy
        </a>
        , and devices are covered by our{" "}
        <a href="/legal/warranty" className="text-brand-700 hover:text-brand-800">
          Warranty Policy
        </a>
        . These policies apply to Products purchased through the Store
        regardless of where the order was initiated.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>You agree not to use the Site to:</p>
      <ul>
        <li>
          Copy, scrape, or systematically extract content or pricing data
          without our prior written consent;
        </li>
        <li>
          Interfere with or disrupt the Site, or attempt to gain
          unauthorized access to it or any related systems;
        </li>
        <li>
          Reverse engineer, decompile, or attempt to derive the source
          code of any part of the Site; or
        </li>
        <li>
          Use the Site for any unlawful purpose or in violation of these
          Terms.
        </li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All content on the Site, including text, graphics, logos, and
        images, is the property of Swappei Inc or its licensors and is
        protected by applicable intellectual property laws. You may not
        reproduce, distribute, or create derivative works from this content
        without our prior written consent.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        The Site links to the Store and may link to other third-party
        sites (for example, our shipping or payment partners). We do not
        control and are not responsible for the content, policies, or
        practices of any third-party site.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The Site is provided &quot;as is&quot; and &quot;as
        available,&quot; without warranties of any kind, whether express or
        implied, including implied warranties of merchantability, fitness
        for a particular purpose, or non-infringement. We do not warrant
        that the Site will be uninterrupted, secure, or error-free. This
        section concerns the Site itself; warranty coverage for Products
        you purchase is described in our{" "}
        <a href="/legal/warranty" className="text-brand-700 hover:text-brand-800">
          Warranty Policy
        </a>
        .
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Swappei Inc shall not be
        liable for any indirect, incidental, special, or consequential
        damages arising from your use of the Site. Because purchases are
        completed on the Store, our liability in connection with an order
        is further limited as described in our Return & Refund and
        Warranty policies.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold Swappei Inc harmless from any
        claims, losses, or expenses (including reasonable legal fees)
        arising from your misuse of the Site or violation of these Terms.
      </p>

      <h2>12. Governing Law & Disputes</h2>
      <p>
        These Terms are governed by the laws of the United States and the
        state in which Swappei Inc is incorporated, without regard to
        conflict-of-law principles. If a dispute arises, we ask that you
        first contact us at{" "}
        <a
          href="mailto:support@swappei.com"
          className="text-brand-700 hover:text-brand-800"
        >
          support@swappei.com
        </a>{" "}
        so we can try to resolve it informally.
      </p>

      <h2>13. Severability</h2>
      <p>
        If any provision of these Terms is found unenforceable, the
        remaining provisions will remain in full effect.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the
        Site after changes are posted constitutes acceptance of the revised
        Terms.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
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
