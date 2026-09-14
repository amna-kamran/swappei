import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Swappei Inc collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 15, 2026">
      <p>
        This Privacy Policy describes how Swappei Inc (&quot;Swappei,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
        and protects information when you visit swappei.com (the
        &quot;Site&quot;). Purchases are completed on our Store at
        store.hayaland.com, which has its own privacy practices; this
        policy covers the Site only.
      </p>

      <h2>1. Who Collects Your Data</h2>
      <p>
        Swappei Inc, a company incorporated in the United States, is the
        data controller for information collected through the Site.
        Questions about this policy can be sent to{" "}
        <a
          href="mailto:support@swappei.com"
          className="text-brand-700 hover:text-brand-800"
        >
          support@swappei.com
        </a>
        .
      </p>

      <h2>2. What Data We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Contact information</strong> — name, email address, and
          any details you submit through our{" "}
          <a href="/contact" className="text-brand-700 hover:text-brand-800">
            Contact
          </a>{" "}
          form.
        </li>
        <li>
          <strong>Device and usage information</strong> — browser type,
          device type, general location (derived from IP address), pages
          visited, and how you interact with the Site, collected
          automatically through cookies and similar technologies.
        </li>
        <li>
          <strong>Order-related information</strong> — the product options
          you select while browsing (storage, color, condition). Because
          checkout happens on the Store, we do not collect or store
          payment card details, shipping addresses, or order history
          through the Site itself.
        </li>
      </ul>

      <h2>3. Why We Use Your Data</h2>
      <ul>
        <li>To operate, maintain, and improve the Site</li>
        <li>To respond to questions submitted through our Contact form</li>
        <li>To understand how visitors use the Site so we can fix issues and improve navigation</li>
        <li>To detect, prevent, and address fraud, abuse, or security issues</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>4. Who We Share Data With</h2>
      <p>
        We do not sell your personal information. We may share information
        with service providers who help us operate the Site (such as
        hosting and analytics providers), or when required by law, to
        protect our rights, or in connection with a business transfer
        (such as a merger or acquisition). When you continue to the Store
        to complete a purchase, the information you provide there is
        collected and processed by the Store under its own privacy
        practices, not this policy.
      </p>

      <h2>5. Cookies</h2>
      <p>
        The Site may use cookies and similar technologies to support basic
        functionality and understand how visitors use the Site. You can
        control or disable cookies through your browser settings; doing so
        may affect how parts of the Site function.
      </p>

      <h2>6. How Long We Keep Data</h2>
      <p>
        We retain personal information for as long as necessary to fulfill
        the purposes described in this policy, after which it is deleted
        or anonymized, unless a longer retention period is required by
        law.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Depending on your state or country of residence, you may have the
        right to:
      </p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Correct inaccurate or incomplete information</li>
        <li>Request deletion of your personal information</li>
        <li>Object to or restrict certain processing</li>
        <li>Request a portable copy of your information</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a
          href="mailto:support@swappei.com"
          className="text-brand-700 hover:text-brand-800"
        >
          support@swappei.com
        </a>
        . We will not discriminate against you for exercising these
        rights.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        The Site is not directed to children under 13, and we do not
        knowingly collect personal information from children under 13.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes
        will be posted on this page with an updated revision date.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this Privacy Policy can be sent to{" "}
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
