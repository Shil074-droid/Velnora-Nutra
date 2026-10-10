import Link from "next/link";
import { Container } from "@/components/ui/section";

export const metadata = { title: "Demo checkout" };

export default function CheckoutPage() {
  return (
    <Container className="simple-page checkout-page">
      <p className="eyebrow">Demonstration only</p>
      <h1>No payment is being taken.</h1>
      <p>This storefront has no payment provider, inventory service, tax calculation, or order processing connected. No payment details are requested or collected.</p>
      <p>Before launch, confirm product availability and labels by destination, then connect an approved commerce platform and payment provider.</p>
      <div className="page-actions"><Link className="button-dark" href="/collections">Continue browsing</Link><Link className="text-link" href="/cart">Return to your cart</Link></div>
    </Container>
  );
}
