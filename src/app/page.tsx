import Hero from "./_components/Sections/Hero";
import CTA from "./_components/Sections/CTA";
import Highlights from "./_components/Sections/Highlights";
import About from "./_components/Sections/About";
import Services from "./_components/Sections/Services";
import Testimonials from "./_components/Sections/Testimonials";
import WhatsAppButton from "./_components/WppButton";
import GetApp from "./_components/Sections/GetApp";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Highlights />
        <About />
        <GetApp />
        <Services />
        <Testimonials />
        <CTA />
        <WhatsAppButton />
      </main>
    </>
  );
}
