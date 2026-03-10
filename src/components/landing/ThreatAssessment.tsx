import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Radar, Fingerprint, ScanLine, Wifi } from "lucide-react";

const tech = [
  { icon: Radar, title: "AI THREAT MAPPING", desc: "Predictive threat analysis using proprietary machine learning models." },
  { icon: Fingerprint, title: "BIOMETRIC ACCESS", desc: "Multi-factor biometric authentication for all secure zones." },
  { icon: ScanLine, title: "COUNTER-SURVEILLANCE", desc: "Electronic sweep capabilities detecting all known surveillance devices." },
  { icon: Wifi, title: "CYBER PROTECTION", desc: "Digital footprint management and secure communications infrastructure." },
];

const ThreatAssessment = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-display text-xs tracking-[0.4em] text-primary mb-4"
        >
          TECHNOLOGY
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16"
        >
          THREAT ASSESSMENT TECH
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {tech.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group"
            >
              <div className="p-6 border border-border/50 hover:border-primary/50 transition-colors duration-500 h-full">
                <t.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-sm tracking-[0.15em] text-foreground mb-3">
                  {t.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatAssessment;
