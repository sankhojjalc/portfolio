import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section } from "@/components/ui/Section";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Selected Works"
      subtitle="AI systems, agents and products I've built."
    >
      {projects.length === 0 ? (
        <EmptyState message="Projects coming soon." file="content/projects.ts" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}
