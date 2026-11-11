interface HighlightTextProps {
  text: string;
  highlightClassName?: string;
}

export default function HighlightText({
  text,
  highlightClassName = "text-highlight",
}: HighlightTextProps) {
  const parts: string[] = text.split("*");

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;

        // Índices ímpares estão entre asteriscos
        return index % 2 === 1 ? (
          <span key={index} className={highlightClassName}>
            {part.trim()}
          </span>
        ) : (
          <span key={index}>{part}</span>
        );
      })}
    </>
  );
}
