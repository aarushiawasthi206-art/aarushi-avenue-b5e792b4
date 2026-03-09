import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:aarushiawasthi206@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="floating-dot w-64 h-64 -top-20 right-20 opacity-40" />
      <div className="floating-dot w-40 h-40 bottom-20 left-10 opacity-30" style={{ animationDelay: "3s" }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 coral-bg-light rounded-full">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="italic text-gradient">connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
            Interested in collaborating or hiring me for marketing or communication roles? I'd love to hear from you.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-8 md:p-10 shadow-card text-left mb-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">Message</label>
              <textarea
                placeholder="Tell me about the opportunity..."
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="gradient-coral text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 mx-auto"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Mail, label: "Email", href: "mailto:aarushiawasthi206@gmail.com" },
              { icon: Phone, label: "Call", href: "tel:7860021497" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                whileHover={{ y: -3, scale: 1.03 }}
                className="flex items-center gap-3 glass-card shadow-soft px-6 py-3.5 rounded-2xl hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl coral-bg-light flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <item.icon size={16} className="coral-highlight" />
                </div>
                <span className="text-sm font-semibold">{item.label}</span>
                <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
