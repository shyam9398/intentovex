import SectionWrapper from "./SectionWrapper";
import { MapPin, Bell, Shield, TrafficCone, Route } from "lucide-react";

const features = [
  { icon: MapPin, text: "Tracks ambulance approaching each junction" },
  { icon: Bell, text: "Sends alerts to vehicles near the junction" },
  { icon: Shield, text: "Notifies traffic police at the junction" },
  { icon: TrafficCone, text: "Automatically turns junction signals green" },
  { icon: Route, text: "Creates a Green Corridor across multiple junctions" },
];

const SolutionSection = () => (
  <SectionWrapper id="solution">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">Our Solution</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-gradient-emergency">Intentovex</span> Controls Junctions Automatically
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          <span className="text-foreground font-semibold">Intentovex</span> operates at every traffic junction along the ambulance route, clearing signals in advance so the vehicle never has to stop.
        </p>
        <div className="space-y-4">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <f.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground font-medium">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-border/50 flex items-center justify-center">
          <div className="relative w-3/4 h-3/4">
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="absolute inset-4 rounded-full border-2 border-accent/30 animate-ping" style={{ animationDuration: "2.5s" }} />
            <div className="absolute inset-8 rounded-full border-2 border-accent/40 animate-ping" style={{ animationDuration: "2s" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center glow-green">
                <Route className="w-10 h-10 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default SolutionSection;
