"use client";

import { Briefcase } from "lucide-react";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { gaCategories } from "@/content/ga-categories";
import type { Organization } from "@/content/experience";

export function ExperienceCard({ org }: { org: Organization }) {
  const isCurrent = org.yearOfService.endsWith("Present");

  return (
    <div
      className="relative pl-10 md:pl-20"
      onMouseEnter={() =>
        gaEvent({
          category: gaCategories.interactedWithCompanyIcon,
          action: "Company Logo Hovered",
          label: org.name,
        })
      }
    >
      <div className="absolute left-0 top-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent-orange flex items-center justify-center">
        <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-primary" />
      </div>

      <div className="glass p-5 sm:p-6 md:p-8 hover:bg-white/15 transition-all duration-300">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <h3 className="text-xl md:text-2xl font-bold">{org.name}</h3>
              {isCurrent && (
                <span className="badge-current">
                  <span className="badge-current-dot" />
                  Current
                </span>
              )}
            </div>
            <p className="text-accent-orange font-medium">{org.jobRole}</p>
          </div>
          <p className="text-sm text-text-secondary whitespace-nowrap">{org.yearOfService}</p>
        </div>

        <ul className="space-y-2">
          {org.tasks.map((task) => (
            <li key={task} className="text-text-secondary text-sm flex gap-3">
              <span className="text-accent-orange shrink-0">•</span>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
