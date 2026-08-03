import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { NAV_LINKS } from "@/data/agency";
import { PERSONAL } from "@/data/personal";
import BrandLogo from "@/components/ui/BrandLogo";

const socialLinks = [
  { icon: FiMail, href: `mailto:${PERSONAL.email}`, label: "Email" },
  { icon: FiLinkedin, href: PERSONAL.linkedinUrl, label: "LinkedIn" },
  { icon: FiGithub, href: PERSONAL.githubUrl, label: "GitHub" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#0e0e0e]">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandLogo size="md" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {PERSONAL.tagline}. We design and build AI-powered SaaS applications, enterprise dashboards, and scalable web products for ambitious teams worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-muted-foreground transition hover:border-brand/30 hover:bg-brand/10 hover:text-brand-light"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Navigation</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${PERSONAL.email}`} className="transition hover:text-foreground">
                  {PERSONAL.email}
                </a>
              </li>
              <li>{PERSONAL.location}</li>
              <li>{PERSONAL.responseTime}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with precision for ambitious products.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
