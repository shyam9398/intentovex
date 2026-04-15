import SectionWrapper from "./SectionWrapper";
import { Code, Server, Brain, Map, Database } from "lucide-react";

const stack = [
  { icon: Code, label: "Frontend", tech: "HTML, CSS, JavaScript" },
  { icon: Server, label: "Backend", tech: "Python (Django)" },
  { icon: Brain, label: "AI Engine", tech: "Reinforcement Learning" },
  { icon: Map, label: "Maps", tech: "OpenStreetMap + Leaflet.js" },
  { icon: Database, label: "Database", tech: "MySQL" },
];

const TechStackSection = () => (
  <SectionWrapper id="technology">
    <div className="text-center mb-16">
      <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">Technology</p>
      <h2 className="text-3xl md:text-5xl font-bold">Powered by Advanced Technologies</h2>
    </div>
    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
      {stack.map((s, i) => (
        <div key={i} className="glass-card rounded-xl p-6 w-40 text-center hover:border-accent/30 transition-colors">
          <s.icon className="w-8 h-8 text-accent mx-auto mb-3" />
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{s.label}</p>
          <p className="font-bold text-sm">{s.tech}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default TechStackSection;
