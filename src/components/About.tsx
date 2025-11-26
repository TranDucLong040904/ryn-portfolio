import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Who <span className="gradient-text">I Am</span>
            </h2>
          </div>
          
          <Card className="bg-card border-border p-8 hover-lift">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="text-primary font-semibold">Strategic Planner</span> with <span className="text-primary font-semibold">10+ years of experience</span>, including <span className="text-primary font-semibold">2+ years in leadership roles</span> managing campaigns and cross-functional teams.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Skilled in <span className="font-semibold text-foreground">data-driven, integrated marketing</span> across digital and offline channels, turning business goals into measurable brand and performance results.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold gradient-text">Key Achievements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Planned and executed 30+ IMC campaigns with average budget of 15B VND</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Collaborated with 60+ KOLs including A-list celebrities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Acquired 2M+ users for GAMOTA's products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Contributed to GAMOTA winning Best Game Publisher 2024</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold gradient-text">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Marketing Leader</h4>
                    <p className="text-sm text-muted-foreground">GAMOTA • 2023 - 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Strategic Planner</h4>
                    <p className="text-sm text-muted-foreground">GAMOTA • 2014 - 2022</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Event Manager</h4>
                    <p className="text-sm text-muted-foreground">2024 - 2025</p>
                  </div>
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
