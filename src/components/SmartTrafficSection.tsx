import SectionWrapper from "./SectionWrapper";
import { Button } from "./ui/button";
import { Zap, BarChart3, Timer, Users } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Dynamic signal management" },
  { icon: BarChart3, text: "Reduced congestion on routes" },
  { icon: Timer, text: "Faster emergency response" },
  { icon: Users, text: "Improved coordination with authorities" },
];

const SmartTrafficSection = () => (
  <SectionWrapper>
    <div className="relative rounded-2xl overflow-hidden glow-green">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10" />
      <div className="relative p-8 md:p-16 text-center">
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">Smart Traffic Clearance</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Automatic Green Corridor Creation</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Intentovex ensures that traffic is cleared before the ambulance arrives, creating a seamless green corridor for emergency vehicles.
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
