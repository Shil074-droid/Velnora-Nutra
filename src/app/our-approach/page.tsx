import Link from "next/link";
import { Container } from "@/components/ui/section";

export const metadata = { title: "Our approach" };

export default function ApproachPage() {
  return <Container className="simple-page approach-page"><p className="eyebrow">How we think</p><h1>Clarity belongs on the label.</h1><p className="simple-lede">A thoughtful product page should make the useful details visible, and the unverified details unmistakable.</p><div className="approach-details"><section><span>01</span><div><h2>Ingredients, named</h2><p>List each ingredient in its complete form. Amounts, excipients, allergens, and serving context need review against the approved label.</p></div></section><section><span>02</span><div><h2>Evidence, in context</h2><p>Any product-specific benefit or quality statement needs substantiation and market review. This demo makes no clinical, testing, sourcing, or certification claims.</p></div></section><section><span>03</span><div><h2>Details, without guesswork</h2><p>Directions, warnings, storage, origin, and manufacturing information remain placeholders until supplied and approved by Velnora Nutra.</p></div></section></div><p className="provisional-note">The standards and product content shown here are a demonstration framework, not an account of verified company practices.</p><Link href="/collections" className="button-dark">Explore the demo collection</Link></Container>;
}
