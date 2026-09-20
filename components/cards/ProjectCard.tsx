"use client";

import { ExternalLink, Github } from "lucide-react";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { gaCategories } from "@/content/ga-categories";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const trackClick = () =>
    gaEvent({
      category: gaCategories.viewProjectLink,
      action: "Project Link Clicked",
      label: project.title,
    });

  return (
    <div className="glass p-6 hover:bg-white/15 transition-all duration-300 group">
      <h3 className="text-xl font-bold mb-2 group-hover:text-accent-orange transition">
        {project.title}
      </h3>
      <p className="text-text-secondary mb-4 text-sm leading-relaxed">{project.description}</p>

      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-accent-orange/10 text-accent-orange border border-accent-orange/30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 pt-4 border-t border-glass">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            onClick={trackClick}
            className="flex items-center gap-2 text-text-secondary hover:text-accent-orange transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">Code</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            onClick={trackClick}
            className="flex items-center gap-2 text-text-secondary hover:text-accent-orange transition-colors ml-auto"
          >
            <span className="text-sm">Live</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
