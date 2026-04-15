import SectionWrapper from "./SectionWrapper";
import { Navigation, Satellite, Brain, Radar, Bell, TrafficCone, Hospital } from "lucide-react";

const steps = [
  { icon: Navigation, label: "Ambulance driver selects destination" },
  { icon: Satellite, label: "GPS tracks ambulance in real time" },
  { icon: Brain, label: "AI calculates optimal route through junctions" },
  { icon: Radar, label: "Geofencing detects the next traffic junction" },
  { icon: Bell, label: "Alerts sent to vehicles and junction authorities" },
  { icon: TrafficCone, label: "Junction signals turn green automatically" },
  { icon: Hospital, label: "Ambulance reaches hospital without stopping" },
];

const HowItWorksSection = () => (
  <SectionWrapper className="bg-secondary/50">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">How <span className="text-gradient-emergency font-bold">Intentovex</span> Works</p>
      <h2 className="text-3xl md:text-5xl font-bold">Junction-by-Junction, Life-Saving Automation</h2>
    </div>
    <div className="relative max-w-4xl mx-auto">
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
