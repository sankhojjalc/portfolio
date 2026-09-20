import type { ComponentType } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Writing } from "@/components/sections/Writing";
import { Background } from "@/components/ui/Background";
import { enabledSections, type SectionId } from "@/content/sections";

const sectionComponents: Record<SectionId, ComponentType> = {
  about: About,
  experience: Experience,
  projects: Projects,
  writing: Writing,
  contact: Contact,
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
      <Background />
      <Header />
      <Hero />
      {enabledSections.map(({ id }) => {
        const SectionComponent = sectionComponents[id];
        return <SectionComponent key={id} />;
      })}
      <Footer />
    </main>
  );
}
