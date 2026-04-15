import SectionWrapper from "./SectionWrapper";
import { Smartphone, Zap, Building, Scale } from "lucide-react";

const points = [
  { icon: Smartphone, title: "Simple Driver Interface", desc: "Just select destination — the system handles everything else." },
  { icon: Zap, title: "Instant Visual Alerts", desc: "Display boards require no driver interaction — fully automated." },
  { icon: Building, title: "Rural to Metro Ready", desc: "Works in villages, towns, and dense metropolitan areas." },
  { icon: Scale, title: "Low Infrastructure Cost", desc: "Only geofences (software) + LED display boards needed." },
];

const RealWorldSection = () => (
  <SectionWrapper className="bg-secondary/50">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Real-World Design</p>
      <h2 className="text-3xl md:text-5xl font-bold">Built for Practical Deployment</h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {points.map((p, i) => (
        <div key={i} className="text-center glass-card rounded-xl p-8">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <p.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-bold mb-2">{p.title}</h3>
          <p className="text-muted-foreground text-sm">{p.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default RealWorldSection;
