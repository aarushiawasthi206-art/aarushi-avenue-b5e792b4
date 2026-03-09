import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center section-padding pt-32">
    <div className="container">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
        >
          Digital Marketing · Social Media · Communication
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[1.05] tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="coral-highlight italic">Aarushi</span>
          <br />
          Awasthi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
        >
          Business student at NIIT University passionate about creating impactful digital campaigns, understanding consumer behaviour, and driving brand growth through strategic communication.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-6"
        >
          <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
          <a href="#about" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
            Learn More <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
