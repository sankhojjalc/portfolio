"use client";

import Link from "next/link";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { gaCategories } from "@/content/ga-categories";
import { navLinks } from "@/content/sections";

interface MobileNavProps {
  onLinkClick: () => void;
}

export function MobileNav({ onLinkClick }: MobileNavProps) {
  return (
    <div id="mobile-nav" className="md:hidden pt-4 border-t border-glass mt-4">
      <div className="flex flex-col space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => {
              gaEvent({
                category: gaCategories.navigation,
                action: "Mobile Navigation Click",
                label: link.gaLabel,
              });
              onLinkClick();
            }}
            className="px-4 py-2 rounded-lg hover:bg-white/10 transition text-sm font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
