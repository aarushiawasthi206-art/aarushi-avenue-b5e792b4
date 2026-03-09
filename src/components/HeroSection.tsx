import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center section-padding pt-32 hero-gradient relative overflow-hidden">
    {/* Decorative floating elements */}
    <div className="floating-dot w-72 h-72 -top-20 -right-20 opacity-60" style={{ animationDelay: "0s" }} />
    <div className="floating-dot w-48 h-48 bottom-32 -left-12 opacity-40" style={{ animationDelay: "2s" }} />
    <div className="floating-dot w-32 h-32 top-1/3 right-1/4 opacity-30" style={{ animationDelay: "4s" }} />
    
    {/* Grid pattern overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
      backgroundSize: "40px 40px"
    }} />

    <div className="container relative">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 coral-bg-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          Open to opportunities
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[1.05] tracking-tight mb-8"
        >
          Hi, I'm{" "}
          <span className="text-gradient italic">Aarushi</span>
          <br />
          <span className="relative">
            Awasthi
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <motion.path
                d="M2 8C50 2 100 4 150 6C200 8 250 4 298 7"
                stroke="hsl(12, 76%, 61%)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12"
        >
          Business student at NIIT University passionate about creating impactful digital campaigns, understanding consumer behaviour, and driving brand growth through strategic communication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="gradient-coral text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:-translate-y-1 text-sm md:text-base"
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium border border-border px-8 py-4 rounded-full hover:border-primary/30 hover:shadow-soft text-sm md:text-base"
          >
            Learn More <ArrowDown size={16} />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 flex flex-wrap gap-10 md:gap-16"
        >
          {[
            { value: "2+", label: "Internships" },
            { value: "3+", label: "Projects" },
            { value: "8+", label: "Tools Mastered" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
