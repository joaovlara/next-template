import Link from "next/link";
import { routes, services, servicesHeader } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";

export default function Services() {
  const servicosHref: string =
    routes.find((route) => route.name === "SOLUÇÕES")?.href ?? "/solucoes";

  return (
    <section className="container-1 flex flex-col gap-10">
      <FadeIn className="flex flex-col gap-3">
        <h2>{servicesHeader.h1}</h2>
        <p>{servicesHeader.text}</p>
      </FadeIn>

      <div className="cards-grid">
        {services.map(({ id, title, description, icon: Icon }, index) => (
          <FadeIn key={id} delay={index * 0.08}>
            <article className="service-card">
              <header className="service-card-header">
                <Icon aria-hidden="true" className="service-card-icon" />
                <h3 className="service-card-title">{title}</h3>
              </header>
              <p className="service-card-description">{description}</p>
            </article>
          </FadeIn>
        ))}
      </div>

      <Link href={servicosHref} className="btn-primary w-fit uppercase">
        Conheça nossas soluções
      </Link>
    </section>
  );
}