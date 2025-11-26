import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Calendar, BarChart3, Lightbulb } from "lucide-react";

const skills = [
  {
    icon: Target,
    title: "Planning & Strategy",
    description: "10+ years developing integrated marketing strategies and executing 30+ IMC campaigns with 15B VND average budget",
  },
  {
    icon: TrendingUp,
    title: "Digital & Data-driven Marketing",
    description: "Performance optimization achieving 110-130% NRU targets, ROI 1:1, and reducing CPN by 40%",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Collaborated with 60+ KOLs, A-list celebrities, and managed cross-functional teams across multiple campaigns",
  },
  {
    icon: Calendar,
    title: "Event & Community",
    description: "Organized large-scale events (8,000+ attendees) achieving 150-250% Revenue KPI and 80-200% ROE",
  },
  {
    icon: BarChart3,
    title: "Leadership",
    description: "2+ years in leadership roles managing campaigns, teams, and turning business goals into measurable results",
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    description: "Conceptualized themes, visuals, and interactive engagement activities driving 15M+ views on viral campaigns",
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Core <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized skills that drive measurable results in game marketing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover-lift group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
