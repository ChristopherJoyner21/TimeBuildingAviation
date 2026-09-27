"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Eyebrow from "./Eyebrow";
import type { ReactNode } from "react";

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  image?: string;
  video?: string;
  imageAlt?: string;
  height?: "full" | "tall" | "medium";
  cta?: ReactNode;
  subtitleClassName?: string;
};

const heightClass: Record<string, string> = {
  full: "min-h-[88vh]",
  tall: "min-h-[82vh]",
  medium: "min-h-[52vh]",
};

export default function HeroSection({
  eyebrow,
  title,
  children,
  image,
  video,
  imageAlt = "",
  height = "tall",
  cta,
  subtitleClassName = "text-lg",
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video || !videoRef.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      videoRef.current.pause();
    }
  }, [video]);

  return (
    <section
      className={`relative flex ${heightClass[height]} flex-col justify-end overflow-hidden bg-ink-deep text-cream`}
    >
      {video && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={image}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      {!video && image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/50 to-ink-deep/10" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
        {eyebrow && <Eyebrow tone="cream">{eyebrow}</Eyebrow>}
        <h1 className={`max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl lg:text-6xl ${eyebrow ? "mt-4" : ""}`}>
          {title}
        </h1>
        {children && <p className={`mt-6 max-w-2xl leading-relaxed text-cream-dim ${subtitleClassName}`}>{children}</p>}
        {cta && <div className="mt-9 flex flex-wrap gap-4">{cta}</div>}
      </div>
      <div className="stripe-rule relative" />
    </section>
  );
}
