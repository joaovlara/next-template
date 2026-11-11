import { FaWhatsapp } from "react-icons/fa";
import { infos } from "@/src/app/_data/data";

export default function WhatsAppButton() {
  return (
    <a
      href={infos.wppApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="btn-wpp"
    >
      <FaWhatsapp aria-hidden="true" className="size-7" />
    </a>
  );
}