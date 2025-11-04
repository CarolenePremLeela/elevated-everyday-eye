import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const Projects = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-destructive">Failed to load projects</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects?.map((project) => (
            <Card 
              key={project.id}
              className={`p-6 bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                {project.featured && (
                  <Badge variant="default">Featured</Badge>
                )}
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
