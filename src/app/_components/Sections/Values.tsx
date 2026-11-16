import { values } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";

export default function Values() {
  return (
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
  );
}
