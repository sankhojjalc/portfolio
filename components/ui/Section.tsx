import type { ReactNode } from "react";
import type { SectionId } from "@/content/sections";
import { SectionHeading } from "./SectionHeading";

interface SectionProps {
  id: SectionId;
  title: string;
  subtitle?: string;
  tinted?: boolean;
  children: ReactNode;
}

export function Section({ id, title, subtitle, tinted = false, children }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 ${tinted ? "bg-secondary/20" : ""}`}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  );
}
