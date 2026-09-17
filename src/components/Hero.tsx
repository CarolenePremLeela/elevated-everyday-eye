import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { downloadResume } from "@/lib/resumeDownload";
import { toast } from "sonner";
import portraitAsset from "@/assets/carolene-portrait.png.asset.json";

const Hero = () => {
  const handleDownloadResume = async () => {
    try {
      await downloadResume();
      toast.success("Resume downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download resume. Please try again.");
    }
  };
  return (
    <section className="relative min-h-[94svh] overflow-hidden border-b border-border pt-20">
      <div className="container mx-auto grid min-h-[calc(94svh-5rem)] max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:py-14">
        <div className="relative mx-auto w-full max-w-[440px] animate-fade-in lg:order-1">
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-gold" />
          <figure className="relative border border-border bg-paper p-3 shadow-[var(--shadow-card)]">
            <img src={portraitAsset.url} alt="Carolene Prem Leela Raja Singh" className="aspect-[4/5] w-full object-cover object-[center_24%]" />
            <figcaption className="flex justify-between border-t border-border px-1 pt-3 font-mono text-[10px] uppercase text-muted-foreground">
              <span>Technical Team Lead</span><span>Madurai, India</span>
            </figcaption>
          </figure>
        </div>

        <div className="animate-fade-in lg:order-2">
          <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
            <span>Portfolio</span><span className="h-px w-10 bg-gold" /><span>2026</span>
          </div>
          <h1 className="max-w-3xl font-display text-6xl font-normal leading-[0.92] text-foreground sm:text-7xl lg:text-[6.6rem]">
            Carolene Prem <em className="font-normal text-burgundy">Leela</em>
          </h1>
          <p className="mt-7 max-w-2xl border-l border-gold pl-5 text-xl leading-snug text-primary md:text-2xl">
            Technical Team Lead · Full-Stack & Embedded Systems Engineer
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            Eight years of experience leading teams and building dependable web, mobile, EV charging, and embedded systems—now accelerating delivery through thoughtful AI-assisted engineering.
          </p>

          <div className="mt-7 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-5">
            <a href="mailto:carolinepremleela@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              carolinepremleela@gmail.com
            </a>
            <a href="tel:+919487529141" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 9487529141
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadResume}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-5 border-t border-border pt-5">
            <a 
              href="https://github.com/CarolenePremLeela" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/carolene-prem-leela" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
      </div>
    </section>
  );
};

export default Hero;
