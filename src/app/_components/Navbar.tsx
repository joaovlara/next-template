import Link from "next/link";
import { navigation } from "@/src/app/_data/data";
import { Brand, ContactButton } from "./SiteElements";

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="shell navbar" aria-label="Navegação principal">
        <Brand />
        <div className="desktop-nav">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="desktop-cta">
          <ContactButton />
        </div>
        <details className="mobile-nav">
          <summary aria-label="Abrir menu">
            <span></span>
            <span></span>
          </summary>
          <div>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <ContactButton />
          </div>
        </details>
      </nav>
    </header>
  );
};

export default Navbar;
