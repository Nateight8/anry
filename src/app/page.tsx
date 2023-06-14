import Image from "next/image";
import { P } from "../../components/ui/paragraph";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Skills from "../../components/skills/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
