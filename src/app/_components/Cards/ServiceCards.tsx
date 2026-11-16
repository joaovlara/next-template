import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardsProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCards = ({
  title,
  description,
  icon: Icon,
}: ServiceCardsProps) => {
  return (
    <article className="service-card">
      <header className="service-card-header">
        <span className="service-card-icon-wrapper">
          <Icon aria-hidden="true" className="service-card-icon" />
        </span>
        <h3 className="service-card-title">{title}</h3>
      </header>
      <p className="service-card-description">{description}</p>
      <Link
        href="/solucoes"
        aria-label={`Conheça a solução: ${title}`}
        className="service-card-link"
      >
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </article>
  );
};

export default ServiceCards;