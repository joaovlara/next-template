import Image from "next/image";
import { testimonials } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";

export default function Testimonials() {
  return (
    <section className="container-1 flex flex-col gap-10">
      <FadeIn className="flex flex-col gap-3">
        <span className="section-eyebrow">{testimonials.eyebrow}</span>
        <h2>{testimonials.title}</h2>
      </FadeIn>

      <div className="carousel snap-x snap-mandatory md:grid md:grid-cols-2">
        {testimonials.items.map(({ id, nome, funcao, depoimento, imagem }) => (
          <figure key={id} className="testimonial-card-item">
            <div className="testimonial-card-content">
              <blockquote>
                <p className="text-sm md:text-base">{depoimento}</p>
              </blockquote>

              <figcaption className="flex items-center gap-4">
                {imagem && (
                  <Image
                    src={imagem}
                    alt={`Foto de ${nome}`}
                    width={48}
                    height={48}
                    className="testimonial-avatar"
                  />
                )}
                <div className="flex flex-col">
                  <strong className="text-white">{nome}</strong>
                  <span className="text-sm text-secondary">{funcao}</span>
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}