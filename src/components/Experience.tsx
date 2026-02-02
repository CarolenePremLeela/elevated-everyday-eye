import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Nrolled Inc, Toronto, Canada",
      period: "November 2025 - Present",
      role: "Senior Software Engineer",
      achievements: [
        "Headed end-to-end delivery of Nrolled’s platforms from MVP1 to MVP2, owning architecture, execution, and rollout",
        "Led design and implementation of workforce setup, vacancy planning, invite, enrollment, and favorites workflows across Staffing models",
        "Drove platform build using Lovable and Supabase, integrating backend services, automation, and data workflows",
        "Implemented cron-based orchestration and event-driven job creation to ensure accurate, scalable workforce operations",
        "Led INT → PROD migration, resolving data integrity, sequencing, and stability issues for production readiness",
        "Defined and refined AI prompts to automate setup, validation, and operational workflows",
      ],
      tags: ["Java","C#","Supabase","Lovable","MongoDB","REST APIs","Cron Jobs","Prompt Engineering","Event-Driven Architecture"]
    },
    {
      company: "Tuckermotors Private Limited, Madurai, Tamilnadu",
      period: "February 2020 - May 2024",
      role: "Senior Full-Stack Developer & Team Lead",
      achievements: [
        "Led team of 25 engineers in developing scalable EV charging CMS serving 100+ stations",
        "Implemented OCPP 1.6/2.0 protocol achieving 99.9% reliability, reducing downtime by 80%",
        "Integrated payment gateways processing over ₹25 lakh in transactions within first year",
        "Managed full software lifecycle using Agile, reducing time-to-market by 20%",
        "Developed cross-platform Flutter apps and Android applications with 15K+ downloads"
      ],
      tags: ["PHP", "Java", "Android", "Flutter", "AWS", "OCPP", "REST APIs"]
    },
    {
      company: "Firstcall Automation Private Limited, Madurai, Tamilnadu",
      period: "July 2018 - February 2020",
      role: "Embedded & Full-Stack Engineer",
      achievements: [
        "Developed optimized embedded software for industrial SCADA and home automation",
        "Reduced third-party SCADA tool expenses by 40% through in-house development",
        "Built full-stack web applications for real-time energy monitoring systems",
        "Promoted to Team Lead within a year with 50% salary increase",
        "Designed IoT solutions using MODBUS, CAN, and MQTT protocols"
      ],
      tags: ["C", "C++", "Python", "SCADA", "IoT", "MODBUS", "MQTT"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Experience</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.role}</h3>
                  <p className="text-xl font-semibold mb-1">{exp.company}</p>
                </div>
                <Badge variant="outline" className="w-fit text-sm">
                  {exp.period}
                </Badge>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">
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

export default Experience;
