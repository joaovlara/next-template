/**
 * Configuração de SEO global para o projeto.
 *
 * Como editar:
 * - Altere a constante `url` para refletir o domínio do seu site.
 * - Atualize `title` e `description` para o nome e descrição padrão do projeto.
 * - A constante `image` deriva da `url` e aponta para a imagem de preview (Open Graph/Twitter).
 * - Use este arquivo para manter consistência de metadados em todas as páginas.
 * - Para páginas dinâmicas, você pode importar `seoConfig` e sobrescrever os campos necessários.
 */

import type { Metadata } from "next";

// Variáveis globais
const url = "https://potengigarantia.com.br";
const title = "Potêngi Garantia Condominial";
const image = `${url}/preview.jpg`;

const description =
  "Garantia condominial com segurança financeira, tranquilidade na gestão e valorização do patrimônio.";

export const seoConfig: Metadata = {
  metadataBase: new URL(url),
  title: { default: title, template: `%s | ${title}` },
  description,
  keywords: ["Next.js", "ReactJs", "TailwindCSS"],
  alternates: {
    canonical: url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  authors: [{ name: "João Lara", url: "" }],
};
