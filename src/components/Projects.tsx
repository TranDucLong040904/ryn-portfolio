import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import truTienImg from "@/assets/project-tru-tien.jpg";
import tieuNgaoImg from "@/assets/project-tieu-ngao.jpg";
import eventImg from "@/assets/event-offline.jpg";

const Projects = () => {
  const { t } = useLanguage();
  
  const projectImages = [truTienImg, tieuNgaoImg, eventImg];
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {t.projects.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.projects.map((project, index) => (
              <Dialog key={index}>
                <Card 
                  className="bg-card border-border hover-lift animate-slide-in group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <DialogTrigger asChild>
                    <div className="aspect-video overflow-hidden cursor-pointer">
                      <img 
                        src={projectImages[index]} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </DialogTrigger>
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

                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
                    <DialogDescription className="text-base pt-2">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img 
                      src={projectImages[index]} 
                      alt={project.title}
                      className="w-full rounded-lg"
                    />
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Key Metrics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.metrics.map((metric, i) => (
                            <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {project.link && (
                        <Button 
                          className="w-full bg-gradient-primary hover:opacity-90"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.projects.viewDetails}
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

export default Projects;
