import { hero } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";
import HighlightText from "../HighlightText";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background" aria-hidden="true" />

      <FadeIn className="hero-content container">
        <div className="hero-card">
          <h1>
            <HighlightText text={hero.h1} />
          </h1>

          <p className="text">{hero.text}</p>

          <a
            href={hero.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            {hero.buttonLabel}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}