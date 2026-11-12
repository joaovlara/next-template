export default function Portfolio() {
  return (
    <section className="py-16 bg-brand-light text-black">
      <article className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-70 md:auto-rows-90">
          <div className="bento-card md:col-span-5">1 (5 cols)</div>
          <div className="bento-card md:col-span-4">2 (4 cols)</div>
          <div className="bento-card md:col-span-3">3 (3 cols)</div>
          <div className="bento-card md:col-span-4">4 (4 cols)</div>
          <div className="bento-card md:col-span-8">5 (8 cols)</div>
        </div>
      </article>
    </section>
  );
}
