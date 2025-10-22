import { Hero, Projects } from "@/components";
import Container from "@/components/container";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

function page() {
  return (
    <Container>
      <div className="pointer-events-none fixed inset-0 z-10 rotate-180">
        <div className="absolute top-2/3 left-2/4 h-96 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_80%)]" />
      </div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </Container>
  );
}

export default page;
