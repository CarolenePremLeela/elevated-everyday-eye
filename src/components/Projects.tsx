import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and inventory management.",
    achievements: [
      "Implemented secure payment gateway integration",
      "Built real-time inventory tracking system",
      "Achieved 99.9% uptime with optimized architecture"
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: true
  },
  {
    id: "2",
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates and team features.",
    achievements: [
      "Designed intuitive drag-and-drop interface",
      "Implemented real-time collaboration features",
      "Reduced team coordination time by 40%"
    ],
    tags: ["TypeScript", "React", "WebSocket", "PostgreSQL"],
    featured: false
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description: "Data visualization platform for business intelligence and reporting.",
    achievements: [
      "Created interactive charts and graphs",
      "Built automated report generation system",
      "Integrated multiple data sources seamlessly"
    ],
    tags: ["React", "D3.js", "Python", "REST APIs"],
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
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
