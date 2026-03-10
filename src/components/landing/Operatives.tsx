import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const operatives = [
  { code: "CALLSIGN: SPECTRE", branch: "Ex-SAS / 22 SAS Regiment", years: "18 years operational", specialty: "Close Protection, Counter-Terrorism" },
  { code: "CALLSIGN: PHANTOM", branch: "Ex-Delta Force / 1st SFOD-D", years: "15 years operational", specialty: "HVT Extraction, Advance Recon" },
  { code: "CALLSIGN: VIPER", branch: "Ex-SEAL Team Six / DEVGRU", years: "20 years operational", specialty: "Maritime Security, PSD Lead" },
  { code: "CALLSIGN: WRAITH", branch: "Ex-KSK / German Special Forces", years: "16 years operational", specialty: "Executive Protection, Cyber Defense" },
];

const Operatives = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="operatives" className="section-padding">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="font-display text-xs tracking-[0.4em] text-primary mb-4"
      >
        THE TEAM
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16"
      >
        THE OPERATIVES
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {operatives.map((op, i) => (
          <motion.div
            key={op.code}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
            className="border border-border/50 p-6 hover:border-primary/50 transition-colors duration-500 group"
          >
            <div className="w-full h-48 bg-muted mb-6 flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                <span className="font-display text-2xl text-primary/50 group-hover:text-primary transition-colors duration-500">
                  {op.code.split(": ")[1][0]}
                </span>
              </div>
            </div>
            <p className="font-display text-sm tracking-[0.15em] text-primary mb-1">{op.code}</p>
            <p className="text-foreground text-sm mb-1">{op.branch}</p>
            <p className="text-muted-foreground text-xs mb-2">{op.years}</p>
            <p className="text-muted-foreground text-xs">{op.specialty}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Operatives;
