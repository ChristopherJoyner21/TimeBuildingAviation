import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghost-dark";
  className?: string;
};

const variants: Record<string, string> = {
  primary:
    "bg-indigo text-cream hover:bg-indigo-bright focus-visible:outline-indigo-bright",
  ghost:
    "border border-charcoal/25 text-charcoal hover:border-indigo hover:text-indigo focus-visible:outline-indigo",
  "ghost-dark":
    "border border-cream/40 text-cream hover:border-gold-bright hover:text-gold-bright focus-visible:outline-gold-bright",
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-semibold tracking-wide uppercase transition-colors duration-200 outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
