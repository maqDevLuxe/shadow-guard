import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import tacticalImg from "@/assets/tactical-vip.jpg";

const TacticalImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={tacticalImg}
          alt="Armored VIP convoy moving through city at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={inView ? { opacity: 1, letterSpacing: "0.8em" } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-display text-2xl md:text-4xl text-foreground text-center"
        >
          MOVE IN SILENCE
        </motion.p>
      </div>
    </section>
  );
};

export default TacticalImage;
