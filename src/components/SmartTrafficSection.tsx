import SectionWrapper from "./SectionWrapper";
import { Button } from "./ui/button";
import { Zap, BarChart3, Timer, Radar } from "lucide-react";

const benefits = [
  { icon: Radar, text: "Geofence triggers instant alerts" },
  { icon: Zap, text: "Display boards show direction in real time" },
  { icon: Timer, text: "Vehicles clear the path before arrival" },
  { icon: BarChart3, text: "Scales from rural to metropolitan" },
];

const SmartTrafficSection = () => (
  <SectionWrapper>
    <div className="relative rounded-2xl overflow-hidden glow-green">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10" />
      <div className="relative p-8 md:p-16 text-center">
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">Smart Alert System</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          <span className="text-gradient-emergency">Intentovex</span> Green Corridor
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 mt-4">
          The moment an ambulance crosses a geofence boundary, display boards light up with direction and distance — giving traffic the early warning it needs to clear the path.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <b.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">{b.text}</span>
            </div>
          ))}
        </div>
        <Button variant="corridor" size="lg" className="text-base px-8">
          Enable Smart Clearance
        </Button>
      </div>
    </div>
  </SectionWrapper>
);

export default SmartTrafficSection;
