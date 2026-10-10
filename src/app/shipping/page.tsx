import Link from "next/link";
import { Container } from "@/components/ui/section";

export const metadata = { title: "Delivery information" };

export default function ShippingPage() {
  return <Container className="simple-page"><p className="eyebrow">Delivery / information pending</p><h1>Market availability needs confirmation.</h1><p className="simple-lede">This demo does not ship products. No delivery regions, carrier, delivery estimate, duties, taxes, or return policy have been confirmed.</p><div className="approach-details"><section><span>01</span><div><h2>Destination rules</h2><p>Before launch, confirm formulation and label requirements, import restrictions, and product availability for each destination market.</p></div></section><section><span>02</span><div><h2>Delivery and costs</h2><p>Shipping service, delivery times, costs, taxes, and duties require a real fulfilment and commerce configuration.</p></div></section><section><span>03</span><div><h2>Returns and support</h2><p>Return conditions and customer support contact details must be supplied by the business.</p></div></section></div><Link href="/collections" className="button-dark">Return to the demo collection</Link></Container>;
}
