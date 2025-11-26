import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import gameverseImg from "@/assets/event-gameverse.jpg";
import autumnFestImg from "@/assets/event-autumn-fest.jpg";
import offlineImg from "@/assets/event-offline.jpg";

const Events = () => {
  const { t } = useLanguage();
  
  const eventImages = [gameverseImg, autumnFestImg, offlineImg];
  
  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.events.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.events.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.events.events.map((event, index) => (
              <Dialog key={index}>
                <Card 
                  className="bg-card border-border hover-lift animate-slide-in group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <DialogTrigger asChild>
                    <div className="aspect-video overflow-hidden cursor-pointer">
                      <img 
                        src={eventImages[index]} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </DialogTrigger>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold group-hover:gradient-text transition-all">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.metrics.map((metric, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl gradient-text">{event.title}</DialogTitle>
                    <DialogDescription className="text-base pt-2">
                      {event.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img 
                      src={eventImages[index]} 
                      alt={event.title}
                      className="w-full rounded-lg"
                    />
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Key Metrics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.metrics.map((metric, i) => (
                            <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag, i) => (
                            <Badge key={i} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {event.link && (
                        <Button 
                          className="w-full bg-gradient-primary hover:opacity-90"
                          onClick={() => window.open(event.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.events.viewDetails}
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
