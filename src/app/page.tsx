import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/product/product-card";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { Container, Section } from "@/components/ui/section";
import { featuredProducts } from "@/lib/data/products";

const journalItems = [
  {
    number: "01",
    id: "serving-size",
    category: "A clearer label",
    title: "What a serving size can, and cannot, tell you",
    description:
      "A useful way to read the numbers on a supplement facts panel before you buy.",
  },
  {
    number: "02",
    id: "ingredient-forms",
    category: "Ingredient notes",
    title: "One ingredient, many forms",
    description:
      "Why the form of a nutrient belongs beside its name on the label.",
  },
  {
    number: "03",
    id: "storage",
    category: "Everyday practice",
    title: "A thoughtful guide to storage",
    description:
      "Heat, light, moisture, and the small print on the bottle.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-wrap">
        <div className="hero-frame">
          <Image
            src="/botanical-detail.jpg"
            alt="Sunlit green leaves against a quiet pale backdrop"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 56vw"
            className="hero-photo"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Thoughtful nutrition, in plain view</p>
            <h1>Nothing important<br />left unclear.</h1>
            <p className="hero-description">
              A considered collection of nutritional formulas, made to put the
              ingredient list first.
            </p>
            <div className="hero-actions">
              <Link href="/collections" className="button-light">
                Explore the collection <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/our-approach" className="text-link-light">
                Our approach
              </Link>
            </div>
          </div>
          <div className="hero-caption">
            <span>01 / 04</span>
            <span>Nature, understood. Nutrition, considered.</span>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>V</span>
          <span>01</span>
        </div>
      </section>

      <Section className="intro-section">
        <div className="intro-index eyebrow">A point of view <span>01 / 03</span></div>
        <div className="intro-content">
          <h2>Good decisions begin with good information.</h2>
          <div className="intro-aside">
            <p>
              Nutrition can be personal without being mysterious. We believe
              every formula should make its ingredients, amounts, and intended
              use easy to understand.
            </p>
            <Link href="/our-approach" className="arrow-link">
              Read how we think <ArrowDownRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      <section className="product-section">
        <Container>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">The collection / illustrative products</p>
              <h2>Start with what matters to you.</h2>
            </div>
            <Link className="arrow-link desktop-link" href="/collections">
              View all formulas <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="provisional-note">
            Demo catalogue. Product names, ingredients, serving details, and
            prices are provisional and require client approval.
          </p>
          <div className="product-grid">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link className="arrow-link mobile-link" href="/collections">
            View all formulas <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Container>
      </section>

      <section className="ingredient-section">
        <div className="ingredient-image">
          <Image
            src="/ritual-still-life.jpg"
            alt="Amber glass bottle in natural afternoon light, used as editorial mood photography"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <span className="image-credit">Editorial mood image, not product packaging</span>
        </div>
        <div className="ingredient-copy">
          <p className="eyebrow">A better kind of detail</p>
          <h2>Know what is in the formula. And what is not yet known.</h2>
          <p>
            Ingredient names are only a beginning. Useful product information
            should also make room for amounts, format, directions, and the
            details a brand still needs to confirm.
          </p>
          <Link href="/collections" className="arrow-link">
            Browse the demo collection <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <span className="ingredient-index">FIELD NOTE&nbsp;&nbsp; / &nbsp;&nbsp;02</span>
        </div>
      </section>

      <Section className="standards-section">
        <div className="standards-lead">
          <p className="eyebrow">The Velnora approach</p>
          <h2>Clarity is a standard, not a flourish.</h2>
          <p>
            This demo sets out the information a finished product page should
            contain. The brand’s real sourcing, manufacturing, and quality
            practices must be confirmed before publication.
          </p>
          <Link href="/our-approach" className="arrow-link">
            See the information framework <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ol className="standards-list">
          <li><span>01</span><div><h3>Show the full composition</h3><p>Names, forms, and amounts belong together.</p></div></li>
          <li><span>02</span><div><h3>Explain the practical details</h3><p>Serving, storage, and warnings should be easy to find.</p></div></li>
          <li><span>03</span><div><h3>Say what is still being verified</h3><p>Specific sourcing and quality information needs evidence.</p></div></li>
        </ol>
      </Section>

      <section className="story-band">
        <Container className="story-inner">
          <p className="eyebrow">A note on our story</p>
          <h2>Every brand has an origin.<br /><em>Ours is still yours to tell.</em></h2>
          <p>
            Founder, history, and company details have not been supplied. This
            space is intentionally reserved for the real Velnora Nutra story.
          </p>
          <Link href="/our-story" className="text-link-light">
            About this space <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Container>
      </section>

      <Section className="journal-section">
        <div className="section-heading-row journal-heading">
          <div>
            <p className="eyebrow">Notes for curious people</p>
            <h2>Read the small print with confidence.</h2>
          </div>
          <Link className="arrow-link desktop-link" href="/journal">
            Visit the journal <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="journal-list">
          {journalItems.map((item) => (
            <Link key={item.number} href={`/journal#${item.id}`} className="journal-row">
              <span className="journal-number">{item.number}</span>
              <div><span className="eyebrow">{item.category}</span><h3>{item.title}</h3></div>
              <p>{item.description}</p>
              <ArrowDownRight size={19} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Section>

      <section className="newsletter-section">
        <Container className="newsletter-inner">
          <div><p className="eyebrow">The occasional note</p><h2>More clarity, in your inbox.</h2></div>
          <NewsletterForm />
        </Container>
      </section>
    </>
  );
}
