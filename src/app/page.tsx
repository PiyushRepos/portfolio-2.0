import { Hero, Projects } from "@/components";
import About from "@/components/About";
import Container from "@/components/container";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

function page() {
  return (
    <Container>
      <div className="absolute left-0 -z-10 h-1/2 w-full bg-radial-[circle_at_center] from-neutral-400/5 to-transparent dark:from-white/10 dark:to-transparent" />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <CTA />
      <Footer />
    </Container>
  );
}

export default page;
