import React from "react";
import { navigation } from "@/data/data";

const Footer = () => {
  return (
    <footer className="py-9">
      <section className="container bg-stone-950 p-9 space-y-9">
        <article className="grid md:grid-cols-2">
          <div>
            <p>Nome</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a
              deserunt labore nihil autem blanditiis consequatur.
            </p>
          </div>
          <div className="flex gap-6 justify-end items-end">
            {navigation.map((item, index) => (
              <a key={index} href={item.href || "#"} className="item-footer">
                {item.name}
              </a>
            ))}
          </div>
        </article>

        <article className="grid md:grid-cols-2 text-sm">
          <div className="">
            <span>Code.JOTA © 2025 Todos direitos reservados</span>
          </div>
          <div className="flex gap-6 justify-end items-end">
            {navigation.map((item, index) => (
              <a key={index} href={item.href || "#"} className="item-footer">
                {item.name}
              </a>
            ))}
          </div>
        </article>

      </section>
    </footer>
  );
};

export default Footer;
