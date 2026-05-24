import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-12">
        <div className="md:col-span-2">
          <h3 className="font-serif text-4xl">Brew Lane Coffee</h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
            A neighborhood roastery and café in Jubilee Hills, Hyderabad —
            serving slow mornings and good conversation since 2014.
          </p>
        </div>
        <div>
          <p className="eyebrow !text-background/50">Visit</p>
          <p className="mt-3 text-sm leading-relaxed text-background/80">
            Plot 42, Road No. 36<br />
            Jubilee Hills, Hyderabad<br />
            Telangana 500033<br />
            Open daily · 7am – 10pm
          </p>
        </div>
        <div>
          <p className="eyebrow !text-background/50">Reach us</p>
          <p className="mt-3 text-sm leading-relaxed text-background/80">
            <a href="tel:+914023551234" className="block hover:text-accent">+91 40 2355 1234</a>
            <a href="https://wa.me/919876543210" className="block hover:text-accent">WhatsApp · +91 98765 43210</a>
            <a href="mailto:hello@brewlane.co.in" className="block hover:text-accent">hello@brewlane.co.in</a>
            <a href="https://instagram.com" className="block hover:text-accent">@brewlanehyd</a>
          </p>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-background/50 md:flex-row md:px-12">
          <p>© {new Date().getFullYear()} Brew Lane Coffee Co. · Hyderabad</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-accent">Contact</Link>
            <Link to="/menu" className="hover:text-accent">Menu</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
