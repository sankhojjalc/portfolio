"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { socialLinks, type SocialId } from "@/content/social";

const icons = { github: Github, linkedin: Linkedin, email: Mail } as const;

const sizes = {
  sm: { box: "w-9 h-9", icon: "w-4 h-4 text-current" },
  md: { box: "w-12 h-12", icon: "w-5 h-5 text-accent-orange" },
  lg: { box: "w-14 h-14", icon: "w-6 h-6 text-accent-orange" },
} as const;

interface SocialLinksProps {
  source: string;
  size?: keyof typeof sizes;
  ids?: SocialId[];
  className?: string;
}

export function SocialLinks({ source, size = "md", ids, className = "" }: SocialLinksProps) {
  const visible = ids ? socialLinks.filter((link) => ids.includes(link.id)) : socialLinks;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {visible.map((link) => {
        const Icon = icons[link.id];
        return (
          <a
            key={link.id}
            href={link.href}
            {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
            onClick={() =>
              gaEvent({ category: link.ga.category, action: link.ga.action, label: source })
            }
            className={`${sizes[size].box} control rounded-full flex items-center justify-center hover:scale-110`}
            aria-label={link.label}
          >
            <Icon className={sizes[size].icon} />
          </a>
        );
      })}
    </div>
  );
}
