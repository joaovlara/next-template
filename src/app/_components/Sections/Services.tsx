import Link from "next/link";
import { routes, services, servicesHeader } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";
import ServiceCards from "../Cards/ServiceCards";
import HorizontalCarousel from "../Carousels/HorizontalCarousel";

export default function Services() {
  const servicosHref: string =
    routes.find((route) => route.name === "SOLUÇÕES")?.href ?? "/solucoes";

  return (
    <section className="container-1 flex flex-col gap-10">
      <FadeIn className="flex flex-col gap-3">
        <h2>{servicesHeader.h1}</h2>
        <p>{servicesHeader.text}</p>
      </FadeIn>

      <HorizontalCarousel>
        {services.map(({ id, ...service }, index) => (
          <FadeIn key={id} delay={index * 0.08}>
            <ServiceCards {...service} />
          </FadeIn>
        ))}
      </HorizontalCarousel>

      <Link href={servicosHref} className="btn-primary w-fit uppercase">
        Conheça nossas soluções
      </Link>
    </section>
  );
}
