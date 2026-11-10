import { solutions } from "../_data/data";
import { FinalCta, PageHero, SolutionGrid } from "../_components/SiteElements";
export const metadata = { title: "Soluções" };
export default function Solucoes() {
  return (
    <main>
      <PageHero
        eyebrow="Potêngi Garantia Condominial"
        title="Nossas soluções"
        text="Conheça os serviços da Potêngi que proporcionam uma gestão condominial mais segura."
      />
      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Segurança em cada etapa</p>
            <h2>Soluções que trazem clareza para a gestão.</h2>
          </div>
          <SolutionGrid items={solutions} />
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
