import { motion } from "framer-motion";
import { Presentation, FileText, BarChart3, Palette } from "lucide-react";

const items = [
  { icon: Presentation, label: "Marketing Campaign Presentations" },
  { icon: FileText, label: "Research Reports" },
  { icon: BarChart3, label: "Data Analysis Dashboards" },
  { icon: Palette, label: "Canva Marketing Creatives" },
];

const PortfolioSection = () => (
  <section className="section-padding section-alt">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold">
          Work <span className="italic coral-highlight">samples</span>
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors cursor-pointer group"
          >
            <div className="w-14 h-14 mx-auto rounded-xl coral-bg-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <item.icon size={24} className="coral-highlight" />
            </div>
            <p className="text-sm font-medium">{item.label}</p>
            <p className="text-xs text-muted-foreground mt-1">Coming Soon</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
