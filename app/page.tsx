import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ExtraCurricular from "@/components/ExtraCurricular";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <ExtraCurricular />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  );
}
