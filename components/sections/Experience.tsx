import { organizations } from "@/content/experience";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="The production engineering foundation behind my AI work."
    >
      <div className="relative">
        <div className="absolute left-3 md:left-4 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-accent-orange/30" />
        <div className="space-y-12">
          {organizations.map((org) => (
            <ExperienceCard key={org.id} org={org} />
          ))}
        </div>
      </div>
    </Section>
  );
}
