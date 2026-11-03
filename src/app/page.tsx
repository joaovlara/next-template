import Hero from "./components/Sections/Hero";
import CTA from "./components/Sections/CTA";
import WhatsAppButton from "./components/WppButton";
import Highlights from "./components/Sections/Highlights";
import About from "./components/Sections/About";
import Services from "./components/Sections/Services";
import Testimonials from "./components/Sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Highlights />
      <Testimonials />
      <CTA />
      {/* <WhatsAppButton /> */}
    </main>
  );
}
