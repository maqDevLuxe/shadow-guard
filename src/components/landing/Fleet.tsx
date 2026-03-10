import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Shield, Zap } from "lucide-react";

const vehicles = [
  { name: "ARMORED SEDAN", spec: "B6+ Protection", detail: "Mercedes-Maybach S680 Guard", icon: Car },
  { name: "TACTICAL SUV", spec: "B7 Protection", detail: "Armored Escalade / Suburban", icon: Shield },
  { name: "RAPID RESPONSE", spec: "Performance Class", detail: "Unmarked pursuit-rated vehicles", icon: Zap },
];

const Fleet = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="fleet" className="section-padding bg-card">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="font-display text-xs tracking-[0.4em] text-primary mb-4"
      >
        TRANSPORT
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16"
      >
        SECURE TRANSPORT FLEET
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {vehicles.map((v, i) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            className="glass-card p-8 group hover:border-primary/50 transition-all duration-500"
          >
            <v.icon className="w-8 h-8 text-primary mb-6" />
            <h3 className="font-display text-lg tracking-[0.15em] text-foreground mb-2">
              {v.name}
            </h3>
            <p className="font-display text-xs tracking-[0.2em] text-primary mb-3">{v.spec}</p>
            <p className="text-muted-foreground text-sm">{v.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Fleet;
