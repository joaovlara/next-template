import Hero from "./components/Sections/Hero";
import CTA from "./components/Sections/CTA";
import WhatsAppButton from "./components/WppButton";
import Highlights from "./components/Sections/Highlights";
import About from "./components/Sections/About";
import Services from "./components/Sections/Services";
import Portfolio from "./components/Sections/Portfolio";
import Logos from "./components/Sections/Logos";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Logos /> */}
      <About />
      <Highlights />
      <Services />
      <Portfolio />
      <CTA />
      {/* <WhatsAppButton /> */}
    </main>
  );
}
