import Image from "next/image";
import Link from "next/link";
import StripeDivider from "./StripeDivider";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-cream">
      <StripeDivider />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Time Building Aviation, LLC"
                width={60}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-lg font-semibold">Time Building Aviation</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-dim">
              Personalized flight instruction and unforgettable air tours out of
              Winter Haven Regional Airport (KGIF) — flown by CFI/CFII/MEI Alexander Joyner in a
              1980 Piper Aerostar 601P.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-stone-dim">Fly With Us</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/training" className="text-cream-dim hover:text-indigo-bright">Flight Training</Link></li>
              <li><Link href="/aircraft" className="text-cream-dim hover:text-indigo-bright">Our Aircraft</Link></li>
              <li><Link href="/tours" className="text-cream-dim hover:text-indigo-bright">Scenic Tours</Link></li>
              <li><Link href="/about" className="text-cream-dim hover:text-indigo-bright">About Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-stone-dim">Reach the Ramp</p>
            <ul className="space-y-2 text-sm text-cream-dim">
              <li>Winter Haven Regional Airport (KGIF)</li>
              <li>Winter Haven, Florida</li>
              <li>
                <a href="tel:+14076208895" className="hover:text-indigo-bright">(407) 620-8895</a>
              </li>
              <li>
                <a href="mailto:AlexanderJoyner@TimeBuildingAviation.com" className="hover:text-indigo-bright break-all">
                  AlexanderJoyner@TimeBuildingAviation.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-end border-t border-stone/15 pt-6 font-body text-xs uppercase tracking-wide text-stone-dim">
          <span>&copy; {new Date().getFullYear()} Time Building Aviation, LLC</span>
        </div>
      </div>
    </footer>
  );
}
