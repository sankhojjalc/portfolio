interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title}
        <span className="accent-orange">.</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg">{subtitle}</p>
      )}
    </div>
  );
}
