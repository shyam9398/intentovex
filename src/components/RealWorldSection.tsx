import SectionWrapper from "./SectionWrapper";
import { Smartphone, Zap, Building, Scale } from "lucide-react";

const points = [
  { icon: Smartphone, title: "Easy Interface", desc: "Intuitive design for ambulance drivers under pressure." },
  { icon: Zap, title: "Minimal Interaction", desc: "Works with just a few taps — speed is priority." },
  { icon: Building, title: "Urban & Semi-Urban", desc: "Designed for diverse city and town environments." },
  { icon: Scale, title: "Scalable System", desc: "No heavy infrastructure required for deployment." },
];

const RealWorldSection = () => (
  <SectionWrapper className="bg-secondary/50">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Real-World Design</p>
      <h2 className="text-3xl md:text-5xl font-bold">Simple, Fast, and Reliable for Emergency Teams</h2>
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
