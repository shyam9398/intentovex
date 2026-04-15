import SectionWrapper from "./SectionWrapper";
import { AlertTriangle, TrafficCone, BellOff, HeartCrack } from "lucide-react";

const problems = [
  { icon: TrafficCone, text: "Ambulances stuck in heavy traffic" },
  { icon: AlertTriangle, text: "Lack of coordination with traffic signals" },
  { icon: BellOff, text: "No real-time alerts to nearby vehicles" },
  { icon: HeartCrack, text: "Delay in emergency response leading to loss of lives" },
];

const ProblemSection = () => (
  <SectionWrapper className="bg-secondary/50">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">The Problem</p>
      <h2 className="text-3xl md:text-5xl font-bold">
        Critical Challenges in<br className="hidden md:block" /> Emergency Transportation
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {problems.map((p, i) => (
        <div key={i} className="flex items-start gap-4 glass-card rounded-xl p-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
            <p.icon className="w-5 h-5 text-primary" />
          </div>
          <p className="text-foreground font-medium pt-1.5">{p.text}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProblemSection;
