"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function Digit({ value, tone = "cream" }: { value: string; tone?: "cream" | "gold" }) {
  const color = tone === "gold" ? "text-gold-bright" : "text-cream";
  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden align-bottom">
      <AnimatePresence initial={false}>
        <motion.span
          key={value}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-120%" }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`absolute inset-0 flex items-center justify-center ${color}`}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/**
 * A live, ticking Hobbs meter — the instrument that actually measures a
 * pilot's flight hours. It counts real session time in tenths, the same
 * unit N601NT logs on every flight.
 */
export default function HobbsMeter({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [tenths, setTenths] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const start = Date.now();
    const id = setInterval(() => {
      setTenths(Math.floor((Date.now() - start) / 100) % 1000000);
    }, 100);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const whole = Math.floor(tenths / 10)
    .toString()
    .padStart(4, "0");
  const tenthDigit = (tenths % 10).toString();

  return (
    <div
      className={`inline-flex items-center gap-3 border border-gold/30 bg-ink-deep px-6 py-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="flex items-center font-mono text-4xl font-medium tabular-nums sm:text-5xl">
        {whole.split("").map((d, i) => (
          <Digit key={i} value={d} />
        ))}
        <span className="mx-1 text-stone-dim">.</span>
        <Digit value={tenthDigit} tone="gold" />
      </div>
      <span className="eyebrow self-end pb-1 text-stone-dim">HRS</span>
    </div>
  );
}
