import { motion } from "framer-motion";
import { Megaphone, MessageSquare, BarChart3, Wrench } from "lucide-react";

const categories = [
  {
    icon: Megaphone,
    title: "Marketing & Digital",
    color: "from-orange-500/10 to-red-500/10",
    skills: [
      "Social Media Marketing", "Content Marketing", "Online Advertising",
      "SEO Basics", "Keyword Research", "Digital Campaign Analysis",
      "Consumer Behaviour Analysis", "Marketing Strategy",
    ],
  },
  {
    icon: MessageSquare,
    title: "Communication & Media",
    color: "from-blue-500/10 to-indigo-500/10",
    skills: [
      "Professional Communication", "Storytelling & Content Creation",
      "Research & Media Analysis", "Cultural Context Understanding",
      "Campaign Messaging",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytical Skills",
    color: "from-emerald-500/10 to-teal-500/10",
    skills: [
      "Data Analysis", "Marketing Performance Measurement",
      "Excel-based Data Analysis", "Problem Solving", "Market Research",
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-violet-500/10 to-purple-500/10",
    skills: [
      "MS Excel (Advanced)", "PowerPoint", "Canva", "Google Analytics",
      "Google Search Console", "Keyword Research Tools", "Basic AI Tools",
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding section-alt relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-96 h-96 coral-bg-light rounded-full translate-y-1/2 -translate-x-1/2 opacity-30 blur-3xl" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 coral-bg-light rounded-full">Skills</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          What I <span className="italic text-gradient">bring</span> to the table
        </h2>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 group relative overflow-hidden"
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl gradient-coral flex items-center justify-center shadow-glow">
                  <cat.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
