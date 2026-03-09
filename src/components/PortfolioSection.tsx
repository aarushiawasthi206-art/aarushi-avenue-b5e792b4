import { motion } from "framer-motion";
import { Presentation, FileText, BarChart3, Palette } from "lucide-react";

const items = [
  { icon: Presentation, label: "Campaign Presentations", description: "Marketing deck showcases" },
  { icon: FileText, label: "Research Reports", description: "Consumer & market analysis" },
  { icon: BarChart3, label: "Data Dashboards", description: "Analytics visualizations" },
  { icon: Palette, label: "Marketing Creatives", description: "Canva design portfolio" },
];

const PortfolioSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-64 h-64 coral-bg-light rounded-full translate-y-1/2 translate-x-1/2 opacity-30 blur-3xl" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 coral-bg-light rounded-full">Portfolio</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Work <span className="italic text-gradient">samples</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-3xl p-7 text-center shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 gradient-coral opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-2xl coral-bg-light flex items-center justify-center mb-5 group-hover:shadow-glow transition-all duration-300">
                <item.icon size={28} className="coral-highlight group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="font-display font-bold text-base mb-1">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-xs font-semibold text-primary tracking-wide uppercase">Coming Soon</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
