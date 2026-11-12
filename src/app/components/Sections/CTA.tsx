import { infos } from "@data/data";

export default function CTA() {
  return (
    <section className="container py-6">
      <h2 className="font-bakbak text-2xl md:text-2xl lg:text-4xl font-semibold uppercase py-6">
        Lorem ipsulume dotr sithe dotmetsas ipsulume dotr sith
      </h2>
      <article className="card bg-brand-yellow p-9 space-y-3 text-black">
        <span>eyebrow</span>
        <h3 className="font-bakbak text-4xl md:text-5xl lg:text-7xl font-semibold uppercase">
          Lorem ipsulume dotr sithe dotmetsas ipsulume dotr sith
        </h3>
        <div className="md:flex gap-9">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
            incidunt adipisci, tenetur, omnis esse distinctio odi
          </p>
          <a href="">teste</a>
        </div>
        <hr />
        <div className="grid md:grid-cols-3">
          <div>1</div>
          <div>1</div> <div>1</div>
        </div>
      </article>
    </section>
  );
}
