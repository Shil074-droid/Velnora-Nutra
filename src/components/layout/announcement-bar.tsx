import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p>Velnora Nutra is a concept storefront. Product and delivery details are provisional.</p>
      <Link href="/shipping" aria-label="Read demo delivery information"><ArrowRight size={13} /></Link>
    </div>
  );
}
