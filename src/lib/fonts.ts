import { DM_Sans, DM_Serif_Display } from "next/font/google";

/**
 * Editorial serif paired with a clean sans serif.
 * The CSS variables are consumed by the `--font-serif` / `--font-sans`
 * tokens in `globals.css`, so swapping the typefaces here re-skins the
 * whole site.
 */

export const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const fontVariables = `${dmSerif.variable} ${dmSans.variable}`;