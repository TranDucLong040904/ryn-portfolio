import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

// Import event images
import gameVerseImg from "@/assets/event-gameverse.jpg";
import gameOffline1Img from "@/assets/event-game-offline-1.jpg";
import gameOffline2Img from "@/assets/event-game-offline-2.jpg";
import gameOffline3Img from "@/assets/event-game-offline-3.jpg";
import autumnFest1Img from "@/assets/event-autumn-fest.jpg";
import autumnFest2Img from "@/assets/event-autumn-fest-2.jpg";
import autumnFest3Img from "@/assets/event-autumn-fest-3.jpg";
import autumnFest4Img from "@/assets/event-autumn-fest-4.jpg";
import keight1Img from "@/assets/event-keight-1.jpg";
import keight2Img from "@/assets/event-keight-2.jpg";
import keight3Img from "@/assets/event-keight-3.jpg";

const Events = () => {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Map event images
  const eventImagesMap: { [key: string]: string[] } = {
    "Vietnam GameVerse": [gameVerseImg],
    "Game Launch Offline Events": [gameOffline1Img, gameOffline2Img, gameOffline3Img],
    "Autumn Fest 2025": [autumnFest1Img, autumnFest2Img, autumnFest3Img, autumnFest4Img],
    "K-Eight Events": [keight1Img, keight2Img, keight3Img],
    // Vietnamese titles
    "Sự kiện Offline Ra mắt Game": [gameOffline1Img, gameOffline2Img, gameOffline3Img],
    "Sự kiện K-Eight": [keight1Img, keight2Img, keight3Img]
  };

  return (
    <section id="events" className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.events.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.events.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {t.events.events.map((event: any, index: number) => {
              const eventImages = eventImagesMap[event.title] || [];
              
              return (
              <Card 
                key={index} 
                className="bg-card border-border overflow-hidden hover-lift animate-slide-in shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className={`grid ${eventImages.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-1`}>
                    {eventImages.map((img: string, imgIndex: number) => (
                      <div 
                        key={imgIndex}
                        className={`relative ${event.images.length === 1 ? 'col-span-2' : imgIndex === 0 && event.images.length === 3 ? 'col-span-2' : ''} cursor-pointer group overflow-hidden`}
                        onClick={() => setLightboxImage(img)}
                      >
                        <img
                          src={img}
                          alt={`${event.title} ${imgIndex + 1}`}
                          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                            eventImages.length === 1 ? 'h-64' : imgIndex === 0 && eventImages.length === 3 ? 'h-48' : 'h-40'
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="p-3 sm:p-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <h3 className="text-2xl font-bold mb-3 cursor-pointer hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl sm:text-2xl md:text-3xl mb-4">{event.title}</DialogTitle>
                          <DialogDescription asChild>
                            <div className="space-y-4">
                              <p className="text-base sm:text-lg text-foreground">{event.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {event.metrics.map((metric: string, i: number) => (
                                  <Badge key={i} variant="secondary">{metric}</Badge>
                                ))}
                              </div>
                              {event.link && (
                                <Button asChild>
                                  <a href={event.link} target="_blank" rel="noopener noreferrer">
                                    {t.events.viewDetails} <ExternalLink className="w-4 h-4 ml-2" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.metrics.slice(0, 3).map((metric: string, i: number) => (
                        <Badge key={i} variant="secondary" className="text-xs">{metric}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 p-2 bg-white/10 rounded-full">
            <X className="w-6 h-6 text-white" />
          </button>
          <img src={lightboxImage} alt="Enlarged" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </section>
  );
};

export default Events;
