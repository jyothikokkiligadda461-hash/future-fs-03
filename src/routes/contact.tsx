import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Visit — Brew Lane Coffee, Jubilee Hills, Hyderabad" },
      { name: "description", content: "Brew Lane Coffee is at Plot 42, Road No. 36, Jubilee Hills, Hyderabad 500033. Open daily 7am – 10pm. Call, WhatsApp, or drop us a note." },
      { property: "og:title", content: "Visit Brew Lane Coffee · Hyderabad" },
    ],
  }),
});

const hours = [
  ["Monday – Friday", "7:00 – 22:00"],
  ["Saturday", "8:00 – 23:00"],
  ["Sunday", "8:00 – 22:00"],
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-40 md:px-12 md:pt-48">
        <p className="eyebrow">Visit · Jubilee Hills, Hyderabad</p>
        <h1 className="display-xl mt-6">
          Find us on <em className="font-light italic">Road No. 36.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-12 md:pb-36">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="space-y-12 md:col-span-5">
            <div>
              <p className="eyebrow">Address</p>
              <p className="mt-4 font-serif text-3xl leading-snug">
                Plot 42, Road No. 36<br />
                Jubilee Hills, Hyderabad<br />
                Telangana 500033
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=Jubilee+Hills+Road+36+Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-foreground pb-0.5 text-sm hover:border-accent hover:text-accent"
                >
                  Open in Maps →
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-foreground pb-0.5 text-sm hover:border-accent hover:text-accent"
                >
                  WhatsApp us →
                </a>
              </div>
            </div>
            <div>
              <p className="eyebrow">Hours</p>
              <dl className="mt-4 space-y-3">
                {hours.map(([d, t]) => (
                  <div key={d} className="flex items-baseline justify-between border-b border-border pb-3">
                    <dt className="text-sm">{d}</dt>
                    <dd className="font-serif text-base text-accent">{t}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="eyebrow">Get in touch</p>
              <p className="mt-4 space-y-2">
                <a href="tel:+914023551234" className="block font-serif text-2xl hover:text-accent">+91 40 2355 1234</a>
                <a href="mailto:hello@brewlane.co.in" className="block font-serif text-2xl hover:text-accent">hello@brewlane.co.in</a>
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="aspect-[4/3] w-full overflow-hidden border border-border bg-secondary">
              <iframe
                title="Map to Brew Lane Coffee, Jubilee Hills, Hyderabad"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.4000%2C17.4200%2C78.4300%2C17.4400&layer=mapnik&marker=17.4300%2C78.4150"
                className="h-full w-full"
                loading="lazy"
              />
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-12 space-y-6"
            >
              <h2 className="font-serif text-3xl">Send us a note</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="eyebrow">Name</span>
                  <input required type="text" className="mt-2 w-full border-b border-foreground/30 bg-transparent py-3 text-foreground outline-none transition focus:border-accent" />
                </label>
                <label className="block">
                  <span className="eyebrow">Email</span>
                  <input required type="email" className="mt-2 w-full border-b border-foreground/30 bg-transparent py-3 text-foreground outline-none transition focus:border-accent" />
                </label>
              </div>
              <label className="block">
                <span className="eyebrow">Message</span>
                <textarea required rows={4} className="mt-2 w-full resize-none border-b border-foreground/30 bg-transparent py-3 text-foreground outline-none transition focus:border-accent" />
              </label>
              <button
                type="submit"
                className="rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition hover:bg-accent"
                disabled={sent}
              >
                {sent ? "Thanks — we'll be in touch" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
