import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Scalable EV Charging Network CMS",
      description: "Led end-to-end architecture of a central management system and Android app for smart EV charging stations. Scaled to manage 100+ stations with 1,000+ users.",
      achievements: [
        "99.9% communication reliability using OCPP over WebSockets",
        "Processed ₹25 Lakh+ transactions via Razorpay/PayTM integration",
        "Reduced downtime by 80% through robust error handling",
        "Built real-time monitoring and control interfaces"
      ],
      tags: ["PHP", "JavaScript", "MySQL", "Android", "OCPP", "AWS", "WebSockets"],
      highlight: true
    },
    {
      title: "OCPP Protocol Integration for EVSE",
      description: "Designed and implemented OCPP 1.6/2.0 compliant firmware for EV charging hardware, enabling seamless communication with central servers.",
      achievements: [
        "Full OCPP 1.6J and 2.0.1 compliance",
        "WebSocket-based real-time communication",
        "Support for CCS2, GBT, and AC Type-2 protocols",
        "Integrated with Raspberry Pi and ESP32"
      ],
      tags: ["C", "C++", "Python", "Raspberry Pi", "ESP32", "WebSockets", "JSON"]
    },
    {
      title: "Industrial SCADA & Automation Suite",
      description: "Developed in-house SCADA solutions for industrial automation, replacing expensive third-party tools and improving system reliability.",
      achievements: [
        "60% improvement in system reliability",
        "35% cost reduction vs third-party solutions",
        "Real-time data acquisition and visualization",
        "MODBUS and CAN protocol integration"
      ],
      tags: ["C", "Python", "SCADA", "MODBUS", "CAN", "Qt", "Industrial IoT"]
    },
    {
      title: "Smart Building Automation System",
      description: "IoT-based building management system with RFID attendance, energy monitoring, and automated controls for lighting and HVAC.",
      achievements: [
        "Reduced energy consumption by 30%",
        "Automated attendance tracking system",
        "Real-time energy monitoring dashboard",
        "Remote control via mobile app"
      ],
      tags: ["Python", "IoT", "MQTT", "WiFi", "BLE", "Zigbee", "Android"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 ${
                project.highlight ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                {project.highlight && (
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
