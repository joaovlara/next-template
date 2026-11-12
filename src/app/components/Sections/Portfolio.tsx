import { PortfolioItem } from "../../types/types";
import { PortfolioMobile } from "./portfolio/./PortfolioMobile";
import { PortfolioDesktop } from "./portfolio/PortfolioDesktop";
// import { infos } from "@data/data";

export default function Portfolio() {
  // Futuramente você pode mapear 'infos' para gerar esse array
  const portfolioItems: PortfolioItem[] = [
    { id: 1, label: "1 (5 cols)", desktopSpan: "md:col-span-5" },
    { id: 2, label: "2 (4 cols)", desktopSpan: "md:col-span-4" },
    { id: 3, label: "3 (3 cols)", desktopSpan: "md:col-span-3" },
    { id: 4, label: "4 (4 cols)", desktopSpan: "md:col-span-4" },
    { id: 5, label: "5 (8 cols)", desktopSpan: "md:col-span-8" },
  ];

  return (
    <section className="py-16 bg-brand-light text-black">
      <article className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Portfolio</h2>

        <PortfolioMobile items={portfolioItems} />
        <PortfolioDesktop items={portfolioItems} />
      </article>
    </section>
  );
}
