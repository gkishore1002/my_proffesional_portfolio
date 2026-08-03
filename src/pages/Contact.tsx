import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import GradientBlurs from "@/components/GradientBlurs";
import { PERSONAL } from "@/data/personal";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
        <GradientBlurs />
        <div className="container mx-auto px-4 relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Reach me at{" "}
              <a className="text-primary hover:underline" href={`mailto:${PERSONAL.email}`}>
                {PERSONAL.email}
              </a>{" "}
              or{" "}
              <a className="text-primary hover:underline" href={`tel:${PERSONAL.phone.replace(/[^\d+]/g, "")}`}>
                {PERSONAL.phone}
              </a>
              . Based in {PERSONAL.location}.
            </p>
          </motion.div>

          {sent ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass rounded-xl p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <CheckCircle size={64} className="text-primary mx-auto mb-4" />
              </motion.div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
              <p className="text-muted-foreground">I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass rounded-xl p-8 space-y-6"
            >
              {(["name", "email", "message"] as const).map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2 capitalize">
                    {field}
                  </label>
                  {field === "message" ? (
                    <textarea
                      rows={5}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder={`Your ${field}...`}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder={`Your ${field}...`}
                    />
                  )}
                  {errors[field] && (
                    <p className="text-destructive text-sm mt-1">{errors[field]}</p>
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-lg gradient-orange text-primary-foreground font-bold text-lg glow-orange flex items-center justify-center gap-2 transition-all"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
