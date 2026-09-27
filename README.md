Marketing site for Time Building Aviation, LLC — built with [Next.js](https://nextjs.org).

## Before launch

1. **Contact form email.** The form at `/contact` posts to `src/app/api/contact/route.ts`. Without `RESEND_API_KEY` set, submissions are only logged to the server console — they are NOT emailed anywhere. Sign up at [resend.com](https://resend.com), verify a sending domain, and set:
   - `RESEND_API_KEY` — required
   - `CONTACT_TO_EMAIL` — optional, defaults to AlexanderJoyner@TimeBuildingAviation.com
   - `CONTACT_FROM_EMAIL` — optional, defaults to Resend's shared sandbox sender (fine for testing, not for production — use an address on your verified domain)

   See `.env.example`.

2. **Production domain.** `SITE_URL` in `src/lib/site.ts` is set to `https://timebuildingaviation.com`. Update it if the final domain differs — it feeds the sitemap, robots.txt, canonical URLs, and Open Graph tags.

3. **Analytics.** No analytics are wired up yet. Consider adding Vercel Analytics, Plausible, or GA4 before launch to track traffic and conversions.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
