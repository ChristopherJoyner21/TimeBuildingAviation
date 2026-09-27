"use client";

import { useEffect, useRef, useState } from "react";

type LoopingVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export default function LoopingVideo({ src, poster, className = "" }: LoopingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;
    const el = videoRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    // The <source> child is added dynamically once shouldLoad flips, and
    // browsers don't rescan for new sources without an explicit load().
    el.load();
    el.play().catch(() => {});

    // Chrome pauses muted, video-only autoplay as a power-saving measure
    // when the tab is hidden/unfocused. Resume the loop when it's visible
    // again so it behaves like a continuous background loop.
    const resume = () => {
      if (document.visibilityState === "visible") el.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", resume);
    return () => document.removeEventListener("visibilitychange", resume);
  }, [shouldLoad]);

  // The `muted` prop on <video> only reliably applies on first paint --
  // browsers don't always re-sync it from later React re-renders, so it
  // has to be set imperatively on the element itself.
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        muted={muted}
        loop
        playsInline
        poster={poster}
        preload={shouldLoad ? "auto" : "none"}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
      </video>
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink-deep/70 text-cream backdrop-blur-sm transition-colors hover:bg-ink-deep"
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" strokeLinejoin="round" />
            <line x1="23" y1="9" x2="17" y2="15" strokeLinecap="round" />
            <line x1="17" y1="9" x2="23" y2="15" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" strokeLinejoin="round" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" strokeLinecap="round" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
