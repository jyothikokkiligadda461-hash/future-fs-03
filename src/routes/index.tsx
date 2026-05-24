import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/cafe-hero.jpg";
import drinkImg from "@/assets/cafe-drink.jpg";
import baristaImg from "@/assets/cafe-barista.jpg";
import interiorImg from "@/assets/cafe-interior.jpg";
import quoteImg from "@/assets/cafe-quote.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Brew Lane Coffee — Neighborhood roastery in Jubilee Hills, Hyderabad" },
      { name: "description", content: "Slow mornings, single-origin espresso, and warm sourdough — Brew Lane is a small-batch roastery and café in Jubilee Hills, Hyderabad." },
      { property: "og:title", content: "Brew Lane Coffee · Hyderabad" },
      { property: "og:description", content: "A neighborhood café and roastery in Jubilee Hills, Hyderabad." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="Barista pouring latte art at Brew Lane Coffee"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-foreground/30" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-12 md:pb-28">
          <p className="eyebrow !text-background/80">Jubilee Hills, Hyderabad · since 2014</p>
          <h1 className="display-xl mt-6 max-w-5xl text-background">
            Slow coffee,<br />
            <em className="font-light italic text-background/90">honest mornings.</em>
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/menu"
              className="rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              See the menu
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-background/60 px-7 py-3.5 text-sm font-medium text-background transition hover:bg-background/10"
            >
              Find us →
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <img
              src={interiorImg}
              alt="Inside Brew Lane — warm wooden tables, Edison bulbs, plants"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow">A small place in Jubilee Hills</p>
            <p className="mt-6 font-serif text-3xl leading-tight text-foreground md:text-5xl">
              We roast our beans three blocks away, pour them with care, and
              pair them with sourdough still warm from the oven. No rush, no
              fuss — just the kind of café you'd want on your corner of
              Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED GRID */}
      <section className="bg-secondary py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div className="space-y-6">
              <img
                src={drinkImg}
                alt="Flat white with latte art and an almond croissant"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl">The Lane Flat White</h3>
                <span className="text-sm text-muted-foreground">₹260</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our house espresso — Ethiopia Guji — with velvet whole milk.
                Soft cocoa, dried citrus, brown sugar finish.
              </p>
            </div>
            <div className="space-y-6 md:pt-32">
              <img
                src={baristaImg}
                alt="Smiling barista behind the counter at Brew Lane"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl">Meet Elena</h3>
                <span className="text-sm text-muted-foreground">Head Barista</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Eight years behind the bar and the woman who'll remember your
                order on day two. Ask her about the single-origin pour-overs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-36">
        <p className="eyebrow">What we care about</p>
        <div className="mt-12 grid gap-x-12 gap-y-16 md:grid-cols-3">
          {[
            { n: "01", t: "Roasted weekly", d: "Small batches from our roaster on Pine. Beans never sit longer than seven days." },
            { n: "02", t: "Sourced direct", d: "Long-term relationships with farms in Ethiopia, Colombia, and Guatemala." },
            { n: "03", t: "Made by hand", d: "Sourdough, pastries, and seasonal syrups baked and stirred in-house every morning." },
          ].map((v) => (
            <div key={v.n} className="border-t border-border pt-6">
              <span className="font-serif text-sm text-accent">{v.n}</span>
              <h3 className="mt-4 font-serif text-2xl">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative overflow-hidden bg-accent text-accent-foreground">
        <img
          src={quoteImg}
          alt="Friends enjoying coffee at Brew Lane in Hyderabad"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center md:px-12 md:py-40">
          <p className="font-serif text-3xl italic leading-snug md:text-5xl">
            "The kind of café where you arrive for a coffee and leave three
            hours later with a new friend and a bag of beans."
          </p>
          <p className="mt-8 text-sm tracking-widest uppercase">
            — Hyderabad Weekly
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="display-xl">Come sit a while.</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We open at 7. The pastries are best before 10. The window seat is
              first‑come, first‑served — but worth it.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm font-medium text-foreground transition hover:gap-5 hover:border-accent hover:text-accent"
            >
              Get directions <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
