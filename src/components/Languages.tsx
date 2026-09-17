import SectionHeading from "@/components/SectionHeading";

const Languages = () => {
  const languages = [
    { name: "English", native: "Eng", level: "Professional" },
    { name: "Tamil", native: "தமிழ்", level: "Native" },
    { name: "Hindi", native: "हिंदी", level: "Conversational" },
  ];

  return (
    <section id="languages" className="border-y border-border bg-card/55 px-6 py-24 md:py-28">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading number="06" title="Languages" note="Communication across teams, communities, and contexts." />

        <div className="grid border-l border-t border-border md:grid-cols-3">
          {languages.map((lang, index) => (
            <article
              key={index}
              className="border-b border-r border-border p-8 text-center"
            >
              <span className="mb-3 block font-display text-4xl text-primary">{lang.native}</span>
              <h3 className="font-semibold text-lg">{lang.name}</h3>
              <p className="text-sm text-muted-foreground">{lang.level}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
