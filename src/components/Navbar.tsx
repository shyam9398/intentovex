import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Siren } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <Siren className="w-6 h-6 text-primary" />
          <span className="font-heading font-bold text-xl text-gradient-emergency">INTENTOVEX</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm">Get Started</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
              <Button variant="hero" size="sm">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
