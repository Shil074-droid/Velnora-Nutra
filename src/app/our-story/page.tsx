import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/section";

export const metadata = { title: "Our story" };

export default function StoryPage() {
  return <Container className="story-page simple-page"><div className="story-image"><Image src="/botanical-detail.jpg" alt="A sunlit botanical detail used as provisional brand mood imagery" fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div><p className="eyebrow">Our story / to be completed</p><h1>A place for the real beginning.</h1><p className="simple-lede">The founder, origin, and history of Velnora Nutra have not been supplied.</p><p>This page is intentionally a structure for the client’s actual story. It does not invent a founder, a farm, a research history, or a company mission. Replace this note with approved details before launch.</p><Link href="/our-approach" className="arrow-link">Read our approach <span aria-hidden="true">→</span></Link></div></Container>;
}
