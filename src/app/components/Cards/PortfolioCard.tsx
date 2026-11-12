import { PortfolioItem } from "../../types/types"; 

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

export function PortfolioCard({ item, className = "" }: PortfolioCardProps) {
  return (
    <div className={`bento-card ${className}`}>
      {/* Aqui dentro entrará o layout rico (imagem, título, badge) usando 'item' */}
      {item.label}
    </div>
  );
}