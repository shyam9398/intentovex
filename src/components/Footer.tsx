import { Siren } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-2">
          <Siren className="w-5 h-5 text-primary" />
          <span className="font-heading font-bold text-xl text-gradient-emergency">Intentovex</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#solution" className="hover:text-foreground transition-colors">Solution</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#technology" className="hover:text-foreground transition-colors">Technology</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-sm text-muted-foreground text-right">
          © {new Date().getFullYear()} <span className="text-foreground font-semibold">Intentovex</span>. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
