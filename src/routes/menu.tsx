import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import drinkImg from "@/assets/cafe-drink.jpg";
import bannerImg from "@/assets/brew-lane-banner.jpg";
import imgEspresso from "@/assets/menu-espresso.jpg";
import imgMacchiato from "@/assets/menu-macchiato.jpg";
import imgCortado from "@/assets/menu-cortado.jpg";
import imgFlatWhite from "@/assets/menu-flatwhite.jpg";
import imgCappuccino from "@/assets/menu-cappuccino.jpg";
import imgLatte from "@/assets/menu-latte.jpg";
import imgPourover from "@/assets/menu-pourover.jpg";
import imgChemex from "@/assets/menu-chemex.jpg";
import imgColdbrew from "@/assets/menu-coldbrew.jpg";
import imgNitro from "@/assets/menu-nitro.jpg";
import imgHoney from "@/assets/menu-honey.jpg";
import imgMocha from "@/assets/menu-mocha.jpg";
import imgMaple from "@/assets/menu-maple.jpg";
import imgSourdough from "@/assets/menu-sourdough.jpg";
import imgAvocado from "@/assets/menu-avocado.jpg";
import imgCroissant from "@/assets/menu-croissant.jpg";
import imgMorningbun from "@/assets/menu-morningbun.jpg";
import imgBanana from "@/assets/menu-banana.jpg";

export const Route = createFileRoute("/menu")({
  component: Menu,
  head: () => ({
    meta: [
      { title: "Menu — Brew Lane Coffee, Hyderabad" },
      { name: "description", content: "Espresso, pour-overs, seasonal lattes, sourdough toasts and house-made pastries — see the full Brew Lane menu in Jubilee Hills, Hyderabad." },
      { property: "og:title", content: "Menu — Brew Lane Coffee" },
      { property: "og:image", content: drinkImg },
    ],
  }),
});

type Item = { name: string; desc?: string; price: string; img: string };
type Section = { title: string; eyebrow: string; items: Item[] };

const sections: Section[] = [
  {
    eyebrow: "From the espresso bar",
    title: "Espresso",
    items: [
      { name: "Espresso", desc: "Double shot, house blend", price: "₹180", img: imgEspresso },
      { name: "Macchiato", desc: "Espresso, a spoon of foam", price: "₹200", img: imgMacchiato },
      { name: "Cortado", desc: "Equal parts espresso & warm milk", price: "₹240", img: imgCortado },
      { name: "The Lane Flat White", desc: "Ethiopia Guji, velvet milk", price: "₹260", img: imgFlatWhite },
      { name: "Cappuccino", desc: "Triple shot, dry foam, cocoa dusting", price: "₹260", img: imgCappuccino },
      { name: "Latte", desc: "Choose oat, whole, or almond", price: "₹280", img: imgLatte },
    ],
  },
  {
    eyebrow: "Slow & filtered",
    title: "Brew bar",
    items: [
      { name: "Pour-over", desc: "Rotating single origin · ask the barista", price: "₹350", img: imgPourover },
      { name: "Chemex (for two)", desc: "20 oz, served in a carafe", price: "₹600", img: imgChemex },
      { name: "Cold brew", desc: "Steeped 18 hours, smooth & low-acid", price: "₹290", img: imgColdbrew },
      { name: "Nitro", desc: "Cold brew on tap, cascading foam", price: "₹320", img: imgNitro },
    ],
  },
  {
    eyebrow: "Seasonal",
    title: "This month",
    items: [
      { name: "Honey Cardamom Latte", desc: "Local wildflower honey, fresh-ground cardamom", price: "₹320", img: imgHoney },
      { name: "Brown Butter Mocha", desc: "Single-origin cocoa, browned butter", price: "₹340", img: imgMocha },
      { name: "Maple Oat Cortado", desc: "Grade A dark maple, oat milk", price: "₹300", img: imgMaple },
    ],
  },
  {
    eyebrow: "From the kitchen",
    title: "Food",
    items: [
      { name: "Sourdough toast", desc: "Cultured butter & flaky salt", price: "₹220", img: imgSourdough },
      { name: "Avocado smash", desc: "Lemon, chili crisp, sourdough", price: "₹450", img: imgAvocado },
      { name: "Almond croissant", desc: "Baked daily by Marisol", price: "₹250", img: imgCroissant },
      { name: "Morning bun", desc: "Cinnamon-sugar, orange zest", price: "₹230", img: imgMorningbun },
      { name: "Banana bread", desc: "Brown butter, walnut", price: "₹210", img: imgBanana },
    ],
  },
];

function Menu() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* BRAND BANNER */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={bannerImg}
          alt="Brew Lane Coffee — warm interior with espresso machine in Jubilee Hills, Hyderabad"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/80" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
          <p className="eyebrow !text-background/80">The menu · Jubilee Hills, Hyderabad</p>
          <h1 className="mt-6 font-serif font-light tracking-tight text-background" style={{ fontSize: "clamp(4rem, 14vw, 12rem)", lineHeight: 0.9, letterSpacing: "-0.05em" }}>
            Brew <em className="italic">Lane</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/85">
            Rotating single origins. Pastries pulled from the oven before
            opening. If you don't see it, ask — we'll usually make it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:px-12 md:pt-32">
        <h2 className="display-xl max-w-4xl">
          Small list. <em className="font-light italic">Done well.</em>
        </h2>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-12 md:pb-40">
        <div className="space-y-24 md:space-y-32">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="mb-12 md:mb-16">
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl">{s.title}</h2>
              </div>
              <ul className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {s.items.map((it) => (
                  <li key={it.name} className="group">
                    <div className="aspect-square w-full overflow-hidden bg-secondary">
                      <img
                        src={it.img}
                        alt={it.name}
                        width={768}
                        height={768}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-border pb-3">
                      <h3 className="font-serif text-xl">{it.name}</h3>
                      <span className="font-serif text-base text-accent">{it.price}</span>
                    </div>
                    {it.desc && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:px-12">
          <p className="eyebrow !text-background/60">Take home</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Whole-bean bags, roasted this week.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-background/70">
            250g bags from ₹850. Ask at the counter — we'll grind to your brew
            method, or leave whole.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
