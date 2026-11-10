import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  LuArrowUpRight,
  LuBuilding2,
  LuCheck,
  LuLandmark,
  LuMapPinned,
  LuMessageCircle,
  LuReceiptText,
  LuShieldCheck,
  LuSmartphone,
} from "react-icons/lu";
import { infos } from "@/src/app/_data/data";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Potêngi, página inicial">
      <Image
        src="/images/Logo_Potêngi_01.png"
        alt="Potêngi Garantia Condominial"
        width={168}
        height={63}
        priority
      />
    </Link>
  );
}

export function ContactButton({
  children = "Entre em contato",
  dark = false,
}: {
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      className={dark ? "button button-light" : "button"}
      href={infos.wppLink}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <LuArrowUpRight aria-hidden="true" />
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-hero">
      <div className="shell">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

const iconMap = [
  LuLandmark,
  LuMessageCircle,
  LuBuilding2,
  LuMapPinned,
  LuShieldCheck,
];
export function DifferentialGrid({ items }: { items: string[] }) {
  return (
    <div className="differential-grid">
      {items.map((item, index) => {
        const Icon = iconMap[index];
        return (
          <article className="differential" key={item}>
            <span className="icon-frame">
              <Icon aria-hidden="true" />
            </span>
            <h3>{item}</h3>
            <Link href="/solucoes">
              Conheça nossas soluções <LuArrowUpRight aria-hidden="true" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}

const solutionIcons = [
  LuShieldCheck,
  LuReceiptText,
  LuLandmark,
  LuCheck,
  LuSmartphone,
];
export function SolutionGrid({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="solution-grid">
      {items.map((item, index) => {
        const Icon = solutionIcons[index];
        return (
          <article
            className={`solution-card ${index === 0 ? "solution-card-featured" : ""}`}
            key={item.title}
          >
            <span className="icon-frame">
              <Icon aria-hidden="true" />
            </span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="shell">
        <Eyebrow>Vamos conversar</Eyebrow>
        <h2>
          O próximo passo para uma gestão mais sólida começa aqui, fale com a
          nossa equipe.
        </h2>
        <ContactButton dark />
      </div>
    </section>
  );
}

export function TestimonialPlaceholder() {
  return (
    <section className="testimonials">
      <div className="shell">
        <Eyebrow>Relacionamentos que permanecem</Eyebrow>
        <h2>A confiança de quem conta com a Potêngi.</h2>
        <p>
          Em breve, este espaço reunirá experiências reais de quem escolheu uma
          gestão mais segura.
        </p>
      </div>
    </section>
  );
}
