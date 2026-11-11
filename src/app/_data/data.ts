import {
  FaEnvelope,
  FaMapPin,
  FaPhone,
  FaWhatsapp,
  // FaApple,
  // FaGooglePlay,
  // FaInstagram,
} from "react-icons/fa";

import {
  BarChart3,
  CircleDollarSign,
  Eye,
  Globe,
  HeartHandshake,
  Network,
  ReceiptText,
  Scale,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Wallet,
} from "lucide-react";

import { BsBuildingCheck } from "react-icons/bs";

export const infos = {
  name: "Potengi Garantia Condominial",
  adress:
    "Avenida Lins de Vasconcelos, 3464, sala 51 - Vila Mariana, São Paulo - SP, 04112-002",
  phone: "11 95844-7055",
  mail: "comercial@potengigarantia.com.br",
  wppApp: "https://wa.me/5511958447055",
  site: "https://www.potengigarantia.com.br", // TODO: confirmar domínio
  // instagram: "",
  // appleStore: "",
  // playStore: "",
};

export const social = [
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    url: infos.wppApp,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: `mailto:${infos.mail}`,
  },
  // {
  //   icon: FaInstagram,
  //   name: "Instagram",
  //   url: infos.instagram,
  // },
];

export const contato = [
  {
    icon: BsBuildingCheck,
    name: "Nome",
    value: "Potengi Garantia Condominial Ltda",
    url: infos.site,
  },
  {
    icon: FaMapPin,
    name: "Endereço",
    value: infos.adress,
    url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      infos.adress,
    )}`,
  },
  {
    icon: FaPhone,
    name: "Telefone",
    value: infos.phone,
    url: `tel:${infos.phone.replace(/\s+/g, "").replace(/\(|\)|-/g, "")}`,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    value: infos.mail,
    url: `mailto:${infos.mail}`,
  },
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    value: "WhatsApp",
    url: infos.wppApp,
  },
];

export const routes = [
  { name: "PÁGINA INICIAL", href: "/" },
  { name: "SOBRE NÓS", href: "/sobre" },
  { name: "SOLUÇÕES", href: "/solucoes" },
  { name: "CONTATO", href: "/contato" },
];

// Home Page

export const hero = {
  h1: "Solidez em garantir. *Expertise em valorizar.*",
  text: "Garantia condominial que proporciona segurança financeira, tranquilidade na gestão e valorização dos condomínios.",
  buttonLabel: "Entre em contato",
  link: infos.wppApp,
};

// Diferenciais
export const highlights = [
  {
    title: "Capital próprio",
    icon: CircleDollarSign,
  },
  {
    title: "Atendimento humanizado",
    icon: HeartHandshake,
  },
  {
    title: "Empresa sólida no mercado",
    icon: ShieldCheck,
  },
  {
    title: "Atuação em todo o Brasil",
    icon: Globe,
  },
  {
    title: "Integração à Rede Garantidora",
    icon: Network,
  },
];

export const about = {
  title:"Acreditamos que a valorização de um condomínio começa com uma gestão financeira sólida.",
  text: "A Potengi proporciona segurança nos recebimentos e melhores condições para preservar o patrimônio, realizar melhorias e planejar o futuro.",
};

export const services = [
  {
    id: "repasse-garantido",
    title: "Repasse garantido",
    description:
      "O condomínio conta com maior previsibilidade de receitas, independentemente do pagamento das taxas condominiais pelos moradores.",
    icon: Wallet,
  },
  {
    id: "emissao-e-entrega-de-boletos",
    title: "Emissão e entrega de boletos",
    description:
      "A Potengi emite e disponibiliza os boletos condominiais, facilitando o acesso dos moradores e contribuindo para a organização financeira do condomínio.",
    icon: ReceiptText,
  },
  {
    id: "acompanhamento-da-inadimplencia",
    title: "Acompanhamento da inadimplência",
    description:
      "A administração conta com informações e relatórios relacionados aos recebimentos e à inadimplência, permitindo acompanhar a situação financeira do condomínio e ter mais clareza sobre sua operação.",
    icon: BarChart3,
  },
  {
    id: "cobranca-especializada",
    title: "Cobrança especializada",
    description:
      "A Potengi atua na condução de processos de cobrança e negociação de taxas condominiais em atraso.",
    icon: Scale,
  },
  {
    id: "aplicativo-personalizado",
    title: "Aplicativo personalizado",
    description:
      "O condomínio possui um aplicativo exclusivo e personalizado, reunindo informações e funcionalidades, como reservas das áreas comuns, que facilitam a comunicação e o acesso aos serviços do dia a dia.",
    icon: Smartphone,
  },
];

export const getApp = {
  title: "Uma experiência digital pensada para cada condomínio.",
  text: "Com a Potengi, seu condomínio conta com um aplicativo exclusivo e personalizado que reúne recursos para facilitar o acesso às informações e aos serviços do dia a dia.",
  text2:
    "Por meio da plataforma, os moradores podem realizar reservas de espaços comuns, consultar documentos, acessar boletos, e acompanhar comunicados, conforme as funcionalidades configuradas para cada condomínio.",
  buttonLabel: "Saiba mais",
  link: infos.wppApp,
};

export const cta = {
  h2: "O próximo passo para uma gestão mais *sólida* começa aqui, fale com a nossa equipe.",
  linkCta: infos.wppApp,
  buttonLabel: "Entre em contato.",
};

export const testimonials = {
  eyebrow: "Depoimentos",
  title: "A confiança de quem conta com a Potengi.",
  items: [
    {
      id: 1,
      nome: "Maria Oliveira",
      funcao: "Síndica",
      depoimento:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at orci vitae justo consequat facilisis.",
    },
    {
      id: 2,
      nome: "Carlos Mendes",
      funcao: "Administrador condominial",
      depoimento:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      nome: "Ana Souza",
      funcao: "Síndica profissional",
      depoimento:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    },
  ] as {
    id: number;
    nome: string;
    funcao: string;
    depoimento: string;
    imagem?: string;
  }[],
};

// Sobre Page

export const aboutHeader = {
  h1: "Solidez, expertise e compromisso com o segmento de garantia condominial.",
  text: "Desde 2021, a Potengi oferece soluções que proporcionam segurança financeira e contribuem para uma gestão mais eficiente.",

  section1Title: "Conhecimento de mercado e estrutura para garantir.",
  section1Text:
    "Nossa atuação é fundamentada no conhecimento das necessidades de síndicos, administradoras e condomínios, aliando experiência no setor a uma estrutura financeira própria.",

  section2Title: "A força de uma rede que transforma o setor.",
  section2Text:
    "Fazemos parte da Rede Garantidora, uma rede com mais de 10 empresas especializadas em garantia condominial, ampliando nossa conexão com o mercado e fortalecendo nossa atuação.",

  section3Title: "Atuação nacional com atendimento próximo e especializado",
  section3Text:
    "A Potengi atende condomínios em todo o Brasil, com uma atuação orientada pelas particularidades de cada operação, oferecendo atendimento humanizado, próximo e eficiente.",

  section4Title: "Uma gestão preparada para o presente e o futuro.",
  section4Text:
    "Mais do que oferecer previsibilidade nos recebimentos, buscamos proporcionar condições para que os condomínios mantenham sua organização financeira, cumpram seus compromissos e planejem melhorias com maior segurança.",
};

export const values = {
  title: "Nossos valores",
  items: [
    {
      title: "Solidez e responsabilidade",
      description:
        "Estrutura financeira consistente e compromisso com cada operação.",
      icon: ShieldCheck,
    },
    {
      title: "Transparência",
      description: "Relações pautadas pela clareza e pela confiança.",
      icon: Eye,
    },
    {
      title: "Atendimento humanizado",
      description: "Atenção às pessoas e às necessidades de cada condomínio.",
      icon: HeartHandshake,
    },
    {
      title: "Compromisso com a evolução",
      description:
        "Busca constante por soluções que tornem a gestão mais eficiente.",
      icon: TrendingUp,
    },
  ],
};

// Soluções Page

export const servicesHeader = {
  h1: "Nossas soluções",
  text: "Conheça os serviços da Potengi que proporcionam uma gestão condominial mais segura.",
};

// Contato Page

export const contactHeader = {
  title: "Seu condomínio merece uma gestão mais segura.",
  text: "Fale conosco e descubra como a Potengi pode garantir a segurança financeira e a valorização do seu patrimônio.",
  contactTitle: "Contato",
};

export const footer = {
  social: {
    social,
  },
  contato: {
    infos,
    social,
  },
};
