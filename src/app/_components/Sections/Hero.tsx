import { hero } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";
import HighlightText from "../HighlightText";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background" aria-hidden="true" />

      <FadeIn className="hero-content container-1 flex flex-col items-center gap-8">
        <h1>
          <HighlightText text={hero.h1} />
        </h1>

        <p className="text max-w-2xl">{hero.text}</p>

        <a
          href={hero.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero max-w-md"
        >
          {hero.buttonLabel}
        </a>
      </FadeIn>
    </section>
  );
}