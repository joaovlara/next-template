import Link from "next/link";
import { routes } from "@/src/app/_data/data";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar container" aria-label="Navegação principal">
        <div className="navbar-links">
          {routes.map((item) => (
            <Link href={item.href} key={item.href} className="item-nav">
              {item.name}
            </Link>
          ))}
        </div>
        <details className="navbar-mobile">
          <summary className="navbar-menu-button" aria-label="Abrir menu">
            <span></span>
            <span></span>
          </summary>
          <div className="navbar-mobile-links">
            {routes.map((item) => (
              <Link href={item.href} key={item.href} className="item-nav">
                {item.name}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
};

export default Navbar;
