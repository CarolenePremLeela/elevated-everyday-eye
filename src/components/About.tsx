import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "6+ Years Experience",
      description: "Full-stack development and embedded systems"
    },
    {
      icon: Users,
      title: "25+ Engineers Led",
      description: "Team leadership and project management"
    },
    {
      icon: Rocket,
      title: "75+ Projects",
      description: "Delivered across various domains"
    },
    {
      icon: Award,
      title: "Best Engineer 2024",
      description: "Recognized for exceptional contribution"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm a passionate Full Stack Developer with extensive experience in building scalable 
              applications and embedded systems. My expertise spans across EV charging infrastructure, 
              web applications, mobile development, and IoT solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              At Tuckermotors, I led a team of 25 engineers in developing an EV charging CMS that 
              manages 100+ stations with 99.9% uptime, processing over 25 lakh in transactions. 
              I specialize in turning complex technical challenges into elegant, efficient solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm particularly skilled in cloud architecture, API development, and creating 
              seamless user experiences. I thrive in collaborative environments and love 
              mentoring junior developers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
