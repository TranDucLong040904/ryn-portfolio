import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, Megaphone, Share2, Wrench } from "lucide-react";

// Import platform images
import googleAnalyticsImg from "@/assets/platform-google-analytics.png";
import googleAdsImg from "@/assets/platform-google-ads.png";
import dataAiImg from "@/assets/platform-dataai.png";
import metaAdsImg from "@/assets/platform-meta-ads.png";
import appsflyerImg from "@/assets/platform-appsflyer.png";
import tiktokImg from "@/assets/platform-tiktok.png";
import canvaImg from "@/assets/platform-canva.png";
import photoshopImg from "@/assets/platform-photoshop.png";
import excelImg from "@/assets/platform-excel.png";
import powerpointImg from "@/assets/platform-powerpoint.png";
import facebookImg from "@/assets/platform-facebook.png";
import notionImg from "@/assets/platform-notion.png";
import capcutImg from "@/assets/platform-capcut.png";
import googleSheetsImg from "@/assets/platform-google-sheets.png";
import trelloImg from "@/assets/platform-trello.png";
import jiraImg from "@/assets/platform-jira.png";
import aiToolsImg from "@/assets/platform-ai-tools.png";

const Platforms = () => {
  const { t } = useLanguage();
  
  // Platform images mapping
  const platformImages: { [key: string]: string } = {
    "Google Analytics": googleAnalyticsImg,
    "Google Ads": googleAdsImg,
    "Data.ai": dataAiImg,
    "Meta Ads": metaAdsImg,
    "Appsflyer": appsflyerImg,
    "TikTok": tiktokImg,
    "TikTok Ads": tiktokImg,
    "Canva": canvaImg,
    "Photoshop": photoshopImg,
    "Excel": excelImg,
    "PowerPoint": powerpointImg,
    "Facebook Blueprint": facebookImg,
    "Notion": notionImg,
    "CapCut": capcutImg,
    "Google Sheets": googleSheetsImg,
    "Trello": trelloImg,
    "Jira": jiraImg,
    "AI Tools": aiToolsImg
  };

  // Category icons mapping
  const categoryIcons: { [key: string]: React.ComponentType<any> } = {
    "Analytics & Data": BarChart3,
    "Phân tích & Dữ liệu": BarChart3,
    "Advertising": Megaphone,
    "Quảng cáo": Megaphone,
    "Social Media": Share2,
    "Mạng xã hội": Share2,
    "Creative & Productivity": Wrench,
    "Sáng tạo & Năng suất": Wrench
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
                    
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
                      {platforms.map((platform: any, index: number) => {
                        const platformImage = platformImages[platform.name];
                        
                        return (
                          <div
                            key={index}
                            className="group relative bg-gradient-to-br from-background to-muted/30 rounded-lg sm:rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden hover-lift p-3 sm:p-5"
                          >
                            <div className="flex flex-col items-center justify-center gap-3">
                              {platformImage ? (
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center bg-white dark:bg-background shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                                  <img 
                                    src={platformImage} 
                                    alt={platform.name}
                                    className="w-8 sm:w-12 h-8 sm:h-12 object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                                  <span className="text-lg sm:text-2xl font-bold text-muted-foreground">
                                    {platform.name.charAt(0)}
                                  </span>
                                </div>
                              )}
                              
                              <span className="font-semibold text-xs sm:text-sm text-foreground text-center leading-tight">
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
