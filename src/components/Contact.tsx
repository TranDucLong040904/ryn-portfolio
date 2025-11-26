import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-background opacity-90"></div>
            <CardContent className="pt-12 pb-12 relative z-10">
              <div className="text-center animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Let's Create Something
                  <span className="gradient-text block mt-2">Amazing Together</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Looking for a passionate game marketer to level up your project? Let's talk!
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl hover-lift"
                    asChild
                  >
                    <a href="mailto:your.email@example.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Me
                    </a>
                  </Button>
                </div>
                
                <div className="flex gap-6 justify-center">
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors hover-lift"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-primary" />
                  </a>
                  <a 
                    href="https://twitter.com/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors hover-lift"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
