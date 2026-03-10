import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, FileText, UserX } from "lucide-react";

const pillars = [
  { icon: Lock, title: "ENCRYPTED OPERATIONS", desc: "All communications, plans, and client data are protected with AES-256 military-grade encryption." },
  { icon: FileText, title: "BINDING NDA", desc: "Every operative signs comprehensive non-disclosure agreements enforced across all jurisdictions." },
  { icon: UserX, title: "ZERO DIGITAL FOOTPRINT", desc: "We operate with no social media, no press, and no public client roster. Ever." },
];

const Confidentiality = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-display text-xs tracking-[0.4em] text-primary mb-4"
        >
          TRUST
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
        >
          ABSOLUTE CONFIDENTIALITY
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-16 max-w-xl mx-auto"
        >
          Discretion is not a policy. It is the foundation of everything we do.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
            className="text-center p-8 border border-border/50 hover:border-primary/50 transition-colors duration-500"
          >
            <p.icon className="w-10 h-10 text-primary mx-auto mb-6" />
            <h3 className="font-display text-sm tracking-[0.15em] text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Confidentiality;
