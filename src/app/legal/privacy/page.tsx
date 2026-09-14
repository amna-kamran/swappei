import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Swappei Inc collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 14, 2026">
      <p>
        This Privacy Policy describes how Swappei Inc (&quot;Swappei,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
        and protects information when you visit swappei.com or make a
        purchase through the Site.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Contact information</strong> — name, email address, and
          shipping address you provide when placing an order or contacting
          us.
        </li>
        <li>
          <strong>Order information</strong> — products purchased, order
          history, and payment confirmation (payment card details are
          processed by our payment provider and are not stored on our
          servers).
        </li>
        <li>
          <strong>Usage information</strong> — pages visited and general
          interaction data collected automatically through cookies and
          similar technologies.
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To process and fulfill orders</li>
        <li>To communicate with you about your order or inquiries</li>
        <li>To improve the Site and our product offerings</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>
        We do not sell your personal information. We may share information
        with service providers who help us operate the Site and fulfill
        orders (such as shipping carriers and payment processors), or when
        required by law.
      </p>

      <h2>4. Cookies</h2>
      <p>
        The Site may use cookies to support basic functionality and
        understand how visitors use the Site. You can control cookies
        through your browser settings.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain personal information for as long as necessary to fulfill
        the purposes described in this policy, unless a longer retention
        period is required by law.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        Depending on your location, you may have the right to access,
        correct, or delete your personal information. To make a request,
        contact us at{" "}
        <a
          href="mailto:support@swappei.com"
          className="text-brand-700 hover:text-brand-800"
        >
          support@swappei.com
        </a>
        .
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes
        will be posted on this page with an updated revision date.
      </p>

      <h2>8. Contact</h2>
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
