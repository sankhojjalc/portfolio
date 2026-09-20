import { Briefcase, Code, Zap } from "lucide-react";
import { formatYearsOfExperience } from "@/lib/utils/dateDiff";
import { skillGroups } from "@/content/skills";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function About() {
  const yearsOfExperience = formatYearsOfExperience(site.careerStart);

  return (
    <Section
      id="about"
      title="About"
      subtitle="A bit about who I am and what I work with."
      tinted
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 glass p-6 sm:p-8 hover:bg-white/15 transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <Briefcase className="w-6 h-6 text-accent-orange flex-shrink-0 mt-1" />
            <span className="text-accent-orange font-semibold">JOURNEY</span>
          </div>
          <p className="text-text-secondary leading-relaxed mb-4">
            AI engineer with{" "}
            <span className="font-semibold text-text-primary">{yearsOfExperience}+ years</span> of
            software engineering behind me, focused on applied AI: LLM-powered features, retrieval
            (RAG) pipelines and agent workflows, along with the evals and guardrails that keep them
            reliable in production.
          </p>
          <p className="text-text-secondary leading-relaxed">
            My foundation is production full-stack engineering: React, Next.js and TypeScript,
            shipped in regulated banking and large-scale e-commerce environments. That means I care
            as much about latency, security, testing and user experience as I do about model
            quality.
          </p>
        </div>

        <div className="glass p-6 sm:p-8 flex flex-col justify-center items-center text-center hover:bg-white/15 transition-all duration-300">
          <div className="text-5xl font-bold text-accent-orange mb-3">{yearsOfExperience}+</div>
          <p className="text-text-secondary">Years of Experience</p>
          <div className="w-8 h-8 rounded-full border-2 border-accent-orange/30 mt-6 flex items-center justify-center">
            <Zap className="w-4 h-4 text-accent-orange" />
          </div>
        </div>
      </div>

      <div className="glass p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-8">
          <Code className="w-6 h-6 text-accent-orange" />
          <span className="text-accent-orange font-semibold text-lg">TECH STACK</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-sm p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-block w-2 h-2 rounded-full ${group.dot}`} />
                <span className={`font-semibold uppercase ${group.label}`}>{group.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full ${group.chip}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
