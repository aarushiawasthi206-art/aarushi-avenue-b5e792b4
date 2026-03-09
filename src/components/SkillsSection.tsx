import { motion } from "framer-motion";
import { Megaphone, MessageSquare, BarChart3, Wrench } from "lucide-react";

const categories = [
  {
    icon: Megaphone,
    title: "Marketing & Digital",
    skills: [
      "Social Media Marketing",
      "Content Marketing",
      "Online Advertising",
      "SEO Basics",
      "Keyword Research",
      "Digital Campaign Analysis",
      "Consumer Behaviour Analysis",
      "Marketing Strategy",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication & Media",
    skills: [
      "Professional Communication",
      "Storytelling & Content Creation",
      "Research & Media Analysis",
      "Cultural Context Understanding",
      "Campaign Messaging",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytical Skills",
    skills: [
      "Data Analysis",
      "Marketing Performance Measurement",
      "Excel-based Data Analysis",
      "Problem Solving",
      "Market Research",
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      "MS Excel (Advanced)",
      "PowerPoint",
      "Canva",
      "Google Analytics",
      "Google Search Console",
      "Keyword Research Tools",
      "Basic AI Tools",
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold">
          What I <span className="italic coral-highlight">bring</span> to the table
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl coral-bg-light flex items-center justify-center">
                <cat.icon size={20} className="coral-highlight" />
              </div>
              <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
