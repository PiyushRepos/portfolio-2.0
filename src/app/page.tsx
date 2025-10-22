import Container from "@/components/container";
import { Hero, Projects } from "@/components";
import Skills from "@/components/Skills";

function page() {
  return (
    <Container>
      <Hero />
      <Projects />
      <Skills />
    </Container>
  );
}

export default page;
