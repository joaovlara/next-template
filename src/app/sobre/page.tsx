import HeaderPage from "../_components/HeaderPage";
import AboutCompany from "../_components/Sections/AboutCompany";
import CTA from "../_components/Sections/CTA";
import Testimonials from "../_components/Sections/Testimonials";
import Values from "../_components/Sections/Values";
import { aboutHeader } from "../_data/data";

export default function Sobre() {
  return (
    <main>
      <HeaderPage pageName={aboutHeader.h1} subtitle={aboutHeader.text} />
      <AboutCompany />
      <Values />
      <Testimonials />
      <CTA />
    </main>
  );
}