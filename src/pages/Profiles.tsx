import { motion } from "framer-motion";
import { ExternalLink, Code2, Linkedin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import GradientBlurs from "@/components/GradientBlurs";
import { PERSONAL } from "@/data/personal";

const profiles = [
  {
    name: "GitHub",
    handle: "@gkishore1002",
    stat: "Projects & code",
    icon: Code2,
    url: PERSONAL.githubUrl,
    color: "from-primary to-glow-amber",
  },
  ...(PERSONAL.linkedinUrl
    ? [
        {
          name: "LinkedIn",
          handle: PERSONAL.name,
          stat: "Professional profile",
          icon: Linkedin,
          url: PERSONAL.linkedinUrl,
          color: "from-primary to-glow-amber",
        },
      ]
    : []),
];

const Profiles = () => (
  <PageTransition>
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <GradientBlurs />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Studio <span className="gradient-text">Presence</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            A look at the engineering and product work that supports our client engagements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 150 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass rounded-xl p-6 text-center group"
            >
              <div className="w-16 h-16 rounded-xl gradient-orange flex items-center justify-center mx-auto mb-4 group-hover:glow-orange transition-all">
                <profile.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{profile.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{profile.handle}</p>
              <p className="text-xs text-primary font-mono">{profile.stat}</p>
              <ExternalLink size={14} className="text-muted-foreground mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </PageTransition>
);

export default Profiles;
