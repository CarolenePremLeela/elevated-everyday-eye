import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "carolinepremleela@gmail.com",
      href: "mailto:carolinepremleela@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9487529141",
      href: "tel:+919487529141"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madurai, Tamil Nadu, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/CarolenePremLeela"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/carolene-prem-leela"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
        
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations. 
          Feel free to reach out!
        </p>

        <Card className="p-8 bg-card mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/20 mb-3">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{info.label}</h3>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </Card>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <Button 
                key={index}
                asChild
                size="lg"
                variant="outline"
              >
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <social.icon className="w-5 h-5" />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>

          <Button asChild size="lg">
            <a href="mailto:carolinepremleela@gmail.com">
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
