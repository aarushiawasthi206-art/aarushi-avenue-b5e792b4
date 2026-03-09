import { motion } from "framer-motion";
import { MessageCircle, Brain, Lightbulb, RefreshCw, FolderKanban, Users } from "lucide-react";

const strengths = [
  { icon: MessageCircle, label: "Strong Communication", description: "Clear & impactful messaging" },
  { icon: Brain, label: "Analytical Thinking", description: "Data-driven decisions" },
  { icon: Lightbulb, label: "Creativity & Storytelling", description: "Engaging narratives" },
  { icon: RefreshCw, label: "Adaptability", description: "Flexible & resilient" },
  { icon: FolderKanban, label: "Project Management", description: "Organized execution" },
  { icon: Users, label: "Team Collaboration", description: "Cross-functional synergy" },
];

const StrengthsSection = () => (
  <section className="section-padding section-alt relative overflow-hidden">
    <div className="absolute top-0 left-0 w-72 h-72 coral-bg-light rounded-full -translate-y-1/2 -translate-x-1/2 opacity-20 blur-3xl" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 coral-bg-light rounded-full">Strengths</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Core <span className="italic text-gradient">strengths</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {strengths.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="flex flex-col items-center text-center gap-3 glass-card rounded-3xl p-6 shadow-soft hover:shadow-card transition-all duration-300 cursor-default"
          >
            <div className="w-14 h-14 rounded-2xl gradient-coral flex items-center justify-center shadow-glow">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight">{s.label}</p>
              <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StrengthsSection;
