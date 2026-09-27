import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import HeroSection from "@/components/HeroSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Alexander Joyner",
  description:
    "Meet Alexander Joyner, CFI/CFII/MEI and owner of Time Building Aviation, flying a 1980 Piper Aerostar 601P out of Winter Haven Regional Airport (KGIF).",
  alternates: { canonical: "/about" },
};

const RATINGS = ["CFI", "CFII", "MEI"];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About Us"
        title="Alexander Joyner"
        image="/aerostar-hangar.jpg"
        imageAlt="N601NT parked in the hangar"
        height="medium"
      >
        I fly and teach every flight at Time Building Aviation myself.
      </HeroSection>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/alexander-bio.jpg"
                alt="Alexander Joyner in the cockpit"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {RATINGS.map((r) => (
                <li key={r} className="eyebrow border border-charcoal/15 px-3 py-1.5 text-charcoal/70">
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>My Name Is Alexander Joyner</Eyebrow>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-charcoal/80">
              <p>
                I hold CFI, CFII, and MEI certificates, with a focus on
                multi-engine and high-performance training in a genuinely
                capable airplane — not a rental-fleet trainer. Every lesson is
                built around where you actually are in your training and what
                you need next.
              </p>
              <p>
                When I&apos;m not teaching, I fly scenic air tours in the same
                Aerostar — sunsets, skylines, and fireworks over Central
                Florida. Same airplane, same standards, different kind of
                flight.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">Get in Touch</Button>
              <Button href="/training" variant="ghost">See Flight Training &rarr;</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
