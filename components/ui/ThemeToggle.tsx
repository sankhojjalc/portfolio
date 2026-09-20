"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { gaCategories } from "@/content/ga-categories";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    gaEvent({ category: gaCategories.themeToggled, action: "Theme Toggled", label: next });
  };

  return (
    <button
      onClick={toggle}
      className="control group w-9 h-9 flex items-center justify-center rounded-full"
      aria-label="Toggle theme"
    >
      <Moon className="w-5 h-5 block transition-colors duration-200 group-hover:text-slate-400 group-focus-visible:text-slate-400 [[data-theme=dark]_&]:hidden" />
      <Sun className="w-5 h-5 hidden transition-colors duration-200 group-hover:text-yellow-400 group-focus-visible:text-yellow-400 [[data-theme=dark]_&]:block" />
    </button>
  );
}
