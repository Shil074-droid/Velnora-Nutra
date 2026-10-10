"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

import { CartButton } from "@/components/layout/cart-button";
import { CartDrawerContent } from "@/components/layout/cart-drawer";
import { Container } from "@/components/ui/section";

const links = [
  { href: "/collections", label: "Shop" },
  { href: "/our-approach", label: "Our approach" },
  { href: "/our-story", label: "Our story" },
  { href: "/journal", label: "Journal" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <Container className="header-inner">
          <button
            type="button"
            className="icon-button mobile-menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/" className="wordmark" aria-label="Velnora Nutra home">
            <span>Velnora</span><span className="wordmark-second">Nutra</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
          <div className="header-actions">
            <form action="/search" className="header-search" role="search">
              <label className="sr-only" htmlFor="site-search">Search products</label>
              <input id="site-search" name="q" type="search" placeholder="Search" />
              <button type="submit" aria-label="Search"><Search size={17} /></button>
            </form>
            <CartButton onClick={() => setCartOpen(true)} />
          </div>
        </Container>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Container>{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>)}
              <form action="/search" role="search"><label className="sr-only" htmlFor="mobile-site-search">Search products</label><input id="mobile-site-search" name="q" placeholder="Search the collection" /><button type="submit" aria-label="Search"><Search size={17} /></button></form>
            </Container>
          </nav>
        )}
      </header>
      <CartDrawerContent isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
