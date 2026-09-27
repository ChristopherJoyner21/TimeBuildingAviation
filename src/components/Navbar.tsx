"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TRAINING_LINKS = [
  { href: "/training#discovery-flight", label: "Discovery Flight" },
  { href: "/training#endorsement-training", label: "Endorsement Training" },
  { href: "/training#ground-instruction", label: "Ground Instruction" },
  { href: "/training#flight-review-ipc", label: "Flight Review & IPC" },
];

const LINKS = [
  { href: "/aircraft", label: "Our Aircraft" },
  { href: "/tours", label: "Scenic Tours" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink-deep text-cream">
      <div className="flex items-center justify-between py-2">
        <Link href="/" className="flex items-center gap-3 pl-3 sm:pl-4">
          <Image
            src="/logo.png"
            alt="Time Building Aviation, LLC"
            width={84}
            height={56}
            priority
            className="h-14 w-auto object-contain"
          />
          <span className="font-display text-base font-semibold tracking-tight whitespace-nowrap sm:text-lg">
            Time Building Aviation
          </span>
        </Link>

        <div className="flex items-center gap-8 pr-4 sm:pr-6">
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`eyebrow border-b-2 pb-1 transition-colors duration-200 ${
              pathname === "/"
                ? "border-indigo-bright text-indigo-bright"
                : "border-transparent text-cream-dim hover:border-stone-dim hover:text-cream"
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setTrainingOpen(true)}
            onMouseLeave={() => setTrainingOpen(false)}
            onFocus={() => setTrainingOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setTrainingOpen(false);
            }}
          >
            <Link
              href="/training"
              aria-expanded={trainingOpen}
              className={`eyebrow flex items-center gap-1.5 border-b-2 pb-1 transition-colors duration-200 ${
                pathname === "/training"
                  ? "border-indigo-bright text-indigo-bright"
                  : "border-transparent text-cream-dim hover:border-stone-dim hover:text-cream"
              }`}
            >
              Flight Training
              <span className={`transition-transform duration-200 ${trainingOpen ? "rotate-180" : ""}`}>
                &#9662;
              </span>
            </Link>
            <AnimatePresence>
              {trainingOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full min-w-[220px] border border-stone/20 bg-ink-deep pt-2 shadow-xl"
                >
                  {TRAINING_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-cream-dim hover:bg-charcoal hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`eyebrow border-b-2 pb-1 transition-colors duration-200 ${
                  active
                    ? "border-indigo-bright text-indigo-bright"
                    : "border-transparent text-cream-dim hover:border-stone-dim hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span className="eyebrow text-stone-dim">KGIF &middot; Winter Haven, FL</span>
          <Link
            href="/contact"
            className="bg-indigo px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-indigo-bright"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span
            className={`h-px w-6 bg-cream transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-cream transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-menu"
            className="overflow-hidden border-t border-stone/15 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              <Link href="/" onClick={() => setOpen(false)} className="eyebrow py-2 text-cream-dim hover:text-indigo-bright">
                Home
              </Link>

              <span className="eyebrow mt-3 text-stone-dim">Flight Training</span>
              {TRAINING_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-1.5 pl-3 text-sm text-cream-dim hover:text-indigo-bright"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 flex flex-col gap-1">
                {LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="eyebrow py-2 text-cream-dim hover:text-indigo-bright"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 bg-indigo px-5 py-3 text-center font-body text-sm font-semibold uppercase tracking-wide text-cream"
              >
                Book Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
