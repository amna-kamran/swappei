import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Swappei | Certified Pre-Owned Smartphones",
    template: "%s | Swappei",
  },
  description:
    "Swappei Inc offers tested, graded, and guaranteed pre-owned smartphones from Apple, Samsung, and Google, in partnership with Sachi Trading.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
