import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Satellite, Brain, TrafficCone, Radar, LayoutDashboard, Bell } from "lucide-react";

const features = [
  { icon: Satellite, title: "Real-time GPS Tracking", desc: "Continuous ambulance location monitoring with sub-second updates." },
  { icon: Brain, title: "AI Route Optimization", desc: "Machine learning models find the fastest path through traffic." },
  { icon: TrafficCone, title: "Automatic Signal Control", desc: "Traffic lights adjust in real time to create clear pathways." },
  { icon: Radar, title: "Geofence Alert System", desc: "Location-based triggers notify relevant zones automatically." },
  { icon: LayoutDashboard, title: "Live Monitoring Dashboard", desc: "Real-time overview for traffic police and control rooms." },
  { icon: Bell, title: "Vehicle Notification System", desc: "Instant alerts to nearby vehicles to clear the route." },
];

const FeaturesSection = () => (
  <SectionWrapper id="features">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Key Features</p>
      <h2 className="text-3xl md:text-5xl font-bold">Intelligent Features for Emergency Efficiency</h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all hover:-translate-y-1 group"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/20 transition-colors">
            <f.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-lg font-bold mb-2">{f.title}</h3>
          <p className="text-muted-foreground text-sm">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default FeaturesSection;
