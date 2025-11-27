import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20 animate-glow-pulse"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(180,100,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(180,100,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ top: '10%', left: '10%' }}></div>
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ top: '60%', right: '10%', animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ bottom: '10%', left: '50%', animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-primary/20 backdrop-blur-sm hover-lift">
            <span className="text-xs sm:text-sm font-semibold gradient-text">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {t.hero.name}
            <span className="gradient-text block mt-2">{t.hero.nickname}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-in px-4">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl hover-lift shadow-glow w-full sm:w-auto"
              onClick={scrollToProjects}
            >
              {t.hero.viewWork}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gradient-border bg-transparent hover:bg-card/50 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl hover-lift w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.hero.getInTouch}
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
