import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "200+", label: "PROTECTED PRINCIPALS" },
  { value: "47", label: "COUNTRIES OPERATED" },
  { value: "0", label: "SECURITY BREACHES" },
  { value: "100%", label: "CLIENT RETENTION" },
];

const EliteClients = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="font-display text-xs tracking-[0.4em] text-primary mb-4"
      >
        PROTECTED ELITE
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
      >
        ANONYMOUS BY DESIGN
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-muted-foreground max-w-lg mb-16"
      >
        Our clients include heads of state, Fortune 50 executives, and ultra-high-net-worth
        individuals. Their identities remain classified.
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="text-center md:text-left"
          >
            <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              {stat.value}
            </p>
            <p className="font-display text-xs tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EliteClients;
