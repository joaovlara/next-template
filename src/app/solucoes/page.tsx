import HeaderPage from "../_components/HeaderPage";
import ServiceCards from "../_components/Cards/ServiceCards";
import CTA from "../_components/Sections/CTA";
import FadeIn from "../_components/Animations/FadeIn";
import { services, servicesHeader } from "../_data/data";

export default function Solucoes() {
  return (
    <main>
      <HeaderPage
        pageName={servicesHeader.h1}
        subtitle={servicesHeader.text}
      />

      <section className="solutions-section container-1">
        <FadeIn className="solutions-heading">
          <p className="section-eyebrow">Nossas soluções</p>
          <h2>Serviços para uma gestão mais segura e eficiente.</h2>
        </FadeIn>

        <div className="solutions-grid">
          {services.map(({ id, ...service }, index) => (
            <FadeIn key={id} delay={index * 0.08}>
              <ServiceCards {...service} />
            </FadeIn>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}