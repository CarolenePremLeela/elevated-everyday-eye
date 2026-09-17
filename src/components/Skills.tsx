import SectionHeading from "@/components/SectionHeading";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "PHP", "JavaScript", "C++", "SQL"]
    },
    {
      title: "Frontend & Mobile",
      skills: ["HTML5/CSS3", "Android SDK", "Flutter", "Qt Framework", "React"]
    },
    {
      title: "Backend & Database",
      skills: ["RESTful APIs", "Microservices", "MySQL", "PostgreSQL", "MVC Pattern"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3)", "Docker", "CI/CD", "Git", "Cloud Architecture"]
    },
    {
      title: "Embedded & IoT",
      skills: ["OCPP", "MODBUS", "MQTT", "CAN Protocol", "Hardware Integration"]
    },
    {
      title: "Tools & Practices",
      skills: ["Android Studio", "VSCode", "Postman", "JIRA", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-16 px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="03" title="Technical Index" note="A working toolkit spanning software, cloud, mobile, and connected hardware." />

        <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <article
              key={index}
              className="border-b border-r border-border p-6 transition-colors hover:bg-card md:p-8"
            >
              <div className="mb-5 flex items-baseline gap-3">
                <span className="font-mono text-[10px] text-burgundy">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="border-b border-border py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
