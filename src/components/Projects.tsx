import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Mobile RPG Launch Campaign",
    description: "Led the global launch strategy for a mobile RPG, achieving 2M+ downloads in the first month with a 45% retention rate.",
    metrics: ["2M+ Downloads", "45% Retention", "$500K Revenue"],
    tags: ["User Acquisition", "Social Media", "Influencer Marketing"],
  },
  {
    title: "Esports Tournament Promotion",
    description: "Coordinated marketing efforts for a major esports tournament, driving 500K+ concurrent viewers and 150% YoY growth.",
    metrics: ["500K+ Viewers", "150% Growth", "30+ Brands"],
    tags: ["Event Marketing", "Streaming", "Partnerships"],
  },
  {
    title: "Community Engagement Strategy",
    description: "Developed and executed community programs that increased Discord membership by 300% and improved player sentiment by 85%.",
    metrics: ["300% Growth", "85% Positive", "50K Members"],
    tags: ["Community", "Discord", "Content Creation"],
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
