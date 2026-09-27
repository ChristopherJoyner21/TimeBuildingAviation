import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import HeroSection from "@/components/HeroSection";
import LoopingVideo from "@/components/LoopingVideo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Aircraft — N601NT, 1980 Piper Aerostar 601P",
  description:
    "I operate a Piper Aerostar 601P, a high-performance, pressurized twin-engine aircraft known for its speed, reliability, and safety — based at Winter Haven Regional Airport (KGIF).",
  alternates: { canonical: "/aircraft" },
};

const GALLERY = [
  { src: "/aerostar-hangar-profile.jpg", alt: "N601NT side profile in the hangar" },
  { src: "/cabin-interior-2.jpg", alt: "The Aerostar's cabin, forward view of the leather club seating" },
  { src: "/cabin-interior-table.jpg", alt: "The Aerostar's cabin with the fold-down table in use" },
  { src: "/cockpit-runway-2.jpg", alt: "View from the cockpit lined up on the runway" },
];

export default function AircraftPage() {
  return (
    <>
      <HeroSection
        eyebrow="N601NT · Piper Aerostar 601P"
        title="Our Aircraft"
        image="/aerostar-meet.jpg"
        imageAlt="N601NT, a 1980 Piper Aerostar 601P, parked between hangars at sunset"
      >
        A high-performance, pressurized twin — meticulously maintained so you
        can build hours efficiently and fly with confidence.
      </HeroSection>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <LoopingVideo
              src="/videos/fly-by-optimized.mp4"
              poster="/aerostar-ramp.jpg"
              className="aspect-[4/3] w-full"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Piper Aerostar 601P</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">
              Speed, reliability, and safety in one airframe.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/80">
              The 601P is a fast, pressurized piston twin — a genuinely capable
              airplane, not a rental-fleet trainer. It&apos;s built for real
              multi-engine and high-performance flying, in weather and at
              altitudes lighter trainers can&apos;t touch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              N601NT is maintained on a strict schedule and flown by me on
              every flight, so you&apos;re training in the same airplane, to
              the same standard, every time.
            </p>

            <div className="mt-8">
              <Button href="/training" variant="ghost">See Flight Training &rarr;</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-deep py-20 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Eyebrow tone="cream">N601NT</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold">Gallery</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((item, i) => (
              <Reveal key={item.src} delay={i * 0.08}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
