import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-16 px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="05" title="Education" note="Academic foundations, continued learning, and professional recognition." />

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-x-0 border-b-0 bg-transparent p-6 shadow-none">
            <div className="flex items-start gap-4">
               <div className="border border-border p-3">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                 <h3 className="mb-2 font-display text-2xl">Bachelor of Engineering</h3>
                <p className="text-muted-foreground mb-1">Electronics & Communication Engineering</p>
                <p className="text-sm text-muted-foreground">PA College of Engineering, Pollachi</p>
                <p className="text-sm text-muted-foreground">June 2014 - May 2018 • CGPA: 7.45</p>
              </div>
            </div>
          </Card>

          <Card className="border-x-0 border-b-0 bg-transparent p-6 shadow-none">
            <div className="flex items-start gap-4">
               <div className="border border-border p-3">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                 <h3 className="mb-4 font-display text-2xl">Certifications</h3>
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

        <Card className="mt-8 border-x-0 border-b-0 bg-transparent p-6 shadow-none">
          <div className="flex items-start gap-4">
             <div className="border border-border p-3">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
               <h3 className="mb-2 font-display text-2xl">Achievements & Publications</h3>
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
