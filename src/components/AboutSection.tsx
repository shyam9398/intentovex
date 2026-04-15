import SectionWrapper from "./SectionWrapper";
import { Brain, Radio, Waypoints } from "lucide-react";

const cards = [
  { icon: Brain, title: "AI-Driven Intelligence", desc: "Advanced algorithms analyze traffic and optimize routes in real time." },
  { icon: Radio, title: "Connected Systems", desc: "Seamlessly links ambulances, traffic signals, and control rooms." },
  { icon: Waypoints, title: "Green Corridors", desc: "Automated signal control ensures unobstructed emergency pathways." },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">About Intentovex</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Revolutionizing Emergency Response<br className="hidden md:block" /> with Intelligent Systems
      </h2>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
        Intentovex is an advanced AI-driven platform designed to help ambulances reach hospitals faster by reducing traffic delays. It connects ambulances, traffic systems, and control rooms to ensure smooth and efficient emergency movement.
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
