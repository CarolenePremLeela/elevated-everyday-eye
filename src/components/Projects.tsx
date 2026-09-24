import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    id: "0",
    title: "Nrolled – Workforce & Job Management Platform",
    description: "Architected and developed a role-based workforce and job management platform enabling structured job assignments, notifications, and access control across multiple organizations.",
    achievements: [
      "Designed normalized relational database schema with proper 1:1 and N:N mappings",
      "Implemented Role-Based Access Control (RBAC) for Admin, Company, Division, Customer, and Worker roles",
      "Built job creation workflow separating workforce assignments from job records",
      "Integrated secure Supabase RLS policies for data isolation",
      "Developed real-time notifications and invite-based job assignment system",
      "Optimized enum validation logic and resolved role enforcement trigger issues"
    ],
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Edge Functions", "RBAC"],
    featured: true
  },
  {
    id: "1",
    title: "Scalable EV Charging Network CMS & Mobile Platform",
    description: "Led the end-to-end architecture and development of a central management system and Android application for a network of smart EV charging stations.",
    achievements: [
      "Scaled the system to manage 100+ charging stations and a user base of over 1,000 customers",
      "Achieved 99.9% communication reliability between hardware stations and the central server by implementing the OCPP protocol over WebSockets",
      "Integrated Razorpay/PayTM gateways, automating payments and processing over ₹5 Lakh in transactions within the first year",
      "Reduced system-wide downtime by 80% through robust error handling and protocol optimizations"
    ],
    tags: ["PHP", "JavaScript", "MySQL", "Android", "OCPP 1.6/2.0", "AWS", "REST APIs", "WebSockets"],
    featured: true
  },
  {
    id: "2",
    title: "OCPP Protocol Integration for EVSE Compliance",
    description: "Engineered firmware and server-side solutions to ensure compliance with international EV charging standards (OCPP, CCS2, GBT, ACTYPE2) across multiple hardware variants.",
    achievements: [
      "Successfully certified 5+ different charger models (7.2kW AC, 22kW AC, DC Fast Chargers) for market launch",
      "Enabled interoperability with 3+ third-party servers and chargers, expanding market reach and compatibility",
      "Reduced development time for new hardware variants by 30% by creating a modular firmware architecture"
    ],
    tags: ["Embedded C", "C++", "Python", "Raspberry Pi", "ESP32", "JSON", "WebSockets", "Modbus"],
    featured: false
  },
  {
    id: "3",
    title: "In-House Industrial SCADA & Data Acquisition System",
    description: "Developed a proprietary SCADA software suite to monitor and control solar power plants, eliminating reliance on expensive third-party solutions.",
    achievements: [
      "Reduced company expenditure on third-party SCADA licenses by 40% annually",
      "Deployed the system across 15+ solar plants, providing real-time monitoring and fault detection",
      "Automated data reporting, saving 5+ hours of manual work per week for plant operators"
    ],
    tags: ["C", "C++", "Qt", "Python", "Modbus RTU/TCP", "XML", "MySQL"],
    featured: false
  },
  {
    id: "4",
    title: "Full-Stack IoT-Based Home & Industrial Automation",
    description: "Designed and programmed integrated automation systems for industrial control (VFD, AMF) and smart home environments (multi-node systems, sensor networks).",
    achievements: [
      "Developed a reusable firmware framework that cut project setup time by 50%"
    ],
    tags: ["C", "Python", "Raspberry Pi", "ESP32", "BLE", "Zigbee", "LoRa", "MySQL", "PHP"],
    featured: false
  },
  {
    id: "5",
    title: "BookFinder API",
    description: "A scalable RESTful API to search, aggregate, and manage a digital library database.",
    achievements: [
      "Designed an asynchronous API using FastAPI to handle high volumes of concurrent book metadata requests",
      "Containerized with Docker and implemented CI/CD with GitHub Actions, achieving 90% test coverage with pytest"
    ],
    tags: ["Python", "FastAPI", "Docker"],
    featured: false,
    link: "https://github.com/CarolenePremLeela/BookFinder",
    isPersonal: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16 border-y border-border bg-card/55 px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="04" title="Selected Work" note="Case studies in platforms, charging infrastructure, industrial systems, and APIs." />

        <div className="divide-y divide-border border-y border-border">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="grid gap-6 border-0 bg-transparent py-10 shadow-none md:grid-cols-[80px_1fr_1.2fr] md:gap-10 md:py-14"
            >
              <span className="font-display text-4xl text-gold">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="flex items-start gap-3">
                  <h3 className="font-display text-3xl leading-tight text-primary">{project.title}</h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.isPersonal && (
                    <Badge variant="outline">Personal Project</Badge>
                  )}
                  {project.featured && (
                    <Badge variant="default">Featured</Badge>
                  )}
                </div>
                <p className="mt-5 leading-7 text-muted-foreground">{project.description}</p>
              </div>

              <div><ul className="mb-6 space-y-3">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 text-burgundy">—</span>
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
              </div></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
