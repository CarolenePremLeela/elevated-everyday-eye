import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

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
    <section id="contact" className="scroll-mt-16 px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="07" title="Contact" note="Open to technical leadership, product engineering, and meaningful collaborations." />
        
         <p className="mb-12 max-w-2xl font-display text-3xl leading-snug text-foreground md:text-4xl">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations. 
          Feel free to reach out!
        </p>

         <Card className="mb-10 border-x-0 bg-transparent p-0 shadow-none">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
               <div key={index} className="flex items-start gap-4 border-b border-border py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                 <div className="border border-border p-3">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                 <div><h3 className="mb-1 font-mono text-[10px] uppercase text-burgundy">{info.label}</h3>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                 )}</div>
              </div>
            ))}
          </div>
        </Card>

         <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
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
