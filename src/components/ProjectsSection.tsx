import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";

const projects = [
  {
    icon: Target,
    title: "IMC Campaign Project",
    description:
      "Created an integrated marketing communication strategy including social media, messaging, and audience targeting.",
  },
  {
    icon: TrendingUp,
    title: "Sales Simulation Project",
    description:
      "Worked on prospecting, pitching, and closing sales scenarios to understand real-world sales processes.",
  },
  {
    icon: Users,
    title: "Consumer Behaviour Research",
    description:
      "Studied how consumers trust digital health influencers and how digital content affects their purchasing decisions.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold">
          Academic <span className="italic coral-highlight">work</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl coral-bg-light flex items-center justify-center mb-5">
              <p.icon size={22} className="coral-highlight" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
