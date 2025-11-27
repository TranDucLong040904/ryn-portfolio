import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Skills from "@/components/Skills";
import Platforms from "@/components/Platforms";
import Contact from "@/components/Contact";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Events />
      <Skills />
      <Platforms />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>{t.footer.text}</p>
      </footer>
    </main>
  );
};

export default Index;
