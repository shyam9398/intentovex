import SectionWrapper from "./SectionWrapper";
import { Navigation, Satellite, Brain, Radar, Monitor, Bell, Hospital } from "lucide-react";

const steps = [
  { icon: Navigation, label: "Ambulance driver selects destination" },
  { icon: Satellite, label: "GPS tracks ambulance location in real time" },
  { icon: Brain, label: "AI determines optimal route and upcoming geofences" },
  { icon: Radar, label: "Ambulance enters the geofence zone" },
  { icon: Monitor, label: "Display boards show ambulance direction & distance" },
  { icon: Bell, label: "Vehicles and pedestrians get early visual warning" },
  { icon: Hospital, label: "Ambulance passes through with cleared path" },
];

const HowItWorksSection = () => (
  <SectionWrapper className="bg-secondary/50">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">How <span className="text-gradient-emergency font-bold">Intentovex</span> Works</p>
      <h2 className="text-3xl md:text-5xl font-bold">Geofence Triggered, Display Board Delivered</h2>
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
