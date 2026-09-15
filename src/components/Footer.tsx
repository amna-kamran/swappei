import Link from "next/link";
import Logo from "./Logo";
import { mainNav, legalNav } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600">
              Swappei Inc is a US affiliate of Sachi Trading (サチ通商),
              Japan. We test and grade every phone before it ships, then
              back it with a real warranty.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Company</h3>
            <ul className="mt-4 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li>Swappei Inc</li>
              <li>80569 Hoylake Drive</li>
              <li>Indio, CA 92201</li>
              <li>
                <a href="tel:+15628228528" className="hover:text-brand-700">
                  +1 (562) 822-8528
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@swappei.com"
                  className="hover:text-brand-700"
                >
                  support@swappei.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          <p>&copy; {year} Swappei Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
