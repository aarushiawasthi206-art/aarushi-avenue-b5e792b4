import { motion } from "framer-motion";
import { Target, TrendingUp, Users, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Target,
    title: "IMC Campaign Project",
    tag: "Marketing Strategy",
    description:
      "Created an integrated marketing communication strategy including social media, messaging, and audience targeting.",
  },
  {
    icon: TrendingUp,
    title: "Sales Simulation Project",
    tag: "Sales & Business Dev",
    description:
      "Worked on prospecting, pitching, and closing sales scenarios to understand real-world sales processes.",
  },
  {
    icon: Users,
    title: "Consumer Behaviour Research",
    tag: "Research & Analytics",
    description:
      "Studied how consumers trust digital health influencers and how digital content affects their purchasing decisions.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding section-alt relative overflow-hidden">
    <div className="absolute top-0 left-1/3 w-96 h-96 coral-bg-light rounded-full -translate-y-1/2 opacity-20 blur-3xl" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 coral-bg-light rounded-full">Projects</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Academic <span className="italic text-gradient">work</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass-card rounded-3xl p-8 hover:shadow-elevated transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 coral-bg-light rounded-full translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-60 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-coral flex items-center justify-center shadow-glow">
                  <p.icon size={24} className="text-primary-foreground" />
                </div>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <span className="text-xs font-semibold tracking-wide uppercase text-primary">{p.tag}</span>
              <h3 className="font-display text-xl font-bold mt-2 mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
