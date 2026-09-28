// app/style-guide/page.tsx
import React from "react";

/* Tipagem para mapeamento dos tokens de cor da marca */

export default function GuideStyle(): React.ReactElement {
  return (
    <main className="container mx-auto py-10 space-y-16">
      <header className="border-b border-brand-gray pb-4">
        <h1>Style Guide</h1>
      </header>

      {/* Paleta de cores */}
      <section className="">
        <h2 className="section-title">Cores</h2>

        <article className="flex gap-3">
          <div className="h-24 aspect-square bg-brand-dark rounded-2xl"></div>
          <div className="h-24 aspect-square bg-brand-gray rounded-2xl"></div>
          <div className="h-24 aspect-square bg-brand-light rounded-2xl"></div>
          <div className="h-24 aspect-square bg-brand-yellow rounded-2xl"></div>
          <div className="h-24 aspect-square bg-brand-orange rounded-2xl"></div>
          <div className="h-24 aspect-square bg-brand-red rounded-2xl"></div>
          <div className="h-24 aspect-square bg-brand-teal rounded-2xl"></div>
        </article>
      </section>

      {/* Tipografia */}
      <section className="space-y-4">
        <h2 className="section-title">Tipografia</h2>
        <div>
          <span className="">Heading 1 (h1)</span>
          <h1>Título H1 com Bakbak</h1>
        </div>
        <div>
          <span className="">Heading 2 (h2 / .section-title)</span>
          <h2>Título H2 com Bakbak</h2>
        </div>
        <div>
          <span className="">Texto Corpo (.text)</span>
          <p className="text">
            Este é um texto padrão para corpo de página configurado no arquivo
            global.
          </p>
        </div>
        <div>
          <span className="">Legenda (.caption)</span>
          <p className="caption">Legenda ou caption discreta em itálico.</p>
        </div>
      </section>

      {/* Botões */}
      <section>
        <h2 className="section-title">Botões</h2>
        <div className="flex flex-wrap gap-4">
          <button type="button" className="btn bg-brand-dark hover:bg-black">
            Botão Dark
          </button>
          <button
            type="button"
            className="btn bg-brand-orange hover:bg-brand-red"
          >
            Botão Orange
          </button>
          <button type="button" className="btn bg-brand-teal hover:opacity-90">
            Botão Teal
          </button>
          <button
            type="button"
            className="btn border border-brand-dark bg-transparent text-brand-dark hover:bg-brand-dark hover:text-white"
          >
            Botão Outline
          </button>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="section-title">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="card-yellow-border">
            <h3 className="">Card Yellow Border</h3>
            <p className="">
              Exemplo utilizando a classe .card-yellow-border definida no
              global.css.
            </p>
          </article>
          <article className="card-teal-border">
            <h3 className="">Card Teal Border</h3>
            <p className="">
              Exemplo utilizando a classe .card-teal-border definida no
              global.css.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
