import { LuMap } from "react-icons/lu";
import { values } from "../_data/data";
import {
  Eyebrow,
  FinalCta,
  PageHero,
  TestimonialPlaceholder,
} from "../_components/SiteElements";
export const metadata = { title: "Sobre nós" };
export default function Sobre() {
  return (
    <main>
      <PageHero
        eyebrow="Sobre a Potêngi"
        title="Solidez, expertise e compromisso com o segmento de garantia condominial."
        text="Desde 2021, a Potêngi oferece soluções que proporcionam segurança financeira e contribuem para uma gestão mais eficiente."
      />
      <section className="section">
        <div className="shell editorial">
          <div>
            <Eyebrow>Nossa empresa</Eyebrow>
            <h2>Conhecimento de mercado e estrutura para garantir.</h2>
          </div>
          <p>
            Nossa atuação é fundamentada no conhecimento das necessidades de
            síndicos, administradoras e condomínios, aliando experiência no
            setor a uma estrutura financeira própria.
          </p>
        </div>
      </section>
      <section className="section dark-section">
        <div className="shell editorial">
          <div>
            <Eyebrow>Rede Garantidora</Eyebrow>
            <h2>A força de uma rede que transforma o setor.</h2>
          </div>
          <p>
            Fazemos parte da Rede Garantidora, uma rede com mais de 10 empresas
            especializadas em garantia condominial, ampliando nossa conexão com
            o mercado e fortalecendo nossa atuação.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell national">
          <div>
            <Eyebrow>Atuação nacional</Eyebrow>
            <h2>Atuação nacional com atendimento próximo e especializado.</h2>
            <p>
              A Potêngi atende condomínios em todo o Brasil, com uma atuação
              orientada pelas particularidades de cada operação, oferecendo
              atendimento humanizado, próximo e eficiente.
            </p>
          </div>
          <LuMap aria-hidden="true" />
        </div>
      </section>
      <section className="statement">
        <div className="shell">
          <Eyebrow>Visão de futuro</Eyebrow>
          <p>
            Mais do que oferecer previsibilidade nos recebimentos, buscamos
            proporcionar condições para que os condomínios mantenham sua
            organização financeira, cumpram seus compromissos e planejem
            melhorias com maior segurança.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <Eyebrow>Nossos valores</Eyebrow>
            <h2>Compromissos que sustentam cada relação.</h2>
          </div>
          <div className="value-grid">
            {values.map((value, index) => (
              <article key={value.title}>
                <span>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TestimonialPlaceholder />
      <FinalCta />
    </main>
  );
}
