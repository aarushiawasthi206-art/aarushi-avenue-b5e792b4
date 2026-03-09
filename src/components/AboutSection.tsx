import { motion } from "framer-motion";
import { GraduationCap, Mail, Phone, Quote } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    {/* Decorative corner */}
    <div className="absolute top-0 right-0 w-64 h-64 coral-bg-light rounded-full -translate-y-1/2 translate-x-1/2 opacity-40 blur-3xl" />
    
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 coral-bg-light rounded-full">About Me</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Driven by curiosity,<br />powered by <span className="italic text-gradient">creativity</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-card mb-10 relative">
          <Quote size={40} className="coral-highlight opacity-20 absolute top-6 left-6" />
          <p className="text-muted-foreground leading-relaxed text-lg md:text-xl relative z-10 font-light">
            I am a motivated business student at NIIT University with strong interests in digital marketing, communication strategy, and media. I have experience working on marketing campaigns, research projects, and sales simulations. I enjoy analyzing consumer behaviour, creating impactful digital content, and solving business problems using data-driven insights. My strengths include communication, creativity, analytical thinking, and teamwork.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: GraduationCap, text: "NIIT University — Integrated MBA" },
            { icon: Mail, text: "aarushiawasthi206@gmail.com" },
            { icon: Phone, text: "7860021497" },
          ].map((item) => (
            <motion.span
              key={item.text}
              whileHover={{ y: -2, scale: 1.02 }}
              className="flex items-center gap-2.5 glass-card shadow-soft px-5 py-3 rounded-2xl text-sm font-medium cursor-default"
            >
              <div className="w-8 h-8 rounded-lg coral-bg-light flex items-center justify-center shrink-0">
                <item.icon size={15} className="coral-highlight" />
              </div>
              {item.text}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
