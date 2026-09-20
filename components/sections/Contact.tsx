"use client";

import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { contactMethods, type ContactTone } from "@/content/contact";
import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";

const icons = { email: Mail, phone: Phone, linkedin: Linkedin } as const;

const toneText: Record<ContactTone, string> = {
  orange: "text-accent-orange",
  teal: "text-accent-teal",
  blue: "text-blue-700 [[data-theme=dark]_&]:text-blue-400",
};

export function Contact() {
  return (
    <Section
      id="contact"
      title="Let's build something together"
      subtitle="Got a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas."
      tinted
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {contactMethods.map((method) => {
          const Icon = icons[method.id];
          const tone = toneText[method.tone];
          return (
            <a
              key={method.id}
              href={method.href}
              onClick={() => gaEvent(method.ga)}
              className="glass p-6 sm:p-8 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <Icon
                className={`w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform ${tone}`}
              />
              <h3 className={`font-semibold mb-2 ${tone}`}>{method.title}</h3>
              <p className="text-text-secondary text-sm break-all">{method.value}</p>
              <div
                className={`mt-4 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition ${tone}`}
              >
                <span className="text-xs">{method.cta}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          );
        })}
      </div>

      <div className="glass p-6 sm:p-8 text-center mb-20">
        <MapPin className="w-6 h-6 mx-auto mb-3 text-accent-orange" />
        <p className="text-text-secondary">{site.location}</p>
        <p className="text-xs text-text-secondary mt-1">{site.availability}</p>
      </div>

      <div className="text-center glass p-6 sm:p-10">
        <h3 className="text-2xl font-bold mb-6">Follow me on</h3>
        <SocialLinks source="Contact Section" size="lg" className="justify-center gap-6" />
      </div>
    </Section>
  );
}
