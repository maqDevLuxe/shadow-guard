import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "<30s", label: "THREAT RESPONSE", sub: "From detection to action" },
  { value: "<3min", label: "EXTRACTION TIME", sub: "Principal to secure location" },
  { value: "24/7", label: "OPS CENTER", sub: "Global tactical command" },
  { value: "<60s", label: "COMMS RELAY", sub: "Encrypted burst transmission" },
];

const ResponseMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="font-display text-xs tracking-[0.4em] text-primary mb-4"
      >
        PERFORMANCE
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16"
      >
        SUB-MINUTE RESPONSE
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="text-center p-8 border border-border/30 hover:border-primary/40 transition-colors duration-500"
          >
            <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              {m.value}
            </p>
            <p className="font-display text-xs tracking-[0.2em] text-foreground mb-1">
              {m.label}
            </p>
            <p className="text-muted-foreground text-xs">{m.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResponseMetrics;
