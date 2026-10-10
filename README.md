# Velnora Nutra

A premium international nutraceutical ecommerce demo built with Next.js (App Router),
React, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide icons.

> This project is a design/ecommerce demo. Product copy is illustrative and no
> medical claims are intended.

## Requirements

- Node.js 20.9+ (Node 22 recommended)
- npm 10+

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the development server (http://localhost:3000)
```

## Production

```bash
npm run build    # create a production build
npm start        # serve the production build
```

## Quality checks

```bash
npm run lint       # ESLint (flat config, eslint-config-next)
npm run typecheck  # TypeScript type check (tsc --noEmit)
npm run build      # also type-checks and validates routes
```

## Stack

| Layer        | Choice                                             |
| ------------ | -------------------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack)                 |
| UI           | React 19 + TypeScript 5                            |
| Styling      | Tailwind CSS v4 (CSS-first config in `globals.css`)|
| Animation    | Framer Motion                                      |
| Icons        | Lucide React                                       |
| Linting      | ESLint 9 + `eslint-config-next`                    |

## Project structure

```
src/
  app/                    # App Router routes, metadata, and global styles
    layout.tsx            # Root layout: fonts, metadata, cart provider, header/footer
    page.tsx              # Editorial homepage
    globals.css           # Design tokens (Tailwind v4 @theme) + base styles
    collections/          # Collection and category routes with filters and sorting
    products/              # Product detail routes
    cart/ checkout/        # Persistent cart and no-payment checkout explanation
    journal/ our-story/    # Educational notes and story placeholder
    our-approach/ shipping/ contact/ privacy/ terms/ search/
  components/
    ui/                   # Reusable primitives (Button, Badge, Input, QuantityStepper, Section)
    product/              # Product cards, provisional pack art, collection browser, purchase controls
    layout/               # Header, footer, announcement, newsletter, cart drawer
  lib/
    types.ts              # Domain types (Product, CartItem, etc.)
    utils.ts              # cn, formatPrice, and other small helpers
    fonts.ts              # Editorial serif + clean sans pairing
    data/                 # Sample catalogue: products, categories
    cart/cart-context.tsx # Client-side cart store (localStorage persisted)
  hooks/                  # Shared React hooks
public/                   # Static assets
```

## Design foundation

The visual direction is expressed as design tokens in `src/app/globals.css`
using Tailwind v4's CSS-first `@theme` block. Change a token value there to
re-skin the entire site.

**Core palette**

- Warm mineral ivory `#F5F2EA` — page background (`bg-ivory`)
- Deep botanical green `#243B2F` — primary (`bg-forest`)
- Muted sage `#A9B4A0` — secondary (`bg-sage`)
- Dark charcoal `#252722` — body text (`text-charcoal`)
- Soft stone `#E5E0D5` — surfaces/dividers (`bg-stone`)

Plus restrained supporting colours (`cream`, `mist`, `line`, `gold`, `danger`)
and interaction tints/shades (`forest-deep`, `forest-soft`, `sage-tint`,
`sage-deep`).

**Typography**: DM Serif Display paired with DM Sans, loaded via `next/font` in `src/lib/fonts.ts` and exposed through the
`--font-serif` / `--font-sans` tokens.

**Layout tokens** — responsive container widths (`max-w-content`,
`max-w-wide`, `max-w-prose`) and fluid gutters (`px-gutter`).

## Cart

Cart state lives in `src/lib/cart/cart-context.tsx` as a client-side store
backed by `useReducer`. It persists to `localStorage` (key `velnora:cart`) and
hydrates after mount so server and client renders always agree. Use the
`useCart()` hook anywhere inside the provider to read and mutate the cart.

## Notes

- Fonts are fetched at build time by `next/font/google`; a network connection
  is required on first build.
- Product names, sample ingredients, serving counts, and prices are provisional. Confirm all product facts with the client before publication.
- Packaging art is a provisional CSS-rendered concept. The plant and amber-bottle editorial images in `public/` are temporary Unsplash mood imagery, not client product photography or product claims.
- The cart persists in this browser only. Checkout does not place orders or accept payment details. Shipping, inventory, duties, taxes, and destination-market availability are not configured.
- The newsletter validates an email locally but does not submit or retain it. No environment variables are required for the demo.
- The storefront sets `noindex` and `nofollow`; review this before production deployment.
