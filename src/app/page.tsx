import Image from "next/image";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import HeroSection from "@/components/HeroSection";
import HobbsMeter from "@/components/HobbsMeter";
import Reveal from "@/components/Reveal";
import StripeDivider from "@/components/StripeDivider";

const SERVICES = [
  {
    title: "Time Building",
    image: "/aerostar-timebuilding.jpg",
    copy: "Structured multi-engine time in a genuine high-performance twin, built around the hours you need.",
    href: "/training",
  },
  {
    title: "Flight Instruction",
    image: "/cockpit-instruction.jpg",
    copy: "Discovery flights, endorsements, ground school, reviews, and IPCs — taught personally.",
    href: "/training",
  },
  {
    title: "Air Tours",
    image: "/aerostar-tour.jpg",
    copy: "A pilot's-eye view of Florida — sunsets, skylines, and fireworks from altitude.",
    href: "/tours",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection
        title="Where Hours Matter"
        video="/videos/hero-takeoff-enhanced.mp4"
        image="/aerostar-sunset-door.jpg"
        height="full"
        subtitleClassName="text-[19pt]"
        cta={
          <>
            <Button href="/contact" variant="primary">Request a Discovery Flight</Button>
            <Button href="/aircraft" variant="ghost-dark">Meet the Aerostar &rarr;</Button>
          </>
        }
      >
        Building Time. Building Pilots. Building Futures.
      </HeroSection>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
            One aircraft. One instructor. Every hour logged with intent.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <a href={item.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{item.copy}</p>
                <span className="mt-3 inline-block font-body text-xs font-semibold uppercase tracking-wide text-indigo opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-deep text-cream">
        <StripeDivider />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <Eyebrow tone="cream">Hobbs Running</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-balance sm:text-4xl">
              The meter starts the moment the engine does.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex justify-center">
            <HobbsMeter />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-cream-dim">
              That&apos;s real time, ticking — the same tenths N601NT logs on
              every flight. Yours can start with one email.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex justify-center">
            <Button href="/contact" variant="ghost-dark">Start Your Log &rarr;</Button>
          </Reveal>
        </div>
        <StripeDivider />
      </section>

      <section className="relative overflow-hidden bg-ink-deep text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/aerostar-ramp.jpg"
                alt="N601NT, a 1980 Piper Aerostar 601P, on the ramp"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow tone="cream">N601NT &middot; Piper Aerostar 601P</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              A high-performance, pressurized twin
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-dim">
              Meticulously maintained and personally flown, N601NT delivers
              the speed, comfort, and reliability multi-engine training
              demands.
            </p>
            <div className="mt-8">
              <Button href="/aircraft" variant="ghost-dark">See the Aircraft &rarr;</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-xl">
            <Eyebrow>CFI &middot; CFII &middot; MEI</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              Are you ready to fly?
            </h2>
            <p className="mt-4 text-charcoal/75">
              Tell me your ratings, your goals, and when you&apos;d like to fly.
              I&apos;ll get back to you directly.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/contact" variant="primary" className="whitespace-nowrap">
              Request a Discovery Flight
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
