import React, { ReactNode } from "react";

// 1. Definimos variações baseadas na sua paleta completa
type CardVariant =
  | "black"
  | "dark"
  | "gray"
  | "light"
  | "yellow"
  | "orange"
  | "red"
  | "teal";

// 2. Mapeamos todas as cores com contraste adequado para o texto
const variantStyles: Record<CardVariant, string> = {
  black: "bg-brand-black",
  dark: "bg-brand-dark",
  gray: "bg-brand-gray",
  light: "bg-brand-light",
  yellow: "bg-brand-yellow",
  orange: "bg-brand-orange",
  red: "bg-brand-red",
  teal: "bg-brand-teal",
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}

const Card = ({
  children,
  className = "",
  variant = "light",
  ...props
}: CardProps) => {
  return (
    <div
      className={`card ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
