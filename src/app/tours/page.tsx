import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import HeroSection from "@/components/HeroSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Scenic Air Tours",
  description:
    "Unforgettable air tours over Central Florida from Winter Haven Regional Airport (KGIF), giving passengers a unique perspective from the sky in a 1980 Piper Aerostar 601P.",
  alternates: { canonical: "/tours" },
};

const TOURS = [
  {
    name: "Orlando Skyline Tour",
    duration: "~30 minutes",
    copy: "A quick, comfortable loop near Winter Haven with sweeping views of the Orlando skyline and the theme park district from a distance, at altitude.",
  },
  {
    name: "Sunset Tour",
    duration: "~45 minutes",
    copy: "The city and lakes of Central Florida lit up in golden hour light — a favorite for anniversaries and proposals.",
  },
];

export default function ToursPage() {
  return (
    <>
      <HeroSection
        eyebrow="Scenic Air Tours · KGIF"
        title="A unique perspective from the sky."
        image="/aerostar-tour.jpg"
        imageAlt="N601NT on the ramp beneath a rainbow at dusk"
      >
        Scenic flights over Orlando, sparkling lakes, and Florida sunsets —
        for anniversaries, proposals, or just a good reason to be in the air.
      </HeroSection>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <video
            className="w-full"
            controls
            preload="metadata"
            poster="/tour-sunset-wing.jpg"
          >
            <source src="/videos/fireworks-tour.mp4" type="video/mp4" />
          </video>
          <p className="mt-2 font-body text-xs uppercase tracking-wide text-stone">
            Disney&apos;s Fireworks — Fourth of July 2026
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TOURS.map((tour, i) => (
            <Reveal key={tour.name} delay={i * 0.06}>
              <div className="flex h-full flex-col border border-charcoal/12 p-7">
                <Eyebrow>{tour.duration}</Eyebrow>
                <h3 className="mt-3 font-display text-xl font-semibold">{tour.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">{tour.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 max-w-2xl">
          <p className="text-sm leading-relaxed text-charcoal/60">
            All tours are nonstop flights that depart from and return to
            Winter Haven Regional Airport (KGIF), staying within 25 statute miles of the
            airport in compliance with 14 CFR § 91.147. Tours are flown
            outside Orlando&apos;s restricted theme-park airspace and are
            weather permitting.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">Book a Scenic Flight</Button>
        </div>
      </section>
    </>
  );
}
