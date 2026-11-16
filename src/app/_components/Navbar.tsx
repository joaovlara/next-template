"use client";

import Link from "next/link";
import { infos, routes } from "@/src/app/_data/data";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar container" aria-label="Navegação principal">
        <Link href="/" className="navbar-logo" aria-label="Ir para a página inicial">
          <Image
            src="/images/logo/logo.png"
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>
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
        <div className={`navbar-mobile${isMenuOpen ? " is-open" : ""}`}>
          <button
            type="button"
            className="navbar-menu-button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <div id="mobile-navigation" className="navbar-mobile-links">
            <div className="navbar-mobile-nav">
              {routes.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className="item-nav"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <a
              href={infos.wppApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary navbar-mobile-cta"
              onClick={closeMenu}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
