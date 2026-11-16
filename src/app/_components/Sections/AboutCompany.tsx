import Image from "next/image";
import { aboutHeader } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";

interface StoryBlockProps {
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
  items: Array<{
    title: string;
    text: string;
  }>;
}

function StoryBlock({
  image,
  imageAlt,
  imageFirst = false,
  items,
}: StoryBlockProps) {
  return (
    <FadeIn className="about-company-card">
      <div className={imageFirst ? "about-company-image" : "about-company-content"}>
        {imageFirst ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        ) : (
          items.map(({ title, text }) => (
            <article key={title} className="about-company-item">
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))
        )}
      </div>

      <div className={imageFirst ? "about-company-content" : "about-company-image"}>
        {imageFirst
          ? items.map(({ title, text }) => (
              <article key={title} className="about-company-item">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))
          : (
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            )}
      </div>
    </FadeIn>
  );
}

export default function AboutCompany() {
  return (
    <section className="about-company-section">
      <div className="about-company-list">
        <StoryBlock
          image="/images/office-charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
          imageAlt="Equipe trabalhando em conjunto"
          imageFirst
          items={[
            {
              title: aboutHeader.section1Title,
              text: aboutHeader.section1Text,
            },
            {
              title: aboutHeader.section2Title,
              text: aboutHeader.section2Text,
            },
          ]}
        />
        <StoryBlock
          image="/images/predios-xrdes-tTWpe81zK8A-unsplash.jpg"
          imageAlt="Edifícios representando a atuação nacional"
          items={[
            {
              title: aboutHeader.section3Title,
              text: aboutHeader.section3Text,
            },
            {
              title: aboutHeader.section4Title,
              text: aboutHeader.section4Text,
            },
          ]}
        />
      </div>
    </section>
  );
}
