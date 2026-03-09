import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-6 text-center border-t border-border">
    <div className="container">
      <p className="font-display text-lg font-bold mb-2">
        Aarushi<span className="text-gradient">.</span>
      </p>
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Aarushi Awasthi. Built with <Heart size={12} className="coral-highlight" fill="currentColor" /> and purpose.
      </p>
    </div>
  </footer>
);

export default Footer;
