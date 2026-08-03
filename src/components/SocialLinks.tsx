import { motion } from "framer-motion";
import type React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { PERSONAL } from "@/data/personal";

const socials = [
  { icon: Github, href: PERSONAL.githubUrl, label: "GitHub" },
  ...(PERSONAL.linkedinUrl ? [{ icon: Linkedin, href: PERSONAL.linkedinUrl, label: "LinkedIn" }] : []),
  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
  { icon: Phone, href: `tel:${PERSONAL.phone.replace(/[^\d+]/g, "")}`, label: "Phone" },
] satisfies { icon: React.ComponentType<{ size?: number }>; href: string; label: string }[];

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    {socials.map(({ icon: Icon, href, label }, i) => (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.3, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-orange-sm transition-all duration-300"
        aria-label={label}
      >
        <Icon size={20} />
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
