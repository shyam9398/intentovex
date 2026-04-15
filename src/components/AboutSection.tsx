import SectionWrapper from "./SectionWrapper";
import { Brain, Monitor, Radar } from "lucide-react";

const cards = [
  { icon: Radar, title: "Geofence Detection", desc: "Virtual boundaries placed on the map detect approaching ambulances automatically." },
  { icon: Monitor, title: "Smart Display Boards", desc: "LED boards alert nearby traffic about incoming ambulances with direction info." },
  { icon: Brain, title: "AI-Powered Adaptation", desc: "System scales from rural roads to metro junctions with intelligent geofence sizing." },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">About</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-2">
        What is <span className="text-gradient-emergency">Intentovex</span>?
      </h2>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-6">
        <span className="text-foreground font-semibold">Intentovex</span> is an AI-driven early warning system that uses <span className="text-foreground font-semibold">geofences</span> and <span className="text-foreground font-semibold">smart display boards</span> to alert traffic about approaching ambulances — adapted for rural, semi-urban, and metropolitan areas.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <div key={i} className="glass-card rounded-xl p-8 hover:border-primary/30 transition-colors group">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
            <c.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">{c.title}</h3>
          <p className="text-muted-foreground">{c.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default AboutSection;
