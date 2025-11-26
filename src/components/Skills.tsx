import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Megaphone, BarChart3, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Target,
    title: "User Acquisition",
    description: "Expert in paid ads, ASO, and organic growth strategies across multiple platforms",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven campaigns optimized for ROAS, LTV, and player retention",
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Building engaged communities through Discord, social media, and forums",
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Partnerships with gaming influencers and content creators for maximum reach",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Deep dive into player behavior, conversion funnels, and campaign performance",
  },
  {
    icon: Sparkles,
    title: "Creative Strategy",
    description: "Compelling narratives and visual content that resonates with gamers",
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
