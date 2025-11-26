import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import truTienImg from "@/assets/project-tru-tien.jpg";
import tieuNgaoImg from "@/assets/project-tieu-ngao.jpg";
import eventImg from "@/assets/event-offline.jpg";

const projects = [
  {
    title: "Tru Tien 3D",
    description: "Successfully launched mobile game project with 1M+ downloads, 15M+ views on viral campaign videos, and 16 large-scale offline community events that significantly boosted brand visibility.",
    metrics: ["1M+ Downloads", "15M+ Views", "16 Events"],
    tags: ["Launch Campaign", "Community Events", "Viral Marketing"],
    image: truTienImg,
  },
  {
    title: "Thieu Nien Anh Hung",
    description: "Drove high-impact launch achieving 100% of first-month revenue target with ROI 1:1. Organic NRU exceeded 130% of KPI with stable growth throughout Q1.",
    metrics: ["100% Revenue KPI", "130% NRU", "ROI 1:1"],
    tags: ["Performance Marketing", "User Acquisition", "ROI Optimization"],
    image: tieuNgaoImg,
  },
  {
    title: "Tran Ma AFK",
    description: "Spearheaded go-to-market strategy delivering 110% NRU and 120% organic NRU in first month, reducing CPN by 40% through optimized UA and branding.",
    metrics: ["110% NRU", "120% Organic", "-40% CPN"],
    tags: ["Go-to-Market", "Cost Optimization", "Branding"],
    image: eventImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Successful campaigns that drove player engagement and revenue growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover-lift animate-slide-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:gradient-text transition-all">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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

export default Projects;
