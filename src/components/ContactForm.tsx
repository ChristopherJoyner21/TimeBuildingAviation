"use client";

import { useState, type FormEvent } from "react";

const INTERESTS = [
  "Discovery Flight",
  "Endorsement Training",
  "Ground Instruction",
  "Flight Review / IPC",
  "Scenic Tour",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border border-charcoal/20 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-indigo focus:outline-none";
const labelClass = "eyebrow mb-2 block text-charcoal/60";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-indigo/40 bg-cream-dim p-8" role="status" aria-live="polite">
        <p className="eyebrow text-indigo">Request sent</p>
        <p className="mt-3 text-charcoal/80">
          Thanks — your inquiry is in. I&apos;ll get back to you directly,
          usually within a day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>I&apos;m interested in</label>
          <select id="interest" name="interest" required className={inputClass} defaultValue="">
            <option value="" disabled>Select one</option>
            {INTERESTS.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className={labelClass}>Preferred date</label>
          <input id="preferredDate" name="preferredDate" type="date" className={inputClass} />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelClass}>Preferred time</label>
          <select id="preferredTime" name="preferredTime" className={inputClass} defaultValue="">
            <option value="">No preference</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell me about your goals</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Current ratings, hours, what you're working toward..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-indigo" role="alert">
          Something went wrong sending your request. Please try again, or call
          (407) 620-8895 directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-indigo px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-indigo-bright disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
