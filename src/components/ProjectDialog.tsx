import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/content/projects";

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl gradient-text">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="rounded-lg w-full h-48 object-cover"
              />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Overview</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          {project.problem && (
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Problem</h3>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Solution</h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Key Highlights</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">⚡</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.learned && project.learned.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">What I Learned</h3>
              <ul className="space-y-2">
                {project.learned.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.links && (
            <div className="flex gap-4 pt-4">
              {project.links.live && (
                <Button
                  onClick={() => window.open(project.links?.live, "_blank")}
                  className="neon-glow"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              )}
              {project.links.repo && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.links?.repo, "_blank")}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
