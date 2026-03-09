import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Marketing & Data Analytics Intern",
    company: "Informatica Technologies",
    points: [
      "Contributed to marketing campaign analysis.",
      "Analyzed consumer engagement trends using Excel and data visualization.",
      "Assisted in optimizing digital communication strategies.",
      "Worked with marketing data to understand campaign performance.",
    ],
  },
  {
    role: "Human Resource Intern",
    company: "Bundelkhand Security Services (BSS)",
    points: [
      "Assisted in developing and updating the digital company profile.",
      "Conducted market and competitor analysis to identify new clients in UP & MP.",
      "Supported the sales team in preparing proposals and outreach communication.",
      "Organized company documentation and pitch materials.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding relative overflow-hidden">
    <div className="absolute top-1/2 right-0 w-80 h-80 coral-bg-light rounded-full translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 coral-bg-light rounded-full">Experience</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Where I've <span className="italic text-gradient">contributed</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-all duration-500 relative group"
          >
            {/* Accent bar */}
            <div className="absolute left-0 top-8 bottom-8 w-1 gradient-coral rounded-full" />
            
            <div className="pl-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl gradient-coral flex items-center justify-center shadow-glow shrink-0">
                  <Briefcase size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">{exp.role}</h3>
                  <p className="text-primary font-semibold text-sm mt-1">{exp.company}</p>
                </div>
              </div>
              <ul className="space-y-3 ml-16">
                {exp.points.map((p, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex items-start gap-3 leading-relaxed">
                    <span className="w-2 h-2 rounded-full gradient-coral mt-1.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
