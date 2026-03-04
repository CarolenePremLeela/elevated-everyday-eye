import { Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const Languages = () => {
  const languages = [
    { name: "English", level: "Professional" },
    { name: "Tamil", level: "Native" },
    { name: "Hindi", level: "Conversational" },
  ];

  return (
    <section id="languages" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Languages Known</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 min-w-[200px] text-center"
            >
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg">{lang.name}</h3>
              <p className="text-sm text-muted-foreground">{lang.level}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
