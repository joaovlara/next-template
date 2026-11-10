import Image from "next/image";

export default function Services() {
  // Array simples apenas para renderizar as 3 caixas dinamicamente
  const emptyCards = [1, 2, 3];

  return (
    <section className="py-9 bg-brand-light text-black">
      <article className="container mx-auto px-4 mb-8">
        <h2 className="text-4xl md:text-6xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          remim.
        </h2>
      </article>

      <article className="container mx-auto px-4">
        <div className="relative w-full h-[400px] md:h-[500px] card overflow-hidden">
          <Image
            src="/images/office-workplace-with-laptop-free-photo.jpg"
            alt="Workplace"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 -mt-24 md:-mt-32">
          {emptyCards.map((_, index) => (
            <div key={index} className="bg-white card w-full h-[300px]" />
          ))}
        </div>
      </article>
    </section>
  );
}
