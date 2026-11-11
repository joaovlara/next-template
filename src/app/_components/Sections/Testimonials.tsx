import Image from "next/image";
import { Quote, UserRound } from "lucide-react";
import { testimonials } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";

export default function Testimonials() {
  return (
    <section className="testimonials-section container-1">
      <FadeIn className="testimonials-heading">
        <h2>{testimonials.title}</h2>
      </FadeIn>

      <div className="testimonials-grid">
        {testimonials.items.map(({ id, nome, funcao, depoimento, imagem }) => (
          <figure key={id} className="testimonial-card-item">
            <Quote aria-hidden="true" className="testimonial-quote" />
            <blockquote className="testimonial-quote-text">
              <p>{depoimento}</p>
            </blockquote>

            <figcaption className="testimonial-author">
              {imagem ? (
                <Image
                  src={imagem}
                  alt={`Foto de ${nome}`}
                  width={80}
                  height={80}
                  className="testimonial-avatar"
                />
              ) : (
                <span className="testimonial-avatar testimonial-avatar-placeholder">
                  <UserRound aria-hidden="true" />
                </span>
              )}
              <strong>{nome}</strong>
              <span>{funcao}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}