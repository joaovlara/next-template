import { infos } from "@/data/data";

export default function About() {
  return (
    <section className="bg-brand-light py-20 relative overflow-hidden">
      {/* Marca-d'água "ABOUT" alinhada no topo superior direito */}
      <h2 className="absolute top-0 right-10 text-[14vw] font-black uppercase text-brand-dark/5 leading-none select-none pointer-events-none z-0">
        About
      </h2>

      <article className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Lado esquerdo: texto em destaque e parágrafo */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-brand-dark leading-none">
            Do conceito <br />
            ao <span className="text-orange-500">lançamento!</span>
          </h2>
          <p className="text-base text-brand-dark/80 max-w-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eaque
            quidem deserunt veritatis ab. Sunt quod, dicta fugit tempora eum ad
            assumenda eos soluta, dolorum fuga voluptatum suscipit,
            necessitatibus odio!
          </p>
        </div>

        <div className="card-teal-border w-[30vw] h-50 transform rotate-[3deg] relative top-10">
          teste
        </div>
      </article>
    </section>
  );
}