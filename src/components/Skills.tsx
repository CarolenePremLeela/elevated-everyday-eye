import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, Cpu, Smartphone, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "PHP", "JavaScript", "C++", "SQL"]
    },
    {
      icon: Smartphone,
      title: "Frontend & Mobile",
      skills: ["HTML5/CSS3", "Android SDK", "Flutter", "Qt Framework", "React"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["RESTful APIs", "Microservices", "MySQL", "PostgreSQL", "MVC Pattern"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3)", "Docker", "CI/CD", "Git", "Cloud Architecture"]
    },
    {
      icon: Cpu,
      title: "Embedded & IoT",
      skills: ["OCPP", "MODBUS", "MQTT", "CAN Protocol", "Hardware Integration"]
    },
    {
      icon: GitBranch,
      title: "Tools & Practices",
      skills: ["Android Studio", "VSCode", "Postman", "JIRA", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Technical Skills</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
