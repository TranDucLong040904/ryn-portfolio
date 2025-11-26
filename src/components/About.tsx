import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.about.title}
            </h2>
            <p className="text-xl gradient-text">{t.about.subtitle}</p>
          </div>
          
          <Card className="bg-card border-border p-8 hover-lift shadow-card">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold gradient-text">{t.about.keyAchievements}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {t.about.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start hover:text-foreground transition-colors">
                      <span className="text-primary mr-3 text-xl">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold gradient-text">{t.about.workHistory}</h3>
                <div className="space-y-6">
                  {t.about.history.map((item, i) => (
                    <div key={i} className="border-l-2 border-primary pl-4 hover:border-accent transition-colors">
                      <p className="text-sm text-primary font-semibold mb-1">{item.period}</p>
                      <h4 className="font-bold text-foreground text-lg">{item.role}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
