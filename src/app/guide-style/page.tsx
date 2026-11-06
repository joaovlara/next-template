import React from "react";
import {
  StaggerContainer,
  StaggerItem,
} from "../components/Animations/Stagger";

export default function GuideStyle(): React.ReactElement {
  return (
    <main className="space-y-3">
      {/* Header */}
      <section className="container">
        <h1>Style Guide h1</h1>
        <h2>Style Guide h2</h2>
      </section>

      {/* Paleta de cores */}
      <section className="container">
        <article className="flex gap-3">
          <div className="card-color-guide bg-brand-dark">color-brand-dark</div>
          <div className="card-color-guide bg-brand-gray">color-brand-gray</div>
          <div className="card-color-guide bg-brand-light">
            color-brand-light
          </div>
          <div className="card-color-guide bg-brand-yellow">
            color-brand-yellow
          </div>
          <div className="card-color-guide bg-brand-orange">
            color-brand-orange
          </div>
          <div className="card-color-guide bg-brand-red">color-brand-red</div>
          <div className="card-color-guide bg-brand-teal">color-brand-teal</div>
        </article>
      </section>

      {/* Tipografia */}
      <section className="container">
        <article>
          <p>
            "p" Paragrafo: Lorem ipsum dolor sit amet provident omnis magni
            reiciendis? Provident, error autem.
          </p>
          <p>
            text: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            impedit molestiae laborum eos error, officia repellend optio
            placeat.
          </p>
        </article>
      </section>

      {/* Botões */}
      <section className="container">
        <article className="flex gap-3">
          <button className="btn">button</button>
          <button className="btn-outline">button</button>
          <button className="btn bg-brand-teal hover:bg-brand-light">button</button>
          <button className="btn bg-brand-orange hover:bg-brand-light">button</button>
        </article>
      </section>

      {/* Cards */}
    </main>
  );
}
