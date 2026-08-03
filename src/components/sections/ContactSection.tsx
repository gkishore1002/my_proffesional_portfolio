import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMessageCircle } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { PERSONAL } from "@/data/personal";
import MagneticButton from "@/components/ui/MagneticButton";

const contactLinks = [
  { icon: FiMail, label: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: FiLinkedin, label: "LinkedIn", href: PERSONAL.linkedinUrl },
  { icon: FiGithub, label: "GitHub", href: PERSONAL.githubUrl },
  { icon: SiWhatsapp, label: "WhatsApp", href: PERSONAL.whatsappUrl },
];

const ContactSection = () => (
  <section id="contact" className="section-padding relative">
    <div className="container-wide">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/10 via-surface/80 to-[#121212] p-8 lg:p-14"
      >
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/10 blur-[80px]" aria-hidden="true" />

        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">Contact</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something Exceptional Together
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
              Book a discovery call and we&apos;ll shape the right product strategy, design system, and delivery plan for your business.
            </p>

            <div className="mt-8">
              <MagneticButton href={PERSONAL.calendlyUrl} variant="primary">
                Book Discovery Call
                <FiArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">
              {PERSONAL.responseTime}
            </p>

            <div className="mt-6 space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition hover:border-brand/25 hover:bg-brand/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand-light transition group-hover:bg-brand/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-foreground transition group-hover:text-brand-light">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <FiMessageCircle className="h-4 w-4 text-brand" />
              Available for remote projects worldwide
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
