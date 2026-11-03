import { infos } from "@/data/data";

export default function About() {
  return (
    <section className="bg-brand-light py-20 relative overflow-hidden">
      {/* Marca-d'água "ABOUT" alinhada no topo superior direito */}
      <h2 className="absolute top-4 right-10 text-[14vw] font-black uppercase text-black/5 leading-none select-none pointer-events-none z-0">
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

        {/* Lado direito: card retangular com rotação fixa e sombra pronunciada */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="bg-orange-500 text-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.25)] transform rotate-[3deg] w-full max-w-md aspect-[1.4/1] flex flex-col justify-between border border-black/10">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-wide mb-3">
                Statement of <br /> Changes in Equity
              </h3>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg text-xs font-bold">
                <span>CLAIM WITH US</span>
                <span className="bg-yellow-300 text-black px-1.5 py-0.5 rounded text-[10px]">
                  10% +
                </span>
              </div>
              <br />
              <div className="inline-flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg text-xs font-bold">
                <span>INDIVIDUAL CLAIM</span>
                <span className="bg-white text-black px-1.5 py-0.5 rounded text-[10px]">
                  4% +
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}