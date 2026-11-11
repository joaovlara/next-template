import Hero from "./_components/Sections/Hero";
import CTA from "./_components/Sections/CTA";
import Highlights from "./_components/Sections/Highlights";
import About from "./_components/Sections/About";
import Services from "./_components/Sections/Services";
import Testimonials from "./_components/Sections/Testimonials";
import WhatsAppButton from "./_components/WppButton";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Highlights />
        <About />
        <Services />
        <Testimonials />
        <WhatsAppButton />
        <CTA />
      </main>
    </>
  );
}
