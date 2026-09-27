import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import Reveal from "@/components/Reveal";
import StripeDivider from "@/components/StripeDivider";

export const metadata: Metadata = {
  title: "Flight Training",
  description:
    "Discovery flights, endorsement training, ground instruction, flight reviews, and IPCs with Time Building Aviation at Winter Haven Regional Airport (KGIF).",
  alternates: { canonical: "/training" },
};

export default function TrainingPage() {
  return (
    <>
      <HeroSection
        eyebrow="Flight Training"
        title="Where Hours Matter"
        image="/aerostar-ramp.jpg"
        imageAlt="N601NT on the ramp with the cabin door open"
        height="medium"
      >
        I teach every program personally — endorsement training, ground
        instruction, flight reviews, and IPCs in N601NT.
      </HeroSection>

      <ProgramSection
        id="discovery-flight"
        eyebrow="Discovery Flight"
        title="Experience the Aerostar firsthand."
        image="/aerostar-sunset-door.jpg"
        imageAlt="N601NT parked at sunset with the cabin door open"
        cta={{ href: "/contact", label: "Book Now" }}
      >
        <p>
          A discovery flight with Time Building Aviation isn&apos;t a
          first-ever flying lesson — it&apos;s a chance to fly alongside me
          in N601NT, a genuine high-performance, pressurized twin, before
          committing to a training block.
        </p>
        <p>
          It&apos;s built for pilots who already hold a certificate and want
          to feel what this aircraft, and time building in it, is really
          like.
        </p>
      </ProgramSection>

      <StripeDivider />

      <ProgramSection
        id="endorsement-training"
        eyebrow="Endorsement Training"
        title="Confidently operate complex, high-performance, and high-altitude aircraft."
        image="/aerostar-front-view.jpg"
        imageAlt="N601NT front view, parked between hangars"
        reverse
        cta={{ href: "/contact", label: "Book Now" }}
      >
        <p>
          This covers all three endorsements — complex, high-performance, and
          high-altitude — with real systems management, performance planning,
          and operational procedures, not just the regulatory minimum.
        </p>
        <p>
          You&apos;ll train in N601NT itself, so the skills transfer directly
          — no switching to a different airplane for your checkride.
        </p>
      </ProgramSection>

      <StripeDivider />

      <ProgramSection
        id="ground-instruction"
        eyebrow="Ground Instruction"
        title="The foundational knowledge to fly safely, confidently, and efficiently."
        image="/cabin-interior-club.png"
        imageAlt="The Aerostar's cabin, club seating in tan leather"
        cta={{ href: "/contact", label: "Book Now" }}
      >
        <p>
          Instruction is tailored to where you are, aligned with FAA Airman
          Certification Standards, and focused on real understanding — not
          memorizing answers to pass a test.
        </p>
        <p>
          Topics include regulations, aerodynamics, aircraft systems, weather,
          navigation, flight planning, and risk management — whether
          you&apos;re prepping for a knowledge exam, a checkride, or
          reinforcing what you learned in the cockpit.
        </p>
      </ProgramSection>

      <StripeDivider />

      <section id="flight-review-ipc" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <Eyebrow>Flight Review</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
              Maintain proficiency and meet FAA currency requirements.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              A flight review keeps you current and legal to fly. I evaluate
              your flying, your knowledge, and your decision-making in the
              airplane — not just on paper.
            </p>
            <div className="mt-7">
              <Button href="/contact" variant="ghost">Book Now</Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Instrument Proficiency Check (IPC)</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
              Stay sharp for instrument meteorological conditions.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              An IPC gets instrument-rated pilots back to full proficiency,
              tailored to your experience level — instrument procedures,
              navigation, approach and departure techniques, and the
              maneuvers the FAA requires.
            </p>
            <div className="mt-7">
              <Button href="/contact" variant="ghost">Book Now</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
