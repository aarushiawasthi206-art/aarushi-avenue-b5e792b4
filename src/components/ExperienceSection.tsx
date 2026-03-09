import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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
  <section id="experience" className="section-padding section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold">
          Where I've <span className="italic coral-highlight">contributed</span>
        </h2>
      </motion.div>
      <div className="max-w-3xl mx-auto space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-8 border-l-2 border-primary/30"
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Briefcase size={11} className="text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-1">{exp.role}</h3>
            <p className="text-primary font-medium text-sm mb-4">{exp.company}</p>
            <ul className="space-y-2">
              {exp.points.map((p, j) => (
                <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
