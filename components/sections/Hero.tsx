"use client";

import { ArrowDown, Download } from "lucide-react";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { useTypewriter } from "@/lib/hooks/useTypewriter";
import { gaCategories } from "@/content/ga-categories";
import { isSectionEnabled } from "@/content/sections";
import { site } from "@/content/site";
import { AvatarOrbit } from "@/components/ui/AvatarOrbit";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  const { displayText, isDone } = useTypewriter(site.tagline);
  const workHref = isSectionEnabled("projects") ? "#projects" : "#experience";

  // Kept out of the static HTML so crawlers/scrapers that don't execute JS
  // never see the resume URL in page source; real visitors get it instantly on hydration.
  const resumeReady = useHasMounted();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-12 flex justify-center">
          <AvatarOrbit src={site.avatarPath} alt={`${site.userName}'s portrait`} />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {site.greetings}, <br />
          <span className="bg-gradient-to-r from-accent-orange via-accent-orange via-[12%] to-accent-teal bg-clip-text text-transparent">
            {site.userName}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary mb-2 min-h-14 md:min-h-7">
          {displayText}
          {!isDone && <span className="animate-pulse">|</span>}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {site.designations.map((role) => (
            <span key={role} className="text-sm glass px-4 py-2 text-accent-orange">
              {role}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={workHref}
            className="px-8 py-3 bg-accent-orange hover:bg-accent-orange/90 text-primary font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            See My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href={resumeReady ? site.resumePath : "#"}
            download={resumeReady ? site.resumeFileName : undefined}
            rel="nofollow noopener noreferrer"
            onClick={(e) => {
              if (!resumeReady) {
                e.preventDefault();
                return;
              }
              gaEvent({
                category: gaCategories.viewResume,
                action: "Resume Downloaded",
                label: "Download CV",
              });
            }}
            className="px-8 py-3 glass hover:bg-white/10 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        <SocialLinks source="Hero" className="justify-center gap-6" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-accent-orange/50">↓</div>
      </div>
    </section>
  );
}
