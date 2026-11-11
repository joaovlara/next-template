import Link from "next/link";
import { infos, routes } from "@/src/app/_data/data";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar container" aria-label="Navegação principal">
        <div className="navbar-logo">
          <Image
            src="/images/logo/logo.png"
            alt="Logo"
            width={100}
            height={50}
          />
        </div>
        <div className="navbar-links">
          {routes.map((item) => (
            <Link href={item.href} key={item.href} className="item-nav">
              {item.name}
            </Link>
          ))}
        </div>
        <a
          href={infos.wppApp}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-desktop-cta btn-primary"
        >
          Fale Conosco
        </a>
        <details className="navbar-mobile">
          <summary
            className="navbar-menu-button"
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </summary>
          <div className="navbar-mobile-links">
            <div className="navbar-mobile-nav">
              {routes.map((item) => (
                <Link href={item.href} key={item.href} className="item-nav">
                  {item.name}
                </Link>
              ))}
            </div>
            <a
              href={infos.wppApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary navbar-mobile-cta"
            >
              Fale Conosco
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
};

export default Navbar;
