import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gameverseImg from "@/assets/event-gameverse.jpg";
import autumnFestImg from "@/assets/event-autumn-fest.jpg";
import offlineImg from "@/assets/event-offline.jpg";

const events = [
  {
    title: "Vietnam GameVerse",
    description: "In charge of GAMOTA's booth at Vietnam GameVerse, the largest annual gaming festival attracting tens of thousands of attendees and 100+ booths.",
    metrics: ["10K+ Attendees", "100+ Booths", "3 Years"],
    image: gameverseImg,
  },
  {
    title: "Autumn Fest 2025",
    description: "Spearheaded the company's largest music & cultural event with 8,000+ attendees, managing master plans, stage designs, and A-list artist bookings.",
    metrics: ["8K+ Attendees", "Music & Culture", "Largest Event"],
    image: autumnFestImg,
  },
  {
    title: "Game Launch Events",
    description: "Organized large-scale offline events for key titles (Tru Tien 3D, Tieu Ngao, Y Thien) achieving 150-250% Revenue KPI and 80-200% ROE.",
    metrics: ["150-250% Revenue", "80-200% ROE", "Multiple Titles"],
    image: offlineImg,
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Event <span className="gradient-text">Management</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Large-scale events that drive brand awareness and community engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover-lift animate-slide-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
