"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { gaCategories } from "@/content/ga-categories";
import { navLinks } from "@/content/sections";
import { site } from "@/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMobileMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="px-4 pt-3">
      <nav
        aria-label="Primary"
        className="glass max-w-5xl mx-auto px-5 sm:px-6 py-3"
      >
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="text-2xl font-bold hover:opacity-80 transition md:justify-self-start"
          >
            {site.userName.split(" ")[0]}
            <span className="accent-orange">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  gaEvent({
                    category: gaCategories.navigation,
                    action: "Navigation Click",
                    label: link.gaLabel,
                  })
                }
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent-orange transition-colors rounded-full hover:bg-[var(--control-surface)]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 md:justify-self-end">
            <SocialLinks
              source="Header"
              size="sm"
              ids={["github", "linkedin"]}
              className="hidden md:flex"
            />
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="control md:hidden w-9 h-9 flex items-center justify-center rounded-full"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <MobileNav onLinkClick={() => setMobileMenuOpen(false)} />
        )}
      </nav>
    </header>
  );
}
