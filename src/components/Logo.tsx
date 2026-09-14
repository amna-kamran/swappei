import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-semibold tracking-tight text-zinc-900 ${className}`}
      aria-label="Swappei home"
    >
      <img
        src="/logo.svg"
        alt="Swappei"
        className="h-8 w-auto"
        aria-hidden="true"
      />
    </Link>
  );
}
