import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Calendar, BarChart3, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = {
  "Planning & Strategy": Target,
  "Digital & Data-driven Marketing": TrendingUp,
  "Stakeholder Management": Users,
  "Event & Community": Calendar,
  "Leadership": BarChart3,
  "Creative Direction": Lightbulb,
  "Hoạch định & Chiến lược": Target,
  "Marketing Số & Dữ liệu": TrendingUp,
  "Quản lý Đối tác": Users,
  "Sự kiện & Cộng đồng": Calendar,
  "Lãnh đạo": BarChart3,
  "Chỉ đạo Sáng tạo": Lightbulb,
};

const Skills = () => {
  const { t } = useLanguage();
  
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 sm:right-20 w-28 sm:w-36 h-28 sm:h-36 bg-accent/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 left-10 sm:left-20 w-32 sm:w-40 h-32 sm:h-40 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.skills.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.skills.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.skills.items.map((skill, index) => {
              const Icon = iconMap[skill.title as keyof typeof iconMap] || Target;
              return (
                <Card 
                  key={index} 
                  className="bg-card border-border hover-lift group animate-slide-in shadow-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary group-hover:animate-glow-pulse">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
