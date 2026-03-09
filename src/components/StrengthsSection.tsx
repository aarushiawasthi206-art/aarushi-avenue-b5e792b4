import { motion } from "framer-motion";
import { MessageCircle, Brain, Lightbulb, RefreshCw, FolderKanban, Users } from "lucide-react";

const strengths = [
  { icon: MessageCircle, label: "Strong Communication" },
  { icon: Brain, label: "Analytical Thinking" },
  { icon: Lightbulb, label: "Creativity & Storytelling" },
  { icon: RefreshCw, label: "Adaptability" },
  { icon: FolderKanban, label: "Project Management" },
  { icon: Users, label: "Team Collaboration" },
];

const StrengthsSection = () => (
  <section className="section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Strengths</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold">
          Core <span className="italic coral-highlight">strengths</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
        {strengths.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 rounded-full coral-bg-light flex items-center justify-center">
              <s.icon size={22} className="coral-highlight" />
            </div>
            <p className="text-xs font-medium leading-tight">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StrengthsSection;
