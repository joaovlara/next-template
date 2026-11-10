import { LuMail, LuMapPin, LuMessageCircle, LuPhone } from "react-icons/lu";
import { infos } from "../_data/data";
import { ContactButton, Eyebrow } from "../_components/SiteElements";
export const metadata = { title: "Contato" };
export default function Contato() {
  return (
    <main>
      <section className="contact-hero">
        <div className="shell contact-grid">
          <div>
            <Eyebrow>Fale com a Potêngi</Eyebrow>
            <h1>Seu condomínio merece uma gestão mais segura.</h1>
            <p>
              Fale conosco e descubra como a Potêngi pode garantir a segurança
              financeira e a valorização do seu patrimônio.
            </p>
            <ContactButton />
          </div>
          <div className="contact-list">
            <a href={infos.telefoneLink}>
              <LuPhone aria-hidden="true" />
              <span>
                <small>Telefone</small>
                {infos.telefone}
              </span>
            </a>
            <a href={infos.wppLink} target="_blank" rel="noreferrer">
              <LuMessageCircle aria-hidden="true" />
              <span>
                <small>WhatsApp</small>
                {infos.telefone}
              </span>
            </a>
            <a href={`mailto:${infos.email}`}>
              <LuMail aria-hidden="true" />
              <span>
                <small>E-mail</small>
                {infos.email}
              </span>
            </a>
            <a href={infos.mapsLink} target="_blank" rel="noreferrer">
              <LuMapPin aria-hidden="true" />
              <span>
                <small>Endereço</small>Avenida Lins de Vasconcelos, 3464, sala
                51
                <br />
                Vila Mariana · São Paulo - SP · 04112-002
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
