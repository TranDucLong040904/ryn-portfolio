import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover-lift shadow-card">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary animate-glow-pulse">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.contact.email}</h3>
                <a href="mailto:nta13.92@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                  nta13.92@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover-lift shadow-card">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary animate-glow-pulse" style={{ animationDelay: '0.2s' }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.contact.phone}</h3>
                <a href="tel:+84779371792" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                  077.937.1792
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover-lift shadow-card">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary animate-glow-pulse" style={{ animationDelay: '0.4s' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.contact.location}</h3>          
                 <a href="https://maps.app.goo.gl/hRx2rD4KTJcrMVaFA" target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                  {t.contact.address}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
