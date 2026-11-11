import Link from "next/link";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { infos, routes } from "@/src/app/_data/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <p className="max-w-prose">
            Segurança financeira e valorização para a gestão condominial.
          </p>
        </div>
        <div>
          <h2>Navegação</h2>
          <nav className="mt-4 flex flex-col gap-2" aria-label="Navegação do rodapé">
            {routes.map((item) => (
              <Link href={item.href} key={item.href} className="link">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <address className="not-italic">
          <h2>Contato</h2>
          <div className="mt-4 flex flex-col gap-3">
          <a href={`tel:${infos.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2">
            <LuPhone aria-hidden="true" />
            {infos.phone}
          </a>
          <a href={`mailto:${infos.mail}`} className="flex items-center gap-2">
            <LuMail aria-hidden="true" />
            {infos.mail}
          </a>
          <a href={infos.site} target="_blank" rel="noreferrer" className="flex items-start gap-2">
            <LuMapPin aria-hidden="true" />
            {infos.adress}
          </a>
          </div>
        </address>
      </div>
      <div className="container mt-10 flex flex-col gap-2 border-t border-brand-graphite-400 pt-6 text-sm md:flex-row md:justify-between">
        <span>
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </span>
        <span>São Paulo · Brasil</span>
      </div>
    </footer>
  );
};

export default Footer;
