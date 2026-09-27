import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import StripeDivider from "@/components/StripeDivider";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-ink-deep px-6 text-center text-cream">
      <Eyebrow tone="cream">404</Eyebrow>
      <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
        This runway doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-cream-dim">
        The page you&apos;re looking for isn&apos;t here. Head back to the
        runway and try again.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary">Back to Home</Button>
        <Button href="/contact" variant="ghost-dark">Contact Us</Button>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <StripeDivider />
      </div>
    </section>
  );
}
