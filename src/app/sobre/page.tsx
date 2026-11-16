import FadeIn from "../_components/Animations/FadeIn";
import HeaderPage from "../_components/HeaderPage";
import CTA from "../_components/Sections/CTA";
import Testimonials from "../_components/Sections/Testimonials";
import { aboutHeader, values } from "../_data/data";

export default function Sobre() {
  return (
    <main>
      <HeaderPage pageName={aboutHeader.h1} subtitle={aboutHeader.text} />

      <section className="about-company-section container-1">
        <FadeIn className="about-company-heading">
          <p className="section-eyebrow">Nossa empresa</p>
          <h2>Experiência para construir relações mais sólidas.</h2>
        </FadeIn>
      </section>

      <section className="values-section">
        <div className="container-1">
          <div className="values-layout">
            <FadeIn className="values-heading">
              <p className="section-eyebrow">O que nos guia</p>
              <h2>{values.title}</h2>
            </FadeIn>

            <div className="values-grid">
              {values.items.map(({ title, description, icon: Icon }) => (
                <FadeIn key={title} className="value-card">
                  <span className="value-icon-wrapper">
                    <Icon aria-hidden="true" className="value-icon" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </main>
  );
}