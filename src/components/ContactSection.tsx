import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:aarushiawasthi206@gmail.com?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Let's <span className="italic coral-highlight">connect</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Interested in collaborating or hiring me for marketing or communication roles? I'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left mb-10">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:aarushiawasthi206@gmail.com" className="flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-full hover:border-primary/30 transition-colors">
              <Mail size={16} className="coral-highlight" /> Email
            </a>
            <a href="tel:7860021497" className="flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-full hover:border-primary/30 transition-colors">
              <Phone size={16} className="coral-highlight" /> Call
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-full hover:border-primary/30 transition-colors">
              <Linkedin size={16} className="coral-highlight" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
