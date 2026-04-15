import SectionWrapper from "./SectionWrapper";
import { Brain, Radio, Waypoints } from "lucide-react";

const cards = [
  { icon: Brain, title: "AI Junction Intelligence", desc: "Analyzes traffic density at junctions in real time and decides optimal signal timing." },
  { icon: Radio, title: "Connected Junctions", desc: "Links ambulances to upcoming traffic junctions and control rooms seamlessly." },
  { icon: Waypoints, title: "Green Corridor at Junctions", desc: "Automatically switches signals green at every junction along the ambulance route." },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">About</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-2">
        What is <span className="text-gradient-emergency">Intentovex</span>?
      </h2>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-6">
        <span className="text-foreground font-semibold">Intentovex</span> is an AI-driven system designed specifically for <span className="text-foreground font-semibold">traffic junctions</span>. It detects approaching ambulances and automatically controls traffic signals at each junction to create a clear, uninterrupted green corridor — helping emergency vehicles reach hospitals faster.
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
