import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Events />
      <Skills />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Nguyen Tu Anh (Ryn). Marketing Leader | Strategic Planner | Event Manager</p>
      </footer>
    </main>
  );
};

export default Index;
