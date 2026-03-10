import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, Route, Radio } from "lucide-react";

const protocols = [
  { icon: Shield, title: "ADVANCE RECONNAISSANCE", desc: "72-hour pre-deployment threat mapping of all venues, routes, and extraction points." },
  { icon: Eye, title: "CLOSE PROTECTION DETAIL", desc: "Multi-ring security perimeters with plainclothes and overt operative layers." },
  { icon: Route, title: "SECURE MOVEMENT", desc: "Encrypted route planning with real-time counter-surveillance and decoy vehicles." },
  { icon: Radio, title: "COMMS & COORDINATION", desc: "Military-grade encrypted communications with 24/7 tactical operations center." },
];

const Protocols = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="protocols" className="section-padding">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="font-display text-xs tracking-[0.4em] text-primary mb-4"
      >
        METHODOLOGY
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16"
      >
        CLOSE PROTECTION PROTOCOLS
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {protocols.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            className="glass-card p-8 group hover:border-primary/50 transition-colors duration-500"
          >
            <p.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-lg tracking-[0.15em] text-foreground mb-3">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Protocols;
