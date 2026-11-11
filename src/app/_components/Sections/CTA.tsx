import { cta } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";
import HighlightText from "../HighlightText";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-parallax-container" aria-hidden="true" />

      <FadeIn className="container-1 flex min-h-[32rem] flex-col items-center justify-center gap-8 py-28 text-center">
        <h2 className="max-w-3xl">
          <HighlightText text={cta.h2} />
        </h2>

        <a
          href={cta.linkCta}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
        >
          {cta.buttonLabel}
        </a>
      </FadeIn>
    </section>
  );
}
