import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import baristaImg from "@/assets/cafe-barista.jpg";
import heroImg from "@/assets/cafe-hero.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "Our story — Brew Lane Coffee" },
      { name: "description", content: "How a tiny espresso cart on Lane Street grew into a neighborhood roastery — and why we still do it by hand." },
      { property: "og:title", content: "Our story — Brew Lane Coffee" },
      { property: "og:image", content: baristaImg },
    ],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-40 md:px-12 md:pt-48">
        <p className="eyebrow">Our story</p>
        <h1 className="display-xl mt-6 max-w-5xl">
          Ten years on the <em className="font-light italic">same corner.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <img
          src={heroImg}
          alt="Inside Brew Lane on a sunlit morning"
          width={1920}
          height={1080}
          loading="lazy"
          className="aspect-[21/9] w-full object-cover"
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-28 md:py-36">
        <div className="space-y-8 font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
          <p>
            In 2014, Mara and Theo wheeled a converted bicycle cart onto a
            quiet corner of Road No. 36 in Jubilee Hills with a single
            espresso machine and a handwritten sign that said <em>"a hundred
            rupees, one smile."</em>
          </p>
          <p>
            A year later, the cart had a roof. A year after that, walls. And
            in 2019, a roaster down the lane — because we kept running out of
            coffee that tasted like us.
          </p>
          <p>
            Ten years in, the menu's a little longer and the chairs match.
            But the corner's still the same, and so is the rule: every cup,
            by hand, by a person who knows your name.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12">
          <div className="md:col-span-5">
            <img
              src={baristaImg}
              alt="Elena, head barista"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pt-12">
            <p className="eyebrow">The team</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Twelve people. One bar. A lot of practice.
            </h2>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Mara still roasts every Tuesday. Theo runs the bakery — sourdough
              the day before, pastries before sunrise. Elena leads the espresso
              bar, with a crew of nine baristas who all know what "the usual"
              means for at least fifty regulars each.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {[
                ["10", "Years on the corner"],
                ["12", "On the team"],
                ["3.2k", "Bags roasted last year"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-serif text-4xl text-accent md:text-5xl">{n}</dt>
                  <dd className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
