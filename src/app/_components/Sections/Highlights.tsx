import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { highlights } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";

export default function Highlights() {
  return (
    <section className="">
      <FadeIn className="highlights-grid">
        {highlights.map(({ title, icon: Icon }) => (
          <article key={title} className="highlight-card-item">
            <Icon aria-hidden="true" className="service-card-icon" />
            <h3 className="highlight-card-title">{title}</h3>
            <Link
              href="/solucoes"
              aria-label={`Conheça a solução: ${title}`}
              className="highlight-card-link"
            >
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </article>
        ))}
      </FadeIn>
    </section>
  );
}