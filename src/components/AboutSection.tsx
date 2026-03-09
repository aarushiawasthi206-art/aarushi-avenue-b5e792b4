import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">About Me</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">
          Driven by curiosity,<br />powered by <span className="italic coral-highlight">creativity</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-10">
          I am a motivated business student at NIIT University with strong interests in digital marketing, communication strategy, and media. I have experience working on marketing campaigns, research projects, and sales simulations. I enjoy analyzing consumer behaviour, creating impactful digital content, and solving business problems using data-driven insights. My strengths include communication, creativity, analytical thinking, and teamwork.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
            <GraduationCap size={16} className="coral-highlight" /> NIIT University — Integrated MBA
          </span>
          <span className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
            <Mail size={16} className="coral-highlight" /> aarushiawasthi206@gmail.com
          </span>
          <span className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
            <Phone size={16} className="coral-highlight" /> 7860021497
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
