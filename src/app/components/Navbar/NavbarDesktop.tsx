import React from "react";
import { navigation } from "../../data/data";
import Image from "next/image";

export const NavbarDesktop = () => {
  return (
    <nav className="hidden lg:flex h-[10dvh] bg-stone-500">
      <div className="container flex justify-between items-center">
        <Image
          src="/favicon.ico"
          alt="Logo" height={60} width={60}
          className=""
        />
        <div className="flex gap-3">
          {navigation.map((item, index) => (
            <a key={index} 
              href={item.href || "#"} className="item-nav">
              {item.name}
            </a>
          ))}
        </div>
        <a href="btn-cta-nav">Fale Conosco</a>
      </div>
    </nav>
  );
};
