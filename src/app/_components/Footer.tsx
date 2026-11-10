import Link from "next/link";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { infos, navigation } from "@/src/app/_data/data";
import { Brand } from "./SiteElements";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Brand />
          <p>Segurança financeira e valorização para a gestão condominial.</p>
        </div>
        <div>
          <h2>Navegação</h2>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <address>
          <h2>Contato</h2>
          <a href={infos.telefoneLink}>
            <LuPhone aria-hidden="true" />
            {infos.telefone}
          </a>
          <a href={`mailto:${infos.email}`}>
            <LuMail aria-hidden="true" />
            {infos.email}
          </a>
          <a href={infos.mapsLink} target="_blank" rel="noreferrer">
            <LuMapPin aria-hidden="true" />
            Avenida Lins de Vasconcelos, 3464, sala 51
          </a>
        </address>
      </div>
      <div className="shell footer-bottom">
        <span>{infos.copyright}</span>
        <span>São Paulo · Brasil</span>
      </div>
    </footer>
  );
};

export default Footer;
