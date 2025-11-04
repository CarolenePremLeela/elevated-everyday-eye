import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Education & Certifications</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bachelor of Engineering</h3>
                <p className="text-muted-foreground mb-1">Electronics & Communication Engineering</p>
                <p className="text-sm text-muted-foreground">PA College of Engineering, Pollachi</p>
                <p className="text-sm text-muted-foreground">June 2014 - May 2018 • CGPA: 7.45</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <ul className="space-y-2">
                  <li className="text-sm">
                    <span className="text-primary">▹</span> Java & SDLC Fundamentals - Great Learning
                  </li>
                  <li className="text-sm">
                    <span className="text-primary">▹</span> Web Development & DBMS - Infosys Campus Connect
                  </li>
                  <li className="text-sm">
                    <span className="text-primary">▹</span> Python (Linux) - PA College of Engineering
                  </li>
                  <li className="text-sm">
                    <span className="text-primary">▹</span> Embedded Systems: PIC & Atmel - PA College
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 mt-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/20">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Achievements & Publications</h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <div>
                    <span className="font-semibold">Best Engineer Award (2024)</span>
                    <p className="text-sm text-muted-foreground">Recognized for 5 years of exceptional contribution and leadership at Tuckermotors</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <div>
                    <span className="font-semibold">Published Research Paper</span>
                    <p className="text-sm text-muted-foreground">"Vehicle Control System Implementation using CAN Protocol" - International Journal of Engineering Research & Technology (IJERT), April 2018</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
