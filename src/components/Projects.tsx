import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
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
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
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
                <div className="flex gap-2">
                  {project.isPersonal && (
                    <Badge variant="outline">Personal Project</Badge>
                  )}
                  {project.featured && (
                    <Badge variant="default">Featured</Badge>
                  )}
                </div>
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
