import SectionHeading from "@/components/SectionHeading";

const About = () => {
  const highlights = [
    {
      value: "8",
      title: "Years Experience",
      description: "Full-stack development and embedded systems"
    },
    {
      value: "25+",
      title: "Engineers Led",
      description: "Team leadership and project management"
    },
    {
      value: "75+",
      title: "Projects",
      description: "Delivered across various domains"
    },
    {
      value: "2024",
      title: "Best Engineer",
      description: "Recognized for exceptional contribution"
    }
  ];

  return (
    <section id="about" className="scroll-mt-16 px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="01" title="About" note="Engineer, team lead, and careful builder of systems that need to last." />

        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl space-y-6">
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

          <div className="grid grid-cols-2 border-l border-t border-border">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="border-b border-r border-border p-5 md:p-7"
              >
                <span className="font-display text-4xl text-burgundy md:text-5xl">{item.value}</span>
                <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
