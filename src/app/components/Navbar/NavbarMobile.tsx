"use client";

import React, { useState } from "react";
import Image from "next/image";
import { navigation } from "../../data/data";
import { FiMenu, FiX } from "react-icons/fi";

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="lg:hidden h-[10dvh] border-b border-brand-teal/30 flex items-center px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/favicon.ico"
          alt="Logo"
          height={50}
          width={50}
        />

        {/* Botão Hambúrguer */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none p-2"
          aria-label="Abrir Menu"
        >
          <FiMenu className="text-brand-teal" />
        </button>
      </div>

      {/* Overlay escuro de fundo */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Menu Drawer Lateral Direito */}
      <aside
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-brand-dark z-50 p-6 flex flex-col justify-between shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Cabeçalho do Drawer (X totalmente à direita) */}
          <div className="flex justify-end items-center mb-8 pb-4">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none"
              aria-label="Fechar Menu"
            >
              <FiX className="text-brand-teal" />
            </button>
          </div>

          {/* Links de Navegação em Uppercase */}
          <div className="flex flex-col gap-6 font-semibold">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className="item-nav uppercase"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Botão de Ação (CTA) */}
        <div className="pt-6">
          <a 
            className="btn-cta-nav w-full text-center block uppercase"
            onClick={toggleMenu}
          >
            Fale Conosco
          </a>
        </div>
      </aside>
    </nav>
  );
};