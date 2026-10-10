import Link from "next/link";
import { Container } from "@/components/ui/section";

export const metadata = { title: "Journal" };

const articles = [
  { id: "serving-size", number: "01", title: "What a serving size can, and cannot, tell you", body: "A serving size is the amount used to present the information on a product label. It is not, by itself, a recommendation for every person. Compare the listed amount with the ingredient quantity, directions, and warnings, and follow the finished product label." },
  { id: "ingredient-forms", number: "02", title: "One ingredient, many forms", body: "Nutrient names do not always tell the whole story. Different forms can have different amounts, uses, and label conventions. Check the complete ingredient name and quantity, and ask a qualified professional when a product choice relates to your health." },
  { id: "storage", number: "03", title: "A thoughtful guide to storage", body: "Follow the storage conditions printed on the approved product label. Heat, light, and moisture can affect some products, but instructions vary by formulation. Keep products away from children and do not use a product past its stated date." },
];

export default function JournalPage() {
  return <Container className="journal-page simple-page"><p className="eyebrow">Notes for curious people</p><h1>Read the small print with confidence.</h1><p className="simple-lede">Practical, general information about understanding product labels. This is educational content, not medical advice.</p><div className="journal-articles">{articles.map((article) => <article id={article.id} key={article.id}><span className="journal-number">{article.number}</span><div><p className="eyebrow">Reading notes</p><h2>{article.title}</h2><p>{article.body}</p></div></article>)}</div><p className="provisional-note">These articles are general demo copy. Product-specific instructions and regulatory wording require expert review.</p><Link href="/collections" className="arrow-link">Browse the demo collection <span aria-hidden="true">→</span></Link></Container>;
}
