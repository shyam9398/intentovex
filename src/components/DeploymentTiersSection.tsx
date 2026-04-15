import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { TreePine, Building, Building2, Radar, Monitor, ArrowRight } from "lucide-react";

const tiers = [
  {
    icon: TreePine,
    label: "Rural",
    color: "accent",
    radius: "Standard",
    tagline: "Early awareness on open roads",
    description: "A geofence is placed on the map with a display board at its centre. When an ambulance enters the geofence, the board shows the direction it's coming from — alerting vehicles and pedestrians in the rush area well before the ambulance reaches them.",
    points: [
      "Geofence placed around busy road stretch",
      "Display board at the centre of the geofence",
      "Shows ambulance approach direction",
      "Alerts traffic before ambulance arrives",
    ],
    visual: (
      <div className="relative w-full aspect-square max-w-[220px] mx-auto">
        {/* Geofence circle */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/40" />
        <div className="absolute inset-0 rounded-full bg-accent/5" />
        {/* Centre board */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
          <Monitor className="w-6 h-6 text-accent" />
        </div>
        {/* Ambulance entering */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
            <span className="text-xs">🚑</span>
          </div>
        </motion.div>
        {/* Label */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">Geofence boundary</div>
      </div>
    ),
  },
  {
    icon: Building,
    label: "Semi-Urban",
    color: "primary",
    radius: "Medium",
    tagline: "Junction + road coverage",
    description: "Geofence is placed at the centre of the traffic junction. Display boards are positioned between the junction and the outer boundary of the geofence — so vehicles on approach roads get alerted early while the junction itself is managed.",
    points: [
      "Geofence centred on the traffic junction",
      "Display boards between junction & geofence edge",
      "Vehicles alerted on approach roads",
      "Junction traffic prepared in advance",
    ],
    visual: (
      <div className="relative w-full aspect-square max-w-[220px] mx-auto">
        {/* Geofence circle */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40" />
        <div className="absolute inset-0 rounded-full bg-primary/5" />
        {/* Junction centre */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
          <span className="text-[10px] font-bold text-primary">JCN</span>
        </div>
        {/* Display boards between centre and edge */}
        {[
          "top-[25%] left-1/2 -translate-x-1/2",
          "bottom-[25%] left-1/2 -translate-x-1/2",
          "left-[25%] top-1/2 -translate-y-1/2",
          "right-[25%] top-1/2 -translate-y-1/2",
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-7 h-7 rounded bg-accent/20 border border-accent/30 flex items-center justify-center`}>
            <Monitor className="w-3.5 h-3.5 text-accent" />
          </div>
        ))}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">Boards between junction & edge</div>
      </div>
    ),
  },
  {
    icon: Building2,
    label: "Metropolitan",
    color: "primary",
    radius: "Large",
    tagline: "Maximum early warning radius",
    description: "Same junction-centred geofence approach, but with a significantly larger radius. Display boards are spread across a wider area between the junction and outer boundary — alerting traffic much earlier in dense, high-speed metro environments.",
    points: [
      "Larger geofence radius for earlier alerts",
      "More display boards across wider area",
      "Handles high-density metro traffic",
      "Maximum advance warning time",
    ],
    visual: (
      <div className="relative w-full aspect-square max-w-[220px] mx-auto">
        {/* Outer large geofence */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40" />
        <div className="absolute inset-0 rounded-full bg-primary/5" />
        {/* Inner ring showing increased radius */}
        <div className="absolute inset-[30%] rounded-full border border-dotted border-primary/20" />
        {/* Junction centre */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
          <span className="text-[10px] font-bold text-primary">JCN</span>
        </div>
        {/* Many display boards spread out */}
        {[
          "top-[15%] left-1/2 -translate-x-1/2",
          "bottom-[15%] left-1/2 -translate-x-1/2",
          "left-[15%] top-1/2 -translate-y-1/2",
          "right-[15%] top-1/2 -translate-y-1/2",
          "top-[30%] left-[22%]",
          "top-[30%] right-[22%]",
          "bottom-[30%] left-[22%]",
          "bottom-[30%] right-[22%]",
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-6 h-6 rounded bg-accent/20 border border-accent/30 flex items-center justify-center`}>
            <Monitor className="w-3 h-3 text-accent" />
          </div>
        ))}
        {/* Radius arrows */}
        <div className="absolute top-1/2 right-[2%] -translate-y-1/2 flex items-center gap-1">
          <ArrowRight className="w-3 h-3 text-primary/40" />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">Larger radius = earlier alert</div>
      </div>
    ),
  },
];

const DeploymentTiersSection = () => (
  <SectionWrapper id="deployment">
    <div className="text-center mb-16">
      <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Deployment Model</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        How <span className="text-gradient-emergency">Intentovex</span> Adapts to Every Area
      </h2>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
        One system, three configurations — scaled by geofence radius and display board placement to match the traffic density.
      </p>
    </div>

    <div className="space-y-16">
      {tiers.map((tier, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Info - 3 cols */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <tier.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{tier.label}</h3>
                  <p className="text-sm text-muted-foreground">{tier.tagline}</p>
                </div>
                <span className="ml-auto text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  <Radar className="w-3 h-3 inline mr-1" />
                  {tier.radius} Radius
                </span>
              </div>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {tier.points.map((p, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual - 2 cols */}
            <div className="lg:col-span-2 flex items-center justify-center py-8">
              {tier.visual}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default DeploymentTiersSection;
