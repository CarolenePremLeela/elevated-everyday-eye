import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";

const Experience = () => {
  const experiences = [
    {
      company: "Nrolled Inc, Toronto, Canada",
      period: "May 2026 - Present",
      role: "Technical Team Lead",
      achievements: [
        "Promoted to Technical Team Lead within 6 months, leading the engineering team across architecture, code quality, and delivery",
        "Drive extensive adoption of AI products — AI coding assistants and agentic tools — to accelerate development cycles and shorten delivery time",
        "Introduced AI-powered automated testing workflows, improving coverage and catching regressions early",
        "Own technical direction for workforce setup, vacancy planning, invite, enrollment, and favorites workflows across Staffing models",
        "Define and refine AI prompts to automate setup, validation, and operational workflows",
      ],
      tags: ["Team Leadership","AI-Assisted Development","Automated Testing","Java","C#","Supabase","Lovable AI","MongoDB","AWS(EC2, S3)","REST APIs","React Native", "TypeScript", "Payment Gateway", "Firebase","Cron Jobs","Prompt Engineering","Event-Driven Architecture"]
    },
    {
      company: "Nrolled Inc, Toronto, Canada",
      period: "November 2025 - April 2026",
      role: "Senior Software Engineer",
      achievements: [
        "Headed end-to-end delivery of Nrolled’s platforms from MVP1 to MVP2, owning architecture, execution, and rollout",
        "Led design and implementation of workforce setup, vacancy planning, invite, enrollment, and favorites workflows across Staffing models",
        "Drove platform build using Lovable and Supabase, integrating backend services, automation, and data workflows",
        "Implemented cron-based orchestration and event-driven job creation to ensure accurate, scalable workforce operations",
        "Led INT → PROD migration, resolving data integrity, sequencing, and stability issues for production readiness",
        "Defined and refined AI prompts to automate setup, validation, and operational workflows",
      ],
      tags: ["Java","C#","Supabase","Lovable AI","MongoDB","AWS(EC2, S3, SES)","REST APIs","React Native", "TypeScript", "Payment Gateway", "Firebase","Cron Jobs","Prompt Engineering","Event-Driven Architecture"]
    },
    {
      company: "Career Break",
      period: "May 2024 - November 2025",
      role: "Maternity and Paternity Leave",
      achievements: [
        "Took time for my toddlers growth and time well spent",
        "Continued self-directed learning in software engineering and prepared for new technologies and opportunities"
      ],
      tags: []
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
    <section id="experience" className="scroll-mt-16 border-y border-border bg-card/55 px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="02" title="Experience" note="A career chronology from embedded engineering to technical leadership." />

        <div className="relative space-y-0 before:absolute before:bottom-0 before:left-[7px] before:top-0 before:w-px before:bg-border md:before:left-[180px]">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="relative ml-7 grid border-x-0 border-t-0 bg-transparent p-0 py-10 shadow-none last:border-b-0 md:ml-0 md:grid-cols-[180px_1fr] md:gap-12"
            >
              <span className="absolute -left-[27px] top-12 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary md:left-[174px]" />
              <div className="mb-4 md:mb-0">
                <Badge variant="outline" className="border-0 p-0 text-burgundy">{exp.period}</Badge>
              </div>
              <div>
              <div className="mb-5">
                <div>
                  <h3 className="font-display text-3xl text-primary md:text-4xl">{exp.role}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase text-foreground">{exp.company}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1 text-gold">—</span>
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
