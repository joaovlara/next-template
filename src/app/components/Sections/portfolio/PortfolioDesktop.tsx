import { PortfolioItem } from "@/src/app/types/types";
import { PortfolioCard } from "../../Cards/PortfolioCard";

interface PortfolioDesktopProps {
  items: PortfolioItem[];
}

export function PortfolioDesktop({ items }: PortfolioDesktopProps) {
  return (
    <div className="hidden md:grid md:grid-cols-12 gap-4 md:auto-rows-[360px]">
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} className={item.desktopSpan} />
      ))}
    </div>
  );
}
