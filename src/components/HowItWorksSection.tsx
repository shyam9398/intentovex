import SectionWrapper from "./SectionWrapper";
import { Navigation, Satellite, Brain, Radar, Bell, TrafficCone, Hospital } from "lucide-react";

const steps = [
  { icon: Navigation, label: "Ambulance driver selects destination" },
  { icon: Satellite, label: "GPS tracks real-time location" },
  { icon: Brain, label: "AI analyzes optimal route" },
  { icon: Radar, label: "Geofencing detects upcoming traffic zones" },
  { icon: Bell, label: "Alerts sent to vehicles and authorities" },
  { icon: TrafficCone, label: "Signals turn green automatically" },
  { icon: Hospital, label: "Ambulance reaches hospital quickly" },
];

const HowItWorksSection = () => (
  <SectionWrapper className="bg-secondary/50">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">How It Works</p>
      <h2 className="text-3xl md:text-5xl font-bold">Simple Process, Life-Saving Results</h2>
    </div>
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:-translate-x-px" />
      <div className="space-y-8">
        {steps.map((s, i) => (
          <div key={i} className={`relative flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="hidden md:block md:w-1/2" />
            <div className="relative z-10 w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center flex-shrink-0">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="glass-card rounded-xl p-5 flex-1 md:w-1/2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Step {i + 1}</span>
                <span className="font-medium text-foreground">{s.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default HowItWorksSection;
