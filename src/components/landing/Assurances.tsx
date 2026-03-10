import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const assurances = [
  "Government-level security clearances for all operatives",
  "Comprehensive liability and indemnity insurance",
  "ISO 18788 certified security operations",
  "24/7/365 global operations center",
  "Multilingual operatives fluent in 12+ languages",
  "Dedicated account manager for every principal",
];

const Assurances = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-display text-xs tracking-[0.4em] text-primary mb-4"
        >
          GUARANTEES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16"
        >
          CLIENT ASSURANCES
        </motion.h2>
        <div className="space-y-6">
          {assurances.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-foreground group-hover:text-primary transition-colors duration-300">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assurances;
