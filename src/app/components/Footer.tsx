import React from "react";
import { navigation } from "@data/data";

const Footer = () => {
  return (
    <footer className="">
      <section className="container">
        <article className="grid md:grid-cols-3">
          <div>logo</div>
          <div className="flex flex-col gap-3 font-semibold">
            {navigation.map((item, index) => (
              <a key={index} href={item.href || "#"} className="">
                {item.name}
              </a>
            ))}
          </div>
          <div>
            bullet redes sociais
          </div>
        </article>
        <span> copyright </span>
      </section>
    </footer>
  );
};

export default Footer;
