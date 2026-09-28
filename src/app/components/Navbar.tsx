"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { navigation } from "@/data/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" relative">
      {/* Mobile Nav Header */}
      <nav className="lg:hidden min-h-[8dvh] container border-bottom flex items-center justify-between">
        {/* Logo / Marca no lado esquerdo */}
        <div className="flex items-center gap-3 font-semibold">
          <Image
            src="/images/fox.png"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
          <p>code.JOTA</p>
        </div>

        {/* Botão Hamburguer no lado direito */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
          className="p-2 text-2xl focus:outline-none"
        >
          <FiMenu />
        </button>
      </nav>

      {/* Backdrop (fundo escurecido ao abrir o menu) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Lateral Direito (Sidebar Drawer) */}
      <div
        className={`fixed top-0 right-0 h-full w-[70vw] text-brand-dark bg-brand-yellow z-50 p-6 flex flex-col gap-6 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Topo do Menu Sidebar com o botão de fechar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Image
              src="/images/fox.png"
              alt="Logo"
              width={28}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <p>code.JOTA</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu"
            className="p-2 text-2xl focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        {/* Links de Navegação */}
        <div className="flex flex-col gap-4 mt-4">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className="uppercase text-3xl border-b border-brand-dark/15 font-bold mb-6 hover:text-brand-red"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contato"
            className="btn-conversar mt-2"
            onClick={() => setIsOpen(false)}
          >
            Vamos conversar
          </a>
        </div>
      </div>

      {/* Desktop */}
      <nav className="hidden lg:flex container min-h-[8dvh] items-center justify-between px-4">
        {/* Logo / Marca */}
        <div className="flex items-center gap-3 font-semibold">
          <Image
            src="/images/fox.png"
            alt="Logo"
            width={32}
            height={32}
            className="h-12 w-auto object-contain"
            priority
          />
          <p className="text-lg">code.JOTA</p>
        </div>

        {/* Lista de Links Desktop */}
        <ul className="flex items-center gap-2">
          {navigation.map((item, index) => (
            <li key={index}>
              <a
                href={item.href || "#"}
                className="group flex items-center gap-2 px-4 py-2 rounded-full font-semibold hover:bg-brand-yellow hover:text-black"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-black" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão Vamos Conversar (Desktop) */}
        <div>
          <a href="#contato" className="btn-conversar inline-block">
            Vamos conversar
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
