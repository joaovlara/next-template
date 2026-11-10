import LogoLoop from "@components/Animations/LogoLoop";
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

const logosItems = [
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

const Logos = () => {
  return (
    <section className="py-3 bg-gray-400/50">
      <LogoLoop logos={logosItems} />
    </section>
  );
};

export default Logos;
