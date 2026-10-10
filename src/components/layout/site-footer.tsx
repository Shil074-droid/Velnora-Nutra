import Link from "next/link";

import { Container } from "@/components/ui/section";
import { categories } from "@/lib/data/categories";

const shopLinks = categories.slice(0, 4).map((c) => ({
  href: `/collections/${c.slug}`,
  label: c.name,
}));

const companyLinks = [
  { href: "/our-story", label: "Our story" },
  { href: "/our-approach", label: "Our approach" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const supportLinks = [
  { href: "/shipping", label: "Shipping" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[0.6875rem] font-semibold uppercase text-charcoal/50">
        {heading}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-charcoal/70 transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Site-wide footer with navigation columns and brand note. */
export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-line bg-mist">
      <Container className="py-16">
        <div className="footer-grid grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="footer-brand flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-charcoal"
            >
              <span className="font-serif text-xl">
                Velnora <span className="text-forest">Nutra</span>
              </span>
            </Link>
            <p className="footer-brand-copy max-w-xs text-sm leading-relaxed text-charcoal/60">
              Thoughtful nutrition, presented with ingredient clarity. This
              storefront uses provisional demo products and content.
            </p>
          </div>

          <LinkColumn heading="Shop" links={shopLinks} />
          <LinkColumn heading="Company" links={companyLinks} />
          <LinkColumn heading="Support" links={supportLinks} />
        </div>

        <div className="footer-bottom mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-charcoal/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Velnora Nutra. All rights reserved.</p>
          <p className="max-w-md sm:text-right">
            Product details and prices are illustrative. No products are sold,
            no health claims are made, and no payment is processed here.
          </p>
        </div>
      </Container>
    </footer>
  );
}
