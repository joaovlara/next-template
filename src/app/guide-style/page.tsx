// app/style-guide/page.tsx
import React from "react";
import LogoLoop from "../components/Animations/LogoLoop";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaAws,
  FaPenNib,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FadeUp } from "../components/Animations/FadeUp";
import {
  StaggerContainer,
  StaggerItem,
} from "../components/Animations/Stagger";

const logos = [
  { node: <FaReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
  {
    node: <FaJs />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <FaHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <FaCss3Alt />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <FaAws />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <FaGithub />, title: "GitHub", href: "https://github.com" },
  { node: <FaLinkedin />, title: "LinkedIn", href: "https://www.linkedin.com" },
  {
    node: <FaInstagram />,
    title: "Instagram",
    href: "https://www.instagram.com",
  },
  { node: <FaWhatsapp />, title: "WhatsApp", href: "https://www.whatsapp.com" },
  { node: <FaPenNib />, title: "Design", href: "#" },
];

const brandColors = [
  "bg-brand-dark",
  "bg-brand-gray",
  "bg-brand-light",
  "bg-brand-yellow",
  "bg-brand-orange",
  "bg-brand-red",
  "bg-brand-teal",
];

export default function GuideStyle(): React.ReactElement {
  return (
    <main className="container mx-auto py-10 space-y-16">
      <header className="border-b border-brand-gray pb-4">
        <h1>Style Guide</h1>
      </header>

      {/* Paleta de cores */}
      <section>
        <h2 className="section-title mb-4">Cores</h2>

        <StaggerContainer className="flex flex-wrap gap-3">
          {brandColors.map((colorClass, index) => (
            <StaggerItem key={index}>
              <div className={`h-24 aspect-square rounded-2xl ${colorClass}`} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Tipografia */}
      <section className="space-y-4">
        <h2 className="section-title">Tipografia</h2>
        <div>
          <span className="">Heading 1 (h1)</span>
          <h1>Título H1 com Bakbak</h1>
        </div>
        <div>
          <span className="">Heading 2 (h2 / .section-title)</span>
          <h2>Título H2 com Bakbak</h2>
        </div>
        <div>
          <span className="">Texto Corpo (.text)</span>
          <p className="text">
            Este é um texto padrão para corpo de página configurado no arquivo
            global.
          </p>
        </div>
        <div>
          <span className="">Legenda (.caption)</span>
          <p className="caption">Legenda ou caption discreta em itálico.</p>
        </div>
      </section>

      {/* Botões */}
      <section>
        <h2 className="section-title">Botões</h2>
        <div className="flex flex-wrap gap-4">
          <button type="button" className="btn bg-brand-dark hover:bg-black">
            Botão Dark
          </button>
          <button
            type="button"
            className="btn bg-brand-orange hover:bg-brand-red"
          >
            Botão Orange
          </button>
          <button type="button" className="btn bg-brand-teal hover:opacity-90">
            Botão Teal
          </button>
          <button
            type="button"
            className="btn border border-brand-dark bg-transparent text-brand-dark hover:bg-brand-dark hover:text-white"
          >
            Botão Outline
          </button>
        </div>
      </section>

      {/* Cards */}
      <FadeUp>
        <h2 className="section-title">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="card-yellow-border">
            <h3 className="">Card Yellow Border</h3>
            <p className="">
              Exemplo utilizando a classe .card-yellow-border definida no
              global.css.
            </p>
          </article>
          <article className="card-teal-border">
            <h3 className="">Card Teal Border</h3>
            <p className="">
              Exemplo utilizando a classe .card-teal-border definida no
              global.css.
            </p>
          </article>
        </div>
      </FadeUp>

      {/* Lista de componentes */}
      <LogoLoop logos={logos} />
    </main>
  );
}
