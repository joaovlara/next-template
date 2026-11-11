import { highlights } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";

export default function Highlights() {
  return (
    <section className="container-1">
      <FadeIn className="carousel">
        {highlights.map(({ title, description, icon: Icon }) => (
          <article key={title} className="highlight-card-item">
            <Icon aria-hidden="true" className="service-card-icon" />
            <h3 className="card-title">{title}</h3>
            <p className="text-sm md:text-base">{description}</p>
          </article>
        ))}
      </FadeIn>
    </section>
  );
}