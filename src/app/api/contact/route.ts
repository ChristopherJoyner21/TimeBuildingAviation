import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS: Record<string, number> = {
  name: 120,
  email: 254,
  phone: 40,
  interest: 60,
  preferredDate: 20,
  preferredTime: 20,
  message: 4000,
};

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a hidden field real visitors never fill in. Bots that
  // auto-fill every field trip it; we quietly report success without
  // sending anything.
  if (clean((body as Record<string, unknown>).company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean((body as Record<string, unknown>).name, MAX_LENGTHS.name);
  const email = clean((body as Record<string, unknown>).email, MAX_LENGTHS.email);
  const phone = clean((body as Record<string, unknown>).phone, MAX_LENGTHS.phone);
  const interest = clean((body as Record<string, unknown>).interest, MAX_LENGTHS.interest);
  const preferredDate = clean((body as Record<string, unknown>).preferredDate, MAX_LENGTHS.preferredDate);
  const preferredTime = clean((body as Record<string, unknown>).preferredTime, MAX_LENGTHS.preferredTime);
  const message = clean((body as Record<string, unknown>).message, MAX_LENGTHS.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const inquiry = { name, email, phone, interest, preferredDate, preferredTime, message };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not yet configured — logs the inquiry so nothing is silently lost
    // during setup, but this must be wired to RESEND_API_KEY (see
    // README) before launch or every inquiry below is lost for real.
    console.warn("[contact] RESEND_API_KEY is not set — inquiry logged only, not emailed:", inquiry);
    return NextResponse.json({ ok: true });
  }

  const to = process.env.CONTACT_TO_EMAIL || BUSINESS.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Time Building Aviation <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New inquiry from ${name}${interest ? ` — ${interest}` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone && `Phone: ${phone}`,
          interest && `Interested in: ${interest}`,
          preferredDate && `Preferred date: ${preferredDate}`,
          preferredTime && `Preferred time: ${preferredTime}`,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] Resend API error:", res.status, detail);
      return NextResponse.json({ error: "Could not send your request." }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Failed to reach Resend:", err);
    return NextResponse.json({ error: "Could not send your request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
