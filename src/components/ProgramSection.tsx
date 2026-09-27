import Image from "next/image";
import type { ReactNode } from "react";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

type ProgramSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  cta?: { href: string; label: string };
};

export default function ProgramSection({
  id,
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  cta,
}: ProgramSectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
      <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">{title}</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-charcoal/80">{children}</div>
          {cta && (
            <div className="mt-7">
              <Button href={cta.href} variant="ghost">{cta.label}</Button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
