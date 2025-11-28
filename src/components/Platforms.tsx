import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, Megaphone, Share2, Palette, Music, Video, Scissors, Image, FileSpreadsheet, Presentation, Facebook, StickyNote, Mail } from "lucide-react";

// Import platform images
import googleAnalyticsImg from "@/assets/platform-google-analytics.jpg";
import googleAdsImg from "@/assets/platform-google-ads.jpg";
import dataAiImg from "@/assets/platform-dataai.jpg";
import metaAdsImg from "@/assets/platform-meta-ads.jpg";
import appsflyerImg from "@/assets/platform-appsflyer.jpg";

const Platforms = () => {
  const { t } = useLanguage();
  
  // Platform images mapping
  const platformImages: { [key: string]: string } = {
    "Google Analytics": googleAnalyticsImg,
    "Google Ads": googleAdsImg,
    "Data.ai": dataAiImg,
    "Meta Ads": metaAdsImg,
    "Appsflyer": appsflyerImg
  };

  // Platform specific icons for those without images
  const platformIcons: { [key: string]: React.ComponentType<any> } = {
    "TikTok Ads": Video,
    "TikTok": Music,
    "Canva": Palette,
    "Capcut": Scissors,
    "CapCut": Scissors,
    "Photoshop": Image,
    "Excel": FileSpreadsheet,
    "PowerPoint": Presentation,
    "Facebook Blueprint": Facebook,
    "Notion": StickyNote,
    "Vero": Mail
  };

  // Category icons mapping
  const categoryIcons: { [key: string]: React.ComponentType<any> } = {
    "Analytics": BarChart3,
    "Phân tích": BarChart3,
    "Advertising": Megaphone,
    "Quảng cáo": Megaphone,
    "Social Media": Share2,
    "Mạng xã hội": Share2,
    "Design": Palette,
    "Thiết kế": Palette
  };
  
  // Group platforms by category
  const groupedPlatforms = t.platforms.items.reduce((acc: any, platform: any) => {
    if (!acc[platform.category]) {
      acc[platform.category] = [];
    }
    acc[platform.category].push(platform);
    return acc;
  }, {});

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 sm:right-20 w-28 sm:w-36 h-28 sm:h-36 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 sm:left-20 w-32 sm:w-40 h-32 sm:h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
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
          
          <div className="space-y-6 sm:space-y-8">
            {Object.entries(groupedPlatforms).map(([category, platforms]: [string, any], categoryIndex) => {
              const CategoryIcon = categoryIcons[category];
              
              return (
                <Card 
                  key={category}
                  className="bg-card/80 backdrop-blur-sm border-border/50 animate-slide-in shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      {CategoryIcon && (
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                          <CategoryIcon className="w-5 h-5" />
                        </div>
                      )}
                      <Badge variant="secondary" className="text-sm px-4 py-1.5 font-semibold">
                        {category}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                      {platforms.map((platform: any, index: number) => {
                        const hasImage = platformImages[platform.name];
                        const PlatformIcon = platformIcons[platform.name];
                        
                        return (
                          <div
                            key={index}
                            className="group relative bg-gradient-to-br from-background to-muted/30 rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden hover-lift p-5"
                          >
                            <div className="flex flex-col items-center justify-center gap-3">
                              {hasImage ? (
                                <div className="w-16 h-16 rounded-full overflow-hidden ring-0 group-hover:ring-2 group-hover:ring-primary/30 transition-all duration-300 group-hover:scale-110 bg-white dark:bg-background">
                                  <img 
                                    src={hasImage} 
                                    alt={platform.name}
                                    className="w-full h-full object-contain p-2"
                                  />
                                </div>
                              ) : PlatformIcon ? (
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ring-0 group-hover:ring-2 group-hover:ring-primary/30 transition-all duration-300 group-hover:scale-110">
                                  <PlatformIcon className="w-8 h-8 text-primary" />
                                </div>
                              ) : (
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center ring-0 group-hover:ring-2 group-hover:ring-primary/30 transition-all duration-300 group-hover:scale-110">
                                  <span className="text-2xl font-bold text-muted-foreground">
                                    {platform.name.charAt(0)}
                                  </span>
                                </div>
                              )}
                              
                              <span className="font-semibold text-sm text-foreground text-center leading-tight">
                                {platform.name}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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

export default Platforms;
