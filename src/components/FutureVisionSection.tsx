import SectionWrapper from "./SectionWrapper";
import { Building2, Wifi, Smartphone, TrendingUp } from "lucide-react";

const visions = [
  { icon: Building2, text: "Integration with smart city infrastructure" },
  { icon: Wifi, text: "IoT-based vehicle alert systems" },
  { icon: Smartphone, text: "Mobile apps for public awareness" },
  { icon: TrendingUp, text: "Predictive traffic management using AI" },
];

const FutureVisionSection = () => (
  <SectionWrapper>
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Future Vision</p>
      <h2 className="text-3xl md:text-5xl font-bold">Towards Smarter Cities and Faster Emergency Care</h2>
    </div>
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {visions.map((v, i) => (
        <div key={i} className="flex items-center gap-4 glass-card rounded-xl p-6 hover:border-primary/30 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
            <v.icon className="w-6 h-6 text-primary" />
          </div>
          <span className="font-medium">{v.text}</span>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default FutureVisionSection;
