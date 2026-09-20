import { CookieSettingsButton } from "@/components/analytics/AnalyticsConsent";
import { navLinks } from "@/content/sections";
import { site } from "@/content/site";
import { socialLinks } from "@/content/social";

const linkClass = "hover:text-accent-orange transition";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const firstName = site.userName.split(" ")[0];

  return (
    <footer className="glass py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-2xl font-bold">
              {firstName}
              <span className="accent-orange">.</span>
            </p>
            <p className="text-text-secondary text-sm mt-2">
              AI engineer building intelligent, production-grade applications.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4">Navigation</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Connect</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className={linkClass}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-glass my-8" />

        <div className="text-center text-xs text-text-secondary">
          <p>
            © {currentYear} {firstName}. All rights reserved.
          </p>
          <p className="mt-2">
            Crafted with <span className="text-accent-orange">❤</span> using NextJS & Framer Motion
          </p>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
