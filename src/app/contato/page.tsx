import HeaderPage from "../_components/HeaderPage";
import FadeIn from "../_components/Animations/FadeIn";
import Image from "next/image";
import { contato, contactHeader } from "../_data/data";

export default function Contato() {
  return (
    <main className="contact-page">
      <HeaderPage
        pageName={contactHeader.title}
        subtitle={contactHeader.text}
      />

      <section className="contact-feature">
        <FadeIn className="contact-feature-content">
          <p className="section-eyebrow">Fale conosco</p>
          <h2>Estamos prontos para ajudar.</h2>
        </FadeIn>
        <div className="contact-feature-image">
          <Image
            src="/images/office-charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
            alt="Equipe reunida em um ambiente de trabalho"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="contact-section container-1">
        <FadeIn className="contact-heading">
          <p className="section-eyebrow">Informações de contato</p>
          <h2>Entre em contato</h2>
        </FadeIn>

        <div className="contact-grid">
          {contato.map(({ icon: Icon, name, value, url }) => (
            <FadeIn key={name} className="contact-card">
              <Icon aria-hidden="true" className="contact-icon" />
              <h3>{name}</h3>
              <a
                href={url}
                target={name === "Endereço" || name === "Nome" ? "_blank" : undefined}
                rel={name === "Endereço" || name === "Nome" ? "noopener noreferrer" : undefined}
                className="contact-card-link"
              >
                {value}
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}