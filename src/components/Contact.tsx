import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's collaborate on your next game marketing success story
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href="mailto:nta13.92@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  nta13.92@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href="tel:+84779371792" className="text-muted-foreground hover:text-primary transition-colors">
                  077.937.1792
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Ha Noi, Vietnam
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
