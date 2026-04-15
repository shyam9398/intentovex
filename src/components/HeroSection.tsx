import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Smart city emergency corridor" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Animated glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />

    <div className="relative z-10 container mx-auto px-4 text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          AI-Powered Emergency Response
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-6">
          <span className="text-foreground">Saving Lives Through</span>
          <br />
          <span className="text-gradient-emergency">Smart Traffic Control</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          AI-powered, real-time ambulance traffic clearance and emergency response system.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8">
            Get Started <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8">
            <Play className="w-5 h-5" /> View Demo
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
