import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/Eyebrow";
import HeroSection from "@/components/HeroSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a discovery flight, flight instruction, or a scenic air tour with Time Building Aviation at Winter Haven Regional Airport (KGIF).",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Contact Us"
        title="Where Hours Matter"
        image="/aerostar-front-view.jpg"
        imageAlt="N601NT parked between hangars at sunset"
        height="medium"
      >
        Tell me what you&apos;re working toward and when you&apos;d like to
        fly. I review every request personally.
      </HeroSection>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="space-y-10">
            <div>
              <Eyebrow>Reach the Ramp</Eyebrow>
              <div className="mt-4 space-y-1 text-charcoal/80">
                <p>Winter Haven Regional Airport (KGIF)</p>
                <p>Winter Haven, Florida</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Winter+Haven+Regional+Airport+KGIF"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-body text-sm font-semibold uppercase tracking-wide text-indigo hover:text-indigo-bright"
              >
                Get Directions &rarr;
              </a>
            </div>

            <div>
              <Eyebrow>Direct</Eyebrow>
              <div className="mt-4 space-y-1 text-charcoal/80">
                <a href="tel:+14076208895" className="block hover:text-indigo">(407) 620-8895</a>
                <a href="mailto:AlexanderJoyner@TimeBuildingAviation.com" className="block hover:text-indigo break-all">
                  AlexanderJoyner@TimeBuildingAviation.com
                </a>
              </div>
            </div>

            <div>
              <Eyebrow>Availability</Eyebrow>
              <p className="mt-4 text-charcoal/80">
                Flights are scheduled around my calendar and weather at KGIF —
                flexible days and evenings are usually easiest to accommodate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
