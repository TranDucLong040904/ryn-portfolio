import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const Platforms = () => {
  const { t } = useLanguage();
  
  // Group platforms by category
  const groupedPlatforms = t.platforms.items.reduce((acc: any, platform: any) => {
    if (!acc[platform.category]) {
      acc[platform.category] = [];
    }
    acc[platform.category].push(platform);
    return acc;
  }, {});

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 sm:right-20 w-28 sm:w-36 h-28 sm:h-36 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 left-10 sm:left-20 w-32 sm:w-40 h-32 sm:h-40 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.platforms.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.platforms.subtitle}
            </p>
          </div>
          
          <div className="space-y-8">
            {Object.entries(groupedPlatforms).map(([category, platforms]: [string, any], categoryIndex) => (
              <Card 
                key={category}
                className="bg-card border-border animate-slide-in shadow-card"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {category}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {platforms.map((platform: any, index: number) => (
                      <div
                        key={index}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-muted transition-colors rounded-lg border border-border/50 hover:border-border hover-lift"
                      >
                        <span className="font-medium text-foreground">{platform.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
