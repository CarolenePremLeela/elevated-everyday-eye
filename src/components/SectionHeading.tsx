interface SectionHeadingProps {
  number: string;
  title: string;
  note: string;
}

const SectionHeading = ({ number, title, note }: SectionHeadingProps) => (
  <header className="mb-12 border-b border-border pb-6 md:mb-16 md:flex md:items-end md:justify-between">
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs font-medium text-primary">{number}</span>
      <h2 className="font-display text-4xl font-normal leading-none md:text-6xl">{title}</h2>
    </div>
    <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:mt-0 md:text-right">{note}</p>
  </header>
);

export default SectionHeading;