import { infos } from "@data/data";
import Card from "../Cards/Card";

export default function CTA() {
  return (
    <section className="container py-6">
      <h2 className="font-bakbak text-2xl md:text-2xl lg:text-4xl font-semibold uppercase py-6">
        Lorem ipsulume dotr sithe dotmetsas ipsulume dotr sith
      </h2>


      <Card variant="yellow" className="text-black p-9 md:p-12 ">
        <div className="max-w-3/4 md:max-w-2/3 space-y-6">
          <h3 className="h3-cta">Lorem ipsulume dotr sithe dotmetsas ipsulume dotr sith</h3>
          <p>Lorem ipsulume dotr sithe dotmetsas ipsulume dotr sith asduagsbdfnm</p>
          <a className="btn-cta" href=""> Botao </a>
        </div>
        <hr className="my-6"/>
          <div className="grid md:grid-cols-3">
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
      </Card>

    </section>
  );
}
