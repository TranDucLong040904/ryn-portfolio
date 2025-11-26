import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2024 Game Marketing Portfolio. Crafted with passion for gaming.</p>
      </footer>
    </main>
  );
};

export default Index;
