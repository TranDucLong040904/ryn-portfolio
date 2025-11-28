import { Button } from "@/components/ui/button";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">Ryn</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group hover:drop-shadow-[0_2px_8px_hsl(var(--primary)/0.3)]"
            >
              <span className="relative">
                {t.nav.about}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group hover:drop-shadow-[0_2px_8px_hsl(var(--primary)/0.3)]"
            >
              <span className="relative">
                {t.nav.projects}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group hover:drop-shadow-[0_2px_8px_hsl(var(--primary)/0.3)]"
            >
              <span className="relative">
                {t.nav.events}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group hover:drop-shadow-[0_2px_8px_hsl(var(--primary)/0.3)]"
            >
              <span className="relative">
                {t.nav.skills}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group hover:drop-shadow-[0_2px_8px_hsl(var(--primary)/0.3)]"
            >
              <span className="relative">
                {t.nav.contact}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hover-lift"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs">{language.toUpperCase()}</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover-lift"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
